import {RPG} from "../RPG";

declare class Game_CommonEvent {
    constructor(commonEventId: number);

    public event(): RPG.DataCommonEvent;

    public list(): RPG.DataCommonEventList[];

    public refresh(): void;

    public isActive(): boolean;

    public update(): void;
}

export {Game_CommonEvent};