import React, { useState, createContext, useEffect } from 'react';
import { locationRequest, locationTransform } from './locationService'

export const LocationContext = createContext();
export const LocationContextProvider = ({ children }) => {
    const [location, setLocation] = useState(null)
    const [keyword, setKeyword] = useState("san francisco")
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const onSearch = (searchKeyword) => {
        setIsLoading(true)
        setKeyword(searchKeyword.toLowerCase())
    }

    useEffect(() => {
        locationRequest(keyword).
            then(locationTransform).
            then((res) => {
                setIsLoading(false)
                setLocation(res)
                setError(null)
            }).catch(err => {
                setIsLoading(false)
                setError(err)
            })
    }, [keyword])


    return (
        <LocationContext.Provider
            value={{
                isLoading,
                error,
                location,
                keyword,
                search: onSearch
            }}
        >
            {children}
        </LocationContext.Provider >
    )
}