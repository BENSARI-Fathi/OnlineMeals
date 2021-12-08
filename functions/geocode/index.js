const { locations: locationsMock } = require("./mock/mockLocations")
const url = require("url")

module.exports.geocodeRequest = (request, response) => {
    const { city } = url.parse(request.url, true).query
    const locationMock = locationsMock[city]
    response.json(locationMock)
}