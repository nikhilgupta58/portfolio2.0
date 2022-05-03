
import { FlexProps } from "@chakra-ui/react";
import React, { useState } from "react";
import NavigationBarView from "./NavigationBar.view";
import { NavigationBarContext } from "./utils/context";

export default function NavigationBarContainer() {
    const [yPos, setYPos] = useState(window.scrollY)
    const [show, setShow] = useState(false)
    const winH = window.innerHeight
    const items = [
        {
            title: 'HOME',
            active: yPos <= winH && yPos >= 0,
            href: '#home'
        },
        {
            title: 'ABOUT',
            active: yPos <= winH * 2 && yPos > winH,
            href: '#about'
        },
        {
            title: 'PORTFOLIO',
            active: yPos <= winH * 3 && yPos > winH*2,
            href: '#portfolio'
        },
        {
            title: 'BLOG',
            active: false,
            href: '#blog'
        },
        {
            title: 'CONTACT',
            active: false,
            href: '#contact'
        },
    ]
    React.useEffect(() => {
        function handleScroll() {
            setYPos(window.scrollY)
        }
        window.addEventListener("scroll", handleScroll, false);

        return () => {
            window.removeEventListener("scroll", handleScroll, false);
        };
    }, [window.scrollY, window.innerHeight])
    const variants = {
        open: { display: 'inherit', x: 0 },
        closed: { display: 'none', x: "-100%" },
    }
    return (
        <NavigationBarContext.Provider
            value={{
                items,
                show, setShow, variants
            }}
        >
            <NavigationBarView />
        </NavigationBarContext.Provider>
    );
}
