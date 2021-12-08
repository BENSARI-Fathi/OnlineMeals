import React, { useState, createContext, useEffect, useContext } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from '../authentication/authenticationContext'

export const FavouritesContext = createContext()
export const FavouritesContextProvider = ({ children }) => {
    const { user } = useContext(AuthenticationContext)
    const [favourites, setFavourites] = useState([])
    const add = (restaurant) => {
        setFavourites([...favourites, restaurant])
    }
    const remove = (restaurant) => {
        const newFavourites = favourites.filter((x) => x.placeId !== restaurant.placeId)
        setFavourites(newFavourites)
    }
    const saveFavourites = async (value, uid) => {
        try {
            await AsyncStorage.setItem(`@favourites-${uid}`, JSON.stringify(value))
        } catch (e) {
            console.log("error saving", e)
        }
    }
    const loadFavourites = async (uid) => {
        try {
            const value = await AsyncStorage.getItem(`@favourites-${uid}`)
            if (value !== null) {
                setFavourites(JSON.parse(value))
            }
        } catch (e) {
            console.log("error loading", e)
        }
    }

    useEffect(() => {
        user && loadFavourites(user.uid)
    }, [user])

    useEffect(() => {
        user && saveFavourites(favourites, user.uid)
    }, [favourites, user])

    return (
        <FavouritesContext.Provider
            value={{
                favourites,
                addToFavourites: add,
                removeFromFavourites: remove
            }}
        >
            {children}
        </FavouritesContext.Provider>
    )

}