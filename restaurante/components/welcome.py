import reflex as rx
import restaurante.styles.styles as styles
from restaurante.styles.styles import Size as Size
from restaurante.styles.colors import Color as Color
from restaurante.styles.fonts import Font as Font
import restaurante.components.html as html

def welcome() -> rx.Component:
    return rx.box(
            rx.center(
                rx.image(src="/welcome.png", 
                        width="100%", 
                        #max_height="700",
                ),
            ),
            
            rx.center( 
                rx.vstack(
                                
                rx.text("Bienvenido a", style=styles.welcome_title),
                rx.text("Restaurante", style=styles.welcome_title, font_weight= "600", ),
                rx.text("Comida tradicional y Artesana",style=styles.welcome_sub_title,), 
                rx.text("Palomero", style=styles.welcome_sub_title,font_weight= "600", ), 
                rx.button("Haz una reserva", color_scheme="red", size="lg", margin="20px", font_family=Font.DEFAULT.value,),
                position= "absolute",
                top = "100px",
                padding="1em 1.5em"
                ),
                
            ),
            
        )
    