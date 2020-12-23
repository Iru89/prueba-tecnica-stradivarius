import * as React from "react";
import Carousel from 'nuka-carousel';
import "./css/Main.css";

const ImagesCarousel = ({text, urlImages}) => {
    console.log("text", text);
    const images = [
        <div className="position-relative" key={1}>
            <div className="position">
                <div className="wrapper font-red">
                    <div>COLECCIÓN FIESTA</div>
                    <div>-<span></span></div>
                    <div>COMPRAR</div>            
                </div>
            </div>
            <img src={urlImages[0]} alt="" className="image"/>
        </div>,
        <div className="position-relative" key={2}>
            <div className="position">
                <div className="wrapper font-white">
                    <div>NEW IN</div>
                    <div>VER TODO</div>
                </div>
            </div>
            <img src={urlImages[1]} alt="" className="image"/>
        </div>
    ];

    return (
        <>
            <Carousel 
                autoplay 
                autoplayInterval={3000} 
                dragging
                renderCenterLeftControls={({ previousSlide }) => (
                    null
                )}
                renderCenterRightControls={({ nextSlide }) => (
                    null
                )}
            >
                {images.map(image => image)}
            </Carousel>
            {text.data && text.data.length > 0 ?
                <div className="animation-wrapper">
                    <p className="animation-text">
                        {text.data[0]}
                        {/* ENVÍO A DOMICILIO GRATUITO */}
                    </p>
                </div> 
            : null }
        </>
    );
};

// export default ImagesCarousel;

const LazyImagesCarousel = ({text, urlImages}) => {
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
            {show ? <ImagesCarousel text={text} urlImages={urlImages}/> : null}
        </div>
    );
}

export default LazyImagesCarousel;