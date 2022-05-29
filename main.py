def on_forever():
    if input.light_level() > 127:
        servos.P1.set_angle(0)
        servos.P0.set_angle(0)
        basic.pause(500)
        servos.P1.set_angle(90)
        servos.P0.set_angle(90)
        basic.pause(500)
basic.forever(on_forever)
