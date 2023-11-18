import reflex as rx
import restaurante.styles.styles as styles
from restaurante.styles.styles import Size

def carta() -> rx.Component:
    return rx.vstack ( 
        rx.center( 
            rx.text( "Los ", style=styles.title_first_word ),
            rx.text( "PLATOS" , style=styles.title),
        ), 
        rx.center ( 
        rx.responsive_grid(
            rx.box( 
                rx.text( "Los nachos", style=styles.title_first_word ),
                rx.text( "4,5" , style=styles.title),
                rx.text( 
                    """
                        4 tortillas en Totopos. Las Salsas que tú elijas: Guacamole (2,5€), Mango y Habanero (2,5€), Molcajete (2€), Salsa Verde (2€), Crema Agria (2€), Chipotle (1,5€), Pico de Gallo (1,5€), Valentina (1,5€), Cheddar (1,5€), Blanca (1,5€)
                    """,
                    style=styles.body,
                    ),                
            ),
            rx.box( 
                rx.text( "CHICHILO Y RES", style=styles.title_first_word ),
                rx.text( "17,0" , style=styles.title),
                rx.text( 
                    """
                        Mole de Oaxaca de chiles tostados, con medallón devacuno mayor, verduritas, chochoyotes y ceniza de huitlacoche
                    """,
                    style=styles.body,
                    ),
            ),
        width = "100%",
        spacing = Size.BIG.value,
        columns=[1, 2]
        ),
    margin = Size.BIG.value,
    )
    )