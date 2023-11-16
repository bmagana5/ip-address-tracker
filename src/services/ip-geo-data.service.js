import axios from "axios";

const baseUrl = '/api/ip-geo';

const getIpGeoData = async () => {
    const response = await axios.post(baseUrl);
    return response.data;
};

export const ipGeoDataService = {
    getIpGeoData
};