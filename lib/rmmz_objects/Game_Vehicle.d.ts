import {Game_Character, Direction} from ".";
import {RPG} from "../RPG";
import {AudioManager} from "../rmmz_managers";

export type VehicleType = "boat" | "ship" | "airship";

declare class Game_Vehicle extends Game_Character {
    constructor(type: VehicleType);

    public initMembers(): void;

    public isBoat(): boolean;

    public isShip(): boolean;

    public isAirship(): boolean;

    public resetDirection(): void;

    public initMoveSpeed(): void;

    public vehicle(): RPG.Airship;

    public loadSystemSettings(): void;

    public refresh(): void;

    public setLocation(mapId: number, x: number, y: number): void;

    public pos(x: number, y: number): boolean;

    public isMapPassable(x: number, y: number, d: Direction): boolean;

    public getOn(): void;

    public getOff(): void;

    public setBgm(bgm: AudioManager.CurrentAudio): void;

    public playBgm(): void;

    public syncWithPlayer(): void;

    public screenY(): number;

    public shadowX(): number;

    public shadowY(): number;

    public shadowOpacity(): number;

    public canMove(): boolean;

    public update(): void;

    public updateAirship(): void;

    public updateAirshipAltitude(): void;

    public maxAltitude(): number;

    public isLowest(): boolean;

    public isHighest(): boolean;

    public isTakeoffOk(): boolean;

    public isLandOk(x: number, y: number, d: Direction): boolean;
}

export {Game_Vehicle};