import * as React from "react";
import Carousel from 'nuka-carousel';
import "./css/Main.css";
import AnimationText from "./AnimationText";
import {ImageComponent} from "./ImageComponent";
import { useNearScreen } from "../../utils/core";


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

const LazyImagesCarousel = ({text, items}) => {
    
    const { isNearScreen, fromRef } = useNearScreen();

    return (
        <div ref={fromRef} className="lazy">
            {isNearScreen ? <>
                <ImagesCarousel >
                    {items.map(item => <ImageComponent 
                        textColor={item.textColor} 
                        title={item.title} 
                        percentatge={item.percentatge && items[0].percentatge.length > 0 ? true : false} 
                        buttons={item.buttons} 
                        urlImage={item.urlImage} 
                    />)}
                </ImagesCarousel>
                <AnimationText text={text} />
            </>
            : null}
        </div>
    );
}

export default LazyImagesCarousel;