import * as React from "react";
import AnimationText from "./AnimationText";
import "./css/Main.css";

export const ImageComponent = ({textColor, title, buttons, urlImage, urlLogo, percentatge}) => {
    return (
        <>
            <div className="position-relative">
                <div className="position">
                    <div className={`wrapper font-${textColor}`}>
                        <div className="title">
                            {title ? title : null }
                        </div>
                        {urlLogo ? <div className="image-logo"> <img src={urlLogo} alt="" /></div> : null}
                        {percentatge ? <div  className="title">-<span></span></div> : null}
                        {buttons && buttons.length > 0  
                        ? <div className="wrapper-buttons">
                            {buttons.map(button => 
                                <div className="text-button">
                                    {button.text}
                                </div>
                            )} 
                        </div> 
                        : null}          
                    </div>
                </div>
                <img src={urlImage} alt="" className="image"/>
            </div>
        </>
    );
};

// export default ImageComponent;

const LazyImageComponent = ({textColor, text, title, buttons, urlImage, urlLogo}) => {
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
        <div ref={elementRef} className="lazy-carousel">
            {show ? 
                <>
                    <ImageComponent textColor={textColor} title={title} buttons={buttons} urlImage={urlImage} urlLogo={urlLogo}/>
                    {text ? <AnimationText text={text} /> : null }
                </>
            : null}
        </div>
    );
}

export default LazyImageComponent;