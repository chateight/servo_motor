basic.forever(function () {
    basic.showLeds(`
        # . . . #
        . # # # .
        # . . . #
        # . . . #
        . # # # .
        `)
    if (input.lightLevel() < 3 || (input.logoIsPressed() || input.soundLevel() > 50)) {
        music.setVolume(234)
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            `)
        servos.P0.setAngle(150)
        basic.pause(5000)
        servos.P0.setAngle(0)
        basic.pause(200)
    }
})
