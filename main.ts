controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . f f f f f f . . . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, -50)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(Asteroide)
    sprites.destroy(otherSprite, effects.confetti, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.fire, 500)
    scene.cameraShake(4, 500)
})
let Asteroide: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
game.splash("BENVINGUTS A L'ESPAI", "A per començar i B per disparar")
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . 9 9 . . . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . 9 9 9 9 9 9 9 9 . . . . 
    . . . 9 9 9 9 9 9 9 9 9 9 . . . 
    . . . 9 9 9 9 9 9 9 9 9 9 . . . 
    . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
mySprite.setPosition(78, 103)
controller.moveSprite(mySprite, 100, 100)
music.play(music.stringPlayable("G E C E G F G F ", 177), music.PlaybackMode.LoopingInBackground)
info.setLife(3)
info.startCountdown(60)
game.onUpdateInterval(1000, function () {
    Asteroide = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f 2 2 2 2 2 f . . . . . 
        . . . . f 2 2 2 2 2 f . . . . . 
        f f f f f f f f f f f f f f f f 
        f 2 2 2 2 f 5 5 5 f 2 2 2 2 2 f 
        f 2 2 2 2 f 5 5 5 f 2 2 2 2 2 f 
        f f f f f f f f f f f f f f f f 
        . . . . f 2 2 2 2 2 f . . . . . 
        . . . . f f 2 2 2 f f . . . . . 
        . . . . . f f 2 f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 0, 50)
    Asteroide.x += randint(0, scene.screenWidth())
    Asteroide.setKind(SpriteKind.Enemy)
})
