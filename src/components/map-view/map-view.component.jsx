import L from "leaflet";
import { useContext, useEffect, useRef, useState } from "react";
import { WindowContext } from "../../contexts/window.context";
import { IPGeoDataContext } from "../../contexts/ip-geo-data.context";

import "./map-view.styles.scss";
import "leaflet/dist/leaflet.css";

const MapView = () => {
    const { windowDimensions } = useContext(WindowContext);
    const { ipGeoData } = useContext(IPGeoDataContext);
    const [mapObj, setMapObj] = useState(null);
    const mapElement = useRef(null);

    const bgImgDesktop = require("../../assets/images/pattern-bg-desktop.png");
    const bgImgMobile = require("../../assets/images/pattern-bg-mobile.png");
    
    const rem = 16;

    useEffect(() => {
        if (ipGeoData) {
            const { lat, lng } = ipGeoData.location;
            console.log(mapElement.current);
            console.log(mapObj);
            if (mapElement.current !== null && mapObj === null) {
                const newMap = L.map(mapElement.current).setView([lat, lng], 13);
                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution: '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a>'
                }).addTo(newMap);
                setMapObj(newMap);
            }
        }
    }, [ipGeoData]);

    return(
        <div className="map-container">
            <img className="background" 
                src={windowDimensions.width > 768 + (3 * rem) ? bgImgDesktop : bgImgMobile} 
                alt="background" />
            <div id="map" ref={mapElement}/>
        </div>
    );
};

export { MapView };
