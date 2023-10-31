import { ReactComponent as IconArrow } from "../../assets/images/icon-arrow.svg";

import "./ip-content-input.styles.scss";

export const IPContentInput = () => {
    return (
        <div className="ip-content-input-container">
            <input type="text" 
                placeholder="Search for any IP address or domain"/>
            <button><IconArrow/></button>
        </div>
    );
};