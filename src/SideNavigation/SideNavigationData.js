import React from "react";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"

export const SideNavigationData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome/>,
        cName: "nav-text"
    },
    {
        title: "Charts",
        path: "/charts",
        icon: <IoIcons.IoIosPaper/>,
        cName: "nav-text"
    },
    {
        title: "News",
        path: "/news",
        icon: <FaIcons.FaCartPlus/>,
        cName: "nav-text"
    }
]