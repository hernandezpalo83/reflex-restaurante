import reflex as rx
import restaurante.styles.styles as styles
from restaurante.styles.styles import Size

def anchor(id: str) -> rx.Component:
    return rx.vstack ( 
        rx.html('<a id=' + id + '></a>'),
        rx.text(".", style=styles.title),
        #display="inline-block",
        #padding="100px",
        #position= "absolute",
        top = "200px",
       
    )