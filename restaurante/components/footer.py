import reflex as rx

import restaurante.styles.styles as styles
from restaurante.styles.styles import Size as Size
from restaurante.styles.colors import Color as Color

def footer():
    return rx.hstack(
        rx.box(
            rx.span("hernandez", color=Color.PRIMARY.value),
            rx.span("palo", color=Color.SECONDARY.value),
            rx.text("Bienvenido a", style=styles.sub_title ),
            rx.text("Restaurante", style=styles.sub_title),
            rx.text("Comida tradicional y Artesana",style=styles.sub_title,), 
            rx.text("Palomero", style=styles.sub_title ), 
            style=styles.navbar_title_style,
            width='30%',
        ),
        rx.vstack(
            rx.text("Secciones", style=styles.body ),
            rx.link(
                "Reservas",
                href="#reserva",
                style=styles.navbar_link_style,          
                      
            ),

            rx.link(
                "Como llegar",
                href="#mapa",
                style=styles.navbar_link_style,          
                      
            ),            

            rx.link(
                "Nuestra Carta",
                href="#carta",
                style=styles.navbar_link_style,          
            ),
            
            rx.link(
                "El Restaurante",
                href="#el_restaurante",
                style=styles.navbar_link_style,          
            ),            
            width='80%',
        ),
        width='100%',
        position="sticky",
        bg=Color.BACKGROUND.value,
        padding_x=Size.BIG.value,
        padding_y=Size.DEFAULT.value,
        z_index="999",
        top="0"
    )