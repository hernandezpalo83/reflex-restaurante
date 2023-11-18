import reflex as rx
import restaurante.styles.styles as styles
from restaurante.styles.styles import Size

def datos_contacto() -> rx.Component:
    return rx.center( 
            rx.box( 
                rx.text( "Reserva", style=styles.title_first_word ),
                rx.text( "TU MESA" , style=styles.title),
                rx.text( "Haz una reserva", style=styles.sub_title ),
                rx.text( 
                    """
                        Puedes reservar una mesa en horario de Lunes, Miércoles, Jueves, Viernes, Sábado de 12:00 a 16:00 y 20:00 a 23:00. Domingos de 12:00 a 16:00.
                        Ponte en contacto con nosotros en el teléfono 999 99 99 o por email escribiéndonos a contacto@restaurante.com. Estamos en Palomero.
                    """,
                    style=styles.body,
                    ),
            ),
            margin = Size.BIG.value,
    )