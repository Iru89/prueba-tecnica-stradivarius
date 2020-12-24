import React, {Suspense, useState, lazy} from "react";
import { fetchAPIGet, fetchFAKE } from "../../utils/core";
import AnimationText from "./AnimationText";

export const Main = () => {
    const [text, setText] = useState("");
    const [modules, setModules] = useState(null);

    React.useEffect(() => {
        const fetchText = async () => {
            const textAPI = await fetchAPIGet("https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1", { method: "GET" });
            setText(textAPI);
        };
        fetchText();
        const data = fetchFAKE();
        setModules( data.modules );
    },[]);

    const LazyImagesCarousel = lazy(() => import('./ImagesCarousel'));
    const LasyImageComponent = lazy(() => import('./ImageComponent'));
    const LazyVideoComponent = lazy(() => import('./VideoComponent'));
    const LazyGrid = lazy(() => import('./Grid'));

    return (
        <>
            {modules ? modules.map(module => {
                switch(module.type) {
                    case "carousel": 
                        return (
                            <Suspense fallback={<div>Loading...</div>}>
                                {text && text.data && text.data.length > 0  
                                    ? <LazyImagesCarousel text={text.data[0]} items={module.items}/> 
                                    : null}
                            </Suspense>
                        );

                    case "image-1":
                        return (
                            <Suspense fallback={<div>Loading...</div>}>
                                <LasyImageComponent 
                                    textColor={module.textColor}
                                    title={module.title}
                                    buttons={module.buttons}
                                    urlImage={module.urlImage}
                                /> 
                            </Suspense>
                        );

                    case "image-2":
                        return(
                            <Suspense fallback={<div>Loading...</div>}>
                                <LasyImageComponent 
                                    textColor={module.textColor}
                                    buttons={module.buttons}
                                    urlImage={module.urlImage}
                                    urlLogo={module.urlLogo}
                                />
                            </Suspense>
                        );

                    case "image-3":
                        return (
                            <Suspense fallback={<div>Loading...</div>}>
                                <LasyImageComponent 
                                    textColor={module.textColor}
                                    title={module.title}
                                    buttons={module.buttons}
                                    urlImage={module.urlImage}
                                />
                            </Suspense>
                        );

                    case "grid-2-col-A":
                        return (
                            <div className="grid-2-col">
                                <Suspense fallback={<div>Loading...</div>}>
                                    {module.items.map(item => 
                                        <LasyImageComponent 
                                            textColor={item.textColor}
                                            title={item.title}
                                            buttons={item.buttons}
                                            urlImage={item.urlImage}
                                        />
                                        )}
                                </Suspense>
                            </div>
                        );

                    case "video-1":
                        return(
                            <Suspense fallback={<div>Loading...</div>}>
                                <LazyVideoComponent 
                                    urlPoster={module.urlPoster}
                                    urlSource={module.urlSource}
                                    title={module.title}
                                    textColor={module.textColor}
                                    buttons={module.buttons}
                                />
                            </Suspense>
                        );

                    case "video-2":
                        return(
                            <Suspense fallback={<div>Loading...</div>}>
                                <LazyVideoComponent 
                                    urlPoster={module.urlPoster}
                                    urlSource={module.urlSource}
                                />
                            </Suspense>
                        );

                    case "stradishoppers-in-grid-2-col-B":
                        return(
                            <div className="grid-2-col">
                                <Suspense fallback={<div>Loading...</div>}>
                                    <LazyVideoComponent 
                                        urlPoster={module.video.urlPoster}
                                        urlSource={module.video.urlSource}
                                    />
                                </Suspense>
                                <Suspense fallback={<div>Loading...</div>}>
                                        <LazyGrid 
                                            items={module.items}
                                        />
                                </Suspense>
                            </div>
                        );

                    default:
                        return(null);
                    
                }
            })
            : null}
            {text.data && text.data.length > 1 
                ? <AnimationText text={text.data[1]} /> 
                : null }
        </>
    );
};

