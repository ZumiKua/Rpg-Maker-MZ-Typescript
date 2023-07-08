import {Spriteset_Base, Sprite_Character, Sprite_Balloon} from ".";
import {Game_Character} from "../rmmz_objects";

declare class Spriteset_Map extends Spriteset_Base<Game_Character, Sprite_Character> {
    constructor();

    //in fact, no matter what options you pass here, it won't be used, Sprite will make its own option and pass to PIXI.Sprite.
    public destroy(options: unknown): void;

    public loadSystemImages(): void;

    public createLowerLayer(): void;

    public update(): void;

    public hideCharacters(): void;

    public createParallax(): void;

    public createTilemap(): void;

    public loadTileset(): void;

    public createCharacters(): void;

    public createShadow(): void;

    public createDestination(): void;

    public createWeather(): void;

    public updateTileset(): void;

    public updateParallax(): void;

    public updateTilemap(): void;

    public updateShadow(): void;

    public updateWeather(): void;

    public updateBalloons(): void;

    public processBalloonRequests(): void;

    public createBalloon(request: { target: Game_Character, balloonId: number }): void;

    public removeBalloon(sprite: Sprite_Balloon): void;

    public removeAllBalloons(): void;

    public findTargetSprite(target: Game_Character): Sprite_Character;

    public animationBaseDelay(): number;
}

export {Spriteset_Map};