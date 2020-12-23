import * as React from "react";


const Grid = ({items}) => {
    return (
        <div className="grid2x2">
            <div>
                <img src={items[0].urlImg} alt=""/>
            </div>
            <div className="card">
                <div className="card-text">{items[0].text}</div>
                {items[0] && items[0].links && items[0].links.length > 0 
                    ? items[0].links.map(link => <div className="card-link">{link.text}</div>) 
                    : null }
            </div>
            <div  className="card">
                <div className="card-text">{items[1].text}</div>
                <div>
                {items[1] && items[1].links && items[1].links.length > 1 
                    ? items[1].links.map(link => <div key={link.text} className="card-link">{link.text}</div>) 
                    : null }
                </div>
            </div>
            <div>
                <img src={items[1].urlImg} alt=""/>
            </div>
        </div>
    );
};

// export default Grid;

const LazyGrid = ({items}) => {
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
        <div ref={elementRef}>
            {show 
            ? <>
                <Grid items={items} />
            </>
            : null}
        </div>
    );
}

export default LazyGrid;