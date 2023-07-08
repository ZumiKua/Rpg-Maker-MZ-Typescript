import {Direction, Game_Character, Game_Followers, Game_Vehicle} from ".";
import {RPG} from "../RPG";

declare class Game_Player extends Game_Character {
    constructor();

    public initMembers(): void;

    public clearTransferInfo(): void;

    public followers(): Game_Followers;

    public refresh(): void;

    public isStopping(): boolean;

    public reserveTransfer(mapId: number, x: number, y: number, d: Direction, fadeType: number): void;

    public setupForNewGame(): void;

    public requestMapReload(): void;

    public isTransferring(): boolean;

    public newMapId(): number;

    public fadeType(): number;

    public performTransfer(): void;

    public isMapPassable(x: number, y: number, d: Direction): boolean;

    public vehicle(): Game_Vehicle;

    public isInBoat(): boolean;

    public isInShip(): boolean;

    public isInAirship(): boolean;

    public isInVehicle(): boolean;

    public isNormal(): boolean;

    public isDashing(): boolean;

    public isDebugThrough(): boolean;

    public isCollided(x: number, y: number): boolean;

    public centerX(): number;

    public centerY(): number;

    public center(x: number, y: number): void;

    public locate(x: number, y: number): void;

    public increaseSteps(): void;

    public makeEncounterCount(): void;

    public makeEncounterTroopId(): number;

    public meetsEncounterConditions(encounter: RPG.Encounter): boolean;

    public executeEncounter(): boolean;

    public startMapEvent(x: number, y: number, triggers: number[], normal: boolean): void;

    public moveByInput(): void;

    public canMove(): boolean;

    public getInputDirection(): Direction | 0;

    public executeMove(direction: Direction): void;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    public update(sceneActive: boolean): void;

    public updateDashing(): void;

    public isDashButtonPressed(): boolean;

    public updateScroll(lastScrolledX: number, lastScrolledY: number): void;

    public updateVehicle(): void;

    public updateVehicleGetOn(): void;

    public updateVehicleGetOff(): void;

    public updateNonmoving(wasMoving: boolean, sceneActive: boolean): void;

    public triggerAction(): boolean;

    public triggerButtonAction(): boolean;

    public triggerTouchAction(): boolean;

    public triggerTouchActionD1(x1: number, y1: number): boolean;

    public triggerTouchActionD2(x2: number, y2: number): boolean;

    public triggerTouchActionD3(x2: number, y2: number): boolean;

    public updateEncounterCount(): void;

    public canEncounter(): boolean;

    public encounterProgressValue(): number;

    public checkEventTriggerHere(triggers: number[]): void;

    public checkEventTriggerThere(triggers: number[]): void;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    public checkEventTriggerTouch(x: number, y: number): void;

    public canStartLocalEvents(): boolean;

    public getOnOffVehicle(): boolean;

    public getOnVehicle(): boolean;

    public getOffVehicle(): boolean;

    public forceMoveForward(): void;

    public isOnDamageFloor(): boolean;

    public moveStraight(d: Direction): void;

    public moveDiagonally(horz: Direction, vert: Direction): void;

    public jump(xPlus: number, yPlus: number): void;

    public showFollowers(): void;

    public hideFollowers(): void;

    public gatherFollowers(): void;

    public areFollowersGathering(): boolean;

    public areFollowersGathered(): boolean;
}

export {Game_Player};