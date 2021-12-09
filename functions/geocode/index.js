const { locations: locationsMock } = require("./mock/mockLocations")
const functions = require('firebase-functions');
const url = require("url")

module.exports.geocodeRequest = (request, response, client) => {
    const { city, mock } = url.parse(request.url, true).query
    if (mock === "true") {
        const locationMock = locationsMock[city]
        return response.json(locationMock)
    }
    client.geocode({
        params: {
            address: city,
            key: functions.config().google.key
        },
        timeout: 1000
    }).
        then(resp => {
            return response.json(resp.data)
        }).
        catch(err => {
            response.status = 400
            response.send(err.response.data.error_message)
        })
}