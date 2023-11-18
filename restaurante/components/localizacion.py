import reflex as rx

import restaurante.styles.styles as styles

def mapa() -> rx.Component:
    return rx.vstack( 
            rx.center(rx.text("Como llegar", style=styles.title) ) ,
            rx.center( 
                rx.html( 
                    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.9018690725566!2d-6.277481308986761!3d40.24557006415248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3e71a122e76039%3A0x4fd58eaf10ce911e!2s10660%20Palomero%2C%20C%C3%A1ceres!5e0!3m2!1ses!2ses!4v1700226114667!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
                ),
            ),
            width="100%"
        )