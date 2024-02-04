/* eslint-disable no-unused-vars */
//Modules
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

//Icons
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

//Component
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

//Scss
import "./header.scss";


const Header = () => {
    const [scrolled, setScrolled] = useState(false)

    const handelScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    };


    useEffect(() => {
        window.addEventListener("scroll", handelScroll)
    }, []);


    return (
        <div className={`main-header ${scrolled ? "sticky-header" : ""}`}>
            <div className="header-content">
                <ul className="left">
                    <li>Home</li>
                    <li>About</li>
                    <li>Category</li>
                </ul>
                <div className="center">
                    ZeeStore
                </div>
                <div className="right">
                    <TbSearch />
                    <AiOutlineHeart />
                    <span className="cart-icon">
                        <CgShoppingCart />
                        <span>5</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Header;
