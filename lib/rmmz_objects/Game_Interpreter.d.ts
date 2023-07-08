import {RPG} from "../RPG";
import {Game_Actor, Game_Enemy, Game_Battler, Game_Character} from ".";
import {Point} from "../rmmz_core";

export type WaitMode =
    "message"
    | "transfer"
    | "scroll"
    | "route"
    | "animation"
    | "balloon"
    | "gather"
    | "action"
    | "video"
    | "image";
export type ActorCallback = (arg: Game_Actor) => unknown;
export type EnemyCallback = (arg: Game_Enemy) => unknown;
export type BattlerCallback = (arg: Game_Battler) => unknown;

export type CommandParameters = RPG.PageList['parameters'];

declare class Game_Interpreter {

    constructor(depth: number);

    public checkOverflow(): void;

    public clear(): void;

    public setup(list: RPG.PageList[], eventId?: number): void;

    public loadImages(): void;

    public eventId(): number;

    public isOnCurrentMap(): boolean;

    public setupReservedCommonEvent(): boolean;

    public isRunning(): boolean;

    public update(): void;

    public updateChild(): boolean;

    public updateWait(): boolean;

    public updateWaitCount(): boolean;

    public updateWaitMode(): boolean;

    public setWaitMode(waitMode: WaitMode): void;

    public wait(duration: number): void;

    public fadeSpeed(): number;

    public executeCommand(): boolean;

    public checkFreeze(): boolean;

    public terminate(): void;

    public skipBranch(): void;

    public currentCommand(): RPG.PageList;

    public nextEventCode(): number;

    public iterateActorId(param: number, callback: ActorCallback): void;

    public iterateActorEx(param1: number, param2: number, callback: ActorCallback): void;

    public iterateActorIndex(param: number, callback: ActorCallback): void;

    public iterateEnemyIndex(param: number, callback: EnemyCallback): void;

    public iterateBattler(param1: number, param2: number, callback: BattlerCallback): void;

    public character(param: number): Game_Character;

    public operateValue(operation: number, operandType: number, operand: number): number;

    public changeHp(target: Game_Battler, value: number, allowDeath: boolean): void;

    public setupChoices(params: [string[], number, number?, number?]): void;

    public setupNumInput(params: [number, number]): void;

    public setupItemChoice(params: [number, number]): void;

    public setupChild(list: RPG.PageList, eventId: number): void;

    public jumpTo(index: number): void;

    public gameDataOperand(type: number, param1: number, param2: number): number;

    public operateVariable(variableId: number, operationType: number, value: number): void;

    public picturePoint(params: [unknown, unknown, unknown, number, number, number]): Point;

    public videoFileExt(): ".webm" | ".mp4";

    /**
     * @deprecated
     * @see {PluginManager.callCommand}
     */
    public pluginCommand(): void;

    public command101(params: CommandParameters): boolean;

    public command102(params: CommandParameters): boolean;

    public command402(params: CommandParameters): boolean;

    public command403(): boolean;

    public command103(params: CommandParameters): boolean;

    public command104(params: CommandParameters): boolean;

    public command105(params: CommandParameters): boolean;

    public command108(params: CommandParameters): boolean;

    public command109(): boolean;

    public command111(params: CommandParameters): boolean;

    public command411(): boolean;

    public command112(): boolean;

    public command413(): boolean;

    public command113(): boolean;

    public command115(): boolean;

    public command117(params: CommandParameters): boolean;

    public command118(): boolean;

    public command119(params: CommandParameters): boolean;

    public command121(params: CommandParameters): boolean;

    public command122(params: CommandParameters): boolean;

    public command123(params: CommandParameters): boolean;

    public command124(params: CommandParameters): boolean;

    public command125(params: CommandParameters): boolean;

    public command126(params: CommandParameters): boolean;

    public command127(params: CommandParameters): boolean;

    public command128(params: CommandParameters): boolean;

    public command129(params: CommandParameters): boolean;

    public command132(params: CommandParameters): boolean;

    public command133(params: CommandParameters): boolean;

    public command134(params: CommandParameters): boolean;

    public command135(params: CommandParameters): boolean;

    public command136(params: CommandParameters): boolean;

    public command137(params: CommandParameters): boolean;

    public command138(params: CommandParameters): boolean;

    public command139(params: CommandParameters): boolean;

    public command140(params: CommandParameters): boolean;

    public command201(params: CommandParameters): boolean;

    public command202(params: CommandParameters): boolean;

    public command203(params: CommandParameters): boolean;

    public command204(params: CommandParameters): boolean;

    public command205(params: CommandParameters): boolean;

    public command206(): boolean;

    public command211(params: CommandParameters): boolean;

    public command212(params: CommandParameters): boolean;

    public command213(params: CommandParameters): boolean;

    public command214(): boolean;

    public command216(params: CommandParameters): boolean;

    public command217(): boolean;

    public command221(): boolean;

    public command222(): boolean;

    public command223(params: CommandParameters): boolean;

    public command224(params: CommandParameters): boolean;

    public command225(params: CommandParameters): boolean;

    public command230(params: CommandParameters): boolean;

    public command231(params: CommandParameters): boolean;

    public command232(params: CommandParameters): boolean;

    public command233(params: CommandParameters): boolean;

    public command234(params: CommandParameters): boolean;

    public command235(params: CommandParameters): boolean;

    public command236(params: CommandParameters): boolean;

    public command241(params: CommandParameters): boolean;

    public command242(params: CommandParameters): boolean;

    public command243(): boolean;

    public command244(): boolean;

    public command245(params: CommandParameters): boolean;

    public command246(params: CommandParameters): boolean;

    public command249(params: CommandParameters): boolean;

    public command250(params: CommandParameters): boolean;

    public command251(): boolean;

    public command261(params: CommandParameters): boolean;

    public command281(params: CommandParameters): boolean;

    public command282(params: CommandParameters): boolean;

    public command283(params: CommandParameters): boolean;

    public command284(params: CommandParameters): boolean;

    public command285(params: CommandParameters): boolean;

    public command301(params: CommandParameters): boolean;

    public command601(): boolean;

    public command602(): boolean;

    public command603(): boolean;

    public command302(params: CommandParameters): boolean;

    public command303(params: CommandParameters): boolean;

    public command311(params: CommandParameters): boolean;

    public command312(params: CommandParameters): boolean;

    public command326(params: CommandParameters): boolean;

    public command313(params: CommandParameters): boolean;

    public command314(params: CommandParameters): boolean;

    public command315(params: CommandParameters): boolean;

    public command316(params: CommandParameters): boolean;

    public command317(params: CommandParameters): boolean;

    public command318(params: CommandParameters): boolean;

    public command319(params: CommandParameters): boolean;

    public command320(params: CommandParameters): boolean;

    public command321(params: CommandParameters): boolean;

    public command322(params: CommandParameters): boolean;

    public command323(params: CommandParameters): boolean;

    public command324(params: CommandParameters): boolean;

    public command325(params: CommandParameters): boolean;

    public command331(params: CommandParameters): boolean;

    public command332(params: CommandParameters): boolean;

    public command342(params: CommandParameters): boolean;

    public command333(params: CommandParameters): boolean;

    public command334(params: CommandParameters): boolean;

    public command335(params: CommandParameters): boolean;

    public command336(params: CommandParameters): boolean;

    public command337(params: CommandParameters): boolean;

    public command339(params: CommandParameters): boolean;

    public command340(): boolean;

    public command351(): boolean;

    public command352(): boolean;

    public command353(): boolean;

    public command354(): boolean;

    public command355(): boolean;

    public command356(params: CommandParameters): boolean;

    public command357(params: CommandParameters): boolean;
}

export { Game_Interpreter };