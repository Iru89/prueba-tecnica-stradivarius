import * as React from "react";

const AnimationText = ({text}) => {
    return (
        <>
            {text ?
                <div className="animation-wrapper">
                    <p className="animation-text">
                        {text}
                        {/* ENVÍO A DOMICILIO GRATUITO */}
                    </p>
                </div> 
            : null }
        </>
    );
};

export default AnimationText;