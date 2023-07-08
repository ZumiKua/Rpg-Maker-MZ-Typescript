import {Game_Actor} from ".";

declare class Game_Actors {
    constructor();

    public actor(actorId: number): Game_Actor;
}

export {Game_Actors};