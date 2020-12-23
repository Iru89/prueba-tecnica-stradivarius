import * as React from "react";
import Carousel from 'nuka-carousel';
import "./css/Main.css";
import AnimationText from "./AnimationText";
import {ImageComponent} from "./ImageComponent";


const ImagesCarousel = ({children}) => {

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
                {children.map(child => child)}
            </Carousel>
        </>
    );
};

// export default ImagesCarousel;

const LazyImagesCarousel = ({text}) => {
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
            {show ? <>
                <ImagesCarousel >
                    <ImageComponent textColor="red" title="COLECCIÓN FIESTA" percentatge={true} buttons={[{text: "COMPRAR", url: ""}]} urlImage="https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/2400_fiesta.jpg?t=20201222025002"/>
                    <ImageComponent textColor="white" title="NEW IN" buttons={[{text: "Ver todo", url: ""}]} urlImage="https://static.e-stradivarius.net/5/static2/homes/2020_w51/img/mkt-w/1920/2400_newin.jpg?t=20201222025002"/>
                </ImagesCarousel>
                <AnimationText text={text} />
            </>
            : null}
        </div>
    );
}

export default LazyImagesCarousel;