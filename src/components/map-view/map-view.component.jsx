import L from "leaflet";
import { useContext, useEffect, useRef, useState } from "react";
import { WindowContext } from "../../contexts/window.context";

import "./map-view.styles.scss";

const MapView = () => {
    const { windowDimensions } = useContext(WindowContext);
    const [map, setMap] = useState(null);
    const mapElement = useRef(null);

    const bgImgDesktop = require("../../assets/images/pattern-bg-desktop.png");
    const bgImgMobile = require("../../assets/images/pattern-bg-mobile.png");
    
    useEffect(() => {
        if (mapElement.current !== null && map !== null) {
            setMap(L.map(mapElement.current));
        }
    }, []);

    return(
        <div className="map-container">
            <img className="background" 
                src={windowDimensions.width > 480 ? bgImgDesktop : bgImgMobile} 
                alt="background" />
            <div id="map" ref={mapElement}/>
        </div>
    );
};

export { MapView };
