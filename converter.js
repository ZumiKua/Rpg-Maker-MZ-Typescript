"use strict";
exports.__esModule = true;
var ts = require("typescript");
var fs = require("fs");
var ts_clone_node_1 = require("ts-clone-node");
var host = ts.createCompilerHost({});
var processedFile = new Set();
var nodes = [];
function copyNodeWithCorrectModifiers(node) {
    return ts_clone_node_1.cloneNode(node, {
        hook: function (n) {
            if (n === node) {
                return {
                    preserveComments: true,
                    modifiers: function (modifiers) {
                        if (modifiers) {
                            var containsExport = modifiers.some(function (v) { return v.kind === ts.SyntaxKind.ExportKeyword; });
                            var containsDeclare = modifiers.some(function (v) { return v.kind === ts.SyntaxKind.DeclareKeyword; });
                            var filtered = modifiers.filter(function (modifier) { return modifier.kind !== ts.SyntaxKind.ExportKeyword; });
                            if (containsExport && !containsDeclare) {
                                filtered.push(ts.factory.createModifier(ts.SyntaxKind.DeclareKeyword));
                            }
                            return filtered;
                        }
                        else {
                            return modifiers;
                        }
                    }
                };
            }
            return { preserveComments: true };
        }
    });
}
function process(filename) {
    if (processedFile.has(filename)) {
        return;
    }
    processedFile.add(filename);
    console.log(filename);
    var source = host.getSourceFile(filename, ts.ScriptTarget.Latest);
    source.forEachChild(function (node) {
        if (ts.isExportAssignment(node)) {
            return;
        }
        if (ts.isExportDeclaration(node) || ts.isImportDeclaration(node)) {
            if (node.moduleSpecifier) {
                var relativePath = node.moduleSpecifier.text;
                var resolved = ts.resolveModuleName(relativePath, source.fileName, {}, host);
                if (resolved.resolvedModule) {
                    if (resolved.resolvedModule.isExternalLibraryImport) {
                        return;
                    }
                    var cp = host.getCanonicalFileName(resolved.resolvedModule.resolvedFileName);
                    process(cp);
                }
                else {
                    throw new Error("module " + relativePath + " not found, referenced at " + source.fileName);
                }
            }
        }
        else {
            nodes.push(copyNodeWithCorrectModifiers(node));
        }
    });
}
process("lib/index.d.ts");
var sourceFile = ts.createSourceFile("ambient.d.ts", "", ts.ScriptTarget.ESNext, true, ts.ScriptKind.TS);
var printer = ts.createPrinter();
var outputFile = printer.printList(ts.ListFormat.MultiLine, ts.factory.createNodeArray(nodes), sourceFile);
fs.writeFileSync("ambient/index.d.ts", outputFile);
