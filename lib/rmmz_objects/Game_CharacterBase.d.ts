export type Direction = 2 | 4 | 6 | 8;

declare abstract class Game_CharacterBase {
    constructor();

    public initMembers(): void;

    public pos(x: number, y: number): boolean;

    public posNt(x: number, y: number): boolean;

    public moveSpeed(): number;

    public setMoveSpeed(moveSpeed: number): void;

    public moveFrequency(): number;

    public setMoveFrequency(moveFrequency: number): void;

    public opacity(): number;

    public setOpacity(opacity: number): void;

    public blendMode(): number;

    public setBlendMode(blendMode: number): void;

    public isNormalPriority(): boolean;

    public setPriorityType(priorityType: number): void;

    public isMoving(): boolean;

    public isJumping(): boolean;

    public jumpHeight(): number;

    public isStopping(): boolean;

    public checkStop(threshold: number): boolean;

    public resetStopCount(): void;

    public realMoveSpeed(): number;

    public distancePerFrame(): number;

    public isDashing(): boolean;

    public isDebugThrough(): boolean;

    public straighten(): void;

    public reverseDir(d: Direction): Direction;

    public canPass(x: number, y: number, d: Direction): boolean;

    public canPassDiagonally(x: number, y: number, horz: Direction, vert: Direction): boolean;

    public isMapPassable(x: number, y: number, d: Direction): boolean;

    public isCollidedWithCharacters(x: number, y: number): boolean;

    public isCollidedWithEvents(x: number, y: number): boolean;

    public isCollidedWithVehicles(x: number, y: number): boolean;

    public setPosition(x: number, y: number): void;

    public copyPosition(character: Game_CharacterBase): void;

    public locate(x: number, y: number): void;

    public direction(): Direction;

    public setDirection(d: Direction): void;

    public isTile(): boolean;

    public isObjectCharacter(): boolean;

    public shiftY(): number;

    public scrolledX(): number;

    public scrolledY(): number;

    public screenX(): number;

    public screenY(): number;

    public screenZ(): number;

    public isNearTheScreen(): boolean;

    public update(): void;

    public updateStop(): void;

    public updateJump(): void;

    public updateMove(): void;

    public updateAnimation(): void;

    public animationWait(): number;

    public updateAnimationCount(): void;

    public updatePattern(): void;

    public maxPattern(): number;

    public pattern(): number;

    public setPattern(pattern: number): void;

    public isOriginalPattern(): boolean;

    public resetPattern(): void;

    public refreshBushDepth(): void;

    public isOnLadder(): boolean;

    public isOnBush(): boolean;

    public terrainTag(): number;

    public regionId(): number;

    public increaseSteps(): void;

    public tileId(): number;

    public characterName(): string;

    public characterIndex(): number;

    public setImage(characterName: string, characterIndex: number): void;

    public setTileImage(tileId: number): void;

    public checkEventTriggerTouchFront(d: Direction): void;

    public checkEventTriggerTouch(): boolean;

    public isMovementSucceeded(): boolean;

    public setMovementSuccess(success: boolean): void;

    public moveStraight(d: Direction): void;

    public moveDiagonally(horz: Direction, vert: Direction): void;

    public jump(xPlus: number, yPlus: number): void;

    public hasWalkAnime(): boolean;

    public setWalkAnime(walkAnime: boolean): void;

    public hasStepAnime(): boolean;

    public setStepAnime(stepAnime: boolean): void;

    public isDirectionFixed(): boolean;

    public setDirectionFix(directionFix: boolean): void;

    public isThrough(): boolean;

    public setThrough(through: boolean): void;

    public isTransparent(): boolean;

    public bushDepth(): number;

    public setTransparent(transparent: boolean): void;

    public startAnimation(): void;

    public startBalloon(): void;

    public isAnimationPlaying(): boolean;

    public isBalloonPlaying(): boolean;

    public endAnimation(): void;

    public endBalloon(): void;
}

export { Game_CharacterBase };