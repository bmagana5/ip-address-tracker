import { createContext, useEffect, useState } from "react";
import { ipGeoDataService } from "../services/ip-geo-data.service";

export const IPGeoDataContext = createContext({
    ipGeoData: null
});

export const IPGeoDataProvider = ({ children }) => {
    const [ipGeoData, setIpGeoData] = useState(null);

    useEffect(() => {
        const dataFetch = async () => {
            const localIpGeoData = window.localStorage.getItem('userIPGeoData');
    
            if (localIpGeoData) {
                // test if data is valid form. fetch from API if not
                try {
                    const parsedData = JSON.parse(localIpGeoData);
                    const requiredMainProps = ['ip', 'location', 'as', 'isp'];

                    if (Object.getOwnPropertyNames(parsedData).every(property => requiredMainProps.includes(property))) {
                        const locationSubObj = parsedData.location;
                        const requiredLocProps = ['country', 'region', 'city', 'lat', 'lng', 'postalCode', 'timezone', 'geonameId'];
                        
                        if (Object.getOwnPropertyNames(locationSubObj).every(property => requiredLocProps.includes(property))) {
                            console.log('valid local storage data found!');
                            setIpGeoData(parsedData);
                        } else throw new Error('invalid data in local storage')
                    } else throw new Error('invalid data in local storage')
                } catch (error) {
                    console.error(error);
                    try {
                        const fetchedData = await ipGeoDataService.getIpGeoData();
                        // console.log('fetchedData: ', fetchedData);
                        window.localStorage.setItem('userIPGeoData', JSON.stringify(fetchedData));
                        setIpGeoData(fetchedData);
                    } catch (e) {
                        console.error(e);
                    }
                }
            } else {
                // fetch ipGeoData from IP Geolocation API and set localStorage
                console.log('no local storage data, fetching...')
                const fetchedData = await ipGeoDataService.getIpGeoData();
                window.localStorage.setItem('userIPGeoData', JSON.stringify(fetchedData));
                setIpGeoData(fetchedData);
            }
        };
        dataFetch();
    }, []);

    const value = {
        ipGeoData
    };

    return <IPGeoDataContext.Provider value={value}>{children}</IPGeoDataContext.Provider>
};