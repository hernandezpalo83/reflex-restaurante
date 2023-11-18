import reflex as rx
from enum import Enum
from .colors import Color as Color
from .colors import TextColor as TextColor
from .fonts import Font as Font

# Constants
MAX_WIDTH = "560px"

# Sizes


class Size(Enum):
    ZERO = "0px !important"
    SMALL = "1vw"
    MEDIUM = "1.5vw"
    DEFAULT = "2vw"
    LARGE = "2.5vw"
    BIG = "3vw"
    VERY_BIG = "4vw"

# Styles


BASE_STYLE = {
    "font_family": Font.DEFAULT.value,
    "background_color": Color.BACKGROUND.value,
   rx.Link: {
        "_hover": {
        }
        
    }
}

navbar_title_style = dict(
    font_family=Font.LOGO.value,
    font_size=Size.LARGE.value
)

navbar_link_style = dict(
    font_family=Font.LOGO.value,
    text_decoration= "none",
    font_size=Size.MEDIUM.value,
    color=Color.PRIMARY.value,
    _hover={"color": Color.SECONDARY.value},
    font_weight= "600",
    letter_spacing= "1px",
    text_transform= "uppercase",
)



welcome_title = dict(
    font_family=Font.LOGO.value,
    font_size=Size.VERY_BIG.value,
    color = Color.BACKGROUND.value,
    letter_spacing= "1px",
)

welcome_sub_title = dict(
    font_family=Font.SUB_TITLE.value,
    font_size=Size.DEFAULT.value,
    color = Color.BACKGROUND.value,
    font_weight= "800",
)

title_first_word = dict(
    font_family=Font.LOGO.value,
    font_size=Size.VERY_BIG.value,
    color = Color.SECONDARY.value,
    letter_spacing= "1px",
    line_height = "1px",
)

title = dict(
    font_family=Font.LOGO.value,
    font_size=Size.VERY_BIG.value,
    color = Color.PRIMARY.value,
    letter_spacing= "1px",
    line_height = "revert",
)

sub_title = dict(
    font_family=Font.SUB_TITLE.value,
    font_size=Size.SMALL.value,
    color = Color.PRIMARY.value,
    line_height = "revert",
)

body = dict(
    font_family=Font.DEFAULT.value,
    font_size=Size.DEFAULT.value,
    color = Color.PRIMARY.value,
)