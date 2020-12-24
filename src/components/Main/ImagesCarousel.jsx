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
                    {/* <ImageComponent 
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
                    /> */}
                </ImagesCarousel>
                <AnimationText text={text} />
            </>
            : null}
        </div>
    );
}

export default LazyImagesCarousel;