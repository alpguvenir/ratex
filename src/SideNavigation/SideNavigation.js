import React, {useState} from "react";
import './SideNavigation.css';
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {SideNavigationData} from "./SideNavigationData";
import { IconContext } from "react-icons";

// Side navigation component
function SideNavigation() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => {setSidebar(!sidebar)}

    return (
        <>
            <IconContext.Provider value = {{color: "fff"}}>
                <div className="Side-navigation">
                    <Link to='#' className="Side-navigation-hamburger-menu">
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                </div>
                <nav className={sidebar ? "Side-navigation-menu active" : "Side-navigation-menu"}>
                    <ul className="Side-navigation-menu-items" onClick={showSidebar}>
                        <li className="Side-navigation-hamburger-menu-toggle">
                            <Link to='#' className="Side-navigation-hamburger-menu">
                                <AiIcons.AiOutlineClose/>
                            </Link>
                        </li>
                        {SideNavigationData.map((item, index) => {
                            return(
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default SideNavigation;