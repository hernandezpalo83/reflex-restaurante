import reflex as rx
import restaurante.styles.styles as styles
from restaurante.styles.styles import Size

def el_restaurante() -> rx.Component:
    return rx.center( 
        rx.responsive_grid(
            rx.box( 
                rx.image(src="restaurante.png", width="100%", height="auto")
            ),
            rx.box( 
                rx.text( "El", style=styles.title_first_word ),
                rx.text( "Restaurante" , style=styles.title),
                rx.text( "Descrubre el restaurante", style=styles.sub_title ),
                rx.text( 
                    """
                        En 1992 se fundó en la ciudad de A Coruña el Restaurante Tamarindo, siendo pioneros en ofrecer gastronomía mexicana en la ciudad. Nuestra andadura comenzó en la calle Rubine, posteriormente nos trasladamos a la calle Pondal, y recientemente a Fernando Macías, ubicaciòn actual del restaurante.
                        Nuestra cocina comprende desde recetas tradicionales de la cocina mexicana como otras de elaboración propia, desde las enchiladas potosinas a nuestro burrito, siempre elaborados desde cero con tortillas caseras de nixtamal, manteniendo durante estos 20 años una constante de elaboración delicada y artesanal que transita de lo clàsico a lo innovador, sin olvidarnos de los tragos típicos como el Margarita o las cervezas micheladas.
                        Situado frente a la playa de Riazor, para todos aquellos que quieran degustar estos exquisitos sabores en un ambiente acogedor y distendido, Tamarindo es su lugar.
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