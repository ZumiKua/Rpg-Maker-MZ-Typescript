import {Game_Follower, Direction} from ".";

declare class Game_Followers {
    constructor();

    public setup(): void;

    public isVisible(): boolean;

    public show(): void;

    public hide(): void;

    public data(): Game_Follower[];

    public reverseData(): Game_Follower[];

    public follower(index: number): Game_Follower;

    public refresh(): void;

    public update(): void;

    public updateMove(): void;

    public jumpAll(): void;

    public synchronize(x: number, y: number, d: Direction): void;

    public gather(): void;

    public areGathering(): boolean;

    public visibleFollowers(): Game_Follower[];

    public areMoving(): boolean;

    public areGathered(): boolean;

    public isSomeoneCollided(x: number, y: number): boolean;
}

export {Game_Followers};