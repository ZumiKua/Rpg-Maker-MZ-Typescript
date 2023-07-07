import {Game_Character, Game_CharacterBase, Game_Actor} from ".";

declare class Game_Follower extends Game_Character {

    constructor(memberIndex: number);

    public refresh(): void;

    public actor(): Game_Actor;

    public isVisible(): boolean;

    public isGathered(): boolean;

    public update(): void;

    public chaseCharacter(character: Game_CharacterBase): void;
}

export {Game_Follower};