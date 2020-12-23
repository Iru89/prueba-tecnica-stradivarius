import * as React from "react";
import AnimationText from "./AnimationText";
import { useNearScreen } from "../../utils/core";
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
                                <div key={button.text} className="text-button">
                                    <a href={button.url} target="_blank" rel="noopener noreferrer">{button.text}</a>
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

const LazyImageComponent = ({textColor, text, title, buttons, urlImage, urlLogo}) => {
    
    const { isNearScreen, fromRef } = useNearScreen();
    
    return (
        <div ref={fromRef} className="lazy-carousel">
            {isNearScreen ? 
                <>
                    <ImageComponent textColor={textColor} title={title} buttons={buttons} urlImage={urlImage} urlLogo={urlLogo}/>
                    {text ? <AnimationText text={text} /> : null }
                </>
            : null}
        </div>
    );
}

export default LazyImageComponent;