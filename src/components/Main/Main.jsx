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
    const Grid = lazy(() => import('./Grid'));

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyImagesCarousel text={text} urlImages={["https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/2400_fiesta.jpg?t=20201222025002", "https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/2400_newin.jpg?t=20201222025002"]}/>
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <LasyImageComponent text={text} urlImage="https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/2400_abrigos.jpg?t=20201222025002"/>
            </Suspense>
            <div className="grid-2-col">
                <Suspense fallback={<div>Loading...</div>}>
                        <LazyVideoComponent/>
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                        <Grid />
                </Suspense>
            </div>
        </>
    );
}