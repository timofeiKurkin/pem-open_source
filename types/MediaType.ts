type mediaSize = {
    phone375_639: "(min-width: 375px) and (max-width: 639px)",
    phone640_767: "(min-width: 640px) and (max-width: 767px)",
    pad768_1023: "(min-width: 768px) and (max-width: 1023px)",
    desktop1024_1279: "(min-width: 1024px) and (max-width: 1279px)",
    desktop1280_1439: "(min-width: 1280px) and (max-width: 1439px)",
    desktop1440_1919: "(min-width: 1440px) and (max-width: 1919px)",
    desktop1920: "(min-width: 1920px)"
}

type color = {
    $black: "#000" | string,
    $white: "#FFF" | string,
    $dark_blue: "#112D4E" | string,
    $blue: "#0f1c3f" | string,
    $white_cold: "#d7d7de" | string,
    $white_cold2: "#f4f7fd" | string,
    $dark_vacancy: "#1D1D1D" | string,
    $dark: "#2A2A2A" | string,
    $grey: "#4B4B4B" | string,
    $greyForContacts: "#5C5C5C" | string,
    $dark_red: "#ad3636" | string,
    $black_background: "#1E1E1E" | string,
    $white_blue: "#DBE2EF" | string,
}

export type MediaType = {
    media: mediaSize,
    color: color
}