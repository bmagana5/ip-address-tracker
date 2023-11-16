const ipGeoRouter = require('express').Router();
const config = require('../utils/config');

const tmpData = {
    ip: "97.97.66.57",
    location: {
        country: "US",
        region: "California",
        city: "Bakersfield",
        lat: 35.37329,
        lng: -119.01871,
        postalCode: "93301",
        timezone: "-08:00",
        geonameId: 5325738
    },
    as: {
        asn: 33363,
        name: "BHN-33363",
        route: "97.97.64.0/18",
        domain: "https://www.spectrum.com/",
        type: "Cable/DSL/ISP"
    },
    isp: "Road Runner HoldCo LLC"
};

ipGeoRouter.post('/', async (request, response, next) => {
    try {
        const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${config.API_KEY}`;
        console.log('called');
        return response.status(200).json(tmpData);
    } catch (error) {
        next(error);
    }
});

module.exports = ipGeoRouter;