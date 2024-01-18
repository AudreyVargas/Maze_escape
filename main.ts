controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.splash("You've found more points!")
    info.changeScoreBy(10)
})
tiles.setCurrentTilemap(tilemap`level2`)
let mySprite = sprites.create(img`
    . . . . . f f f f f . . . . . . 
    . . . . f e e e e e f . . . . . 
    . . . f f e 1 1 1 e f f . . . . 
    . . f e e e e e e e e e f . . . 
    . f e e e e e e e e e e e f . . 
    f e e e e e e e e e e e e e f . 
    f e e e e d d e d d e e e e f . 
    f e e e d d d d d d d e e e f . 
    f e d e 1 1 1 d d f f e d e f . 
    f e e 1 1 1 1 d d d 3 e e e f . 
    f e 1 1 1 1 1 d d d d e e e f . 
    f e 1 1 1 1 1 1 1 1 e e e e f . 
    f 1 1 1 1 1 1 1 1 1 e 1 e e f . 
    f 1 1 1 1 1 1 1 1 1 e 1 e e f . 
    f 1 1 1 e 1 1 1 1 1 e 1 1 e f . 
    f 1 1 1 e 1 1 1 1 1 e 1 1 e f . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 100)
mySprite.setPosition(25, 10)
