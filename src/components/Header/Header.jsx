import * as React from "react";
import menuImg from "../../images/bars-solid.svg";
import searchImg from "../../images/search-solid.svg";
import userImg from "../../images/user-regular.svg";
import bookmarkImg from "../../images/bookmark-regular.svg";
import cartImg from "../../images/shopping-cart-solid.svg";
import stradivariusLogo from "../../images/logo_stradivarius.svg";
import "./css/Header.css"

export const Header = () => {
    const [value, setValue] = React.useState("");
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <div className="header-wrapper">
            <div  className="header-menu">
                <img src={menuImg} alt="menu" className="header-svg"/>
            </div>
            <div className="header-stradivarius">
                <a
                    href="https://stradivarius.com/es/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={stradivariusLogo} alt="Stradivarius" />
                </a>
            </div>
            <div className="header-search">
                <img src={searchImg} alt="menu" className="header-svg"/>
                <input type="text" value={value} onChange={(event) => handleChange(event)} className="header-input"/>
                <img src={userImg} alt="menu" className="header-svg"/>
                <img src={bookmarkImg} alt="menu" className="header-svg"/>
                <img src={cartImg} alt="menu" className="header-svg"/>
            </div>
        </div>
    );
}