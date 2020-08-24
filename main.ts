controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    hero.x = 0
})
function algo () {
    music.baDing.play()
}
let hero: Sprite = null
scene.setBackgroundColor(9)
hero = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 3 . . . 3 . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 3 3 3 f . . . . . . 
    . . . . . f 3 3 3 f . . . . . . 
    . . . . . f 3 3 3 f . . . . . . 
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
