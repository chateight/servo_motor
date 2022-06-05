control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MES_DPAD_BUTTON_A_DOWN, function () {
    servos.P0.setAngle(0)
})
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
control.inBackground(function () {
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MES_DPAD_BUTTON_A_DOWN
    )
})
