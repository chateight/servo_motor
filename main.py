basic.show_leds("""
    . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
""")

def on_forever():
    basic.show_leds("""
        . # # # .
                # . . . #
                # . . . #
                # . . . #
                . # # # .
    """)
    if input.light_level() > 127:
        music.play_tone(262, music.beat(BeatFraction.SIXTEENTH))
        basic.show_leds("""
            . . . . #
                        . . . # .
                        . . # . .
                        . # . . .
                        # . . . .
        """)
        servos.P1.set_angle(0)
        servos.P0.set_angle(0)
        basic.pause(500)
        servos.P1.set_angle(90)
        servos.P0.set_angle(90)
        basic.pause(500)
basic.forever(on_forever)
