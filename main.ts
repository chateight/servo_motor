basic.forever(function () {
    basic.showLeds(`
        # . . . #
        . # # # .
        # . . . #
        # . . . #
        . # # # .
        `)
    if (input.lightLevel() < 3 || input.logoIsPressed()) {
        music.setVolume(99)
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
        servos.P0.setAngle(0)
        basic.pause(100)
        servos.P0.setAngle(150)
        basic.pause(1000)
    }
})
