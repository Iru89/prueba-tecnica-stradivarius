import * as React from "react";
import "./css/Main.css";

const ImageComponent = ({text, urlImage}) => {
    console.log("text", text);

    return (
        <>
            <div className="position-relative">
                <div className="position">
                    <div className="wrapper font-white">
                        <div>ABRIGOS</div>
                        <div>VER TODO</div>            
                    </div>
                </div>
                <img src={urlImage} alt="" className="image"/>
            </div>
            {text.data && text.data.length > 1 ?
                <div className="animation-wrapper">
                    <p className="animation-text">
                        {text.data[1]}
                        {/* ENVÍO A DOMICILIO GRATUITO */}
                    </p>
                </div> 
            : null }
        </>
    );
};

// export default ImageComponent;

const LazyImageComponent = ({text, urlImage}) => {
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
            {show ? <ImageComponent text={text} urlImage={urlImage}/> : null}
        </div>
    );
}

export default LazyImageComponent;