import "./ip-content-data-display.styles.scss";

export const IPContentDataDisplay = () => {
    return (
        <div className="ip-content-data-display-container">
            <div className="data-item">
                <h6>IP ADDRESS</h6>
                <span>192.212.174.101</span>
            </div>
            <div className="data-item">
                <h6>LOCATION</h6>
                <span>Brooklyn, NY 10001</span>
            </div>
            <div className="data-item">
                <h6>TIMEZONE</h6>
                <span>UTC -05:00</span>
            </div>
            <div className="data-item">
                <h6>ISP</h6>
                <span>SpaceX Starlink</span>
            </div>
        </div>
    );
};