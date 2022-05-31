basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    if (input.lightLevel() > 127 || input.logoIsPressed()) {
        music.setVolume(99)
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            `)
        servos.P1.setAngle(0)
        servos.P0.setAngle(0)
        basic.pause(500)
        servos.P1.setAngle(90)
        servos.P0.setAngle(90)
        basic.pause(500)
    }
})
