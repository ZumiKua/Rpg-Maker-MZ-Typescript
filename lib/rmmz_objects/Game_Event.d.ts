import {RPG} from "../RPG";
import {Game_Character} from ".";

declare class Game_Event extends Game_Character {

    constructor(mapId: number, eventId: number);

    public eventId(): number;

    public event(): RPG.Event;

    public page(): RPG.Page;

    public list(): RPG.PageList;

    public isCollidedWithCharacters(x: number, y: number): boolean;

    public isCollidedWithEvents(x: number, y: number): boolean;

    public isCollidedWithPlayerCharacters(x: number, y: number): boolean;

    public lock(): void;

    public unlock(): void;

    public updateStop(): void;

    public updateSelfMovement(): void;

    public stopCountThreshold(): number;

    public moveTypeRandom(): void;

    public moveTypeTowardPlayer(): void;

    public isNearThePlayer(): boolean;

    public moveTypeCustom(): void;

    public isStarting(): boolean;

    public clearStartingFlag(): void;

    public isTriggerIn(triggers: number[]): boolean;

    public start(): void;

    public erase(): void;

    public refresh(): void;

    public findProperPageIndex(): number;

    public meetsConditions(page: RPG.Page): boolean;

    public setupPage(): void;

    public clearPageSettings(): void;

    public setupPageSettings(): void;

    public isOriginalPattern(): boolean;

    public resetPattern(): void;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    public checkEventTriggerTouch(x: number, y: number): void;

    public checkEventTriggerAuto(): void;

    public update(): void;

    public updateParallel(): void;

    public locate(x: number, y: number): void;

    public forceMoveRoute(moveRoute: RPG.MoveRoute): void;
}

export {Game_Event};