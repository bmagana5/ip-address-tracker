import { useContext } from "react";
import "./ip-content-data-display.styles.scss";
import { IPGeoDataContext } from "../../contexts/ip-geo-data.context";

export const IPContentDataDisplay = () => {
    const { ipGeoData } = useContext(IPGeoDataContext);

    const { ip, location, isp } = ipGeoData;
    const { city, region, postalCode, timezone } = location;

    return (
        <div className="ip-content-data-display-container">
            <div className="data-item">
                <h6>IP ADDRESS</h6>
                <span>{ip}</span>
            </div>
            <div className="data-item">
                <h6>LOCATION</h6>
                <span>{city}, {region} {postalCode}</span>
            </div>
            <div className="data-item">
                <h6>TIMEZONE</h6>
                <span>UTC {timezone}</span>
            </div>
            <div className="data-item">
                <h6>ISP</h6>
                <span>{isp}</span>
            </div>
        </div>
    );
};