basic.forever(function () {
    if (input.lightLevel() > 127) {
        servos.P1.setAngle(0)
        servos.P0.setAngle(0)
        basic.pause(500)
        servos.P1.setAngle(90)
        servos.P0.setAngle(90)
        basic.pause(500)
    }
})
