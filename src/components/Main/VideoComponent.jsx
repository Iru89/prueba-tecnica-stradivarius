import * as React from "react";
import "./css/Main.css";

const VideoComponent = ({urlPoster, urlSource, buttons, title, textColor}) => {

    return (
        <>
            {title 
            ? <div className="position-relative">
                <div className="position">
                    <div className={textColor ? `wrapper font-${textColor}` : "wrapper"}>
                        <div className="video-title">
                            {title ? title : null }
                        </div>
                        {buttons && buttons.length > 0  
                        ? <div className="wrapper-buttons">
                            {buttons.map(button => 
                                <div key={button.text} className="text-button">
                                    <a href={button.url} target="_blank" rel="noopener noreferrer">{button.text}</a>
                                </div>
                            )} 
                        </div> 
                        : null}           
                    </div>
                </div>
                <video playsInline muted loop autoPlay className="video" id="" poster={urlPoster}>
                    <source src={urlSource} type="video/mp4"/>
                </video>
            </div> 
            : <video playsInline muted loop autoPlay className="video" id="" poster={urlPoster}>
                <source src={urlSource} type="video/mp4"/>
            </video> }
        </> 
    );
};

const LazyVideoComponent = ({urlPoster, urlSource, buttons, title, textColor}) => {
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
            {show ? <VideoComponent urlPoster={urlPoster} urlSource={urlSource} buttons={buttons} title={title} textColor={textColor}/> : null}
        </div>
    );
}

export default LazyVideoComponent;
