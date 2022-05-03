/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="./pako.d.ts" />
/// <reference path="./pixi.js.d.ts" />

declare namespace RPG {
    export interface Data {
        id: number;
        name: string;
        note: string;
    }
    export interface DataActor extends Data {
        battlerName: string;
        characterIndex: number;
        characterName: string;
        classId: number;
        equips: number[];
        faceIndex: number;
        faceName: string;
        traits: Trait[];
        initialLevel: number;
        maxLevel: number;
        nickname: string;
        profile: string;
    }
    export interface DataItemBase extends Data {
        description: string;
        iconIndex: number;
    }
    export interface DataEquipItem extends DataItemBase {
        etypeId: number;
        traits: Trait[];
        params: number[];
        price: number;
    }
    export interface DataWeapon extends DataEquipItem {
        animationId: number;
        wtypeId: number;
        etypeId: 1;
    }
    export interface DataArmor {
        atypeId: number;
        etypeId: 2 | 3 | 4 | 5;
    }
    export interface DataConsumable extends DataItemBase {
        animationId: number;
        damage: Damage;
        effects: Effect[];
        hitType: number;
        occasion: number;
        repeats: number;
        scope: number;
        speed: number;
        successRate: number;
        tpGain: number;
    }
    export interface DataSkill extends Data {
        message1: string;
        message2: string;
        messageType: number;
        mpCost: number;
        requiredWtypeId1: number;
        requiredWtypeId2: number;
        stypeId: number;
        tpCost: number;
    }
    export interface DataItem extends Data {
        itypeId: number;
        price: number;
    }
    export interface DataClass extends Data {
        expParams: number[];
        traits: Trait[];
        learnings: Learning[];
        params: Array<number[]>;
    }
    export interface DataEnemy extends Data {
        id: number;
        actions: Action[];
        battlerHue: number;
        battlerName: string;
        dropItems: DropItem[];
        exp: number;
        traits: Trait[];
        gold: number;
        name: string;
        note: string;
        params: number[];
    }
    export interface DataTroop extends Data {
        id: number;
        members: Member[];
        name: string;
        pages: Page[];
    }
    export interface DataState extends Data {
        id: number;
        autoRemovalTiming: number;
        chanceByDamage: number;
        iconIndex: number;
        maxTurns: number;
        message1: string;
        message2: string;
        message3: string;
        message4: string;
        messageType: number;
        minTurns: number;
        motion: number;
        name: string;
        note: string;
        overlay: number;
        priority: number;
        releaseByDamage: boolean;
        removeAtBattleEnd: boolean;
        removeByDamage: boolean;
        removeByRestriction: boolean;
        removeByWalking: boolean;
        restriction: number;
        stepsToRemove: number;
        traits: Trait[];
    }
    export interface DataAnimation {
        id: number;
        displayType: number;
        effectName: string;
        flashTimings: FlashTiming[];
        name: string;
        offsetX: number;
        offsetY: number;
        rotation: Rotation;
        scale: number;
        soundTimings: SoundTiming[];
        speed: number;
    }
    export interface DataTileset extends Data {
        id: number;
        flags: number[];
        mode: number;
        name: string;
        note: string;
        tilesetNames: string[];
    }
    export interface DataCommonEvent {
        id: number;
        list: DataCommonEventList[];
        name: string;
        switchId: number;
        trigger: number;
    }
    export interface DataCommonEventList {
        code: number;
        indent: number;
        parameters: Array<number[] | boolean | ParameterClass | number | string>;
    }
    export interface DataSystem {
        advanced: Advanced;
        airship: Airship;
        armorTypes: string[];
        attackMotions: AttackMotion[];
        battleBgm: BattleBgm;
        battleback1Name: string;
        battleback2Name: string;
        battlerHue: number;
        battlerName: string;
        battleSystem: number;
        boat: Airship;
        currencyUnit: string;
        defeatMe: BattleBgm;
        editMapId: number;
        elements: string[];
        equipTypes: string[];
        gameTitle: string;
        gameoverMe: BattleBgm;
        itemCategories: boolean[];
        locale: string;
        magicSkills: number[];
        menuCommands: boolean[];
        optAutosave: boolean;
        optDisplayTp: boolean;
        optDrawTitle: boolean;
        optExtraExp: boolean;
        optFloorDeath: boolean;
        optFollowers: boolean;
        optKeyItemsNumber: boolean;
        optSideView: boolean;
        optSlipDeath: boolean;
        optTransparent: boolean;
        partyMembers: number[];
        ship: Airship;
        skillTypes: string[];
        sounds: BattleBgm[];
        startMapId: number;
        startX: number;
        startY: number;
        switches: string[];
        terms: Terms;
        testBattlers: TestBattler[];
        testTroopId: number;
        title1Name: string;
        title2Name: string;
        titleBgm: BattleBgm;
        titleCommandWindow: TitleCommandWindow;
        variables: string[];
        versionId: number;
        victoryMe: BattleBgm;
        weaponTypes: string[];
        windowTone: number[];
    }
    export interface DataMapInfo {
        id: number;
        expanded: boolean;
        name: string;
        order: number;
        parentId: number;
        scrollX: number;
        scrollY: number;
    }
    export interface DataMap {
        autoplayBgm: boolean;
        autoplayBgs: boolean;
        battleback1Name: string;
        battleback2Name: string;
        bgm: Bgm;
        bgs: Bgm;
        disableDashing: boolean;
        displayName: string;
        encounterList: unknown[];
        encounterStep: number;
        height: number;
        note: string;
        parallaxLoopX: boolean;
        parallaxLoopY: boolean;
        parallaxName: string;
        parallaxShow: boolean;
        parallaxSx: number;
        parallaxSy: number;
        scrollType: number;
        specifyBattleback: boolean;
        tilesetId: number;
        width: number;
        data: number[];
        events: Array<Event | null>;
    }
    export interface Bgm {
        name: string;
        pan: number;
        pitch: number;
        volume: number;
    }
    export interface Event extends Data {
        pages: Page[];
        x: number;
        y: number;
    }
    export interface Page {
        conditions: Conditions;
        directionFix: boolean;
        image: Image;
        list: PageList[];
        moveFrequency: number;
        moveRoute: MoveRoute;
        moveSpeed: number;
        moveType: number;
        priorityType: number;
        stepAnime: boolean;
        through: boolean;
        trigger: number;
        walkAnime: boolean;
    }
    export interface Conditions {
        actorId: number;
        actorValid: boolean;
        itemId: number;
        itemValid: boolean;
        selfSwitchCh: string;
        selfSwitchValid: boolean;
        switch1Id: number;
        switch1Valid: boolean;
        switch2Id: number;
        switch2Valid: boolean;
        variableId: number;
        variableValid: boolean;
        variableValue: number;
    }
    export interface Image {
        tileId: number;
        characterName: string;
        direction: number;
        pattern: number;
        characterIndex: number;
    }
    export interface PageList {
        code: number;
        indent?: number | null;
        parameters?: Array<Array<number | string> | boolean | ParameterClass | number | string>;
    }
    export interface MoveRoute {
        list: PageList[];
        repeat: boolean;
        skippable: boolean;
        wait: boolean;
    }
    export interface Advanced {
        gameId: number;
        screenWidth: number;
        screenHeight: number;
        uiAreaWidth: number;
        uiAreaHeight: number;
        numberFontFilename: string;
        fallbackFonts: string;
        fontSize: number;
        mainFontFilename: string;
    }
    export interface Airship {
        bgm: BattleBgm;
        characterIndex: number;
        characterName: string;
        startMapId: number;
        startX: number;
        startY: number;
    }
    export interface BattleBgm {
        name: string;
        pan: number;
        pitch: number;
        volume: number;
    }
    export interface AttackMotion {
        type: number;
        weaponImageId: number;
    }
    export interface Terms {
        basic: string[];
        commands: Array<null | string>;
        params: string[];
        messages: {
            [key: string]: string;
        };
    }
    export interface TestBattler {
        actorId: number;
        level: number;
        equips: number[];
    }
    export interface TitleCommandWindow {
        offsetX: number;
        offsetY: number;
        background: number;
    }
    export interface ParameterClass {
        name?: string;
        volume?: number;
        pitch?: number;
        pan?: number;
        list?: ParameterList[];
        repeat?: boolean;
        skippable?: boolean;
        wait?: boolean;
        code?: number;
        parameters?: Array<number | string>;
        indent?: null;
    }
    export interface ParameterList {
        code: number;
        parameters?: Array<number | string>;
        indent?: null;
    }
    export interface FlashTiming {
        frame: number;
        duration: number;
        color: number[];
    }
    export interface Rotation {
        x: number;
        y: number;
        z: number;
    }
    export interface SoundTiming {
        frame: number;
        se: SE;
    }
    export interface SE {
        name: string;
        pan: number;
        pitch: number;
        volume: number;
    }
    export interface Member {
        enemyId: number;
        x: number;
        y: number;
        hidden: boolean;
    }
    export interface Conditions {
        actorHp: number;
        actorId: number;
        actorValid: boolean;
        enemyHp: number;
        enemyIndex: number;
        enemyValid: boolean;
        switchId: number;
        switchValid: boolean;
        turnA: number;
        turnB: number;
        turnEnding: boolean;
        turnValid: boolean;
    }
    export interface List {
        code: number;
        indent: number;
        parameters: number[];
    }
    export interface Action {
        conditionParam1: number;
        conditionParam2: number;
        conditionType: number;
        rating: number;
        skillId: number;
    }
    export interface DropItem {
        kind: number;
        dataId: number;
        denominator: number;
    }
    export interface Learning {
        level: number;
        note: string;
        skillId: number;
    }
    export interface Trait {
        code: number;
        dataId: number;
        value: number;
    }
    export interface Damage {
        critical: boolean;
        elementId: number;
        formula: string;
        type: number;
        variance: number;
    }
    export interface Effect {
        code: number;
        dataId: number;
        value1: number;
        value2: number;
    }
}
declare class Bitmap {
    constructor(width: number, height: number);
    public readonly url: string;
    public readonly baseTexture: PIXI.BaseTexture;
    public readonly image: HTMLImageElement;
    public readonly canvas: HTMLCanvasElement;
    public readonly context: CanvasRenderingContext2D;
    public readonly width: number;
    public readonly height: number;
    public readonly rect: Rectangle;
    public smooth: boolean;
    public paintOpacity: number;
    public fontFace: string;
    public fontSize: number;
    public fontBold: boolean;
    public fontItalic: boolean;
    public textColor: string;
    public outlineColor: string;
    public outlineWidth: number;
    public static load(url: string): Bitmap;
    public static snap(stage: Stage): Bitmap;
    public isError(): boolean;
    public isReady(): boolean;
    public retry(): void;
    public addLoadListener(listener: (self: Bitmap) => void): void;
    public blt(source: Bitmap, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
    public clear(): void;
    public clearRect(x: number, y: number, width: number, height: number): void;
    public destroy(): void;
    public drawCircle(x: number, y: number, radius: number, color: number): void;
    public drawText(text: string | number, x: number, y: number, maxWidth: number, lineHeight: number, align: string): void;
    public fillAll(color: string): void;
    public fillRect(x: number, y: number, width: number, height: number, color: string): void;
    public gradientFillRect(x: number, y: number, width: number, height: number, color1: string, color2: string, vertical: boolean): void;
    public getAlphaPixel(x: number, y: number): string;
    public getPixel(x: number, y: number): string;
    public measureTextWidth(text: string): number;
    public strokeRect(x: number, y: number, width: number, height: number, color: string): void;
    public resize(width: number, height: number): void;
}
type ColorTone = [
    number,
    number,
    number,
    number
];
declare class ColorFilter extends PIXI.Filter {
    constructor();
    public setBlendColor(color: string): void;
    public setBrightness(brightness: number): void;
    public setColorTone(tone: ColorTone): void;
    public setHue(hue: number): void;
}
declare namespace effekseer {
    export function initRuntime(path, onload, onerror);
    export function createContext(): EffekseerContext;
    export function releaseContext(context: EffekseerContext);
    export function init(webglContext, settings?: Record<string, unknown>);
    export function update(deltaFrames?: number);
    export function draw();
    export function setProjectionMatrix(matrixArray);
    export function setProjectionPerspective(fov, aspect, near, far);
    export function setProjectionOrthographic(width, height, near, far);
    export function setCameraMatrix(matrixArray);
    export function setCameraLookAt(positionX, positionY, positionZ, targetX, targetY, targetZ, upvecX, upvecY, upvecZ);
    export function setCameraLookAtFromVector(position, target, upvec);
    export function loadEffect(path: string, scale?: number, onload?, onerror?): EffekseerEffect;
    export function releaseEffect(effect: EffekseerEffect);
    export function play(effect: EffekseerEffect, x, y, z): EffekseerHandle;
    export function stopAll();
    export function setResourceLoader(loader);
    export function isVertexArrayObjectSupported();
    export class EffekseerContext {
        init(webglContext: WebGLRenderingContextBase, settings?: Record<string, unknown>): void;
        update(deltaFrames?: number): void;
        draw();
        setProjectionMatrix(matrixArray);
        setProjectionPerspective(fov, aspect, near, far);
        setProjectionOrthographic(width, height, near, far);
        setCameraMatrix(matrixArray);
        setCameraLookAt(positionX, positionY, positionZ, targetX, targetY, targetZ, upvecX, upvecY, upvecZ);
        setCameraLookAtFromVector(position, target, upvec);
        loadEffect(path: string, scale?: number, onload?, onerror?, redirect?): EffekseerEffect;
        releaseEffect(effect: EffekseerEffect);
        play(effect: EffekseerEffect, x, y, z): EffekseerHandle;
        stopAll();
        setResourceLoader(loader);
        isVertexArrayObjectSupported();
        getRestInstancesCount(): number;
    }
    export class EffekseerEffect {
        constructor();
        getColorImagePaths(): Array<string>;
    }
    export class EffekseerHandle {
        constructor(native: any);
        stop();
        stopRoot();
        readonly exists: boolean;
        setLocation(x, y, z);
        setRotation(x, y, z);
        setScale(x, y, z);
        setMatrix(matrixArray);
        setTargetLocation(x, y, z);
        getDynamicInput(index): number;
        setDynamicInput(index, value);
        setPaused(paused);
        setShown(shown);
        setSpeed(speed);
    }
}
declare namespace Graphics {
    export const app: PIXI.Application;
    export let boxHeight: number;
    export let boxWidth: number;
    export let defaultScale: number;
    export const effekseer: effekseer.EffekseerContext;
    export let frameCount: number;
    export let height: number;
    export let width: number;
    export function initialize(): boolean;
    export function endLoading(): boolean;
    export function eraseError(): void;
    export function hideScreen(): void;
    export function isInsideCanvas(x: number, y: number): boolean;
    export function pageToCanvasX(x: number): number;
    export function pageToCanvasY(y: number): number;
    export function printError(name: string, message: string, error: Error): void;
    export function resize(width: number, height: number): void;
    export function setStage(stage: Stage): void;
    export function setTickHandler(handler: (delta: number) => void): void;
    export function showRetryButton(retry: () => void): void;
    export function showScreen(): void;
    export function startGameLoop(): void;
    export function startLoading(): void;
    export function stopGameLoop(): void;
}
interface InputGamepad {
    0: "ok";
    1: "cancel";
    2: "shift";
    3: "menu";
    4: "pageup";
    5: "pagedown";
    12: "up";
    13: "down";
    14: "left";
    15: "right";
}
interface InputKey {
    9: "tab";
    13: "ok";
    16: "shift";
    17: "control";
    18: "control";
    27: "escape";
    32: "ok";
    33: "pageup";
    34: "pagedown";
    37: "left";
    38: "up";
    39: "right";
    40: "down";
    45: "escape";
    81: "pageup";
    87: "pagedown";
    88: "escape";
    90: "ok";
    96: "escape";
    98: "down";
    100: "left";
    102: "right";
    104: "up";
    120: "debug";
}
declare namespace Input {
    export const date: number;
    export const dir4: number;
    export const dir8: number;
    export let gamepadMapper: InputGamepad;
    export let keyMapper: InputKey;
    export let keyRepeatInterval: number;
    export let keyRepeatWait: number;
    export function clear(): void;
    export function initialize(): void;
    export function isLongPressed(keyname: string): boolean;
    export function isPressed(keyName: string): boolean;
    export function isRepeated(keyName: string): boolean;
    export function isTriggered(keyName: string): boolean;
    export function update(): void;
}
declare interface Array<T> {
    clone(): T[];
    equals(array: unknown[]): boolean;
    remove(element: T): T[];
    contains(element: unknown): boolean;
}
declare interface Math {
    randomInt(max: number): number;
}
declare interface Number {
    clamp(min: number, max: number): number;
    mod(n: number): number;
    padZero(length: number): string;
}
declare interface String {
    padZero(length: number): string;
}
declare namespace JsonEx {
    export let maxDepth: number;
    export function makeDeepCopy<T>(object: T): T;
    export function parse<T>(json: string): T;
    export function stringify(object: unknown): string;
}
declare class Point extends PIXI.Point {
    constructor(x: number, y: number);
}
declare class Rectangle extends PIXI.Rectangle {
    constructor(x: number, y: number, width: number, height: number);
}
declare class ScreenSprite extends PIXI.Container {
    public opacity: number;
    constructor();
    public destroy(): void;
    public setColor(r: number, g: number, b: number): void;
    public setBlack(): void;
    public setWhite(): void;
}
declare type RGBA = [
    number,
    number,
    number,
    number
];
declare class Sprite extends PIXI.Sprite {
    public bitmap: Bitmap;
    public opacity: number;
    constructor(bitmap: Bitmap);
    public getBlendColor(): RGBA;
    public getColorTone(): RGBA;
    public hide(): void;
    public move(x: number, y: number): void;
    public setBlendColor(color: RGBA): void;
    public setColorTone(tone: RGBA): void;
    public setFrame(x: number, y: number, width: number, height: number): void;
    public setHue(hue: number): void;
    public show(): void;
    public update(): void;
    public updateVisibility(): void;
}
declare class Stage extends PIXI.Container {
    constructor();
    public destroy(): void;
}
declare class Tilemap extends PIXI.Container {
    public animationCount: number;
    public flags: number[];
    public height: number;
    public horizontalWrap: boolean;
    public origin: Point;
    public verticalWrap: boolean;
    public width: number;
    constructor();
    public destroy(): void;
    public isReady(): boolean;
    public setBitmaps(bitmaps: Bitmap[]): void;
    public setData(width: number, height: number, data: number[]): void;
    public update(): void;
    public updateTransform(): void;
}
declare class TilingSprite extends PIXI.TilingSprite {
    public bitmap: Bitmap;
    public opacity: number;
    public origin: Point;
    constructor();
    public move(x: number, y: number, width: number, height: number): void;
    public setFrame(x: number, y: number, width: number, height: number): void;
    public update(): void;
    public updateTransform(): void;
    public destroy(): void;
}
declare namespace TouchInput {
    export const date: Date;
    export const wheelX: number;
    export const wheelY: number;
    export const inputX: number;
    export const inputY: number;
    export let keyRepeatInterval: number;
    export let keyRepeatWait: number;
    export let moveThreshold: number;
    export function initialize(): void;
    export function clear(): void;
    export function update(): void;
    export function isCancelled(): boolean;
    export function isClicked(): boolean;
    export function isHovered(): boolean;
    export function isLongPressed(): boolean;
    export function isMoved(): boolean;
    export function isPressed(): boolean;
    export function isReleased(): boolean;
    export function isRepeated(): boolean;
    export function isTriggered(): boolean;
}
declare namespace Utils {
    export const RPGMAKER_NAME: string;
    export const RPGMAKER_VERSION: string;
    export function canPlayOgg(): boolean;
    export function canPlayWebm(): boolean;
    export function canUseCssFontLoading(): boolean;
    export function canUseIndexedDB(): boolean;
    export function canUseWebAudioAPI(): boolean;
    export function canUseWebGL(): boolean;
    export function checkRMVersion(version: string): boolean;
    export function containsArabic(): boolean;
    export function decryptArrayBuffer(source: ArrayBuffer): ArrayBuffer;
    export function encodeURI(str: string): string;
    export function escapeHtml(str: string): string;
    export function hasEncryptedAudio(): boolean;
    export function isAndroidChrome(): boolean;
    export function isAtsumaru(): boolean;
    export function isLocal(): boolean;
    export function isMobileDevice(): boolean;
    export function isMobileSafari(): boolean;
    export function isNwjs(): boolean;
    export function isOptionValid(name: string): boolean;
    export function setEncryptionInfo(hasImages: boolean, hasAudio: boolean, key: string): void;
}
declare namespace Video {
    export function initialize(width: number, height: number): void;
    export function isPlaying(): boolean;
    export function play(): void;
    export function resize(width: number, height: number): void;
    export function setVolume(volume: number): void;
}
declare class Weather extends PIXI.Container {
    public origin: Point;
    public power: number;
    public type: string;
    constructor();
    public update(): void;
    public destroy(): void;
}
declare class WebAudio {
    public pan: number;
    public pitch: number;
    public volume: number;
    public readonly url: string;
    constructor(url: string);
    public static initialize(): boolean;
    public static setMasterVolume(value: number): void;
    public addLoadListener(listener: () => void): void;
    public addStopListener(listener: () => void): void;
    public fadeIn(duration: number): void;
    public fadeOut(duration: number): void;
    public isError(): boolean;
    public isPlaying(): boolean;
    public isReady(): boolean;
    public play(loop: boolean, offset: number): void;
    public retry(): void;
    public seek(): void;
    public stop(): void;
    public clear(): void;
    public destroy(): void;
}
declare class Window extends PIXI.Container {
    public active: boolean;
    public backOpacity: number;
    public contents: Bitmap;
    public contentsBack: Bitmap;
    public contentsOpacity: number;
    public cursorVisible: boolean;
    public downArrowVisible: boolean;
    public frameVisible: boolean;
    public height: number;
    public readonly innerHeight: number;
    public readonly innerRect: Rectangle;
    public readonly innerWidth: number;
    public margin: number;
    public opacity: number;
    public openness: number;
    public origin: Point;
    public padding: number;
    public pause: boolean;
    public upArrowVisible: boolean;
    public width: number;
    public windowskin: Bitmap;
    constructor();
    public addChildToBack(child: PIXI.Container): PIXI.Container;
    public addInnerChild(child: PIXI.Container): PIXI.Container;
    public destroy(): void;
    public drawShape(): void;
    public isClose(): boolean;
    public isOpen(): boolean;
    public move(x: number, y: number, width: number, height: number): void;
    public moveCursorBy(x: number, y: number): void;
    public moveInnerChildrenBy(x: number, y: number): void;
    public setCursorRect(x: number, y: number, width: number, height: number): void;
    public setTone(r: number, g: number, b: number): void;
    public update(): void;
    public updateTransform(): void;
}
declare class WindowLayer extends PIXI.Container {
    constructor();
    public render(renderer: PIXI.Renderer): void;
    public update(): void;
}
declare namespace AudioManager {
    interface CurrentAudio {
        name: string;
        volume: number;
        pitch: number;
        pan?: number;
        pos?: number;
    }
    export let bgmVolume: number;
    export let bgsVolume: number;
    export let meVolume: number;
    export let seVolume: number;
    export function playBgm(bgm: CurrentAudio, pos: number): void;
    export function replayBgm(bgm: CurrentAudio): void;
    export function isCurrentBgm(bgm: CurrentAudio): boolean;
    export function updateBgmParameters(bgm: CurrentAudio): void;
    export function updateCurrentBgm(bgm: CurrentAudio, pos: number): void;
    export function stopBgm(): void;
    export function fadeOutBgm(duration: number): void;
    export function fadeInBgm(duration: number): void;
    export function playBgs(bgs: CurrentAudio, pos: number): void;
    export function replayBgs(bgs: CurrentAudio): void;
    export function isCurrentBgs(bgs: CurrentAudio): boolean;
    export function updateBgsParameters(bgs: CurrentAudio): void;
    export function stopBgs(): void;
    export function fadeOutBgs(duration: number): void;
    export function fadeInBgs(duration: number): void;
    export function playMe(me: CurrentAudio): void;
    export function updateMeParameters(me: CurrentAudio): void;
    export function fadeOutMe(duration: number): void;
    export function stopMe(): void;
    export function playSe(se: CurrentAudio): void;
    export function updateSeParameters(buffer: WebAudio, se: CurrentAudio): void;
    export function cleanupSe(): void;
    export function stopSe(): void;
    export function playStaticSe(se: CurrentAudio): void;
    export function loadStaticSe(se: CurrentAudio): void;
    export function isStaticSe(se: CurrentAudio): boolean;
    export function stopAll(): void;
    export function saveBgm(): CurrentAudio;
    export function saveBgs(): CurrentAudio;
    export function makeEmptyAudioObject(): CurrentAudio;
    export function createBuffer(folder: string, name: string): WebAudio;
    export function updateBufferParameters(buffer: WebAudio, configVolume: number, audio: CurrentAudio): void;
    export function audioFileExt(): string;
    export function checkErrors(): void;
    export function throwLoadError(webAudio: WebAudio): void;
}
declare class Game_Action {
    public readonly EFFECT_RECOVER_HP: number;
    public readonly EFFECT_RECOVER_MP: number;
    public readonly EFFECT_GAIN_TP: number;
    public readonly EFFECT_ADD_STATE: number;
    public readonly EFFECT_REMOVE_STATE: number;
    public readonly EFFECT_ADD_BUFF: number;
    public readonly EFFECT_REMOVE_DEBUFF: number;
    public readonly EFFECT_SPECIAL: number;
    public readonly EFFECT_GROW: number;
    public readonly EFFECT_LEARN_SKILL: number;
    public readonly EFFECT_COMMON_EVENT: number;
    public readonly SPECIAL_EFFECT_ESCAPE: number;
    public readonly HITTYPE_CERTAIN: number;
    public readonly HITTYPE_PHYSICAL: number;
    public readonly HITTYPE_MAGICAL: number;
    private _subjectActorId: number;
    private _subjectEnemyIndex: number;
    private _forcing: boolean;
    private _item: Game_Item;
    private _targetIndex: number;
    constructor(subject: Game_BattlerBase, forcing: boolean);
    public initialize(subject: Game_BattlerBase, forcing: boolean);
    public clear(): void;
    public setSubject(subject: Game_BattlerBase): void;
    public subject(): Game_BattlerBase;
    public friendsUnit(): Game_BattlerBase;
    public opponentsUnit(): Game_BattlerBase;
    public setEnemyAction(action: unknown): void;
    public setAttack(): void;
    public setGuard(): void;
    public setSkill(skillId: number): void;
    public setItem(itemId: number): void;
    public setItemObject(object: Record<string, unknown>): RPG.DataItemBase;
    public setTarget(targetIndex: number): void;
    public item(): RPG.DataItemBase;
    public isSkill(): boolean;
    public isItem(): boolean;
    public numRepeats(): number;
    public checkItemScope(list: number[]): boolean;
    public isForOpponent(): boolean;
    public isForFriend(): boolean;
    public isForEveryone(): boolean;
    public isForAliveFriend(): boolean;
    public isForDeadFriend(): boolean;
    public isForUser(): boolean;
    public isForOne(): boolean;
    public isForRandom(): boolean;
    public isForAll(): boolean;
    public needsSelection(): boolean;
    public numTargets(): boolean;
    public checkDamageType(list: number[]): boolean;
    public isHpEffect(): boolean;
    public isMpEffect(): boolean;
    public isDamage(): boolean;
    public isRecover(): boolean;
    public isDrain(): boolean;
    public isHpRecover(): boolean;
    public isMpRecover(): boolean;
    public isCertainHit(): boolean;
    public isPhysical(): boolean;
    public isMagical(): boolean;
    public isAttack(): boolean;
    public isGuard(): boolean;
    public isMagicSkill(): boolean;
    public decideRandomTarget(): void;
    public setConfusion(): void;
    public prepare(): void;
    public isValid(): boolean;
    public speed(): number;
    public makeTargets(): number[];
    public repeatTargets(targets): number[];
    public confusionTarget(): boolean;
    public targetsForEveryone(): Game_BattlerBase[];
    public targetsForOpponents(): unknown;
    public targetsForFriends(): unknown;
    public randomTargets(unit: Game_Unit<Game_Battler>);
}
declare class Game_Actor extends Game_Battler {
    public readonly level: number;
    constructor(actorId: number);
    public setup(actorId: number): void;
    public actorId(): number;
    public actor(): RPG.DataActor;
    public name(): string;
    public setName(name: string): void;
    public nickname(): string;
    public setNickname(name: string): void;
    public profile(): string;
    public setProfile(name: string): void;
    public characterName(): string;
    public characterIndex(): number;
    public faceName(): string;
    public faceIndex(): number;
    public battlerName(): string;
    public initImages(): void;
    public expForLevel(level: number): number;
    public initExp(): void;
    public currentExp(): number;
    public currentLevelExp(): number;
    public nextLevelExp(): number;
    public nextRequiredExp(): number;
    public maxLevel(): number;
    public isMaxLevel(): boolean;
    public initSkills(): void;
    public initEquips(): void;
    public equipSlots(): number[];
    public equips(): (RPG.DataWeapon | RPG.DataArmor)[];
    public weapons(): RPG.DataWeapon;
    public armors(): RPG.DataArmor;
    public hasWeapon(weapon: RPG.DataWeapon): boolean;
    public hasArmor(armor: RPG.DataArmor): boolean;
    public isEquipChangeOk(slotId: number): boolean;
    public changeEquip(slotId: number, item: RPG.DataEquipItem): void;
    public forceChangeEquip(slotId: number, item: RPG.DataEquipItem): void;
    public tradeItemWithParty(newItem: RPG.DataEquipItem, oldItem: RPG.DataEquipItem): boolean;
    public changeEquipById(etypeId: number, itemId: number): void;
    public isEquipped(item: RPG.DataEquipItem): boolean;
    public discardEquip(item: RPG.DataEquipItem): void;
    public releaseUnequippableItems(forcing: boolean): void;
    public clearEquipments(): void;
    public optimizeEquipments(): void;
    public bestEquipItem(slotId: number): RPG.DataEquipItem;
    public calcEquipItemPerformance(item: RPG.DataEquipItem): number;
    public isSkillWtypeOk(skill: RPG.DataSkill): boolean;
    public isWtypeEquipped(wtypeId: number): boolean;
    public isActor(): true;
    public friendsUnit(): Game_Party;
    public opponentsUnit(): Game_Troop;
    public index(): number;
    public isBattleMember(): boolean;
    public isFormationChangeOk(): boolean;
    public currentClass(): RPG.DataClass;
    public isClass(gameClass?: RPG.DataClass): boolean;
    public skillTypes(): number[];
    public skills(): RPG.DataSkill[];
    public usableSkills(): RPG.DataSkill[];
    public hasNoWeapons(): boolean;
    public bareHandsElementId(): number;
    public attackAnimationId1(): number;
    public attackAnimationId2(): number;
    public bareHandsAnimationId(): number;
    public changeExp(exp: number, show: boolean): void;
    public levelUp(): void;
    public levelDown(): void;
    public findNewSkills(lastSkills: RPG.DataSkill[]): RPG.DataSkill[];
    public displayLevelUp(newSkills: RPG.DataSkill[]): void;
    public gainExp(exp: number): void;
    public finalExpRate(): number;
    public benchMembersExpRate(): number;
    public shouldDisplayLevelUp(): boolean;
    public changeLevel(level: number, show: boolean): void;
    public learnSkill(skillId: number): void;
    public forgetSkill(skillId: number): void;
    public isLearnedSkill(skillId: number): boolean;
    public hasSkill(skillId: number): boolean;
    public changeClass(classId: number, keepExp: boolean): void;
    public setCharacterImage(characterName: string, characterIndex: number): void;
    public setFaceImage(faceName: string, faceIndex: number): void;
    public setBattlerImage(battlerName: string): void;
    public isSpriteVisible(): boolean;
    public performAttack(): void;
    public performVictory(): void;
    public performEscape(): void;
    public makeActionList(): Game_Action[];
    public makeAutoBattleActions(): void;
    public makeConfusionActions(): void;
    public onPlayerWalk(): void;
    public updateStateSteps(state: RPG.DataState): void;
    public showAddedStates(): void;
    public showRemovedStates(): void;
    public stepsForTurn(): number;
    public turnEndOnMap(): void;
    public checkFloorEffect(): void;
    public executeFloorDamage(): void;
    public basicFloorDamage(): number;
    public maxFloorDamage(): number;
    public performMapDamage(): void;
    public inputtingAction(): Game_Action;
    public selectNextCommand(): boolean;
    public selectNextCommand(): boolean;
    public lastSkill(): RPG.DataSkill;
    public lastMenuSkill(): RPG.DataSkill;
    public setLastMenuSkill(skill: RPG.DataSkill): void;
    public lastBattleSkill(): RPG.DataSkill;
    public setLastBattleSkill(skill: RPG.DataSkill): void;
    public lastCommandSymbol(): string;
    public setLastCommandSymbol(symbol: string): void;
    public testEscape(item: RPG.DataConsumable): boolean;
    public onEscapeFailure(): boolean;
}
declare namespace Game_Enemy {
    export enum ItemKind {
        Item = 1,
        Weapon = 2,
        Armor = 3
    }
}
declare class Game_Enemy extends Game_Battler {
    constructor(enemyId: number, x: number, y: number);
    public setup(enemyId: number, x: number, y: number): void;
    public isEnemy(): true;
    public friendsUnit(): Game_Troop;
    public opponentsUnit(): Game_Party;
    public index(): number;
    public isBattleMember(): boolean;
    public enemyId(): number;
    public enemy(): RPG.DataEnemy;
    public exp(): number;
    public gold(): number;
    public makeDropItems(): RPG.DataItemBase[];
    public dropItemRate(): number;
    public itemObject(kind: Game_Enemy.ItemKind, dataId: number): RPG.DataItemBase;
    public isSpriteVisible(): boolean;
    public screenX(): number;
    public screenY(): number;
    public battlerName(): string;
    public battlerHue(): number;
    public originalName(): string;
    public name(): string;
    public isLetterEmpty(): boolean;
    public setLetter(letter: string): void;
    public setPlural(plural: boolean): void;
    public transform(enemyId: number): void;
    public meetsCondition(action: Game_Action): boolean;
    public meetsTurnCondition(param1: number, param2: number): boolean;
    public meetsHpCondition(param1: number, param2: number): boolean;
    public meetsMpCondition(param1: number, param2: number): boolean;
    public meetsStateCondition(param1: number, param2: number): boolean;
    public meetsPartyLevelCondition(param1: number, param2: number): boolean;
    public meetsSwitchCondition(param1: number, param2: number): boolean;
    public isActionValid(action: Game_Action): boolean;
    public selectAction(actionList: Game_Action[], ratingZero: number): Game_Action | null;
    public selectAllActions(actionList: Game_Action[]): void;
}
declare namespace Game_BattlerBase {
    export enum Traits {
        ELEMENT_RATE = 11,
        DEBUFF_RATE = 12,
        STATE_RATE = 13,
        STATE_RESIST = 14,
        PARAM = 21,
        XPARAM = 22,
        SPARAM = 23,
        ATTACK_ELEMENT = 31,
        ATTACK_STATE = 32,
        ATTACK_SPEED = 33,
        ATTACK_TIMES = 34,
        ATTACK_SKILL = 35,
        STYPE_ADD = 41,
        STYPE_SEAL = 42,
        SKILL_ADD = 43,
        SKILL_SEAL = 44,
        EQUIP_WTYPE = 51,
        EQUIP_ATYPE = 52,
        EQUIP_LOCK = 53,
        EQUIP_SEAL = 54,
        SLOT_TYPE = 55,
        ACTION_PLUS = 61,
        SPECIAL_FLAG = 62,
        COLLAPSE_TYPE = 63,
        PARTY_ABILITY = 64
    }
    export enum FlagIds {
        AUTO_BATTLE = 0,
        GUARD = 1,
        SUBSTITUTE = 2,
        PRESERVE_TP = 3
    }
    export enum Params {
        MHP = 0,
        MMP = 1,
        ATK = 2,
        DEF = 3,
        MAT = 4,
        MDF = 5,
        AGI = 6,
        LUK = 7
    }
    export enum ExtraParams {
        HIT = 0,
        EVA = 1,
        CRI = 2,
        CEV = 3,
        MEV = 4,
        MRF = 5,
        CNT = 6,
        HRG = 7,
        MRG = 8,
        TRG = 9
    }
    export enum SpecialParams {
        TGR = 0,
        GRD = 1,
        REC = 2,
        PHA = 3,
        MCR = 4,
        TCR = 5,
        PDR = 6,
        MDR = 7,
        FDR = 8,
        EXR = 9
    }
    export enum CollapseType {
        DEFAULT = 0,
        BOSS = 1,
        INSTANT = 2
    }
}
declare class Game_BattlerBase {
    public static readonly TRAIT_ELEMENT_RATE: Game_BattlerBase.Traits.ELEMENT_RATE;
    public static readonly TRAIT_DEBUFF_RATE: Game_BattlerBase.Traits.DEBUFF_RATE;
    public static readonly TRAIT_STATE_RATE: Game_BattlerBase.Traits.STATE_RATE;
    public static readonly TRAIT_STATE_RESIST: Game_BattlerBase.Traits.STATE_RESIST;
    public static readonly TRAIT_PARAM: Game_BattlerBase.Traits.PARAM;
    public static readonly TRAIT_XPARAM: Game_BattlerBase.Traits.XPARAM;
    public static readonly TRAIT_SPARAM: Game_BattlerBase.Traits.SPARAM;
    public static readonly TRAIT_ATTACK_ELEMENT: Game_BattlerBase.Traits.ATTACK_ELEMENT;
    public static readonly TRAIT_ATTACK_STATE: Game_BattlerBase.Traits.ATTACK_STATE;
    public static readonly TRAIT_ATTACK_SPEED: Game_BattlerBase.Traits.ATTACK_SPEED;
    public static readonly TRAIT_ATTACK_TIMES: Game_BattlerBase.Traits.ATTACK_TIMES;
    public static readonly TRAIT_ATTACK_SKILL: Game_BattlerBase.Traits.ATTACK_SKILL;
    public static readonly TRAIT_STYPE_ADD: Game_BattlerBase.Traits.STYPE_ADD;
    public static readonly TRAIT_STYPE_SEAL: Game_BattlerBase.Traits.STYPE_SEAL;
    public static readonly TRAIT_SKILL_ADD: Game_BattlerBase.Traits.SKILL_ADD;
    public static readonly TRAIT_SKILL_SEAL: Game_BattlerBase.Traits.SKILL_SEAL;
    public static readonly TRAIT_EQUIP_WTYPE: Game_BattlerBase.Traits.EQUIP_WTYPE;
    public static readonly TRAIT_EQUIP_ATYPE: Game_BattlerBase.Traits.EQUIP_ATYPE;
    public static readonly TRAIT_EQUIP_LOCK: Game_BattlerBase.Traits.EQUIP_LOCK;
    public static readonly TRAIT_EQUIP_SEAL: Game_BattlerBase.Traits.EQUIP_SEAL;
    public static readonly TRAIT_SLOT_TYPE: Game_BattlerBase.Traits.SLOT_TYPE;
    public static readonly TRAIT_ACTION_PLUS: Game_BattlerBase.Traits.ACTION_PLUS;
    public static readonly TRAIT_SPECIAL_FLAG: Game_BattlerBase.Traits.SPECIAL_FLAG;
    public static readonly TRAIT_COLLAPSE_TYPE: Game_BattlerBase.Traits.COLLAPSE_TYPE;
    public static readonly TRAIT_PARTY_ABILITY: Game_BattlerBase.Traits.PARTY_ABILITY;
    public static readonly FLAG_ID_AUTO_BATTLE: Game_BattlerBase.FlagIds.AUTO_BATTLE;
    public static readonly FLAG_ID_GUARD: Game_BattlerBase.FlagIds.GUARD;
    public static readonly FLAG_ID_SUBSTITUTE: Game_BattlerBase.FlagIds.SUBSTITUTE;
    public static readonly FLAG_ID_PRESERVE_TP: Game_BattlerBase.FlagIds.PRESERVE_TP;
    public static readonly ICON_BUFF_START: 32;
    public static readonly ICON_DEBUFF_START: 48;
    constructor();
    public readonly hp: number;
    public readonly mp: number;
    public readonly tp: number;
    public readonly mhp: number;
    public readonly mmp: number;
    public readonly atk: number;
    public readonly def: number;
    public readonly mat: number;
    public readonly mdf: number;
    public readonly agi: number;
    public readonly luk: number;
    public readonly hit: number;
    public readonly eva: number;
    public readonly cri: number;
    public readonly cev: number;
    public readonly mev: number;
    public readonly mrf: number;
    public readonly cnt: number;
    public readonly hrg: number;
    public readonly mrg: number;
    public readonly trg: number;
    public readonly tgr: number;
    public readonly grd: number;
    public readonly rec: number;
    public readonly pha: number;
    public readonly mcr: number;
    public readonly tcr: number;
    public readonly pdr: number;
    public readonly mdr: number;
    public readonly fdr: number;
    public readonly exr: number;
    public initMembers(): void;
    public clearParamPlus(): void;
    public clearStates(): void;
    public eraseState(stateId: number): void;
    public isStateAffected(stateId: number): boolean;
    public isDeathStateAffected(): boolean;
    public deathStateId(): number;
    public resetStateCounts(stateId: number): void;
    public isStateExpired(stateId: number): boolean;
    public updateStateTurns(): void;
    public clearBuffs(): void;
    public eraseBuff(paramId: Game_BattlerBase.Params): void;
    public buffLength(): number;
    public buff(paramId: Game_BattlerBase.Params): number;
    public isBuffAffected(paramId: Game_BattlerBase.Params): boolean;
    public isDebuffAffected(paramId: Game_BattlerBase.Params): boolean;
    public isBuffOrDebuffAffected(paramId: Game_BattlerBase.Params): boolean;
    public isMaxBuffAffected(paramId: Game_BattlerBase.Params): boolean;
    public isMaxDebuffAffected(paramId: Game_BattlerBase.Params): boolean;
    public increaseBuff(paramId: Game_BattlerBase.Params): void;
    public decreaseBuff(paramId: Game_BattlerBase.Params): void;
    public overwriteBuffTurns(paramId: Game_BattlerBase.Params, turns: number): void;
    public isBuffExpired(paramId: Game_BattlerBase.Params): boolean;
    public updateBuffTurns(): void;
    public die(): void;
    public revive(): void;
    public states(): RPG.DataState[];
    public stateIcons(): number[];
    public buffIcons(): number[];
    public buffIconIndex(buffLevel: number, paramId: Game_BattlerBase.Params): number;
    public allIcons(): number[];
    public traitObjects(): {
        traits: RPG.Trait[];
    }[];
    public allTraits(): RPG.Trait[];
    public traits(code: Game_BattlerBase.Traits): RPG.Trait[];
    public traitsWithId(code: Game_BattlerBase.Traits, id: number): RPG.Trait[];
    public traitsPi(code: Game_BattlerBase.Traits, id: number): number;
    public traitsSum(code: Game_BattlerBase.Traits, id: number): number;
    public traitsSumAll(code: Game_BattlerBase.Traits): number;
    public traitsSet(code: Game_BattlerBase.Traits): number[];
    public paramBase(paramId: Game_BattlerBase.Params): number;
    public paramPlus(paramId: Game_BattlerBase.Params): number;
    public paramBasePlus(paramId: Game_BattlerBase.Params): number;
    public paramMin(paramId: Game_BattlerBase.Params): number;
    public paramMax(paramId: Game_BattlerBase.Params): number;
    public paramRate(paramId: Game_BattlerBase.Params): number;
    public paramBuffRate(paramId: Game_BattlerBase.Params): number;
    public param(paramId: Game_BattlerBase.Params): number;
    public xparam(paramId: Game_BattlerBase.ExtraParams): number;
    public sparam(paramId: Game_BattlerBase.SpecialParams): number;
    public elementRate(elementId: number): number;
    public debuffRate(paramId: Game_BattlerBase.Params): number;
    public stateRate(stateId: number): number;
    public stateResistSet(): number[];
    public isStateResist(stateId: number): boolean;
    public attackElements(): number[];
    public attackStates(): number[];
    public attackStatesRate(stateId: number): number;
    public attackSpeed(): number;
    public attackTimesAdd(): number;
    public attackSkillId(): number;
    public attackSkillTypes(): number[];
    public addedSkillTypes(): number[];
    public isSkillTypeSealed(stypeId: number): boolean;
    public addedSkills(): number[];
    public isSkillSealed(skillId: number): boolean;
    public isEquipWtypeOk(wtypeId: number): boolean;
    public isEquipAtypeOk(atypeId: number): boolean;
    public isEquipTypeLocked(etypeId: number): boolean;
    public isEquipTypeSealed(etypeId: number): boolean;
    public slotType(): number;
    public isDualWield(): boolean;
    public actionPlusSet(): number[];
    public specialFlag(flagId: Game_BattlerBase.FlagIds): boolean;
    public collapseType(): Game_BattlerBase.CollapseType;
    public partyAbility(abilityId: number): boolean;
    public isAutoBattle(): boolean;
    public isGuard(): boolean;
    public isSubstitute(): boolean;
    public isPreserveTp(): boolean;
    public addParam(paramId: Game_BattlerBase.Params, value: number): void;
    public setHp(hp: number): void;
    public setMp(mp: number): void;
    public setTp(tp: number): void;
    public maxTp(): number;
    public refresh(): void;
    public recoverAll(): void;
    public hpRate(): number;
    public mpRate(): number;
    public tpRate(): number;
    public hide(): void;
    public appear(): void;
    public isHidden(): boolean;
    public isAppeared(): boolean;
    public isDead(): boolean;
    public isAlive(): boolean;
    public isDying(): boolean;
    public isRestricted(): boolean;
    public canInput(): boolean;
    public canMove(): boolean;
    public isConfused(): boolean;
    public confusionLevel(): number;
    public isActor(): this is Game_Actor;
    public isEnemy(): this is Game_Enemy;
    public sortStates(): void;
    public restriction(): number;
    public addNewState(stateId: number): void;
    public onRestrict(): void;
    public mostImportantStateText(): string;
    public stateMotionIndex(): number;
    public stateOverlayIndex(): number;
    public isSkillWtypeOk(skill: RPG.DataSkill): boolean;
    public skillMpCost(skill: RPG.DataSkill): number;
    public skillTpCost(skill: RPG.DataSkill): number;
    public canPaySkillCost(skill: RPG.DataSkill): boolean;
    public paySkillCost(skill: RPG.DataSkill): void;
    public isOccasionOk(item: RPG.DataItem): boolean;
    public meetsUsableItemConditions(item: RPG.DataConsumable): boolean;
    public meetsSkillConditions(skill: RPG.DataSkill): boolean;
    public meetsItemConditions(item: RPG.DataItem): boolean;
    public canUse(item?: RPG.DataConsumable): boolean;
    public canEquip(item?: RPG.DataEquipItem): boolean;
    public canEquipWeapon(item: RPG.DataWeapon): boolean;
    public canEquipArmor(item: RPG.DataArmor): boolean;
    public guardSkillId(): number;
    public canAttack(): boolean;
    public canGuard(): boolean;
}
declare namespace Game_Battler {
    export type EffectType = "appear" | "disappear" | "whiten" | "blink" | "collapse" | "bossCollapse" | "instantCollapse";
    export type MotionType = "walk" | "wait" | "chant" | "guard" | "damage" | "evade" | "thrust" | "swing" | "missile" | "skill" | "spell" | "item" | "escape" | "victory" | "dying" | "abnormal" | "sleep" | "dead";
    export type ActionState = "undecided" | "inputting" | "waiting" | "acting";
}
declare abstract class Game_Battler extends Game_BattlerBase {
    constructor();
    public clearDamagePopup(): void;
    public clearWeaponAnimation(): void;
    public clearEffect(): void;
    public clearMotion(): void;
    public requestEffect(effectType: Game_Battler.EffectType): void;
    public requestMotion(motionType: Game_Battler.MotionType): void;
    public requestMotionRefresh(): void;
    public select(): void;
    public deselect(): void;
    public isDamagePopupRequested(): boolean;
    public isEffectRequested(): boolean;
    public isMotionRequested(): boolean;
    public isWeaponAnimationRequested(): boolean;
    public isMotionRefreshRequested(): boolean;
    public isSelected(): boolean;
    public effectType(): Game_Battler.EffectType;
    public motionType(): Game_Battler.MotionType;
    public weaponImageId(): number;
    public startDamagePopup(): void;
    public shouldPopupDamage(): boolean;
    public startWeaponAnimation(weaponImageId: number): void;
    public action(index: number): Game_Action;
    public setAction(index: number, action: Game_Action): void;
    public numActions(): number;
    public clearActions(): void;
    public result();
    public clearResult(): void;
    public clearResult(): void;
    public clearTpbChargeTime(): void;
    public applyTpbPenalty(): void;
    public initTpbChargeTime(advantageous: boolean): void;
    public tbpChargeTime(): number;
    public startTpbCasting(): void;
    public startTpbAction(): void;
    public isTpbCharged(): boolean;
    public isTpbReady(): boolean;
    public isTpbTimeout(): boolean;
    public updateTpb(): void;
    public updateTpbChargeTime(): void;
    public updateTpbCastTime(): void;
    public updateTpbAutoBattle(): void;
    public updateTpbIdleTime(): void;
    public tpbAcceleration(): number;
    public tpbRelativeSpeed(): number;
    public tpbSpeed(): number;
    public tpbBaseSpeed(): number;
    public tpbRequiredCastTime(): number;
    public onTpbCharged(): void;
    public shouldDelayTpbCharge(): boolean;
    public finishTpbCharge(): void;
    public isTpbTurnEnd(): boolean;
    public initTpbTurn(): void;
    public startTpbTurn(): void;
    public makeTpbActions(): void;
    public onTpbTimeout(): void;
    public turnCount(): number;
    public canInput(): boolean;
    public refresh(): void;
    public addState(stateId: number): void;
    public isStateAddable(stateId: number): boolean;
    public isStateRestrict(stateId: number): boolean;
    public onRestrict(): void;
    public removeState(stateId: number): void;
    public escape(): void;
    public addBuff(paramId: Game_BattlerBase.Params, turns: number): void;
    public addDebuff(paramId: Game_BattlerBase.Params, turns: number): void;
    public removeBuff(paramId: Game_BattlerBase.Params): void;
    public removeBattleStates(): void;
    public removeAllBuffs(): void;
    public removeStatesAuto(timing: number): void;
    public removeBuffsAuto(): void;
    public removeStatesByDamage(): void;
    public makeActionTimes(): number;
    public makeActions(): void;
    public speed(): number;
    public makeSpeed(): void;
    public currentAction(): Game_Action;
    public removeCurrentAction(): void;
    public setLastTarget(target: Game_Battler): void;
    public forceAction(skillId: number, targetIndex: number): void;
    public useItem(item: RPG.DataConsumable): void;
    public consumeItem(item: RPG.DataItem): void;
    public gainHp(value: number): void;
    public gainMp(value: number): void;
    public gainTp(value: number): void;
    public gainSilentTp(value: number): void;
    public initTp(): void;
    public clearTp(): void;
    public chargeTpByDamage(damageRate: number): void;
    public regenerateHp(): void;
    public maxSlipDamage(): number;
    public regenerateMp(): void;
    public regenerateTp(): void;
    public regenerateAll(): void;
    public onBattleStart(advantageous: boolean): void;
    public onAllActionsEnd(): void;
    public onTurnEnd(): void;
    public onBattleEnd(): void;
    public onDamage(value: number): void;
    public setActionState(actionState: Game_Battler.ActionState): void;
    public isUndecided(): boolean;
    public isInputting(): boolean;
    public isWaiting(): boolean;
    public isActing(): boolean;
    public isChanting(): boolean;
    public isGuardWaiting(): boolean;
    public performActionStart(action: Game_Action): void;
    public performAction(action: Game_Action): void;
    public performActionEnd(): void;
    public performDamage(): void;
    public performMiss(): void;
    public performRecovery(): void;
    public performEvasion(): void;
    public performMagicEvasion(): void;
    public performCounter(): void;
    public performReflection(): void;
    public performSubstitute(target: Game_Battler): void;
    public performCollapse(): void;
    abstract name(): string;
    abstract index(): number;
    public abstract isSpriteVisible(): boolean;
    public abstract friendsUnit(): Game_Unit<Game_Battler>;
    public abstract opponentsUnit(): Game_Unit<Game_Battler>;
    public abstract isBattleMember(): boolean;
    public abstract battlerName(): string;
}
declare class Game_Unit<T extends Game_Battler> {
    constructor();
    public inBattle(): boolean;
    public members(): T[];
    public aliveMembers(): T[];
    public deadMembers(): T[];
    public movableMembers(): T[];
    public clearActions(): void;
    public agility(): number;
    public tgrSum(): number;
    public randomTarget(): T;
    public randomDeadTarget(): T;
    public smoothTarget(): T;
    public smoothDeadTarget(): T;
    public clearResults(): void;
    public onBattleStart(advantageous: boolean): void;
    public onBattleEnd(): void;
    public makeActions(): void;
    public select(activeMember: T): void;
    public isAllDead(): boolean;
    public substituteBattler(): T;
    public tpbBaseSpeed(): number;
    public tpbReferenceTime(): number;
    public updateTpb(): void;
}
declare namespace Game_Party {
    export enum Ability {
        ENCOUNTER_HALF = 0,
        ENCOUNTER_NONE = 1,
        CANCEL_SURPRISE = 2,
        RAISE_PREEMPTIVE = 3,
        GOLD_DOUBLE = 4,
        DROP_ITEM_DOUBLE = 5
    }
}
declare class Game_Party extends Game_Unit<Game_Actor> {
    constructor();
    public static readonly ABILITY_ENCOUNTER_HALF: Game_Party.Ability.ENCOUNTER_HALF;
    public static readonly ABILITY_ENCOUNTER_NONE: Game_Party.Ability.ENCOUNTER_NONE;
    public static readonly ABILITY_CANCEL_SURPRISE: Game_Party.Ability.CANCEL_SURPRISE;
    public static readonly ABILITY_RAISE_PREEMPTIVE: Game_Party.Ability.RAISE_PREEMPTIVE;
    public static readonly ABILITY_GOLD_DOUBLE: Game_Party.Ability.GOLD_DOUBLE;
    public static readonly ABILITY_DROP_ITEM_DOUBLE: Game_Party.Ability.DROP_ITEM_DOUBLE;
    public initAllItems(): void;
    public exists(): boolean;
    public size(): number;
    public isEmpty(): boolean;
    public allMembers(): Game_Actor[];
    public battleMembers(): Game_Actor[];
    public maxBattleMembers(): number;
    public leader(): Game_Actor;
    public removeInvalidMembers(): void;
    public reviveBattleMembers(): void;
    public items(): RPG.DataItem[];
    public weapons(): RPG.DataWeapon[];
    public armors(): RPG.DataArmor[];
    public equipItems(): RPG.DataEquipItem[];
    public allItems(): RPG.DataItemBase[];
    public itemContainer(item: RPG.DataItemBase): Record<number, number> | null;
    public setupStartingMembers(): void;
    public name(): string;
    public setupBattleTest(): void;
    public setupBattleTestMembers(): void;
    public setupBattleTestItems(): void;
    public highestLevel(): number;
    public addActor(actorId: number): void;
    public removeActor(actorId: number): void;
    public gold(): number;
    public gainGold(amount: number): void;
    public loseGold(amount: number): void;
    public maxGold(): number;
    public steps(): number;
    public increaseSteps(): void;
    public numItems(item: RPG.DataItemBase): number;
    public maxItems(item: RPG.DataItemBase): number;
    public hasMaxItems(item: RPG.DataItemBase): boolean;
    public hasItem(item: RPG.DataItemBase): boolean;
    public hasItem(item: RPG.DataEquipItem, includeEquip: boolean): boolean;
    public isAnyMemberEquipped(item: RPG.DataItem): false;
    public isAnyMemberEquipped(item: RPG.DataEquipItem): boolean;
    public gainItem(item: RPG.DataItemBase, amount: number): void;
    public gainItem(item: RPG.DataEquipItem, amount: number, includeEquip: boolean): void;
    public discardMembersEquip(item: RPG.DataEquipItem, amount: number): void;
    public loseItem(item: RPG.DataEquipItem, amount: number, includeEquip: boolean): void;
    public consumeItem(item: RPG.DataItem): void;
    public canUse(item: RPG.DataItem): boolean;
    public canInput(): boolean;
    public onPlayerWalk(): void;
    public menuActor(): Game_Actor;
    public setMenuActor(actor: Game_Actor): void;
    public makeMenuActorNext(): void;
    public makeMenuActorPrevious(): void;
    public targetActor(): Game_Actor;
    public setTargetActor(actor: Game_Actor): void;
    public lastItem(): RPG.DataItem;
    public setLastItem(item: RPG.DataItem): void;
    public swapOrder(index1: number, index2: number): void;
    public charactersForSavefile(): [
        string,
        number
    ][];
    public facesForSavefile(): [
        string,
        number
    ][];
    public partyAbility(abilityId: Game_Party.Ability): boolean;
    public hasEncounterHalf(): boolean;
    public hasEncounterNone(): boolean;
    public hasCancelSurprise(): boolean;
    public hasRaisePreemptive(): boolean;
    public hasGoldDouble(): boolean;
    public hasDropItemDouble(): boolean;
    public ratePreemptive(troopAgi: number): number;
    public rateSurprise(troopAgi: number): number;
    public performVictory(): void;
    public performEscape(): void;
    public removeBattleStates(): void;
    public requestMotionRefresh(): void;
    public onEscapeFailure(): void;
}
declare class Game_Troop extends Game_Unit<Game_Enemy> {
    public static readonly LETTER_TABLE_HALF: string[];
    public static readonly LETTER_TABLE_FULL: string[];
    constructor();
    public isEventRunning(): boolean;
    public updateInterpreter(): void;
    public turnCount(): number;
    public clear(): void;
    public troop(): RPG.DataTroop;
    public setup(troopId: number): void;
    public makeUniqueNames(): void;
    public updatePluralFlags(): void;
    public letterTable(): string[];
    public enemyNames(): string[];
    public meetsConditions(page: RPG.Page): boolean;
    public setupBattleEvent(): void;
    public increaseTurn(): void;
    public expTotal(): number;
    public goldTotal(): number;
    public goldRate(): number;
    public makeDropItems(): RPG.DataItemBase[];
    public isTpbTurnEnd(): boolean;
}
declare class Game_Item {
    private _dataClass: string;
    private _itemId: number;
    constructor();
    public initialize(item: Record<string, unknown>): void;
    public isSkill(): string;
    public isItem(): string;
    public isUsableItem(): boolean;
    public isWeapon(): string;
    public isArmor(): string;
    public isEquipItem(): boolean;
    public isNull(): string;
    public itemId(): number;
    public object(): RPG.DataItemBase;
    public setObject(item: Record<string, unknown>): void;
    public setEquip(isWeapon: boolean, itemId: number): void;
}
declare class Game_Picture {
    private _name: string;
    private _origin: number;
    private _x: number;
    private _y: number;
    private _scaleX: number;
    private _scaleY: number;
    private _opacity: number;
    private _blendMode: number;
    private _tone: number[];
    private _angle: number;
    private _targetScaleX: number;
    private _targetScaleY: number;
    private _targetOpacity: number;
    private _wholeDuration: number;
    private _easingType: number;
    private _easingExponent: number;
    private _toneTarget: number[];
    private _toneDuration: number;
    private _rotationSpeed: number;
    constructor();
    public initialize(): void;
    public name(): string;
    public origin(): number;
    public x(): number;
    public y(): number;
    public scaleX(): number;
    public scaleY(): number;
    public opacity(): number;
    public blendMode(): number;
    public tone(): number;
    public angle(): number;
    public initBasic(): void;
    public initTarget(): void;
    public initTone(): void;
    public initRotation(): void;
    public show(name: string, origin: number, x: number, y: number, scaleX: number, scaleY: number, opacity: number, blendMode: number): void;
    public move(origin: number, x: number, y: number, scaleX: number, scaleY: number, opacity: number, blendMode: number, duration: number, easingType: number): void;
    public rotate(speed: number): void;
    public tint(tone: number[], duration: number): void;
    public update(): void;
    public updateMove(): void;
    public updateTone(): void;
    public updateRotation(): void;
    public applyEasing(current: number, target: number): void;
    public calcEasing(t: number): number;
    public easeIn(t: number, exponent: number): number;
    public easeOut(t: number, exponent: number): number;
    public easeOut(t: number, exponent: number): number;
    public easeInOut(t: number, exponent: number): number;
}
declare class Game_Screen {
    private _brightness: number;
    private _fadeOutDuration: number;
    private _fadeInDuration: number;
    private _tone: number[];
    private _toneTarget: number[];
    private _toneDuration: number;
    private _flashColor: number[];
    private _flashDuration: number;
    private _shake: number;
    private _shakePower: number;
    private _shakeSpeed: number;
    private _shakeDuration: number;
    private _shakeDirection: number;
    private _zoomX: number;
    private _zoomY: number;
    private _zoomScale: number;
    private _zoomScaleTarget: number;
    private _zoomDuration: number;
    private _weatherType: string;
    private _weatherPower: number;
    private _weatherPowerTarget: number;
    private _weatherDuration: number;
    private _pictures;
    constructor();
    public initialize(): void;
    public clear(): void;
    public onBattleStart(): void;
    public brightness(): number;
    public tone(): number[];
    public flashColor(): number[];
    public shake(): number;
    public zoomX(): number;
    public zoomY(): number;
    public zoomScale(): number;
    public weatherType(): string;
    public weatherPower(): number;
    public picture(pictureId: number): Game_Picture;
    public realPictureId(pictureId: number): Game_Picture;
    public clearFade(): void;
    public clearTone(): void;
    public clearFlash(): void;
    public clearShake(): void;
    public clearZoom(): void;
    public clearWeather(): void;
    public clearPictures(): void;
    public eraseBattlePictures(): void;
    public maxPictures(): number;
    public startFadeOut(duration: number): void;
    public startFadeIn(duration: number): void;
    public startTint(tone: number[], duration: number): void;
    public startFlash(color: number[], duration: number): void;
    public startShake(power: number, speed: number, duration: number): void;
    public startZoom(x: number, y: number, scale: number, duration: number): void;
    public setZoom(x: number, y: number, scale: number): void;
    public changeWeather(type: string, power: number, duration: number): void;
    public update(): void;
    public updateFadeOut(): void;
    public updateFadeIn(): void;
    public updateTone(): void;
    public updateFlash(): void;
    public updateShake(): void;
    public updateZoom(): void;
    public updateWeather(): void;
    public updatePictures(): void;
    public startFlashForDamage(): void;
    public showPicture(pictureId: number, name: string, origin: number, x: number, y: number, scaleX: number, scaleY: number, opacity: number, blendMode: number): void;
    public movePicture(pictureId: number, name: string, origin: number, x: number, y: number, scaleX: number, scaleY: number, opacity: number, blendMode: number, duration: number, easingType: number): void;
    public rotatePicture(pictureId: number, speed: number): void;
    public tintPicture(pictureId: number, tone: number[], duration: number): void;
    public erasePicture(pictureId: number): void;
}
interface selfSwitches {
    "A": boolean;
    "B": boolean;
    "C": boolean;
    "D": boolean;
}
declare class Game_SelfSwitches {
    private _data: selfSwitches;
    constructor();
    public initialize(): void;
    public clear(): void;
    public value(key: string): selfSwitches;
    public setValue(key: string, value: boolean): void;
    public onChange(): void;
}
declare class Game_Switches {
    private _data: boolean[];
    constructor();
    public initialize(): void;
    public clear(): void;
    public value(switchId: number): boolean;
    public setValue(switchId: number, value: boolean): void;
    public onChange(): void;
}
declare class Game_System {
    private _saveEnabled: boolean;
    private _menuEnabled: boolean;
    private _encounterEnabled: boolean;
    private _formationEnabled: boolean;
    private _battleCount: number;
    private _winCount: number;
    private _escapeCount: number;
    private _saveCount: number;
    private _versionId: number;
    private _savefileId: number;
    private _framesOnSave: number;
    private _bgmOnSave: AudioManager.CurrentAudio;
    private _bgsOnSave: AudioManager.CurrentAudio;
    private _windowTone: number[];
    private _battleBgm: AudioManager.CurrentAudio;
    private _victoryMe: AudioManager.CurrentAudio;
    private _defeatMe: AudioManager.CurrentAudio;
    private _savedBgm: AudioManager.CurrentAudio;
    private _walkingBgm: AudioManager.CurrentAudio;
    constructor();
    public initialize(): void;
    public isJapanese(): boolean;
    public isChinese(): boolean;
    public isKorean(): boolean;
    public isCJK(): boolean;
    public isRussian(): boolean;
    public isSideView(): boolean;
    public isAutosaveEnabled(): boolean;
    public isSaveEnabled(): boolean;
    public disableSave(): void;
    public enableSave(): void;
    public isMenuEnabled(): boolean;
    public disableMenu(): void;
    public enableMenu(): void;
    public isEncounterEnabled(): boolean;
    public disableEncounter(): void;
    public enableEncounter(): void;
    public isFormationEnabled(): boolean;
    public disableFormation(): void;
    public enableFormation(): void;
    public battleCount(): number;
    public winCount(): number;
    public escapeCount(): number;
    public saveCount(): number;
    public versionId(): number;
    public savefileId(): number;
    public setSavefileId(savefileId: number): void;
    public windowTone(): number[];
    public setWindowTone(value: number[]): void;
    public battleBgm(): AudioManager.CurrentAudio;
    public setBattleBgm(value: AudioManager.CurrentAudio): void;
    public victoryMe(): AudioManager.CurrentAudio;
    public setVictoryMe(value: AudioManager.CurrentAudio): void;
    public defeatMe(): AudioManager.CurrentAudio;
    public setDefeatMe(value: AudioManager.CurrentAudio): void;
    public onBattleStart(): void;
    public onBattleWin(): void;
    public onBattleEscape(): void;
    public onBeforeSave(): void;
    public onAfterLoad(): void;
    public playTime(): number;
    public playTimeText(): string;
    public saveBgm(): void;
    public replayBgm(): void;
    public saveWalkingBgm(): void;
    public replayWalkingBgm(): void;
    public saveWalkingBgm2(): void;
    public mainFontFace(): string;
    public numberFontFace(): string;
    public mainFontSize(): number;
    public windowPadding(): number;
}
declare class Game_Timer {
    private _frames: number;
    private _working: boolean;
    constructor();
    public initialize(): void;
    public update(sceneActive: boolean): void;
    public start(count: number): void;
    public stop(): void;
    public isWorking(): boolean;
    public seconds(): number;
    public onExpire(): void;
}
declare class Game_Variables {
    private _data: number[];
    constructor();
    public initialize(): void;
    public clear(): void;
    public value(variableId: number): number;
    public setValue(variableId: number, value: number | string): void;
    public onChange(): void;
}
declare class Game_Temp {
    private _isPlaytest: boolean;
    private _destinationX: number;
    private _destinationY: number;
    private _touchTarget: unknown;
    private _touchState: string;
    private _needBattleRefresh: boolean;
    private _commonEventQueue: unknown[];
    private _animationQueue: unknown[];
    private _balloonQueue: unknown[];
    private _lastActionData: number[];
    constructor();
    public initialize(): void;
    public isPlayTest(): boolean;
    public setDestination(x: number, y: number): void;
    public clearDestination(): void;
    public isDestinationValid(): boolean;
    public destinationX(): number;
    public destinationY(): number;
    public setTouchState(target: unknown, state: string): void;
    public clearTouchState(): void;
    public touchTarget(): unknown;
    public touchState(): string;
    public requestBattleRefresh(): void;
    public clearBattleRefreshRequest(): void;
    public isBattleRefreshRequested(): boolean;
    public reserveCommonEvent(commonEventId: number): void;
    public retrieveCommonEvent(): RPG.DataCommonEvent;
    public isCommonEventReserved(): boolean;
    public requestAnimation(targets: unknown, animationId: number, mirror?: boolean): void;
    public retrieveAnimation(): unknown;
    public requestBalloon(target: unknown, balloonId: number): void;
    public retrieveBalloon(): unknown;
    public lastActionData(type: unknown): number;
    public setLastActionData(type: unknown, value: number): void;
    public setLastUsedSkillId(skillID: number): void;
    public setLastUsedItemId(itemID: number): void;
    public setLastSubjectActorId(actorID: number): void;
    public setLastSubjectEnemyIndex(enemyIndex: number): void;
    public setLastTargetActorId(actorID: number): void;
    public setLastTargetEnemyIndex(enemyIndex: number): void;
}
declare class Game_Message {
    private _texts: string[];
    private _choices: string[];
    private _speakerName: string;
    private _faceName: string;
    private _faceIndex: number;
    private _background: number;
    private _positionType: number;
    private _choiceDefaultType: number;
    private _choiceCancelType: number;
    private _choiceBackground: number;
    private _choicePositionType: number;
    private _numInputVariableId: number;
    private _numInputMaxDigits: number;
    private _itemChoiceVariableId: number;
    private _itemChoiceItypeId: number;
    private _scrollMode: boolean;
    private _scrollSpeed: number;
    private _scrollNoFast: boolean;
    private _choiceCallback: Function;
    constructor();
    public initialize(): void;
    public clear(): void;
    public choices(): object[];
    public speakerName(): string;
    public faceName(): string;
    public faceIndex(): number;
    public background(): number;
    public positionType(): number;
    public choiceDefaultType(): number;
    public choiceCancelType(): number;
    public choiceBackground(): number;
    public choicePositionType(): number;
    public numInputVariableId(): number;
    public numInputMaxDigits(): number;
    public itemChoiceVariableId(): number;
    public itemChoiceItypeId(): number;
    public scrollMode(): boolean;
    public scrollSpeed(): number;
    public scrollNoFast(): boolean;
    public add(text: string): void;
    public setSpeakerName(speakerName: string): void;
    public setFaceImage(faceName, faceIndex): void;
    public setBackground(background: number): number;
    public setPositionType(positionType: number): number;
    public setChoices(choices: string[], defaultType: number, cancelType: number): void;
    public setChoiceBackground(background: number): void;
    public setChoicePositionType(positionType: number): void;
    public setNumberInput(variableId: number, maxDigits: number): void;
    public setItemChoice(variableId: number, itemType: number): void;
    public setScroll(speed: number, noFast: boolean): void;
    public setChoiceCallback(callback: Function): void;
    public onChoice(n: number): void;
    public hasText(): boolean;
    public isChoice(): boolean;
    public isNumberInput(): boolean;
    public isItemChoice(): boolean;
    public isBusy(): boolean;
    public newPage(): void;
    public allText(): string;
    public isRTL(): boolean;
}
declare abstract class Sprite_Clickable extends Sprite {
    private _pressed: boolean;
    private _hovered: boolean;
    constructor();
    public initialize(): void;
    public update(): void;
    public processTouch(): void;
    public isPressed(): boolean;
    public isClickEnabled(): boolean;
    public isBeingTouched(): boolean;
    public hitTest(x: number, y: number): Rectangle;
    public abstract onMouseEnter(): void;
    public abstract onMouseExit(): void;
    public abstract onPress(): void;
    public abstract onClick(): void;
}
declare interface ButtonTable {
    cancel: {
        x: 0;
        w: 2;
    };
    pageup: {
        x: 2;
        w: 1;
    };
    pagedown: {
        x: 3;
        w: 1;
    };
    down: {
        x: 4;
        w: 1;
    };
    up: {
        x: 5;
        w: 1;
    };
    down2: {
        x: 6;
        w: 1;
    };
    up2: {
        x: 7;
        w: 1;
    };
    ok: {
        x: 8;
        w: 2;
    };
    menu: {
        x: 10;
        w: 1;
    };
}
declare class Sprite_Button extends Sprite_Clickable {
    private _buttonType: string;
    private _clickHandler: Function;
    private _coldFrame: Rectangle;
    private _hotFrame: Rectangle;
    constructor(buttonType: string);
    public setupFrame(): void;
    public blockWidth(): number;
    public blockHeight(): number;
    public loadButtomImage(): void;
    public buttonData(): ButtonTable;
    public update(): void;
    public checkBitmap(): void;
    public updateFrame(): void;
    public updateOpacity(): void;
    public setColdFrame(x: number, y: number, width: number, height: number): void;
    public setHotFrame(x: number, y: number, width: number, height: number): void;
    public setClickHandler(method: Function): void;
    public onClick(): void;
    public onMouseEnter(): void;
    public onMouseExit(): void;
    public onPress(): void;
}
declare class Sprite_Character extends Sprite {
    constructor(character);
}
declare class Sprite_Battler extends Sprite_Clickable {
    constructor(battler: Game_Battler);
    public initMembers(): void;
    public setBattler(battler: Game_Battler): void;
    public checkBattler(battler: Game_Battler): boolean;
    public mainSprite(): Sprite;
    public setHome(x: number, y: number): void;
    public updateMain(): void;
    public updateBitmap(): void;
    public updateFrame(): void;
    public updateMove(): void;
    public updatePosition(): void;
    public updateDamagePopup(): void;
    public updateSelectionEffect(): void;
    public setupDamagePopup(): void;
    public createDamageSprite(): void;
    public destroyDamageSprite(sprite: Sprite_Damage): void;
    public damageOffsetX(): number;
    public damageOffsetY(): number;
    public startMove(x: number, y: number, duration: number): void;
    public onMoveEnd(): void;
    public isEffecting(): boolean;
    public isMoving(): boolean;
    public inHomePosition(): boolean;
    public onMouseEnter(): void;
    public onMouseExit(): void;
    public onPress(): void;
    public onClick(): void;
}
declare class Sprite_Damage extends Sprite {
    constructor();
    public setup(target: Game_Battler): void;
    public setupCriticalEffect(): void;
    public fontFace(): string;
    public fontSize(): number;
    public damageColor(): string;
    public outlineColor(): string;
    public outlineWidth(): number;
    public createMiss(): void;
    public createDigits(value: number): void;
    public createChildSprite(width: number, height: number): Sprite;
    public createBitmap(width: number, height: number): Bitmap;
    public update(): void;
    public updateChild(sprite: Sprite): void;
    public updateFlash(): void;
    public updateOpacity(): void;
    public isPlaying(): boolean;
}
declare class Sprite_Animation extends Sprite {
    constructor();
    public initMembers(): void;
    public setup(targets: Game_Battler[], animation: RPG.DataAnimation, mirror: boolean, delay: number, previous: Sprite_Animation | Sprite_AnimationMV): void;
    public canStart(): boolean;
    public shouldWaitForPrevious(): boolean;
    public updateEffectGeometry(): void;
    public updateMain(): void;
    public processSoundTimings(): void;
    public processFlashTimings(): void;
    public checkEnd(): void;
    public updateFlash(): void;
    public isPlaying(): boolean;
    public setRotation(x: number, y: number, z: number): void;
    public setProjectionMatrix(renderer: PIXI.Renderer): void;
    public setCameraMatrix(renderer: PIXI.Renderer): void;
    public setViewport(renderer: PIXI.Renderer): void;
    public targetPosition(renderer: PIXI.Renderer): Point;
    public targetSpritePosition(sprite: Sprite): Point;
    public saveViewport(renderer: PIXI.Renderer): void;
    public resetViewport(renderer: PIXI.Renderer): void;
    public onBeforeRender(renderer: PIXI.Renderer): void;
    public onAfterRender(renderer: PIXI.Renderer): void;
}
declare class Sprite_AnimationMV extends Sprite {
    constructor();
    public initMembers(): void;
    public setup(targets: Game_Battler[], animation: RPG.DataAnimation, mirror: boolean, delay: number): void;
    public setupRate(): number;
    public setupDuration(): number;
    public updateFlash(): void;
    public updateScreenFlash(): void;
    public absoluteX(): number;
    public absoluteY(): number;
    public updateHiding(): void;
    public isPlaying(): boolean;
    public loadBitmaps(): void;
    public isReady(): boolean;
    public createCellSprites(): void;
    public createScreenFlashSprite(): void;
    public updateMain(): void;
    public updatePosition(): void;
    public updateFrame(): void;
    public currentFrameIndex(): number;
    public updateAllCellSprites(frame: number[][]): void;
    public updateCellSprite(sprite: Sprite, cell: number[]): void;
    public processTimingData(timing: unknown): void;
    public startFlash(color: RGBA, duration: number): void;
    public startScreenFlash(color: RGBA, duration: number): void;
    public startHiding(duration: number): void;
    public onEnd(): void;
}
declare class Spriteset_Base<T, S> extends Sprite {
    constructor();
    public loadSystemImages(): void;
    public createLowerLayer(): void;
    public createUpperLayer(): void;
    public update(): void;
    public createBaseSprite(): void;
    public createBaseFilters(): void;
    public createPictures(): void;
    public pictureContainerRect(): Rectangle;
    public createTimer(): void;
    public createOverallFilters(): void;
    public updateBaseFilters(): void;
    public updateOverallFilters(): void;
    public updatePosition(): void;
    public findTargetSprite(target: T): S;
    public updateAnimations(): void;
    public processAnimationRequests(): void;
    public createAnimation(): void;
    public createAnimationSprite(): void;
    public isMVAnimation(animation: RPG.DataAnimation): boolean;
    public makeTargetSprites(targets: T[]): S[];
    public lastAnimationSprite(): Sprite_Animation | Sprite_AnimationMV;
    public isAnimationForEach(animation: RPG.DataAnimation): boolean;
    public animationBaseDelay(): number;
    public animationNextDelay(): number;
    public animationShouldMirror(target: Game_Battler): boolean;
    public removeAnimation(sprite: Sprite_Animation | Sprite_AnimationMV): void;
    public removeAllAnimations(): void;
    public isAnimationPlaying(): boolean;
}
declare class Spriteset_Battle extends Spriteset_Base<Game_Battler, Sprite_Battler> {
    constructor();
    public createBackground(): void;
    public createBattleback(): void;
    public createBattleField(): void;
    public battleFieldOffsetY(): number;
    public updateBattleback(): void;
    public createEnemies(): void;
    public compareEnemySprite(a: Sprite_Battler, b: Sprite_Battler): number;
    public createActors(): void;
    public updateActors(): void;
    public battlerSprites(): Sprite_Battler[];
    public isEffecting(): boolean;
    public isAnyoneMoving(): boolean;
    public isBusy(): boolean;
}
declare class Window_ActorCommand extends Window_Command<number> {
    constructor(rect: Rectangle);
    public makeCommandList(): void;
    public addAttackCommand(): void;
    public addSkillCommands(): void;
    public addGuardCommand(): void;
    public addItemCommand(): void;
    public setup(actor: Game_Actor): void;
    public actor(): Game_Actor;
    public processOk(): void;
    public selectLast(): void;
}
declare namespace Window_Base {
    export interface TextState {
        text: string;
        index: number;
        x: number;
        y: number;
        width: number;
        height: number;
        startX: number;
        startY: number;
        rtl: boolean;
        buffer: string;
        drawing: boolean;
        outputWidth: number;
        outputHeight: number;
    }
}
declare class Window_Base extends Window {
    constructor(rect: Rectangle);
    public destroy(options?: {
        children?: boolean;
        texture?: boolean;
        baseTexture?: boolean;
    }): void;
    public checkRectObject(rect: Rectangle): void;
    public lineHeight(): number;
    public itemWidth(): number;
    public itemHeight(): number;
    public itemPadding(): number;
    public baseTextRect(): Rectangle;
    public loadWindowskin(): void;
    public updatePadding(): void;
    public updateBackOpacity(): void;
    public fittingHeight(numLines: number): number;
    public updateTone(): void;
    public createContents(): void;
    public destroyContents(): void;
    public contentsWidth(): number;
    public contentsHeight(): number;
    public resetFontSettings(): void;
    public resetTextColor(): void;
    public update(): void;
    public updateOpen(): void;
    public updateClose(): void;
    public open(): void;
    public close(): void;
    public isOpening(): boolean;
    public isClosing(): boolean;
    public show(): void;
    public hide(): void;
    public activate(): void;
    public deactivate(): void;
    public systemColor(): string;
    public translucentOpacity(): number;
    public changeTextColor(color: string): void;
    public changeOutlineColor(color: string): void;
    public changePaintOpacity(enabled: boolean): void;
    public drawRect(x: number, y: number, width: number, height: number): void;
    public drawText(text: string | number, x: number, y: number, maxWidth: number, align: string): void;
    public textWidth(text: string): number;
    public drawTextEx(text: string, x: number, y: number, width: number): number;
    public textSizeEx(text: string): {
        width: number;
        height: number;
    };
    public createTextState(text: string, x: number, y: number, width: number): Window_Base.TextState;
    public processAllText(textState: Window_Base.TextState): void;
    public flushTextState(textState: Window_Base.TextState): void;
    public createTextBuffer(rtl: boolean): string;
    public convertEscapeCharacters(text: string): string;
    public actorName(n: number): string;
    public partyMemberName(n: number): string;
    public processCharacter(textState: Window_Base.TextState): void;
    public processControlCharacter(textState: Window_Base.TextState, c: string): void;
    public processNewLine(textState: Window_Base.TextState): void;
    public obtainEscapeCode(textState: Window_Base.TextState): void;
    public obtainEscapeParam(textState: Window_Base.TextState): number | string;
    public processEscapeCharacter(code: string, textState: Window_Base.TextState): void;
    public processColorChange(colorIndex: number): void;
    public processDrawIcon(iconIndex: number, textState: Window_Base.TextState): void;
    public makeFontBigger(): void;
    public makeFontSmaller(): void;
    public calcTextHeight(textState: Window_Base.TextState): number;
    public maxFontSizeInLine(line: string): number;
    public drawIcon(iconIndex: number, x: number, y: number): void;
    public drawFace(faceName: string, faceIndex: number, x: number, y: number, width: number, height: number): void;
    public drawCharacter(characterName: string, characterIndex: number, x: number, y: number): void;
    public drawItemName(item: {
        iconIndex: number;
        name: string;
        description: string;
    }, x: number, y: number, width: number): void;
    public drawCurrencyValue(value: number | string, unit: string, x: number, y: number, width: number): void;
    public setBackgroundType(type: number): void;
    public showBackgroundDimmer(): void;
    public createDimmerSprite(): void;
    public hideBackgroundDimmer(): void;
    public updateBackgroundDimmer(): void;
    public refreshDimmerBitmap(): void;
    public playCursorSound(): void;
    public playOkSound(): void;
    public playBuzzerSound(): void;
}
declare class Window_BattleStatus extends Window_StatusBase {
    constructor(rect: Rectangle);
    public extraHeight(): number;
    public maxCols(): number;
    public itemHeight(): number;
    public maxItems(): number;
    public rowSpacing(): number;
    public updatePadding(): void;
    public actor(index: number): Game_Actor;
    public selectActor(actor: Game_Actor): void;
    public update(): void;
    public preparePartyRefresh(): void;
    public performPartyRefresh(): void;
    public drawItem(index: number): void;
    public drawItemImage(index: number): void;
    public drawItemStatus(index: number): void;
    public faceRect(index: number): Rectangle;
    public nameX(rect: Rectangle): number;
    public nameY(rect: Rectangle): number;
    public stateIconX(rect: Rectangle): number;
    public stateIconY(rect: Rectangle): number;
    public basicGaugesX(rect: Rectangle): number;
    public basicGaugesY(rect: Rectangle): number;
}
declare class Window_BattleActor extends Window_BattleStatus {
    constructor(rect: Rectangle);
    public show(): void;
    public hide(): void;
    public select(index: number): void;
    public processTouch(): void;
}
declare class Window_Scrollable extends Window_Base {
    constructor(rect: Rectangle);
    public clearScrollStatus(): void;
    public scrollX(): number;
    public scrollY(): number;
    public scrollBaseX(): number;
    public scrollBaseY(): number;
    public scrollTo(x: number, y: number): void;
    public scrollBy(x: number, y: number): void;
    public smoothScrollTo(x: number, y: number): void;
    public smoothScrollBy(x: number, y: number): void;
    public setScrollAccel(x: number, y: number): void;
    public overallWidth(): number;
    public overallHeight(): number;
    public maxScrollX(): number;
    public maxScrollY(): number;
    public scrollBlockWidth(): number;
    public scrollBlockHeight(): number;
    public smoothScrollDown(n: number): void;
    public smoothScrollUp(n: number): void;
    public update(): void;
    public processWheelScroll(): void;
    public processTouchScroll(): void;
    public isWheelScrollEnabled(): boolean;
    public isTouchScrollEnabled(): boolean;
    public isScrollEnabled(): boolean;
    public isTouchedInsideFrame(): boolean;
    public onTouchScrollStart(): void;
    public onTouchScroll(): void;
    public onTouchScrollEnd(): void;
    public updateSmoothScroll(): void;
    public updateScrollAccel(): void;
    public updateArrows(): void;
    public updateOrigin(): void;
    public updateScrollBase(baseX: number, baseY: number): void;
    public paint(): void;
}
declare class Window_Help extends Window_Base {
    constructor(rect: Rectangle);
    public setText(text: string): void;
    public clear(): void;
    public setItem(item: {
        iconIndex: number;
        name: string;
        description: string;
    }): void;
    public refresh(): void;
}
declare class Window_Selectable extends Window_Scrollable {
    constructor(rect: Rectangle);
    public index(): number;
    public cursorFixed(): boolean;
    public setCursorFixed(cursorFixed: boolean): void;
    public cursorAll(): boolean;
    public setCursorAll(cursorAll: boolean): void;
    public maxCols(): number;
    public maxItems(): number;
    public colSpacing(): number;
    public rowSpacing(): number;
    public itemWidth(): number;
    public itemHeight(): number;
    public contentsHeight(): number;
    public maxRows(): number;
    public overallHeight(): number;
    public activate(): void;
    public deactivate(): void;
    public select(index: number): void;
    public forceSelect(index: number): void;
    public smoothSelect(index: number): void;
    public deselect(): void;
    public reselect(): void;
    public row(): number;
    public topRow(): number;
    public maxTopRow(): number;
    public setTopRow(row: number): void;
    public maxPageRows(): number;
    public maxPageItems(): number;
    public maxVisibleItems(): number;
    public isHorizontal(): boolean;
    public topIndex(): number;
    public itemRect(index: number): Rectangle;
    public itemRectWithPadding(index: number): Rectangle;
    public itemLineRect(index: number): Rectangle;
    public setHelpWindow(helpWindow: Window_Help): void;
    public showHelpWindow(): void;
    public hideHelpWindow(): void;
    public setHandler(symbol: string, method: VoidFunction): void;
    public isHandled(symbol: string): boolean;
    public callHandler(symbol: string): void;
    public isOpenAndActive(): boolean;
    public isCursorMovable(): boolean;
    public cursorDown(wrap: boolean): void;
    public cursorUp(wrap: boolean): void;
    public cursorRight(wrap: boolean): void;
    public cursorLeft(wrap: boolean): void;
    public cursorPagedown(): void;
    public cursorPageup(): void;
    public isScrollEnabled(): boolean;
    public update(): void;
    public processCursorMove(): void;
    public processHandling(): any;
    public processTouch(): void;
    public isHoverEnabled(): boolean;
    public onTouchSelect(trigger: boolean): void;
    public onTouchOk(): void;
    public onTouchCancel(): void;
    public hitIndex(): number;
    public hitTest(x: number, y: number): number;
    public isTouchOkEnabled(): boolean;
    public isOkEnabled(): boolean;
    public isCancelEnabled(): boolean;
    public isOkTriggered(): boolean;
    public isCancelTriggered(): boolean;
    public processOk(): void;
    public callOkHandler(): void;
    public processCancel(): void;
    public callCancelHandler(): void;
    public processPageup(): void;
    public processPagedown(): void;
    public updateInputData(): void;
    public ensureCursorVisible(smooth: boolean): void;
    public callUpdateHelp(): void;
    public updateHelp(): void;
    public setHelpWindowItem(item: {
        iconIndex: number;
        name: string;
        description: string;
    }): void;
    public isCurrentItemEnabled(): boolean;
    public drawAllItems(): void;
    public drawItem(index: number): void;
    public clearItem(index: number): void;
    public drawItemBackground(index: number): void;
    public drawBackgroundRect(rect: Rectangle): void;
    public redrawItem(index: number): void;
    public redrawCurrentItem(): void;
    public refresh(): void;
    public paint(): void;
    public refreshCursor(): void;
    public refreshCursorForAll(): void;
}
declare class Window_BattleEnemy extends Window_Selectable {
    constructor(rect: Rectangle);
    public maxCols(): number;
    public maxItems(): number;
    public enemy(): Game_Actor;
    public enemyIndex(): number;
    public drawItem(index: number): void;
    public show(): void;
    public hide(): void;
    public refresh(): void;
    public select(index: number): void;
    public processTouch(): void;
}
declare class Window_ItemList extends Window_Selectable {
    constructor(rect: Rectangle);
    public setCategory(category: string): void;
    public maxCols(): number;
    public colSpacing(): number;
    public maxItems(): number;
    public item(): Record<string, any>;
    public itemAt(index: number): Record<string, any>;
    public isCurrentItemEnabled(): boolean;
    public includes(item: Record<string, any>): boolean;
    public needsNumber(): boolean;
    public isEnabled(item: Record<string, any>): boolean;
    public makeItemList(): void;
    public selectLast(): void;
    public drawItem(index: number): void;
    public numberWidth(): number;
    public drawItemNumber(item: Record<string, any>, x: number, y: number, width: number): void;
    public updateHelp(): void;
    public refresh(): void;
}
declare class Window_BattleItem extends Window_ItemList {
    constructor(rect: Rectangle);
    public includes(item: Record<string, any>): boolean;
    public show(): void;
    public hide(): void;
}
declare class Window_BattleLog extends Window_Base {
    constructor(rect: Rectangle);
    public setSpriteset(spriteset: Spriteset_Battle): void;
    public maxLines(): number;
    public numLines(): number;
    public messageSpeed(): number;
    public isBusy(): boolean;
    public update(): void;
    public updateWait(): boolean;
    public updateWaitCount(): boolean;
    public updateWaitMode(): boolean;
    public setWaitMode(waitMode: string): void;
    public callNextMethod(): void;
    public isFastForward(): boolean;
    public push<K extends keyof this, F extends (...args: unknown[]) => unknown>(methodName: K, ...args: this[K] extends F ? Parameters<this[K]> : never): this[K] extends F ? void : never;
    public clear(): void;
    public wait(): void;
    public waitForEffect(): void;
    public waitForMovement(): void;
    public addText(text: string): void;
    public pushBaseLine(): void;
    public popBaseLine(): void;
    public waitForNewLine(): void;
    public popupDamage(target: Game_Battler): void;
    public performActionStart(subject: Game_Battler, action: Game_Action): void;
    public performAction(subject: Game_Battler, action: Game_Action): void;
    public performActionEnd(subject: Game_Battler): void;
    public performDamage(target: Game_Battler): void;
    public performMiss(target: Game_Battler): void;
    public performRecovery(target: Game_Battler): void;
    public performEvasion(target: Game_Battler): void;
    public performMagicEvasion(target: Game_Battler): void;
    public performCounter(target: Game_Battler): void;
    public performReflection(target: Game_Battler): void;
    public performSubstitute(substitute: Game_Battler, target: Game_Battler): void;
    public performCollapse(target: Game_Battler): void;
    public showAnimation(subject: Game_BattlerBase, targets: Game_BattlerBase[], animationId: number): void;
    public showAttackAnimation(subject: Game_BattlerBase, targets: Game_BattlerBase[]): void;
    public showActorAttackAnimation(subject: Game_Actor, targets: Game_BattlerBase[]): void;
    public showEnemyAttackAnimation(): void;
    public showNormalAnimation(targets: Game_BattlerBase[], animationId: number, mirror: boolean): void;
    public refresh(): void;
    public drawBackground(): void;
    public backRect(): Rectangle;
    public lineRect(index: number): Rectangle;
    public backColor(): string;
    public backPaintOpacity(): number;
    public drawLineText(index: number): void;
    public startTurn(): void;
    public startAction(subject: Game_Battler, action: Game_Action, targets: Game_BattlerBase[]): void;
    public endAction(subject: Game_Battler): void;
    public displayCurrentState(subject: Game_Actor | Game_Enemy): void;
    public displayRegeneration(subject: Game_Battler): void;
    public displayAction(subject: Game_Actor | Game_Enemy, item: Record<string, any>): void;
    public displayItemMessage(fmt: string, subject: Game_Actor | Game_Enemy, item: Record<string, any>): void;
    public displayCounter(target: Game_Battler): void;
    public displayReflection(target: Game_Battler): void;
    public displaySubstitute(substitute: Game_Battler, target: Game_Battler): void;
    public displayActionResults(subject: Game_Battler, target: Game_BattlerBase): void;
    public displayFailure(target: Game_BattlerBase): void;
    public displayCritical(target: Game_BattlerBase): void;
    public displayDamage(target: Game_BattlerBase): void;
    public displayMiss(target: Game_BattlerBase): void;
    public displayEvasion(target: Game_BattlerBase): void;
    public displayHpDamage(target: Game_BattlerBase): void;
    public displayMpDamage(target: Game_BattlerBase): void;
    public displayTpDamage(target: Game_BattlerBase): void;
    public displayAffectedStatus(target: Game_BattlerBase): void;
    public displayAutoAffectedStatus(target: Game_BattlerBase): void;
    public displayChangedStates(target: Game_BattlerBase): void;
    public displayAddedStates(target: Game_BattlerBase): void;
    public displayRemovedStates(target: Game_BattlerBase): void;
    public displayChangedBuffs(target: Game_BattlerBase): void;
    public displayBuffs(target: Game_BattlerBase, buffs: number[], fmt: string): void;
    public makeHpDamageText(target: Game_Actor | Game_Enemy): string;
    public makeMpDamageText(target: Game_Actor | Game_Enemy): string;
    public makeTpDamageText(target: Game_Actor | Game_Enemy): string;
}
declare class Window_SkillList extends Window_Selectable {
    constructor(rect: Rectangle);
    public setActor(actor: Game_Actor): void;
    public setStypeId(stypeId: number): void;
    public maxCols(): number;
    public colSpacing(): number;
    public maxItems(): number;
    public item(): Record<string, any>;
    public itemAt(index: number): Record<string, any>;
    public isCurrentItemEnabled(): boolean;
    public includes(item: Record<string, any>): boolean;
    public isEnabled(item: Record<string, any>): boolean;
    public makeItemList(): void;
    public selectLast(): void;
    public drawItem(index: number): void;
    public costWidth(): number;
    public drawSkillCost(skill: Record<string, any>, x: number, y: number, width: number): void;
    public updateHelp(): void;
    public refresh(): void;
}
declare class Window_BattleSkill extends Window_SkillList {
    constructor(rect: Rectangle);
    public show(): void;
    public hide(): void;
}
declare class Window_ChoiceList<T> extends Window_Command<T> {
    constructor();
    public setMessageWindow(messageWindow: Window_Message): void;
    public createCancelButton(): void;
    public start(): void;
    public update(): void;
    public updateCancelButton(): void;
    public selectDefault(): void;
    public updatePlacement(): void;
    public updateBackground(): void;
    public placeCancelButton(): void;
    public windowX(): number;
    public windowY(): number;
    public windowWidth(): number;
    public windowHeight(): number;
    public numVisibleRows(): number;
    public maxLines(): number;
    public maxChoiceWidth(): number;
    public makeCommandList(): void;
    public drawItem(index: number): void;
    public isCancelEnabled(): boolean;
    public needsCancelButton(): boolean;
    public callOkHandler(): void;
    public callCancelHandler(): void;
}
declare interface Command<T> {
    name: string;
    symbol: string;
    enabled: boolean;
    ext: T;
}
declare class Window_Command<T> extends Window_Selectable {
    constructor(rect: Rectangle);
    public maxItems(): number;
    public clearCommandList(): void;
    public makeCommandList(): void;
    public addCommand(name: string, symbol: string, enabled?: boolean, ext?: T): void;
    public commandName(index: number): string;
    public commandSymbol(index: number): string;
    public isCommandEnabled(index: number): boolean;
    public currentData(): Command<T>;
    public isCurrentItemEnabled(): boolean;
    public currentSymbol(): string;
    public currentExt(): T;
    public findSymbol(symbol: string): number;
    public selectSymbol(symbol: string): void;
    public findExt(ext: T): number;
    public selectExt(ext: T): void;
    public drawItem(index: number): void;
    public itemTextAlign(): string;
    public isOkEnabled(): boolean;
    public callOkHandler(): void;
    public refresh(): void;
}
declare class Window_DebugEdit extends Window_Selectable {
    constructor(rect: Rectangle);
    public maxItems(): number;
    public drawItem(index: number): void;
    public itemName(dataId: string): string;
    public itemStatus(dataId: string): string;
    public setMode(mode: string): void;
    public setTopId(id: number): void;
    public currentId(): number;
    public update(): void;
    public updateSwitch(): void;
    public updateVariable(): void;
    public deltaForVariable(): number;
}
declare class Window_DebugRange extends Window_Selectable {
    constructor(rect: Rectangle);
    public static lastTopRow: number;
    public static lastIndex: number;
    public maxItems(): number;
    public update(): void;
    public mode(index: number): string;
    public topId(index: number): number;
    public isSwitchMode(index: number): boolean;
    public drawItem(index: number): void;
    public isCancelTriggered(): boolean;
    public processCancel(): void;
    public setEditWindow(editWindow: Window_DebugEdit): void;
}
declare class Window_HorzCommand<T> extends Window_Command<T> {
    constructor(rect: Rectangle);
    public maxCols(): number;
    public itemTextAlign(): string;
}
declare class Window_EquipCommand<T> extends Window_HorzCommand<T> {
    constructor(rect: Rectangle);
    public maxCols(): number;
    public makeCommandList(): void;
}
declare class Window_EquipItem extends Window_ItemList {
    constructor(rect: Rectangle);
    public maxCols(): number;
    public colSpacing(): number;
    public setActor(actor: Game_Actor): void;
    public setSlotId(slotId: number): void;
    public includes(item: Record<string, any>): boolean;
    public etypeId(): number;
    public isEnabled(): boolean;
    public selectLast(): void;
    public setStatusWindow(statusWindow: Window_EquipStatus): void;
    public updateHelp(): void;
    public playOkSound(): void;
}
declare class Window_EquipSlot extends Window_StatusBase {
    constructor(rect: Rectangle);
    public setActor(actor: Game_Actor): void;
    public update(): void;
    public maxItems(): number;
    public item(): Record<string, any>;
    public itemAt(index: number): Record<string, any>;
    public drawItem(index: number): void;
    public slotNameWidth(): number;
    public isEnabled(index: number): boolean;
    public isCurrentItemEnabled(): boolean;
    public setStatusWindow(statusWindow: Window_EquipStatus): void;
    public setItemWindow(itemWindow: Window_EquipItem): void;
    public updateHelp(): void;
}
declare class Window_EquipStatus extends Window_StatusBase {
    constructor(rect: Rectangle);
    public setActor(actor: Game_Actor): void;
    public colSpacing(): number;
    public refresh(): void;
    public setTempActor(tempActor: Game_Actor): void;
    public drawAllParams(): void;
    public drawItem(index: number): never;
    public drawItem(x: number, y: number, paramId: number): void;
    public drawParamName(x: number, y: number, paramId: number): void;
    public drawCurrentParam(x: number, y: number, paramId: number): void;
    public drawRightArrow(x: number, y: number): void;
    public drawNewParam(x: number, y: number, paramId: number): void;
    public rightArrowWidth(): number;
    public paramWidth(): number;
    public paramX(): number;
    public paramY(index: number): number;
}
declare class Window_Message extends Window_Base {
    constructor(rect: Rectangle);
    public initMembers(): void;
    public setGoldWindow(goldWindow: Window_Gold): void;
    public setNameBoxWindow(nameBoxWindow: Window_NameBox): void;
    public setChoiceListWindow<T>(choiceListWindow: Window_ChoiceList<T>): void;
    public setNumberInputWindow(numberInputWindow: Window_NumberInput): void;
    public setEventItemWindow(eventItemWindow: Window_EventItem): void;
    public clearFlags(): void;
    public update(): void;
    public checkToNotClose(): void;
    public synchronizeNameBox(): void;
    public canStart(): boolean;
    public startMessage(): void;
    public newLineX(textState: Window_Base.TextState): number;
    public updatePlacement(): void;
    public updateBackground(): void;
    public terminateMessage(): void;
    public updateWait(): boolean;
    public updateLoading(): boolean;
    public updateInput(): boolean;
    public isAnySubWindowActive(): boolean;
    public updateMessage(): boolean;
    public shouldBreakHere(textState: Window_Base.TextState): boolean;
    public canBreakHere(textState: Window_Base.TextState): boolean;
    public onEndOfText(): void;
    public startInput(): boolean;
    public isTriggered(): boolean;
    public doesContinue(): boolean;
    public areSettingsChanged(): boolean;
    public updateShowFast(): void;
    public newPage(textState: Window_Base.TextState): void;
    public updateSpeakerName(): void;
    public loadMessageFace(): void;
    public drawMessageFace(): void;
    public processControlCharacter(textState: Window_Base.TextState, c: string): void;
    public processNewLine(textState: Window_Base.TextState): void;
    public processNewPage(textState: Window_Base.TextState): void;
    public isEndOfText(textState: Window_Base.TextState): boolean;
    public needsNewPage(textState: Window_Base.TextState): boolean;
    public processEscapeCharacter(code: string, textState: Window_Base.TextState): void;
    public startWait(count: number): void;
    public startPause(): void;
}
declare class Window_EventItem extends Window_ItemList {
    constructor(rect: Rectangle);
    public setMessageWindow(messageWindow: Window_Message): void;
    public createCancelButton(): void;
    public start(): void;
    public update(): void;
    public updateCancelButton(): void;
    public updatePlacement(): void;
    public placeCancelButton(): void;
    public includes(item: Record<string, any>): boolean;
    public needsNumber(): boolean;
    public isEnabled(): boolean;
    public onOk(): void;
    public onCancel(): void;
}
declare class Window_GameEnd<T> extends Window_Command<T> {
    constructor(rect: Rectangle);
    public makeCommandList(): void;
}
declare class Window_Gold extends Window_Selectable {
    constructor(rect: Rectangle);
    public colSpacing(): number;
    public refresh(): void;
    public value(): number;
    public currencyUnit(): string;
    public open(): void;
}
declare class Window_ItemCategory<T> extends Window_HorzCommand<T> {
    constructor(rect: Rectangle);
    public maxCols(): number;
    public update(): void;
    public makeCommandList(): void;
    public needsCommand(name): boolean;
    public setItemWindow(itemWindow: Window_ItemList): void;
    public needsSelection(): boolean;
}
declare class Window_MapName extends Window_Base {
    constructor(rect: Rectangle);
    public update(): void;
    public updateFadeIn(): void;
    public updateFadeOut(): void;
    public open(): void;
    public close(): void;
    public refresh(): void;
    public drawBackground(x: number, y: number, width: number, height: number): void;
}
declare class Window_MenuStatus extends Window_StatusBase {
    constructor(rect: Rectangle);
    public maxItems(): number;
    public numVisibleRows(): number;
    public itemHeight(): number;
    public actor(index: number): Game_Actor;
    public drawItem(index: number): void;
    public drawPendingItemBackground(index: number): void;
    public drawItemImage(index: number): void;
    public drawItemStatus(index: number): void;
    public processOk(): void;
    public isCurrentItemEnabled(): boolean;
    public selectLast(): void;
    public formationMode(): boolean;
    public setFormationMode(formationMode: boolean): void;
    public pendingIndex(): number;
    public setPendingIndex(index: number): void;
}
declare class Window_MenuActor extends Window_MenuStatus {
    constructor(rect: Rectangle);
    public processOk(): void;
    public selectLast(): void;
    public selectForItem(item: Record<string, any>): void;
}
declare class Window_MenuCommand<T> extends Window_Command<T> {
    constructor(rect: Rectangle);
    public static initCommandPosition(): void;
    public makeCommandList(): void;
    public addMainCommands(): void;
    public addFormationCommand(): void;
    public addOriginalCommands(): void;
    public addOptionsCommand(): void;
    public addSaveCommand(): void;
    public addGameEndCommand(): void;
    public needsCommand(name: string): boolean;
    public areMainCommandsEnabled(): boolean;
    public isFormationEnabled(): boolean;
    public isOptionsEnabled(): boolean;
    public isSaveEnabled(): boolean;
    public isGameEndEnabled(): boolean;
    public processOk(): void;
    public selectLast(): void;
}
declare class Window_NameBox extends Window_Base {
    constructor();
    public setMessageWindow(messageWindow: Window_Message): void;
    public setName(name: string): void;
    public clear(): void;
    public start(): void;
    public updatePlacement(): void;
    public updateBackground(): void;
    public windowWidth(): number;
    public windowHeight(): number;
    public refresh(): void;
}
declare class Window_NameEdit implements Omit<Window_StatusBase, "name" | keyof Window> {
    constructor(rect: Rectangle);
    public loadFaceImages(): void;
    public hideAdditionalSprites(): void;
    public placeActorName(actor: Game_Actor, x: number, y: number): void;
    public placeStateIcon(actor: Game_Actor, x: number, y: number): void;
    public placeGauge(actor: Game_Actor, type: string, x: number, y: number): void;
    public createInnerSprite(key: string, spriteClass: new () => Sprite): Sprite;
    public placeTimeGauge(actor: Game_Actor, x: number, y: number): void;
    public placeBasicGauges(actor: Game_Actor, x: number, y: number): void;
    public gaugeLineHeight(): number;
    public drawActorCharacter(actor: Game_Actor, x: number, y: number): void;
    public drawActorFace(actor: Game_Actor, x: number, y: number, width: number, height: number): void;
    public drawActorName(actor: Game_Actor, x: number, y: number, width: number): void;
    public drawActorClass(actor: Game_Actor, x: number, y: number, width: number): void;
    public drawActorNickname(actor: Game_Actor, x: number, y: number, width: number): void;
    public drawActorLevel(actor: Game_Actor, x: number, y: number): void;
    public drawActorIcons(actor: Game_Actor, x: number, y: number, width: number): void;
    public drawActorSimpleStatus(actor: Game_Actor, x: number, y: number): void;
    public actorSlotName(actor: Game_Actor, index: number): string;
    public index(): number;
    public cursorFixed(): boolean;
    public setCursorFixed(cursorFixed: boolean): void;
    public cursorAll(): boolean;
    public setCursorAll(cursorAll: boolean): void;
    public maxCols(): number;
    public maxItems(): number;
    public colSpacing(): number;
    public rowSpacing(): number;
    public itemWidth(): number;
    public itemHeight(): number;
    public contentsHeight(): number;
    public maxRows(): number;
    public overallHeight(): number;
    public activate(): void;
    public deactivate(): void;
    public select(index: number): void;
    public forceSelect(index: number): void;
    public smoothSelect(index: number): void;
    public deselect(): void;
    public reselect(): void;
    public row(): number;
    public topRow(): number;
    public maxTopRow(): number;
    public setTopRow(row: number): void;
    public maxPageRows(): number;
    public maxPageItems(): number;
    public maxVisibleItems(): number;
    public isHorizontal(): boolean;
    public topIndex(): number;
    public itemRectWithPadding(index: number): Rectangle;
    public itemLineRect(index: number): Rectangle;
    public setHelpWindow(helpWindow: Window_Help): void;
    public showHelpWindow(): void;
    public hideHelpWindow(): void;
    public setHandler(symbol: string, method: VoidFunction): void;
    public isHandled(symbol: string): boolean;
    public callHandler(symbol: string): void;
    public isOpenAndActive(): boolean;
    public isCursorMovable(): boolean;
    public cursorDown(wrap: boolean): void;
    public cursorUp(wrap: boolean): void;
    public cursorRight(wrap: boolean): void;
    public cursorLeft(wrap: boolean): void;
    public cursorPagedown(): void;
    public cursorPageup(): void;
    public isScrollEnabled(): boolean;
    public processCursorMove(): void;
    public processHandling();
    public processTouch(): void;
    public isHoverEnabled(): boolean;
    public onTouchSelect(trigger: boolean): void;
    public onTouchOk(): void;
    public onTouchCancel(): void;
    public hitIndex(): number;
    public hitTest(x: number, y: number): number;
    public isTouchOkEnabled(): boolean;
    public isOkEnabled(): boolean;
    public isCancelEnabled(): boolean;
    public isOkTriggered(): boolean;
    public isCancelTriggered(): boolean;
    public processOk(): void;
    public callOkHandler(): void;
    public processCancel(): void;
    public callCancelHandler(): void;
    public processPageup(): void;
    public processPagedown(): void;
    public updateInputData(): void;
    public ensureCursorVisible(smooth: boolean): void;
    public callUpdateHelp(): void;
    public updateHelp(): void;
    public setHelpWindowItem(item: {
        iconIndex: number;
        name: string;
        description: string;
    }): void;
    public isCurrentItemEnabled(): boolean;
    public drawAllItems(): void;
    public drawItem(index: number): void;
    public clearItem(index: number): void;
    public drawItemBackground(index: number): void;
    public drawBackgroundRect(rect: Rectangle): void;
    public redrawItem(index: number): void;
    public redrawCurrentItem(): void;
    public paint(): void;
    public refreshCursor(): void;
    public refreshCursorForAll(): void;
    public clearScrollStatus(): void;
    public scrollX(): number;
    public scrollY(): number;
    public scrollBaseX(): number;
    public scrollBaseY(): number;
    public scrollTo(x: number, y: number): void;
    public scrollBy(x: number, y: number): void;
    public smoothScrollTo(x: number, y: number): void;
    public smoothScrollBy(x: number, y: number): void;
    public setScrollAccel(x: number, y: number): void;
    public overallWidth(): number;
    public maxScrollX(): number;
    public maxScrollY(): number;
    public scrollBlockWidth(): number;
    public scrollBlockHeight(): number;
    public smoothScrollDown(n: number): void;
    public smoothScrollUp(n: number): void;
    public processWheelScroll(): void;
    public processTouchScroll(): void;
    public isWheelScrollEnabled(): boolean;
    public isTouchScrollEnabled(): boolean;
    public isTouchedInsideFrame(): boolean;
    public onTouchScrollStart(): void;
    public onTouchScroll(): void;
    public onTouchScrollEnd(): void;
    public updateSmoothScroll(): void;
    public updateScrollAccel(): void;
    public updateArrows(): void;
    public updateOrigin(): void;
    public updateScrollBase(baseX: number, baseY: number): void;
    public checkRectObject(rect: Rectangle): void;
    public lineHeight(): number;
    public itemPadding(): number;
    public baseTextRect(): Rectangle;
    public loadWindowskin(): void;
    public updatePadding(): void;
    public updateBackOpacity(): void;
    public fittingHeight(numLines: number): number;
    public updateTone(): void;
    public createContents(): void;
    public destroyContents(): void;
    public contentsWidth(): number;
    public resetFontSettings(): void;
    public resetTextColor(): void;
    public updateOpen(): void;
    public updateClose(): void;
    public open(): void;
    public close(): void;
    public isOpening(): boolean;
    public isClosing(): boolean;
    public show(): void;
    public hide(): void;
    public systemColor(): string;
    public translucentOpacity(): number;
    public changeTextColor(color: string): void;
    public changeOutlineColor(color: string): void;
    public changePaintOpacity(enabled: boolean): void;
    public drawRect(x: number, y: number, width: number, height: number): void;
    public drawText(text: string | number, x: number, y: number, maxWidth: number, align: string): void;
    public textWidth(text: string): number;
    public drawTextEx(text: string, x: number, y: number, width: number): number;
    public textSizeEx(text: string): {
        width: number;
        height: number;
    };
    public createTextState(text: string, x: number, y: number, width: number): Window_Base.TextState;
    public processAllText(textState: Window_Base.TextState): void;
    public flushTextState(textState: Window_Base.TextState): void;
    public createTextBuffer(rtl: boolean): string;
    public convertEscapeCharacters(text: string): string;
    public actorName(n: number): string;
    public partyMemberName(n: number): string;
    public processCharacter(textState: Window_Base.TextState): void;
    public processControlCharacter(textState: Window_Base.TextState, c: string): void;
    public processNewLine(textState: Window_Base.TextState): void;
    public obtainEscapeCode(textState: Window_Base.TextState): void;
    public obtainEscapeParam(textState: Window_Base.TextState): string | number;
    public processEscapeCharacter(code: string, textState: Window_Base.TextState): void;
    public processColorChange(colorIndex: number): void;
    public processDrawIcon(iconIndex: number, textState: Window_Base.TextState): void;
    public makeFontBigger(): void;
    public makeFontSmaller(): void;
    public calcTextHeight(textState: Window_Base.TextState): number;
    public maxFontSizeInLine(line: string): number;
    public drawIcon(iconIndex: number, x: number, y: number): void;
    public drawFace(faceName: string, faceIndex: number, x: number, y: number, width: number, height: number): void;
    public drawCharacter(characterName: string, characterIndex: number, x: number, y: number): void;
    public drawItemName(item: {
        iconIndex: number;
        name: string;
        description: string;
    }, x: number, y: number, width: number): void;
    public drawCurrencyValue(value: string | number, unit: string, x: number, y: number, width: number): void;
    public setBackgroundType(type: number): void;
    public showBackgroundDimmer(): void;
    public createDimmerSprite(): void;
    public hideBackgroundDimmer(): void;
    public updateBackgroundDimmer(): void;
    public refreshDimmerBitmap(): void;
    public playCursorSound(): void;
    public playOkSound(): void;
    public playBuzzerSound(): void;
    public setup(actor: Game_Actor, maxLength: number): void;
    public name: () => string;
    public restoreDefault(): boolean;
    public add(ch: string): boolean;
    public back(): boolean;
    public faceWidth(): number;
    public charWidth(): number;
    public left(): number;
    public itemRect(index: number): Rectangle;
    public underlineRect(index: number): Rectangle;
    public underlineColor(): string;
    public drawUnderline(index: number): void;
    public drawChar(index: number): void;
    public refresh(): void;
}
declare class Window_NameInput extends Window_Selectable {
    constructor(rect: Rectangle);
    public static LATIN1: string[];
    public static LATIN2: string[];
    public static RUSSIA: string[];
    public static JAPAN1: string[];
    public static JAPAN2: string[];
    public static JAPAN3: string[];
    public setEditWindow(editWindow: Window_NameEdit): void;
    public table(): string[];
    public maxCols(): number;
    public maxItems(): number;
    public itemWidth(): number;
    public groupSpacing(): number;
    public character(): string;
    public isPageChange(): boolean;
    public isOk(): boolean;
    public itemRect(index: number): Rectangle;
    public drawItem(index: number): void;
    public updateCursor(): void;
    public isCursorMovable(): boolean;
    public cursorDown(wrap: boolean): void;
    public cursorUp(wrap: boolean): void;
    public cursorRight(wrap: boolean): void;
    public cursorLeft(wrap: boolean): void;
    public cursorPagedown(): void;
    public cursorPageup(): void;
    public processCursorMove(): void;
    public processHandling(): void;
    public isCancelEnabled(): boolean;
    public processCancel(): void;
    public processJump(): void;
    public processBack(): void;
    public processOk(): void;
    public onNameAdd(): void;
    public onNameOk(): void;
}
declare class Window_NumberInput extends Window_Selectable {
    constructor();
    public setMessageWindow(messageWindow: Window_Message): void;
    public start(): void;
    public updatePlacement(): void;
    public windowWidth(): number;
    public windowHeight(): number;
    public maxCols(): number;
    public maxItems(): number;
    public itemWidth(): number;
    public itemRect(index: number): Rectangle;
    public isScrollEnabled(): boolean;
    public isHoverEnabled(): boolean;
    public createButtons(): void;
    public placeButtons(): void;
    public totalButtonWidth(): number;
    public buttonSpacing(): number;
    public buttonY(): number;
    public update(): void;
    public processDigitChange(): void;
    public changeDigit(up: boolean): void;
    public isTouchOkEnabled(): boolean;
    public isOkEnabled(): boolean;
    public isCancelEnabled(): boolean;
    public processOk(): void;
    public drawItem(index: number): void;
    public onButtonUp(): void;
    public onButtonDown(): void;
    public onButtonOk(): void;
}
declare class Window_Options<T> extends Window_Command<T> {
    constructor(rect: Rectangle);
    public makeCommandList(): void;
    public addGeneralOptions(): void;
    public addVolumeOptions(): void;
    public drawItem(index: number): void;
    public statusWidth(): number;
    public statusText(index: number): string;
    public isVolumeSymbol(symbol: string): boolean;
    public booleanStatusText(value: boolean): string;
    public volumeStatusText(value: number): string;
    public processOk(): void;
    public cursorRight(): void;
    public cursorLeft(): void;
    public changeVolume(symbol: string, forward: boolean, wrap: boolean): void;
    public volumeOffset(): number;
    public changeValue(symbol: string, value: unknown): void;
    public getConfigValue(symbol: string): unknown;
    public setConfigValue(symbol: string, volume: unknown): void;
}
declare class Window_PartyCommand<T> extends Window_Command<T> {
    constructor(rect: Rectangle);
    public makeCommandList(): void;
    public setup(): void;
}
declare class Window_SavefileList extends Window_Selectable {
    constructor(rect: Rectangle);
    public setMode(mode: string, autosave: boolean): void;
    public maxItems(): number;
    public numVisibleRows(): number;
    public itemHeight(): number;
    public drawItem(index: number): void;
    public indexToSavefileId(index: number): number;
    public savefileIdToIndex(savefileId: number): number;
    public isEnabled(savefileId: number): boolean;
    public savefileId(): number;
    public selectSavefile(savefileId: number): void;
    public drawTitle(savefileId: number, x: number, y: number): void;
    public drawContents(info: SavefileInfo, rect: Rectangle): void;
    public drawPartyCharacters(info: SavefileInfo, x: number, y: number): void;
    public drawPlaytime(info: SavefileInfo, x: number, y: number, width: number): void;
    public playOkSound(): void;
}
declare class Window_ScrollText extends Window_Base {
    constructor(rect: Rectangle);
    public update(): void;
    public startMessage(): void;
    public refresh(): void;
    public updatePlacement(): void;
    public contentsHeight(): number;
    public updateMessage(): void;
    public scrollSpeed(): number;
    public isFastForward(): boolean;
    public fastForwardRate(): number;
    public terminateMessage(): void;
}
declare class Window_ShopStatus extends Window_StatusBase {
    constructor(rect: Rectangle);
    public refresh(): void;
    public setItem(item: Record<string, any>): void;
    public isEquipItem(): boolean;
    public drawPossession(x: number, y: number): void;
    public drawEquipInfo(x: number, y: number): void;
    public statusMembers(): Game_Actor[];
    public pageSize(): number;
    public maxPages(): number;
    public drawActorEquipInfo(x: number, y: number, actor: Game_Actor): void;
    public drawActorParamChange(x: number, y: number, actor: Game_Actor, item1: Game_Item): void;
    public paramId(): number;
    public currentEquippedItem(actor: Game_Actor, etypeId: number): Game_Item;
    public update(): void;
    public updatePage(): void;
    public isPageChangeEnabled(): boolean;
    public isPageChangeRequested(): boolean;
    public changePage(): void;
}
declare class Window_ShopBuy extends Window_Selectable {
    constructor(rect: Rectangle);
    public setupGoods(shopGoods: number[][]): void;
    public maxItems(): number;
    public item(): Record<string, any>;
    public itemAt(index: number): Record<string, any>;
    public setMoney(money: number): void;
    public isCurrentItemEnabled(): boolean;
    public price(item: Record<string, any>): number;
    public isEnabled(item: Record<string, any>): boolean;
    public refresh(): void;
    public makeItemList(): void;
    public goodsToItem(goods: number[]): Record<string, any>;
    public drawItem(index: number): void;
    public priceWidth(): void;
    public setStatusWindow(statusWindow: Window_ShopStatus): void;
    public updateHelp(): void;
}
declare class Window_ShopCommand<T> extends Window_HorzCommand<T> {
    constructor(rect: Rectangle);
    public setPurchaseOnly(purchaseOnly: boolean): void;
    public maxCols(): number;
    public makeCommandList(): void;
}
declare class Window_ShopNumber extends Window_Selectable {
    constructor(rect: Rectangle);
    public isScrollEnabled(): boolean;
    public number(): number;
    public setup(item: Record<string, any>, max: number, price: number): void;
    public setCurrencyUnit(currencyUnit: string): void;
    public createButtons(): void;
    public placeButtons(): void;
    public totalButtonWidth(): number;
    public buttonSpacing(): number;
    public refresh(): void;
    public drawCurrentItemName(): void;
    public drawMultiplicationSign(): void;
    public multiplicationSign(): string;
    public multiplicationSignX(): number;
    public drawNumber(): void;
    public drawHorzLine(): void;
    public drawTotalPrice(): void;
    public itemNameY(): number;
    public totalPriceY(): number;
    public buttonY(): number;
    public cursorWidth(): number;
    public cursorX(): number;
    public maxDigits(): number;
    public update(): void;
    public playOkSound(): void;
    public processNumberChange(): void;
    public changeNumber(amount: number): void;
    public itemRect(): Rectangle;
    public isTouchOkEnabled(): boolean;
    public onButtonUp(): void;
    public onButtonUp2(): void;
    public onButtonDown(): void;
    public onButtonDown2(): void;
    public onButtonOk(): void;
}
declare class Window_ShopSell extends Window_ItemList {
    constructor(rect: Rectangle);
    public isEnabled(item: Record<string, any>): boolean;
}
declare class Window_StatusBase extends Window_Selectable {
    constructor(rect: Rectangle);
    public loadFaceImages(): void;
    public refresh(): void;
    public hideAdditionalSprites(): void;
    public placeActorName(actor: Game_Actor, x: number, y: number): void;
    public placeStateIcon(actor: Game_Actor, x: number, y: number): void;
    public placeGauge(actor: Game_Actor, type: string, x: number, y: number): void;
    public createInnerSprite(key: string, spriteClass: new () => Sprite): Sprite;
    public placeTimeGauge(actor: Game_Actor, x: number, y: number): void;
    public placeBasicGauges(actor: Game_Actor, x: number, y: number): void;
    public gaugeLineHeight(): number;
    public drawActorCharacter(actor: Game_Actor, x: number, y: number): void;
    public drawActorFace(actor: Game_Actor, x: number, y: number, width: number, height: number): void;
    public drawActorName(actor: Game_Actor, x: number, y: number, width: number): void;
    public drawActorClass(actor: Game_Actor, x: number, y: number, width: number): void;
    public drawActorNickname(actor: Game_Actor, x: number, y: number, width: number): void;
    public drawActorLevel(actor: Game_Actor, x: number, y: number): void;
    public drawActorIcons(actor: Game_Actor, x: number, y: number, width: number): void;
    public drawActorSimpleStatus(actor: Game_Actor, x: number, y: number): void;
    public actorSlotName(actor: Game_Actor, index: number): string;
}
declare class Window_SkillStatus extends Window_StatusBase {
    constructor(rect: Rectangle);
    public setActor(actor: Game_Actor): void;
    public refresh(): void;
}
declare class Window_SkillType extends Window_Command<number> {
    constructor(rect: Rectangle);
    public setActor(actor: Game_Actor): void;
    public makeCommandList(): void;
    public update(): void;
    public setSkillWindow(skillWindow: Window_SkillList): void;
    public selectLast(): void;
}
declare class Window_Status extends Window_StatusBase {
    constructor(rect: Rectangle);
    public setActor(actor: Game_Actor): void;
    public refresh(): void;
    public drawBlock1(): void;
    public block1Y(): number;
    public drawBlock2(): void;
    public block2Y(): number;
    public drawBasicInfo(x: number, y: number): void;
    public drawExpInfo(x: number, y: number): void;
    public expTotalValue(): number | string;
    public expNextValue(): number | string;
}
declare class Window_StatusEquip extends Window_StatusBase {
    constructor(rect: Rectangle);
    public setActor(actor: Game_Actor): void;
    public maxItems(): number;
    public itemHeight(): number;
    public drawItem(index: number): void;
    public drawItemBackground(): void;
}
declare class Window_StatusParams extends Window_StatusBase {
    constructor(rect: Rectangle);
    public setActor(actor: Game_Actor): void;
    public maxItems(): number;
    public itemHeight(): number;
    public drawItem(index: number): void;
    public drawItemBackground(): void;
}
declare class Window_TitleCommand<T> extends Window_Command<T> {
    constructor(rect: Rectangle);
    public static initCommandPosition(): void;
    public makeCommandList(): void;
    public isContinueEnabled(): boolean;
    public processOk(): void;
    public selectLast(): void;
}
declare namespace BattleManager {
    enum Result {
        Victory = 0,
        Abort = 1,
        Defeat = 2
    }
    export function setup(troopId: number, canEscape: boolean, canLose: boolean): void;
    export function initMembers(): void;
    export function isTpb(): boolean;
    export function isActiveTpb(): boolean;
    export function isBattleTest(): boolean;
    export function setBattleTest(battleTest: boolean): void;
    export function setEventCallback(callback: (result: BattleManager.Result) => void): void;
    export function setLogWindow(logWindow: Window_BattleLog): void;
    export function setSpriteset(spriteset: Spriteset_Battle): void;
    export function onEncounter(): void;
    export function ratePreemptive(): number;
    export function rateSurprise(): number;
    export function saveBgmAndBgs(): void;
    export function playBattleBgm(): void;
    export function playVictoryMe(): void;
    export function playDefeatMe(): void;
    export function replayBgmAndBgs(): void;
    export function makeEscapeRatio(): void;
    export function update(timeActive: number): void;
    export function updatePhase(timeActive: number): void;
    export function updateEvent(): void;
    export function updateEventMain(): boolean;
    export function isBusy(): boolean;
    export function updateTpbInput(): void;
    export function checkTpbInputClose(): void;
    export function checkTpbInputOpen(): void;
    export function isPartyTpbInputtable(): boolean;
    export function needsActorInputCancel(): boolean;
    export function isTpbMainPhase(): boolean;
    export function isInputting(): boolean;
    export function isInTurn(): boolean;
    export function isTurnEnd(): boolean;
    export function isAborting(): boolean;
    export function isBattleEnd(): boolean;
    export function canEscape(): boolean;
    export function canLose(): boolean;
    export function isEscaped(): boolean;
    export function actor(): Game_Actor;
    export function startBattle(): void;
    export function displayStartMessages(): void;
    export function startInput(): void;
    export function inputtingAction(): Game_Action;
    export function selectNextCommand(): void;
    export function selectNextActor(): void;
    export function selectPreviousCommand(): void;
    export function selectPreviousActor(): void;
    export function changeCurrentActor(forward: boolean): void;
    export function startActorInput(): void;
    export function finishActorInput(): void;
    export function cancelActorInput(): void;
    export function updateStart(): void;
    export function startTurn(): void;
    export function updateTurn(timeActive: boolean): void;
    export function updateTpb(): void;
    export function updateAllTpbBattlers(): void;
    export function updateTpbBattler(battler): void;
    export function checkTpbTurnEnd(): void;
    export function processTurn(): void;
    export function endBattlerActions(battler): void;
    export function endTurn(): void;
    export function endAllBattlersTurn(): void;
    export function displayBattlerStatus(battler: Game_Battler, current: boolean): void;
    export function updateTurnEnd(): void;
    export function getNextSubject(): Game_Battler | null;
    export function allBattleMembers(): Game_Battler[];
    export function makeActionOrders(): void;
    export function startAction(): void;
    export function updateAction(): void;
    export function endAction(): void;
    export function invokeAction(subject: Game_Battler, target: Game_Battler): void;
    export function invokeNormalAction(subject: Game_Battler, target: Game_Battler): void;
    export function invokeCounterAttack(subject: Game_Battler, target: Game_Battler): void;
    export function invokeMagicReflection(subject: Game_Battler, target: Game_Battler): void;
    export function applySubstitute(target: Game_Battler): Game_Battler;
    export function checkSubstitute(target: Game_Battler): boolean;
    export function isActionForced(): boolean;
    export function forceAction(battler: Game_Battler): void;
    export function processForcedAction(): void;
    export function abort(): void;
    export function checkBattleEnd(): boolean;
    export function checkAbort(): boolean;
    export function processVictory(): void;
    export function processEscape(): boolean;
    export function onEscapeSuccess(): void;
    export function onEscapeFailure(): void;
    export function processAbort(): void;
    export function processDefeat(): void;
    export function endBattle(result: BattleManager.Result): void;
    export function updateBattleEnd(): void;
    export function makeRewards(): void;
    export function displayVictoryMessage(): void;
    export function displayDefeatMessage(): void;
    export function displayEscapeSuccessMessage(): void;
    export function displayEscapeFailureMessage();
    export function displayRewards(): void;
    export function displayExp(): void;
    export function displayGold(): void;
    export function displayDropItems(): void;
    export function gainRewards(): void;
    export function gainExp(): void;
    export function gainGold(): void;
    export function gainDropItems(): void;
}
declare namespace ColorManager {
    export function loadWindowskin(): void;
    export function textColor(n: number): string;
    export function normalColor(): string;
    export function systemColor(): string;
    export function crisisColor(): string;
    export function deathColor(): string;
    export function gaugeBackColor(): string;
    export function hpGaugeColor1(): string;
    export function hpGaugeColor2(): string;
    export function mpGaugeColor1(): string;
    export function mpGaugeColor2(): string;
    export function mpCostColor(): string;
    export function powerUpColor(): string;
    export function powerDownColor(): string;
    export function ctGaugeColor1(): string;
    export function ctGaugeColor1(): string;
    export function tpGaugeColor1(): string;
    export function tpGaugeColor2(): string;
    export function tpCostColor(): string;
    export function pendingColor(): string;
    export function hpColor(actor: Game_Actor): string;
    export function mpColor(): string;
    export function tpColor(): string;
    export function paramchangeTextColor(change: number): string;
    export function damageColor(colorType: number): string;
    export function outlineColor(): string;
    export function dimColor1(): string;
    export function dimColor2(): string;
    export function itemBackColor1(): string;
    export function itemBackColor2(): string;
}
interface ConfigData {
    alwaysDash: boolean;
    commandRemember: boolean;
    touchUI: boolean;
    bgmVolume: number;
    bgsVolume: number;
    meVolume: number;
    seVolume: number;
}
declare namespace ConfigManager {
    export let alwaysDash: boolean;
    export let commandRemember: boolean;
    export let touchUI: boolean;
    export let bgmVolume: number;
    export let bgsVolume: number;
    export let meVolume: number;
    export let seVolume: number;
    export function load(): void;
    export function save(): void;
    export function isLoaded(): boolean;
    export function makeData(): ConfigData;
    export function applyData(config: ConfigData): void;
    export function readFlag(config: ConfigData, name: string, defaultValue: ConfigData): ConfigData;
    export function readVolume(config: ConfigData, name: string): number;
}
declare interface SavefileInfo {
    title: string;
    characters: [
        string,
        number
    ][];
    faces: [
        string,
        number
    ][];
    playtime: string;
    timestamp: number;
}
declare interface SavefileContent {
    system: Game_System;
    screen: Game_Screen;
    timer: Game_Timer;
    switches: Game_Switches;
    variables: Game_Variables;
    selfSwitches: Game_SelfSwitches;
    actors;
    party: Game_Party;
    map;
    player;
}
declare namespace DataManager {
    export function loadGlobalInfo(): void;
    export function removeInvalidGlobalInfo(): void;
    export function saveGlobalInfo(): void;
    export function isGlobalInfoLoaded(): boolean;
    export function loadDatabase(): void;
    export function isDatabaseLoaded(): boolean;
    export function loadDataFile(name: string, src: string): void;
    export function onXhrLoad(xhr: {
        status: number;
        responseText: string;
    }, name: string, src: string, url: string): void;
    export function onXhrError(name: string, src: string, url: string): void;
    export function onLoad(object: Record<string, unknown>): void;
    export function makeEmptyMap(): void;
    export function loadMapData(mapId: number): void;
    export function isMapLoaded(): boolean;
    export function isMapObject(object: Record<string, unknown>): boolean;
    export function extractArrayMetadata(array: unknown[]): void;
    export function extractMetadata(data: Record<string, unknown>): void;
    export function checkError(): void;
    export function setupBattleTest(): void;
    export function isBattleTest(): boolean;
    export function setupEventTest(): void;
    export function isEventTest(): boolean;
    export function isSkill(item: unknown): item is RPG.DataSkill;
    export function isItem(item: unknown): item is RPG.DataItem;
    export function isWeapon(item: unknown): item is RPG.DataWeapon;
    export function isArmor(item: unknown): item is RPG.DataArmor;
    export function setupNewGame(): void;
    export function createGameObjects(): void;
    export function isAnySavefileExists(): boolean;
    export function savefileExists(savefileId: number): boolean;
    export function latestSavefileId(): number;
    export function earliestSavefileId(): number;
    export function emptySavefileId(): number;
    export function loadAllSavefileImages(): void;
    export function loadSavefileImages(info: SavefileInfo): void;
    export function maxSavefiles(): number;
    export function savefileInfo(savefileId: number): SavefileInfo;
    export function saveGame(savefileId: number): Promise<number>;
    export function makeSavename(savefileId: number): string;
    export function makeSavefileForNewGame(): void;
    export function makeSavefileInfo(): SavefileInfo;
    export function makeSaveContents(): SavefileContent;
    export function loadGame(savefileId: number): Promise<number>;
    export function extractSaveContents(contents: SavefileContent): void;
    export function correctDataErrors(): void;
}
declare namespace EffectManager {
    export function load(filename: string): effekseer.EffekseerEffect;
    export function startLoading(url: string): effekseer.EffekseerEffect;
    export function clear(): void;
    export function onLoad(): void;
    export function onError(url: string): void;
    export function makeUrl(filename: string): string;
    export function checkErrors(): void;
    export function throwLoadError(url: string): void;
    export function isReady(): boolean;
}
declare namespace FontManager {
    export function load(family: string, filename: string): void;
    export function isReady(): boolean;
    export function startLoading(family: string, url: string): void;
    export function throwLoadError(familly: string): void;
    export function makeUrl(filename: string): string;
}
declare namespace ImageManager {
    export let iconWidth: number;
    export let iconHeight: number;
    export let faceWidth: number;
    export let faceHeight: number;
    export function loadAnimation(filename: string): Bitmap;
    export function loadBattleback1(filename: string): Bitmap;
    export function loadBattleback2(filename: string): Bitmap;
    export function loadEnemy(filename: string): Bitmap;
    export function loadCharacter(filename: string): Bitmap;
    export function loadFace(filename: string): Bitmap;
    export function loadParallax(filename: string): Bitmap;
    export function loadPicture(filename: string): Bitmap;
    export function loadSvActor(filename: string): Bitmap;
    export function loadSvEnemy(filename: string): Bitmap;
    export function loadSystem(filename: string): Bitmap;
    export function loadTileset(filename: string): Bitmap;
    export function loadTitle1(filename: string): Bitmap;
    export function loadTitle2(filename: string): Bitmap;
    export function loadBitmap(folder: string, filename: string): Bitmap;
    export function loadBitmapFromUrl(url: string): Bitmap;
    export function clear(): void;
    export function isReady(): boolean;
    export function throwLoadError(bitmap: Bitmap): void;
    export function isObjectCharacter(filename: string): boolean;
    export function isBigCharacter(filename: string): boolean;
    export function isZeroParallax(filename: string): boolean;
}
type PluginParameters = Record<string, string>;
interface PluginsStruct {
    name: string;
    status: boolean;
    description: string;
    parameters: PluginParameters;
}
interface PluginCommand {
    (args: PluginParameters): void;
}
declare namespace PluginManager {
    export function setup(plugins: PluginsStruct[]): void;
    export function parameters(name: string): PluginParameters;
    export function setParameters(name: string, parameters: string): void;
    export function loadScript(filename: string): void;
    export function onError(e: Event): void;
    export function makeUrl(filename: string): string;
    export function checkErrors(): void;
    export function throwLoadError(url: string): void;
    export function registerCommand(pluginName: string, commandName: string, func: PluginCommand): void;
    export function callCommand(self: unknown, pluginName: string, commandName: string, args: PluginParameters): void;
}
declare type SceneConstructor = new () => Stage;
declare namespace SceneManager {
    export function run(sceneClass: SceneConstructor): void;
    export function initialize(): void;
    export function checkBrowser(): void;
    export function checkPluginErrors(): void;
    export function initGraphics(): void;
    export function initAudio(): void;
    export function initVideo(): void;
    export function initInput(): void;
    export function setupEventHandlers(): void;
    export function update(): void;
    export function determineRepeatNumber(deltaTime: number): number;
    export function terminate(): void;
    export function onError(event: ErrorEvent): void;
    export function onReject(event: PromiseRejectionEvent): void;
    export function onUnload(): void;
    export function onKeyDown(event: KeyboardEvent): void;
    export function reloadGame(): void;
    export function showDevTools(): void;
    export function catchException(e: Error): void;
    export function catchNormalError(e: Error): void;
    export function catchLoadError(e: [
        "LoadError",
        string,
        () => void
    ]): void;
    export function catchUnknownError(e: unknown): void;
    export function updateMain(): void;
    export function updateInputData(): void;
    export function updateEffekseer(): void;
    export function changeScene(): void;
    export function updateScene(): void;
    export function isGameActive(): boolean;
    export function onSceneTerminate(): void;
    export function onSceneCreate(): void;
    export function onBeforeSceneStart(): void;
    export function onSceneStart(): void;
    export function isSceneChanging(): boolean;
    export function isCurrenSceneBusy(): boolean;
    export function isNextScene(sceneClass: SceneConstructor): boolean;
    export function isPreviousScene(sceneClass: SceneConstructor): boolean;
    export function goto(sceneClass: SceneConstructor): void;
    export function push(sceneClass: SceneConstructor): void;
    export function pop(): void;
    export function exit(): void;
    export function clearStack(): void;
    export function stop(): void;
    export function prepareNextScene(): void;
    export function snap(): void;
    export function snapForBackground(): void;
    export function backgroundBitmap(): Bitmap;
    export function resume(): void;
}
declare namespace SoundManager {
    export function preloadImportantSounds(): void;
    export function loadSystemSound(n: number): void;
    export function playSystemSound(n: number): void;
    export function playCursor(): void;
    export function playOk(): void;
    export function playCancel(): void;
    export function playBuzzer(): void;
    export function playEquip(): void;
    export function playSave(): void;
    export function playLoad(): void;
    export function playBattleStart(): void;
    export function playEscape(): void;
    export function playEnemyAttack(): void;
    export function playEnemyCollapse(): void;
    export function playBossCollapse1(): void;
    export function playBossCollapse2(): void;
    export function playActorDamage(): void;
    export function playActorCollapse(): void;
    export function playRecovery(): void;
    export function playMiss(): void;
    export function playEvasion(): void;
    export function playMagicEvasion(): void;
    export function playReflection(): void;
    export function playShop(): void;
    export function playUseSkill(): void;
}
declare namespace StorageManager {
    export function isLocalMode(): boolean;
    export function saveObject<T>(saveName: string, object: T): Promise<void>;
    export function loadObject<T>(saveName: string): T;
    export function objectToJson(object: unknown): Promise<string>;
    export function jsonToObject<T>(json: string): Promise<T>;
    export function jsonToZip(json: Pako.Data): Promise<string>;
    export function zipToJson(zip: Pako.Inflate): Promise<string>;
    export function saveZip(saveName: string, zip: pako.Inflate): Promise<void>;
    export function loadZip(saveName: string): pako.Inflate;
    export function exists(saveName: string): boolean;
    export function remove(saveName: string): Promise<void> | void;
    export function saveToLocalFile(saveName: string, zip: string): Promise<void>;
    export function loadFromLocalFile(saveName: string): Promise<string>;
    export function localFileExists(saveName: string): boolean;
    export function removeLocalFile(saveName: string): void;
    export function saveToForage(saveName: string, zip: string): Promise<string>;
    export function loadFromForage(saveName: string): Promise<string>;
    export function forageExists(saveName: string): boolean;
    export function removeForage(saveName: string): Promise<void>;
    export function updateForageKeys(): Promise<number>;
    export function forageKeysUpdated(): boolean;
    export function fsMkdir(path: string): void;
    export function fsRename(oldPath: string, newPath: string): void;
    export function fsUnlink(path: string): void;
    export function fsReadFile(path: string): string;
    export function fsWriteFile(path: string, data: string): void;
    export function fileDirectoryPath(): string;
    export function filePath(saveName: string): string;
    export function forageKey(saveName: string): string;
    export function forageTestKey(): string;
}
declare namespace TextManager {
    export function basic(basicId: number): string;
    export function param(paramId: number): string;
    export function command(commandId: number): string;
    export function message(messageId: number): string;
    export function getter(method: "basic" | "command", param: number): () => string;
    export function getter(method: "message", param: string): () => string;
    export const currencyUnit: string;
    export const level: string;
    export const levelA: string;
    export const hp: string;
    export const hpA: string;
    export const mp: string;
    export const mpA: string;
    export const tp: string;
    export const tpA: string;
    export const exp: string;
    export const expA: string;
    export const fight: string;
    export const escape: string;
    export const attack: string;
    export const guard: string;
    export const item: string;
    export const skill: string;
    export const equip: string;
    export const status: string;
    export const formation: string;
    export const save: string;
    export const gameEnd: string;
    export const options: string;
    export const weapon: string;
    export const armor: string;
    export const keyItem: string;
    export const equip2: string;
    export const optimize: string;
    export const clear: string;
    export const newGame: string;
    export const continue_: string;
    export const toTitle: string;
    export const cancel: string;
    export const buy: string;
    export const sell: string;
    export const alwaysDash: string;
    export const commandRemember: string;
    export const touchUI: string;
    export const bgmVolume: string;
    export const bgsVolume: string;
    export const meVolume: string;
    export const seVolume: string;
    export const possession: string;
    export const expTotal: string;
    export const expNext: string;
    export const saveMessage: string;
    export const loadMessage: string;
    export const file: string;
    export const autosave: string;
    export const partyName: string;
    export const emerge: string;
    export const preemptive: string;
    export const surprise: string;
    export const escapeStart: string;
    export const escapeFailure: string;
    export const victory: string;
    export const defeat: string;
    export const obtainExp: string;
    export const obtainGold: string;
    export const obtainItem: string;
    export const levelUp: string;
    export const obtainSkill: string;
    export const useItem: string;
    export const criticalToEnemy: string;
    export const criticalToActor: string;
    export const actorDamage: string;
    export const actorRecovery: string;
    export const actorGain: string;
    export const actorLoss: string;
    export const actorDrain: string;
    export const actorNoDamage: string;
    export const actorNoHit: string;
    export const enemyDamage: string;
    export const enemyRecovery: string;
    export const enemyGain: string;
    export const enemyLoss: string;
    export const enemyDrain: string;
    export const enemyNoDamage: string;
    export const enemyNoHit: string;
    export const evasion: string;
    export const magicEvasion: string;
    export const magicReflection: string;
    export const counterAttack: string;
    export const substitute: string;
    export const buffAdd: string;
    export const debuffAdd: string;
    export const buffRemove: string;
    export const actionFailure: string;
}
declare const $dataActors: RPG.DataActor[];
declare const $dataClasses: RPG.DataClass[];
declare const $dataSkills: RPG.DataSkill[];
declare const $dataItems: RPG.DataItem[];
declare const $dataWeapons: RPG.DataWeapon[];
declare const $dataArmors: RPG.DataArmor[];
declare const $dataEnemies: RPG.DataEnemy[];
declare const $dataTroops: RPG.DataTroop[];
declare const $dataStates: RPG.DataState[];
declare const $dataAnimations: RPG.DataAnimation[];
declare const $dataTilesets: RPG.DataTileset[];
declare const $dataCommonEvents: RPG.DataCommonEvent[];
declare const $dataSystem: RPG.DataSystem;
declare const $dataMapInfos: RPG.DataMapInfo[];
declare const $dataMap: RPG.DataMap[];
declare const $gameTemp: Game_Temp;
declare const $gameSystem: Game_System;
declare const $gameScreen: Game_Screen;
declare const $gameTimer: Game_Timer;
declare const $gameMessage: Game_Message;
declare const $gameSwitches: Game_Switches;
declare const $gameVariables: Game_Variables;
declare const $gameSelfSwitches: Game_SelfSwitches;
declare const $gameParty: Game_Party;
declare const $gameTroop: Game_Troop;
declare const $testEvent: unknown;
declare abstract class Scene_Base extends Stage {
    protected _started: boolean;
    protected _active: boolean;
    protected _fadeSign: number;
    protected _fadeDuration: number;
    protected _fadeWhite: number;
    protected _fadeOpacity: number;
    protected _windowLayer: WindowLayer;
    protected _colorFilter: ColorFilter;
    protected constructor();
    public abstract create(): void;
    public isActive(): boolean;
    public isReady(): boolean;
    public start(): void;
    public update(): void;
    public stop(): void;
    public isStarted(): boolean;
    public isBusy(): boolean;
    public isFading(): boolean;
    public terminate(): void;
    public createWindowLayer(): void;
    public addWindow(window: Window): void;
    public startFadeIn(duration: number, white?: boolean): void;
    public startFadeOut(duration: number, white?: boolean): void;
    public createColorFilter(): void;
    public updateColorFilter(): void;
    public updateFade(): void;
    public updateChildren(): void;
    public popScene(): void;
    public checkGameover(): void;
    public fadeOutAll(): void;
    public fadeSpeed(): number;
    public slowFadeSpeed(): number;
    public scaleSprite(): void;
    public centerSprite(sprite: Sprite): void;
    public isBottomHelpMode(): boolean;
    public isBottomButtonMode(): boolean;
    public isRightInputMode(): boolean;
    public mainCommandWidth(): number;
    public buttonAreaTop(): number;
    public buttonAreaBottom(): number;
    public buttonAreaHeight(): number;
    public buttonY(): number;
    public calcWindowHeight(numLines: number, selectable: boolean): number;
    public requestAutosave(): void;
    public isAutosaveEnabled(): boolean;
    public executeAutosave(): void;
    public onAutosaveSucess(): void;
    public onAutosaveFailure(): void;
}
declare class Scene_Title extends Scene_Base {
    protected _commandWindow: Window_TitleCommand<any>;
    protected _gameTitleSprite: Sprite;
    protected _backSprite1: Sprite;
    protected _backSprite2: Sprite;
    constructor(...arguments: any[]);
    public initialize(): void;
    public create(): void;
    public start(): void;
    public update(): void;
    public isBusy(): boolean;
    public createBackground(): void;
    public createForeground(): void;
    public drawGameTitle(): void;
    public adjustBackground(): void;
    public createCommandWindw(): void;
    public commandWindowRect(): Rectangle;
    public commandNewGame(): void;
    public commandContinue(): void;
    public commandOptions(): void;
    public playTitleMusic(): void;
}
declare class Scene_Boot extends Scene_Base {
    protected _databaseLoaded: boolean;
    constructor(...arguments: never[]);
    public initialize(): void;
    public create(): void;
    public isReady(): boolean;
    public onDatabaseLoaded(): void;
    public setEncryptionInfo(): void;
    public loadSystemImages(): void;
    public loadPlayerData(): void;
    public loadGameFonts(): void;
    public isPlayerDataLoaded(): void;
    public start(): void;
    public startNormalGame(): void;
    public resizeScreen(): void;
    public adjustBoxSize(): void;
    public adjustWindow(): void;
    public updateDocumentTitle(): void;
    public checkPlayerLocation(): void;
}
declare class Scene_Message extends Scene_Base {
    protected _messageWindow: Window_Message;
    protected _scrollTextWindow: Window_ScrollText;
    protected _goldWindow: Window_Gold;
    protected _nameBoxWindow: Window_NameBox;
    protected _choiceListWindow: Window_ChoiceList<any>;
    protected _numberInputWindow: Window_NumberInput;
    protected _eventItemWindow: Window_EventItem;
    constructor(...arguments: never[]);
    public initialize(): void;
    public isMessageWindowClosing(): boolean;
    public createAllWindows(): void;
    public createMessageWindow(): void;
    public messageWindowRect(): Rectangle;
    public createScrollTextWindow(): void;
    public scrollTextWindowRect(): Rectangle;
    public createGoldWindow(): void;
    public goldWindowRect(): Rectangle;
    public createNameBoxWindow(): void;
    public createChoiceListWindow(): void;
    public createNumberInputWindow(): void;
    public createEventItemWindow(): void;
    public eventItemWindowRect(): Rectangle;
    public associateWindows(): void;
    public create(): void;
}
declare class Scene_Map extends Scene_Message {
    protected _waitCount: number;
    protected _encounterEffectDuration: number;
    protected _mapLoaded: boolean;
    protected _touchCount: number;
    protected _menuEnabled: boolean;
    protected _transfer: boolean;
    protected _lasMapWasNull: boolean;
    protected _spriteset: Spriteset_Map;
    protected _mapNameWindow: Window_MapName;
    protected _menuButton: Sprite_Button;
    public menuCalling: boolean;
    constructor(...arguments: never[]);
    public initialize(): void;
    public create(): void;
    public isReady(): boolean;
    public onMapLoaded(): void;
    public onTransfer(): void;
    public start(): void;
    public onTransferEnd(): void;
    public shouldAutosave(): boolean;
    public update(): void;
    public updateMainMultiply(): void;
    public updateMain(): void;
    public isPlayerActive(): boolean;
    public isFastForward(): boolean;
    public stop(): void;
    public isBusy(): boolean;
    public terminate(): void;
    public needsFadeIn(): boolean;
    public needsSlowFadeOut(): boolean;
    public updateWaitCount(): boolean;
    public updateDestination(): void;
    public updateMenuButton(): void;
    public hideMenuButton(): void;
    public updateMapNameWindow(): void;
    public isMenuEnabled(): boolean;
    public isMapTouchOk(): boolean;
    public processMapTouch(): void;
    public isAnyButtonPressed(): boolean;
    public onMapTouch(): void;
    public isSceneChangeOk(): boolean;
    public updateScene(): void;
    public createDisplayObjects(): void;
    public createSpriteset(): void;
    public createAllWindows(): void;
    public createMapNameWindow(): void;
    public mapNameWindowRect(): Rectangle;
    public createButtons(): void;
    public createMenuButton(): void;
    public updateTransferPlayer(): void;
    public updateEncounter(): void;
    public updateCallMenu(): void;
    public isMenuCalled(): boolean;
    public callMenu(): void;
    public updateCallDebug(): void;
    public isDebugCalled(): boolean;
    public fadeInForTransfer(): void;
    public fadeOutForTransfer(): void;
    public launchBattle(): void;
    public stopAudioOnBattleStart(): void;
    public startEncounterEffect(): void;
    public updateEncounterEffect(): void;
    public snapForBattleBackground(): void;
    public startFlashForEncounter(duration: number): void;
    public encounterEffectSpeed(): number;
}
declare class Scene_MenuBase extends Scene_Base {
    protected _actor: Game_Actor;
    protected _backgroundFilter: PIXI.filters.BlurFilter;
    protected _backgroundSprite: Sprite;
    protected _helpWindow: Window_Help;
    protected _cancelButton: Sprite_Button;
    protected _pageupButton: Sprite_Button;
    protected _pagedownButton: Sprite_Button;
    constructor();
    public initialize(): void;
    public create(): void;
    public update(): void;
    public helpAreaTop(): number;
    public helpAreaBottom(): number;
    public helpAreaHeight(): number;
    public mainAreaTop(): number;
    public mainAreaBottom(): number;
    public mainAreaHeight(): number;
    public actor(): Game_Actor;
    public updateActor(): void;
    public createBackground(): void;
    public setBackgroundOpacity(opacity: number): void;
    public helpWindowRect(): Rectangle;
    public createButtons(): void;
    public needsCancelButton(): boolean;
    public createCancelButton(): void;
    public needsPageButtons(): boolean;
    public createPageButtons(): void;
    public updatePageButtons(): void;
    public arePageButtonsEnabled(): boolean;
    public nextActor(): void;
    public previousActor(): void;
    public onActorChange(): void;
}
declare class Scene_Menu extends Scene_MenuBase {
    protected _commandWindow: Window_MenuCommand<any>;
    protected _goldWindow: Window_Gold;
    protected _statusWindow: Window_MenuStatus;
    constructor();
    public initialize(): void;
    public create(): void;
    public start(): void;
    public createCommandWindow(): void;
    public commandWindowRect(): Rectangle;
    public createGoldWindow(): void;
    public goldWindowRect(): Rectangle;
    public createStatusWindow(): void;
    public statusWindowRect(): Rectangle;
    public commandItem(): void;
    public commandPersonal(): void;
    public commandFormation(): void;
    public commandFormation(): void;
    public commandOptions(): void;
    public commandSave(): void;
    public commandGameEnd(): void;
    public onPersonalOk(): void;
    public onPersonalCancel(): void;
    public onFormationOk(): void;
    public onFormationCancel(): void;
}
type ItemWindowType = Window_ItemList | Window_SkillList | Window_EquipItem | Window_BattleItem;
declare class Scene_ItemBase extends Scene_MenuBase {
    protected _actorWindow: Window_MenuActor;
    protected _itemWindow: ItemWindowType;
    constructor(...arguments: never[]);
    public initialize(): void;
    public create(): void;
    public createActorWindow(): void;
    public actorWindowRect(): Rectangle;
    public item(): Record<string, any>;
    public user(): unknown[] | unknown;
    public isCursorLeft(): boolean;
    public showActorWindow(): void;
    public hideActorWindow(): void;
    public isActorWindowActive(): boolean;
    public onActorOk(): void;
    public onActorCancel(): void;
    public determineItem(): void;
    public useItem(): void;
    public activateItemWindow(): void;
    public itemTargetActors(): any;
    public canUse(): boolean;
    public isItemEffectsValid(): boolean;
    public applyItem(): void;
    public checkCommonEvent(): void;
}
declare class Scene_Item extends Scene_ItemBase {
    protected _categoryWindow: Window_ItemCategory<any>;
    protected _itemWindow: Window_ItemList;
    constructor();
    public initialize(): void;
    public create(): void;
    public createCategoryWindow(): void;
    public categoryWindowRect(): Rectangle;
    public createItemWindow(): void;
    public itemWindowRect(): Rectangle;
    public user(): Game_Actor[];
    public onCategoryOk(): void;
    public onItemOk(): void;
    public onItemCancel(): void;
    public playSeForItem(): void;
}
declare class Scene_Skill extends Scene_ItemBase {
    protected _skillTypeWindow: Window_SkillType;
    protected _statusWindow: Window_SkillStatus;
    protected _itemWindow: Window_SkillList;
    constructor();
    public initialize(): void;
    public create(): void;
    public start(): void;
    public createSkillTypeWindow(): void;
    public skillTypeWindowRect(): Rectangle;
    public createStatusWindow(): void;
    public statusWindowRect(): Rectangle;
    public createItemWindow(): void;
    public itemWindowRect(): Rectangle;
    public needsPageButtons(): boolean;
    public arePageButtonsEnabled(): boolean;
    public refreshActor(): void;
    public user(): Game_Actor;
    public commandSkill(): void;
    public onItemOk(): void;
    public onItemCancel(): void;
    public playSeForItem(): void;
    public useItem(): void;
    public onActorChange(): void;
}
declare class Scene_Equip extends Scene_MenuBase {
    protected _statusWindow: Window_EquipStatus;
    protected _commandWindow: Window_EquipCommand<any>;
    protected _slotWindow: Window_EquipSlot;
    protected _itemWindow: Window_EquipItem;
    constructor();
    public initialize(): void;
    public create(): void;
    public createStatusWindow(): void;
    public statusWindowRect(): Rectangle;
    public createCommandWindow(): void;
    public commandWindowRect(): Rectangle;
    public createSlotWindow(): void;
    public slotWindowRect(): Rectangle;
    public createItemWindow(): void;
    public itemWindowRect(): Rectangle;
    public statusWidth(): number;
    public needsPageButtons(): boolean;
    public arePageButtonsEnabled(): boolean;
    public refreshActor(): void;
    public commandEquip(): void;
    public commandOptimize(): void;
    public commandClear(): void;
    public onSlotOk(): void;
    public onSlotCancel(): void;
    public onItemOk(): void;
    public executeEquipChange(): void;
    public onItemCancel(): void;
    public onActorChange(): void;
    public hideItemWindow(): void;
}
declare class Scene_Status extends Scene_MenuBase {
    protected _profileWindow: Window_Help;
    protected _statusWindow: Window_Status;
    protected _statusParamsWindow: Window_StatusParams;
    protected _statusEquipWindow: Window_StatusParams;
    constructor();
    public initialize(): void;
    public create(): void;
    public helpAreaHeight(): number;
    public createProfileWindow(): void;
    public profileWindowRect(): Rectangle;
    public createStatusWindow(): void;
    public statusWindowRect(): Rectangle;
    public createStatusParamsWindow(): void;
    public statusParamsWindowRect(): Rectangle;
    public createStatusEquipWindow(): void;
    public statusEquipWindowRect(): Rectangle;
    public statusParamsWidth(): number;
    public statusParamsHeight(): number;
    public profileHeight(): number;
    public start(): void;
    public needsPageButtons(): boolean;
    public refreshActor(): void;
    public onActorChange(): void;
}
declare class Scene_Options extends Scene_MenuBase {
    protected _optionsWindow: Window_Options<any>;
    constructor();
    public initialize(): void;
    public create(): void;
    public terminate(): void;
    public createOptionsWindow(): void;
    public optionsWindowRect(): Rectangle;
    public maxCommands(): number;
    public maxVisibleCommands(): number;
}
declare class Scene_File extends Scene_MenuBase {
    protected _helpWindow: Window_Help;
    protected _listWindow: Window_SavefileList;
    constructor();
    public initialize();
    public create(): void;
    public helpAreaHeight(): number;
    public start(): void;
    public savefileId(): number;
    public isSavefileEnabled(savefileId: number): boolean;
    public createHelpWindow(): void;
    public helpWindowRect(): Rectangle;
    public createListWindow(): void;
    public listWindowRect(): Rectangle;
    public mode(): string;
    public needsAutosave(): boolean;
    public activateListWindow(): void;
    public helpWindowText(): string;
    public firstSavefileId(): number;
    public onSavefileOk(): void;
}
declare class Scene_Save extends Scene_File {
    constructor();
    public initialize(): void;
    public mode(): string;
    public helpWindowText(): string;
    public firstSavefileId(): number;
    public onSavefileOk(): void;
    public executeSave(savefileId: number): void;
    public onSaveSuccess(): void;
    public onSaveFailure(): void;
}
declare class Scene_Load extends Scene_File {
    protected _loadSuccess: boolean;
    constructor();
    public initialize(): void;
    public terminate(): void;
    public mode(): string;
    public helpWindowText(): string;
    public firstSavefileId(): number;
    public onSavefileOk(): void;
    public executeLoad(savefileId: number): void;
    public onLoadSuccess(): void;
    public onLoadFailure(): void;
    public reloadMapIfUpdated(): void;
}
declare class Scene_GameEnd extends Scene_MenuBase {
    protected _commandWindow: Window_GameEnd<any>;
    constructor();
    public initialize(): void;
    public create(): void;
    public stop(): void;
    public createBackground(): void;
    public createCommandWindow(): void;
    public commandWindowRect(): Rectangle;
    public commandToTitle(): void;
}
declare const scriptUrls: string[];
declare const effekseerWasmUrl: string;
declare class Main {
    public xhrSucceeded: boolean;
    public loadCount: number;
    public error: unknown;
    public run(): void;
    public showLoadingSpinner(): void;
    public eraseLoadingSpinner(): void;
    public testXhr(): void;
    public loadMainScripts(): void;
    public onScriptLoad(): void;
    public onScriptError(e: Event): void;
    public printError(name: string, message: string): void;
    public makeErrorHtml(name: string, message: string): string;
    public onWindowLoad(): void;
    public onWindowError(e: ErrorEvent): void;
    public isPathRandomized(): boolean;
    public initEffekseerRuntime(): void;
    public onEffekseerLoad(): void;
    public onEffekseerError(): void;
}
declare const main: Main;
