import camelize from "camelize";
import { host, isMock } from '../../utils/env'

export const restaurantsRequest = async (location = "37.7749295,-122.4194155") => {
    try {
        const resp = await fetch(
<<<<<<< HEAD
            `${host}/places?location=${location}&mock=${isMock}`
=======
            `${host}/places?location=${location}?mock=true`
>>>>>>> 9253460... set mock to true to not consume too many api request on google.place.api
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
