import * as React from "react";
import { useNearScreen } from "../../utils/core";
import "./css/Main.css";

const Grid = ({items}) => {
    return (
        <div className="grid2x2">
            <div>
                <img src={items[0].urlImg} alt=""/>
            </div>
            <div className="card">
                <div className="card-text">{items[0].text}</div>
                {items[0] && items[0].links && items[0].links.length > 0 
                    ? items[0].links.map((link, index) => <div key={`${link.text}-${index}`} className="card-link"><a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a></div>) 
                    : null }
            </div>
            <div  className="card">
                <div className="card-text">{items[1].text}</div>
                <div>
                {items[1] && items[1].links && items[1].links.length > 1 
                    ? items[1].links.map((link, index) => <div key={`${link.text}-${index}`} className="card-link"><a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a></div>) 
                    : null }
                </div>
            </div>
            <div>
                <img src={items[1].urlImg} alt=""/>
            </div>
        </div>
    );
};

const LazyGrid = ({items}) => {
    
    const { isNearScreen, fromRef } = useNearScreen();

    return (
        <div ref={fromRef}>
            {isNearScreen 
            ? <>
                <Grid items={items} />
            </>
            : null}
        </div>
    );
}

export default LazyGrid;