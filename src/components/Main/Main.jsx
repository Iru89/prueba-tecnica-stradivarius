import React, {Suspense, useState, lazy} from "react";
import { fetchAPIGet } from "../../utils/core";

export const Main = () => {
    const [text, setText] = useState("");

    React.useEffect(() => {
        const fetchText = async () => {
            const textAPI = await fetchAPIGet("https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1", { method: "GET" });
            setText(textAPI);
        }
        fetchText();
    },[]);

    const LazyImagesCarousel = lazy(() => import('./ImagesCarousel'));
    const LasyImageComponent = lazy(() => import('./ImageComponent'));
    const LazyVideoComponent = lazy(() => import('./VideoComponent'));
    const LazyGrid = lazy(() => import('./Grid'));

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                {text && text.data && text.data.length > 0  ? <LazyImagesCarousel text={text.data[0]} /> : null}
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                {text && text.data && text.data.length > 1  
                    ? <LasyImageComponent 
                        textColor="white" 
                        text={text.data[1]} 
                        title="ABRIGOS" 
                        buttons={[{text: "Ver todo", url: ""}]} 
                        urlImage="https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/2400_abrigos.jpg?t=20201222025002"
                    /> 
                    : null }
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <LasyImageComponent 
                    textColor="white" 
                    buttons={[{text: "Ver todo", url: ""}]} 
                    urlImage="https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/2400_str.jpg?t=20201223023502" 
                    urlLogo="https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/logo_str.svg?t=20201223023502"
                />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <LasyImageComponent 
                    textColor="white" 
                    title="EFFORTLESSLY COOL"
                    buttons={[{text: "PUNTO", url: ""}, {text: "JEANS", url: ""}]} 
                    urlImage="https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/2400_punto_jeans.jpg?t=20201223023502"
                />
            </Suspense>
            <div className="grid-2-col">
            <Suspense fallback={<div>Loading...</div>}>
                <LasyImageComponent 
                    textColor="white" 
                    title="ZAPATOS"
                    buttons={[{text: "VER TODO", url: ""}]} 
                    urlImage="https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/2400_zapatos.jpg?t=20201223023502"
                />
                <LasyImageComponent 
                    textColor="white" 
                    title="ACCESORIOS"
                    buttons={[{text: "VER TODO", url: ""}]} 
                    urlImage="https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/2400_accesorios.jpg?t=20201223023502"
                />
            </Suspense>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyVideoComponent 
                    urlPoster={"https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/2400_holiday_fallback.jpg?t=20201223023502"}
                    urlSource={"https://static.e-stradivarius.net/5/static2/homes/2020_w51/video/2400_holiday.mp4?t=20201223023502"}
                    title="The holiday issue"
                    textColor="white"
                    buttons={[{text:"VER EDITORIAL", url: ""}, {text:"GIFT GUIDE", url: ""}]}
                />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyVideoComponent 
                    urlPoster={"https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/Stradishoppers/2400_logo_fallback.jpg?t=20201223023502"}
                    urlSource={"https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/Stradishoppers/1200_stradishoppers_logo.mp4?t=20201223023502"}/>
            </Suspense>
            <div className="grid-2-col">
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyVideoComponent 
                        urlPoster={"https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/2400_stradishoppers_fallback.jpg?t=20201222025002"}
                        urlSource={"https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/Stradishoppers/2400_stradishoppers_ES.mp4?t=20201222025002"}/>
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                        <LazyGrid 
                            items={
                                [{
                                    urlImg:  "https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/Stradishoppers/2400_stradishoppers_2.jpg?t=20201223023502", 
                                    text: "DESCUBRE NUESTROS NUEVOS VÍDEOS COMPRABLES", 
                                    links: [{text: "IR AL CANAL", url: "" }]
                                },
                                {
                                    urlImg: "https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/Stradishoppers/2400_stradishoppers_3.jpg?t=20201223023502", 
                                    text: "NO TE PIERDAS LAS ACTUALIZACIONES SEMANALES EN STREAMING DE NUESTRAS STRADISHOPPERS. VE I COMPRA ONLINE LO MÁS NUEVO DE NUESTRA TIENDA", 
                                    links: [{text: "@ANDREASTRADISHOPPER", url: "" }, {text: "@ANASTRADISHOPPER", url: "" }]
                                }]
                            }
                        />
                </Suspense>
            </div>
        </>
    );
};

