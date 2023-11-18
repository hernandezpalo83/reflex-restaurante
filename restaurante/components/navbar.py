import reflex as rx
import restaurante.styles.styles as styles
from restaurante.styles.styles import Size as Size
from restaurante.styles.colors import Color as Color


def navbar() -> rx.Component:
    return rx.hstack(
        rx.box(
            rx.span("hernandez", color=Color.PRIMARY.value),
            rx.span("palo", color=Color.SECONDARY.value),
            style=styles.navbar_title_style,
            width='30%',
        ),
        rx.hstack(
            
            rx.link(
                "Reservas",
                href="#reserva",
                width='25%',
                style=styles.navbar_link_style,          
                      
            ),

            rx.link(
                "Como llegar",
                href="#mapa",
                width='25%',
                style=styles.navbar_link_style,          
                      
            ),            

            rx.link(
                "Nuestra Carta",
                href="#carta",
                width='25%',                
                style=styles.navbar_link_style,          
            ),
            
            rx.link(
                "El Restaurante",
                href="#el_restaurante",
                width='25%',
                style=styles.navbar_link_style,          
            ),            
            width='100%', 
            flex_direction="row-reverse",                     
        ),
        position="sticky",
        bg=Color.BACKGROUND.value,
        padding_x=Size.BIG.value,
        padding_y=Size.DEFAULT.value,
        z_index="999",
        top="0"
    )