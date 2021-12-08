import camelize from "camelize";

export const restaurantsRequest = async (location = "37.7749295,-122.4194155") => {
    try {
        const resp = await fetch(
            `http://192.168.1.6:5001/mealstogo-78c2c/us-central1/places?location=${location}`
        )
        return await resp.json()
    } catch (error) {
        console.log(error)
    }
};

export const restaurantsTransform = ({ results }) => {
    const mappedResult = results.map((restaurant) => {

        return {
            ...restaurant,
            address: restaurant.vicinity,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY"
        }
    })
    return camelize(mappedResult)
}
