import React, { useEffect, useState, useMemo, createContext, useContext } from 'react';
import { restaurantsRequest, restaurantsTransform } from './restaurantService';
import { LocationContext } from '../location/locationContext'

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const { location } = useContext(LocationContext)

    const retrieveRestaurant = (position) => {
        setIsLoading(true)
        restaurantsRequest(position).
            then(restaurantsTransform).
            then((result) => {
                setIsLoading(false)
                setRestaurants(result)
            }).catch((err) => {
                setIsLoading(false)
                setError(err)
            })

    }
    useEffect(() => {
        if (location) {
            const loc = `${location.lat},${location.lng}`
            retrieveRestaurant(loc)
        }

    }, [location])
    return (
        <RestaurantsContext.Provider value={{
            restaurants,
            isLoading,
            error
        }}>
            {children}
        </RestaurantsContext.Provider>
    )
}