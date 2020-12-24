import * as React from "react";

export const fetchAPIGet = async (url, config) => {
    const response = await fetch(url, config);
    const json = await response.json();
    const data = { data: json };
    return data;
};

// La funcion fetchFAKE representa una llamada a una API REST con un metodo GET
// que devuelve toda la información necesaria  para la home
export const fetchFAKE = () => {
    const json = {
        modules: [
            {
                type: "carousel",
                items: [
                    {
                        textColor: "red",
                        title: "COLECCIÓN FIESTA",
                        percentatge: [30, 40, 50],
                        buttons: [
                            {
                                text: "COMPRAR",
                                url:
                                    "https://www.stradivarius.com/es/mujer/special-prices/fiesta--30%25-c1020329006.html"
                            }
                        ],
                        urlImage:
                            "https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/2400_fiesta.jpg?t=20201222025002"
                    },
                    {
                        textColor: "white",
                        title: "NEW IN",
                        buttons: [
                            {
                                text: "Ver todo",
                                url:
                                    "https://www.stradivarius.com/es/mujer/nuevo-c1020161505.html"
                            }
                        ],
                        urlImage:
                            "https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/2400_newin.jpg?t=20201222025002"
                    }
                ]
            },
            {
                type: "image-1",
                textColor: "white",
                title: "ABRIGOS",
                buttons: [
                    {
                        text: "Ver todo",
                        url:
                            "https://www.stradivarius.com/es/mujer/ropa/compra-por-producto/abrigos/ver-todo-c1020170027.html"
                    }
                ],
                urlImage:
                    "https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/2400_abrigos.jpg?t=20201222025002"
            },
            {
                type: "image-3",
                textColor: "white",
                title: "EFFORTLESSLY COOL",
                buttons: [
                    {
                        text: "PUNTO",
                        url:
                            "https://www.stradivarius.com/es/mujer/ropa/compra-por-producto/punto/ver-todo-c1718564.html"
                    },
                    {
                        text: "JEANS",
                        url:
                            "https://www.stradivarius.com/es/mujer/ropa/compra-por-producto/jeans/ver-todo-c1718557.html"
                    }
                ],
                urlImage:
                    "https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/2400_punto_jeans.jpg?t=20201223023502"
            },
            {
                type: "grid-2-col-A",
                items: [
                    {
                        textColor: "white",
                        title: "ZAPATOS",
                        buttons: [
                            {
                                text: "VER TODO",
                                url:
                                    "https://www.stradivarius.com/es/mujer/zapatos/compra-por-producto/todos/todos-c1020178528.html"
                            }
                        ],
                        urlImage:
                            "https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/2400_zapatos.jpg?t=20201223023502"
                    },
                    {
                        textColor: "white",
                        title: "ACCESORIOS",
                        buttons: [
                            {
                                text: "VER TODO",
                                url:
                                    "https://www.stradivarius.com/es/mujer/accesorios/compra-por-producto/nuevo/ver-todo-c1020303541.html"
                            }
                        ],
                        urlImage:
                            "https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/2400_accesorios.jpg?t=20201223023502"
                    }
                ]
            },
            {
                type: "image-2",
                textColor: "white",
                buttons: [
                    {
                        text: "Ver todo",
                        url:
                            "https://www.stradivarius.com/es/mujer/ropa/compra-por-producto/str-c1020210502.html"
                    }
                ],
                urlImage:
                    "https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/2400_str.jpg?t=20201223023502",
                urlLogo:
                    "https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/logo_str.svg?t=20201223023502"
            },
            {
                type: "video-1",
                urlPoster:
                    "https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/2400_holiday_fallback.jpg?t=20201223023502",
                urlSource:
                    "https://static.e-stradivarius.net/5/static2/homes/2020_w51/video/2400_holiday.mp4?t=20201223023502",
                title: "The holiday issue",
                textColor: "white",
                buttons: [
                    {
                        text: "VER EDITORIAL",
                        url:
                            "https://www.stradivarius.com/es/mujer/the-holiday-issue/editorial-c1020323502.html"
                    },
                    {
                        text: "GIFT GUIDE",
                        url:
                            "https://www.stradivarius.com/es/mujer/the-holiday-issue/gift-guide/ver-todo-c1020265152.html"
                    }
                ]
            },
            {
                type: "video-2",
                urlPoster:
                    "https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/Stradishoppers/2400_logo_fallback.jpg?t=20201223023502",
                urlSource:
                    "https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/Stradishoppers/1200_stradishoppers_logo.mp4?t=20201223023502"
            },
            {
                type: "stradishoppers-in-grid-2-col-B",
                video: {
                    urlPoster:
                        "https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/2400_stradishoppers_fallback.jpg?t=20201222025002",
                    urlSource:
                        "https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/Stradishoppers/2400_stradishoppers_ES.mp4?t=20201222025002"
                },
                items: [
                    {
                        urlImg:
                            "https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/Stradishoppers/2400_stradishoppers_2.jpg?t=20201223023502",
                        text: "DESCUBRE NUESTROS NUEVOS VÍDEOS COMPRABLES",
                        links: [
                            {
                                text: "IR AL CANAL",
                                url:
                                    "https://www.stradivarius.com/es/mujer/nuevo-c1020161505.html?eCommTV=true"
                            }
                        ]
                    },
                    {
                        urlImg:
                            "https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/Stradishoppers/2400_stradishoppers_3.jpg?t=20201223023502",
                        text:
                            "NO TE PIERDAS LAS ACTUALIZACIONES SEMANALES EN STREAMING DE NUESTRAS STRADISHOPPERS. VE I COMPRA ONLINE LO MÁS NUEVO DE NUESTRA TIENDA",
                        links: [
                            {
                                text: "@ANDREASTRADISHOPPER",
                                url:
                                    "https://www.stradivarius.com/es/mujer/nuevo-c1020161505.html?eCommTV=true"
                            },
                            {
                                text: "@ANASTRADISHOPPER",
                                url:
                                    "https://www.stradivarius.com/es/mujer/nuevo-c1020161505.html?eCommTV=true"
                            }
                        ]
                    }
                ]
            }
        ]
    };

    return json;
};

export const useNearScreen = () => {
    const [isNearScreen, setIsNearScreen] = React.useState(false);
    const fromRef = React.useRef();

    React.useEffect(() => {
        const onChange = (entries, observer) => {
            const element = entries[0];
            if (element.isIntersecting) {
                setIsNearScreen(true);
                observer.disconnect();
            }
        };
        const observer = new IntersectionObserver(onChange, {
            rootMargin: "100px"
        });
        observer.observe(fromRef.current);

        return () => observer.disconnect();
    });

    return { isNearScreen, fromRef };
};
