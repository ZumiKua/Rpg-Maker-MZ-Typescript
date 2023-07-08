import {Game_Vehicle, VehicleType, Game_Event, Direction} from ".";
import {RPG} from "../RPG";

declare class Game_Map {
    constructor();

    public setup(mapId: number): void;

    public isEventRunning(): boolean;

    public tileWidth(): number;

    public tileHeight(): number;

    public bushDepth(): number;

    public mapId(): number;

    public tilesetId(): number;

    public displayX(): number;

    public displayY(): number;

    public parallaxName(): string;

    public battleback1Name(): string | null;

    public battleback2Name(): string | null;

    public requestRefresh(): void;

    public isNameDisplayEnabled(): boolean;

    public disableNameDisplay(): void;

    public enableNameDisplay(): void;

    public createVehicles(): void;

    public refereshVehicles(): void;

    public vehicles(): Game_Vehicle[];

    public vehicle(type: number | VehicleType): Game_Vehicle;

    public boat(): Game_Vehicle;

    public ship(): Game_Vehicle;

    public airship(): Game_Vehicle;

    public setupEvents(): void;

    public events(): Game_Event[];

    public event(eventId: number): Game_Event;

    public eraseEvent(eventId: number): void;

    public autorunCommonEvents(): RPG.DataCommonEvent[];

    public parallelCommonEvents(): RPG.DataCommonEvent[];

    public setupScroll(): void;

    public setupParallax(): void;

    public setupBattleback(): void;

    public setDisplayPos(x: number, y: number): void;

    public parallaxOx(): number;

    public parallaxOy(): number;

    public tileset(): RPG.DataTileset;

    public tilesetFlags(): number[];

    public displayName(): string;

    public width(): number;

    public height(): number;

    public data(): number[];

    public isLoopHorizontal(): boolean;

    public isLoopVertical(): boolean;

    public isDashDisabled(): boolean;

    public encounterList(): RPG.Encounter[];

    public encounterStep(): number;

    public isOverworld(): boolean;

    public screenTileX(): number;

    public screenTileY(): number;

    public adjustX(x: number): number;

    public adjustY(y: number): number;

    public roundX(x: number): number;

    public roundY(y: number): number;

    public xWithDirection(x: number, d: Direction): number;

    public yWithDirection(y: number, d: Direction): number;

    public roundXWithDirection(x: number, d: Direction): number;

    public roundYWithDirection(y: number, d: Direction): number;

    public deltaX(x1: number, x2: number): number;

    public deltaY(y1: number, y2: number): number;

    public distance(x1: number, y1: number, x2: number, y2: number): number;

    public canvasToMapX(x: number): number;

    public canvasToMapY(y: number): number;

    public autoplay(): void;

    public refreshIfNeeded(): void;

    public refresh(): void;

    public refreshTileEvents(): void;

    public eventsXy(x: number, y: number): Game_Event[];

    public eventsXyNt(x: number, y: number): Game_Event[];

    public tileEventsXy(x: number, y: number): Game_Event[];

    public eventIdXy(x: number, y: number): number;

    public scrollDown(distance: number): void;

    public scrollLeft(distance: number): void;

    public scrollRight(distance: number): void;

    public scrollUp(distance: number): void;

    public isValid(x: number, y: number): boolean;

    public checkPassage(x: number, y: number, bit: number): boolean;

    public tileId(x: number, y: number, z: number): number;

    public layeredTiles(x: number, y: number): number[];

    public allTiles(x: number, y: number): number[];

    public autotileType(x: number, y: number, z: number): number;

    public isPassable(x: number, y: number, d: Direction): boolean;

    public isBoatPassable(x: number, y: number): boolean;

    public isShipPassable(x: number, y: number): boolean;

    public isAirshipLandOk(x: number, y: number): boolean;

    public checkLayeredTilesFlags(x: number, y: number, bit: number): boolean;

    public isLadder(x: number, y: number): boolean;

    public isBush(x: number, y: number): boolean;

    public isCounter(x: number, y: number): boolean;

    public isDamageFloor(x: number, y: number): boolean;

    public terrainTag(x: number, y: number): number;

    public regionId(x: number, y: number): number;

    public startScroll(direction: Direction, distance: number, speed: number): void;

    public isScrolling(): boolean;

    public update(sceneActive: boolean): void;

    public updateScroll(): void;

    public scrollDistance(): number;

    public doScroll(direction: Direction, distance: number): void;

    public updateEvents(): void;

    public updateVehicles(): void;

    public updateParallax(): void;

    public changeTileset(tilesetId: number): void;

    public changeBattleback(battleback1Name: string | null, battleback2Name: string | null): void;

    public changeParallax(name: string, loopX: boolean, loopY: boolean, sx: number, sy: number): void;

    public updateInterpreter(): void;

    public unlockEvent(eventId: number): void;

    public setupStartingEvent(): boolean;

    public setupTestEvent(): boolean;

    public setupStartingMapEvent(): boolean;

    public setupAutorunCommonEvent(): boolean;

    public isAnyEventStarting(): boolean;
}

export {Game_Map};