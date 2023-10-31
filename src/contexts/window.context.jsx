import { createContext, useEffect, useState } from "react";

const getWindowDimmensions = () => {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    };
};

export const WindowContext = createContext({
    windowDimensions: {}
});

export const WindowProvider = ({ children }) => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimmensions());

    useEffect(() => {
        const resizeHandler = () => {
            setWindowDimensions(getWindowDimmensions());
        };
        window.addEventListener('resize', resizeHandler);
        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    const value = {
        windowDimensions
    };
    return <WindowContext.Provider value={value}>{children}</WindowContext.Provider>
};