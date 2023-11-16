import { IPContentInput } from "../ip-content-input/ip-content-input.component";
import { IPContentDataDisplay } from "../ip-content-data-display/ip-content-data-display.component";
import "./ip-content.styles.scss";
import { IPGeoDataContext } from "../../contexts/ip-geo-data.context";
import { useContext } from "react";

export const IPContent = () => {
    const { ipGeoData } = useContext(IPGeoDataContext);

    return (
        <div className="ip-content-container">
            <h2>IP Address Tracker</h2>
            <IPContentInput/>
            {ipGeoData && <IPContentDataDisplay/>}
        </div>
    );
};
