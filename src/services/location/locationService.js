import camelize from "camelize";

export const locationRequest = async (searchTerm) => {
    const resp = await fetch(`http://localhost:5001/mealstogo-78c2c/us-central1/geocode?city=${searchTerm}`)
    return await resp.json()
};

export const locationTransform = (result) => {
    const formattedResponse = camelize(result);
    const { geometry = {} } = formattedResponse.results[0];
    const { lat, lng } = geometry.location;

    return { lat, lng, viewport: geometry.viewport };
};