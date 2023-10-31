import { IPContentInput } from "../ip-content-input/ip-content-input.component";
import { IPContentDataDisplay } from "../ip-content-data-display/ip-content-data-display.component";
import "./ip-content.styles.scss";

export const IPContent = () => {
    return (
        <div className="ip-content-container">
            <h2>IP Address Tracker</h2>
            <IPContentInput/>
            <IPContentDataDisplay/>
        </div>
    );
};
