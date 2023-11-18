"""Welcome to Reflex! This file outlines the steps to create a basic app."""
from rxconfig import config
import restaurante.styles.styles as styles
import restaurante.components.navbar as navbar
import restaurante.components.welcome as welcome
import restaurante.components.elrestaurante as elrestaurante
import restaurante.components.contacto as contacto
import restaurante.components.localizacion as mapa
import restaurante.components.carta as carta
import restaurante.components.footer as footer
import restaurante.components.html as html
import reflex as rx

class State(rx.State):
    """The app state."""

    pass


def index() -> rx.Component:
    return rx.box(
            navbar.navbar(),
            welcome.welcome(),
            html.anchor("el_restaurante"),
            elrestaurante.el_restaurante(),
            html.anchor("carta"),            
            carta.carta(),
            html.anchor("reserva"),            
            contacto.datos_contacto(),
            html.anchor("mapa"),            
            mapa.mapa(),
            footer.footer(),
            ) 


# Add state and page to the app.
app = rx.App(
    style=styles.BASE_STYLE
)

app.add_page(index)
app.compile()
