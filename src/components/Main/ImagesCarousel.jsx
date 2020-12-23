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

const LazyImagesCarousel = ({text, items}) => {
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
                    <ImageComponent 
                        textColor={items[0].textColor} 
                        title={items[0].title} 
                        percentatge={items[0].percentatge && items[0].percentatge.length > 0 ? true : false} 
                        buttons={items[0].buttons} 
                        urlImage={items[0].urlImage} 
                    />
                    <ImageComponent 
                        textColor={items[1].textColor} 
                        title={items[1].title}
                        percentatge={items[1].percentatge && items[1].percentatge.length > 0 ? true : false}  
                        buttons={items[1].buttons} 
                        urlImage={items[1].urlImage} 
                    />
                </ImagesCarousel>
                <AnimationText text={text} />
            </>
            : null}
        </div>
    );
}

export default LazyImagesCarousel;