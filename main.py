def on_forever():
    basic.show_leds("""
        # . . . #
                . # # # .
                # . . . #
                # . . . #
                . # # # .
    """)
    if input.light_level() < 3 or input.logo_is_pressed():
        music.set_volume(99)
        music.play_tone(262, music.beat(BeatFraction.SIXTEENTH))
        basic.show_leds("""
            . # . # .
                        . # . # .
                        . # . # .
                        . # . # .
                        . # . # .
        """)
        basic.pause(100)
        basic.show_leds("""
            # . . . #
                        # . . . #
                        # . . . #
                        # . . . #
                        # . . . #
        """)
        servos.P1.set_angle(0)
        servos.P0.set_angle(0)
        basic.pause(500)
        servos.P1.set_angle(90)
        servos.P0.set_angle(90)
        basic.pause(500)
basic.forever(on_forever)
