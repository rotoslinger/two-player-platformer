namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 4 2 2 4 2 2 4 2 2 4 2 2 2 2 
2 4 2 5 2 4 2 2 2 2 2 2 5 2 2 2 
2 4 2 2 2 2 2 2 2 4 2 2 2 2 2 2 
2 2 5 2 2 2 2 2 5 2 2 2 2 2 4 2 
2 2 4 2 2 2 4 5 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 4 2 2 2 2 2 2 
2 2 2 2 2 2 4 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 4 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    game.over(false)
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -160
    }
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    mySprite2 = sprites.create(img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`, SpriteKind.Player)
    controller.player2.moveSprite(mySprite2, 100, 0)
    mySprite2.ay = 200
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (mySprite2.vy == 0) {
        mySprite2.vy = -160
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    game.over(true)
})
controller.player2.onEvent(ControllerEvent.Disconnected, function () {
    mySprite2.destroy()
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`, SpriteKind.Player)
controller.player1.moveSprite(mySprite, 100, 0)
scene.setBackgroundColor(9)
tiles.setTilemap(tiles.createTilemap(
            hex`1e000800010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010201010101010101010201010201010101010102010301020202010102010101010101010201010101010101010102010101010201040404040404040101020101020104040404040404040404040404040404`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 2 . . . . . . . . 2 . . 2 . . . . . . 2 . . . 
2 2 2 . . 2 . . . . . . . 2 . . . . . . . . . 2 . . . . 2 . 
. . . . . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tilePath5,sprites.builtin.forestTiles0,sprites.dungeon.collectibleBlueCrystal,myTiles.tile1],
            TileScale.Sixteen
        ))
scene.cameraFollowSprite(mySprite)
mySprite.ay = 200
