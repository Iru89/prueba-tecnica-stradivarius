import * as React from "react";
import "./css/Main.css";

const VideoComponent = () => {

    return (
            <video playsInline muted loop autoPlay className="video" id="" poster="https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/2400_stradishoppers_fallback.jpg?t=20201222025002">
                <source src="https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/Stradishoppers/2400_stradishoppers_ES.mp4?t=20201222025002" type="video/mp4"/>
            </video>
    );
};

const LazyVideoComponent = () => {
    const [show, setShow] = React.useState(false);

    const elementRef = React.useRef();

    React.useEffect(() => {
        const onChange = (entries, observer) => {
            const element = entries[0];
            if(element.isIntersecting){
                setShow(true);
                observer.disconnect();
            }
        };
        const observer = new IntersectionObserver(onChange, { rootMargin: "100px" });
        observer.observe(elementRef.current);

        return () => observer.disconnect();
    });
    
    return (
        <div ref={elementRef}>
            {show ? <VideoComponent /> : null}
        </div>
    );
}

export default LazyVideoComponent;
