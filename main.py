def on_microbit_id_button_a_mes_dpad_down():
    servos.P0.set_angle(0)
control.on_event(EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MES_DPAD_BUTTON_A_DOWN,
    on_microbit_id_button_a_mes_dpad_down)

def on_forever():
    basic.show_leds("""
        # . . . #
                . # # # .
                # . . . #
                # . . . #
                . # # # .
    """)
    if input.light_level() < 3 or (input.logo_is_pressed() or input.sound_level() > 50):
        music.set_volume(234)
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
        servos.P0.set_angle(150)
        basic.pause(5000)
        servos.P0.set_angle(0)
        basic.pause(200)
basic.forever(on_forever)

def on_in_background():
    control.raise_event(EventBusSource.MICROBIT_ID_BUTTON_A,
        EventBusValue.MES_DPAD_BUTTON_A_DOWN)
control.in_background(on_in_background)
