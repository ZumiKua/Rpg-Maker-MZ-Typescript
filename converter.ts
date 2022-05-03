import * as ts from "typescript";
import * as fs from "fs";
import {cloneNode} from "ts-clone-node";
import {StringLiteral} from "typescript";

const host = ts.createCompilerHost({});

const processedFile = new Set<string>();
const nodes: ts.Node[] = [];

function copyNodeWithCorrectModifiers(node: ts.Node) {
    return cloneNode(node, {
        hook: n => {
            if (n === node) {
                return {
                    preserveComments: true,
                    modifiers: modifiers => {
                        if(modifiers) {
                            const containsExport = modifiers.some(v => v.kind === ts.SyntaxKind.ExportKeyword);
                            const containsDeclare = modifiers.some(v => v.kind === ts.SyntaxKind.DeclareKeyword);
                            const filtered = modifiers.filter(modifier => modifier.kind !== ts.SyntaxKind.ExportKeyword);
                            if(containsExport && !containsDeclare) {
                                filtered.push(ts.factory.createModifier(ts.SyntaxKind.DeclareKeyword));
                            }
                            return filtered;
                        } else {
                            return modifiers;
                        }
                    }
                };
            }
            return {preserveComments: true};
        }
    });
}

function process(filename: string) {
    if(processedFile.has(filename)) {
        return;
    }
    processedFile.add(filename);
    console.log(filename);
    const source = host.getSourceFile(filename, ts.ScriptTarget.Latest);
    source.forEachChild(node => {
        if(ts.isExportAssignment(node)) {
            return;
        }
        if(ts.isExportDeclaration(node) || ts.isImportDeclaration(node)) {
            if(node.moduleSpecifier) {
                const relativePath = (node.moduleSpecifier as StringLiteral).text;
                const resolved = ts.resolveModuleName(relativePath, source.fileName, {}, host);
                if(resolved.resolvedModule) {
                    if(resolved.resolvedModule.isExternalLibraryImport) {
                        return;
                    }
                    const cp = host.getCanonicalFileName(resolved.resolvedModule.resolvedFileName);
                    process(cp);
                }
                else {
                    throw new Error(`module ${relativePath} not found, referenced at ${source.fileName}`);
                }
            }
        }
        else {
            nodes.push(copyNodeWithCorrectModifiers(node));
        }
    });
}

process("lib/index.d.ts");

const sourceFile  = ts.createSourceFile(
    "ambient.d.ts",
    "",
    ts.ScriptTarget.ESNext,
    true,
    ts.ScriptKind.TS
);
const printer = ts.createPrinter();
const outputFile = printer.printList(
    ts.ListFormat.MultiLine,
    ts.factory.createNodeArray(nodes),
    sourceFile
);
fs.writeFileSync("ambient/index.d.ts", outputFile);