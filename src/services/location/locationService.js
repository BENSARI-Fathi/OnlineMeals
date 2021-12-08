import camelize from "camelize";

export const locationRequest = async (searchTerm) => {
    const url = "http://192.168.1.6:5001/mealstogo-78c2c/us-central1/geocode"
    try {
        const resp = await fetch(url + `?city=${searchTerm}`)
        return await resp.json()
    } catch (error) {
        console.log(error)
    }

};

export const locationTransform = (result) => {
    const formattedResponse = camelize(result);
    const { geometry = {} } = formattedResponse.results[0];
    const { lat, lng } = geometry.location;

    return { lat, lng, viewport: geometry.viewport };
};