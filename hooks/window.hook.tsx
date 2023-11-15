"use client"
import {useEffect, useState} from "react";

export default function useWindowSize() {

    const [windowSize, setWindowSize] = useState({
        windowsWidth: 0,
        windowHeight: 0,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                windowsWidth: window.innerWidth,
                windowHeight: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}