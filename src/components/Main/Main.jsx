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

    console.log(modules);
    return (
        <>
            {modules ?
                <>
                <Suspense fallback={<div>Loading...</div>}>
                    {text && text.data && text.data.length > 0  
                        ? <LazyImagesCarousel text={text.data[0]} items={modules[0].items}/> 
                        : null}
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    {text && text.data && text.data.length > 1  
                        ? <LasyImageComponent 
                            textColor={modules[1].textColor}
                            title={modules[1].title}
                            buttons={modules[1].buttons}
                            urlImage={modules[1].urlImage}
                        /> 
                        : null }
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <LasyImageComponent 
                        textColor={modules[3].textColor}
                        title={modules[3].title}
                        buttons={modules[3].buttons}
                        urlImage={modules[3].urlImage}
                    />
                </Suspense>
                <div className="grid-2-col">
                    <Suspense fallback={<div>Loading...</div>}>
                        <LasyImageComponent 
                            textColor={modules[4].items[0].textColor}
                            title={modules[4].items[0].title}
                            buttons={modules[4].items[0].buttons}
                            urlImage={modules[4].items[0].urlImage}
                        />
                        <LasyImageComponent 
                            textColor={modules[4].items[1].textColor}
                            title={modules[4].items[1].title}
                            buttons={modules[4].items[1].buttons}
                            urlImage={modules[4].items[1].urlImage}
                        />
                    </Suspense>
                </div>
                <Suspense fallback={<div>Loading...</div>}>
                    <LasyImageComponent 
                        textColor={modules[2].textColor}
                        buttons={modules[2].buttons}
                        urlImage={modules[2].urlImage}
                        urlLogo={modules[2].urlLogo}
                    />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyVideoComponent 
                        urlPoster={modules[5].urlPoster}
                        urlSource={modules[5].urlSource}
                        title={modules[5].title}
                        textColor={modules[5].textColor}
                        buttons={modules[5].buttons}
                    />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyVideoComponent 
                        urlPoster={modules[6].urlPoster}
                        urlSource={modules[6].urlSource}
                    />
                </Suspense>
                <div className="grid-2-col">
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyVideoComponent 
                            urlPoster={modules[7].urlPoster}
                            urlSource={modules[7].urlSource}
                        />
                    </Suspense>
                    <Suspense fallback={<div>Loading...</div>}>
                            <LazyGrid 
                                items={modules[8].items}
                            />
                    </Suspense>
                </div>
                {text.data && text.data.length > 1 
                    ? <AnimationText text={text.data[1]} /> 
                    : null }
            </> 
            : null}
        </>
    );
};

