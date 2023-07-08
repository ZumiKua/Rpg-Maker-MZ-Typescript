import {RPG} from "../RPG";

declare class Game_ActionResult {
    constructor();

    public clear(): void;

    public used: boolean;
    public missed: boolean;
    public evaded: boolean;
    public physical: boolean;
    public drain: boolean;
    public critical: boolean;
    public success: boolean;
    public hpAffected: boolean;
    public hpDamage: number;
    public mpDamage: number;
    public tpDamage: number;
    public addedStates: number[];
    public removedStates: number[];
    public addedBuffs: number[];
    public addedDebuffs: number[];
    public removedBuffs: number[];

    public addedStateObjects(): RPG.DataState[];

    public removedStateObjects(): RPG.DataState[];

    public isStatusAffected(): boolean;

    public isHit(): boolean;

    public isStateAdded(stateId: number): boolean;

    public pushAddedState(stateId: number): void;

    public isStateRemoved(stateId: number): boolean;

    public pushRemovedState(stateId: number): void;

    public isBuffAdded(paramId: number): boolean;

    public pushAddedBuff(paramId: number): void;

    public isDebuffAdded(paramId: number): boolean;

    public pushAddedDebuff(paramId: number): void;

    public isBuffRemoved(paramId: number): boolean;

    public pushRemovedBuff(paramId: number): void;
}

export {Game_ActionResult};