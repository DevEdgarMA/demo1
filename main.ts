controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let mySprite: Sprite = null
    mySprite.x = 0
})
scene.setBackgroundColor(9)
let hero = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(hero)
scene.cameraFollowSprite(hero)
