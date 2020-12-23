export const fetchAPIGet = async (url, config) => {
    const response = await fetch(url, config);
    const json = await response.json();
    const data = { data: json };
    return data;
};

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
                        buttons: [{ text: "COMPRAR", url: "" }],
                        urlImage:
                            "https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/2400_fiesta.jpg?t=20201222025002"
                    },
                    {
                        textColor: "white",
                        title: "NEW IN",
                        buttons: [{ text: "Ver todo", url: "" }],
                        urlImage:
                            "https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/2400_newin.jpg?t=20201222025002"
                    }
                ]
            },
            {
                type: "image-1",
                textColor: "white",
                title: "ABRIGOS",
                buttons: [{ text: "Ver todo", url: "" }],
                urlImage:
                    "https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/2400_abrigos.jpg?t=20201222025002"
            },
            {
                type: "image-2",
                textColor: "white",
                buttons: [{ text: "Ver todo", url: "" }],
                urlImage:
                    "https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/2400_str.jpg?t=20201223023502",
                urlLogo:
                    "https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/logo_str.svg?t=20201223023502"
            },
            {
                type: "image-3",
                textColor: "white",
                title: "EFFORTLESSLY COOL",
                buttons: [
                    { text: "PUNTO", url: "" },
                    { text: "JEANS", url: "" }
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
                        buttons: [{ text: "VER TODO", url: "" }],
                        urlImage:
                            "https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/2400_zapatos.jpg?t=20201223023502"
                    },
                    {
                        textColor: "white",
                        title: "ACCESORIOS",
                        buttons: [{ text: "VER TODO", url: "" }],
                        urlImage:
                            "https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/2400_accesorios.jpg?t=20201223023502"
                    }
                ]
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
                    { text: "VER EDITORIAL", url: "" },
                    { text: "GIFT GUIDE", url: "" }
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
                type: "video-in-grid-2-col-B",
                urlPoster:
                    "https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/2400_stradishoppers_fallback.jpg?t=20201222025002",
                urlSource:
                    "https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/Stradishoppers/2400_stradishoppers_ES.mp4?t=20201222025002"
            },
            {
                type: "stradishoppers-in-grid-2-col-B",
                items: [
                    {
                        urlImg:
                            "https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/Stradishoppers/2400_stradishoppers_2.jpg?t=20201223023502",
                        text: "DESCUBRE NUESTROS NUEVOS VÍDEOS COMPRABLES",
                        links: [{ text: "IR AL CANAL", url: "" }]
                    },
                    {
                        urlImg:
                            "https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/Stradishoppers/2400_stradishoppers_3.jpg?t=20201223023502",
                        text:
                            "NO TE PIERDAS LAS ACTUALIZACIONES SEMANALES EN STREAMING DE NUESTRAS STRADISHOPPERS. VE I COMPRA ONLINE LO MÁS NUEVO DE NUESTRA TIENDA",
                        links: [
                            { text: "@ANDREASTRADISHOPPER", url: "" },
                            { text: "@ANASTRADISHOPPER", url: "" }
                        ]
                    }
                ]
            }
        ]
    };

    return json;
};
