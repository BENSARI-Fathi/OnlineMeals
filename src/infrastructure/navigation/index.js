import React, { useContext, useEffect, useState } from 'react'
import AppNavigator from './appNavigator'
import { AccountsNavigator } from './accountNavigator'
import { NavigationContainer } from '@react-navigation/native';
import { AuthenticationContext } from '../../services/authentication/authenticationContext'
import Spinner from '../../features/restaurant/components/Spinner'


export const Navigator = () => {
    const [loader, setLoader] = useState(true)
    const { isAuthenticated, userSession, user } = useContext(AuthenticationContext)
    useEffect(() => {
        userSession(setLoader)
    }, [isAuthenticated, user])
    return (
        <NavigationContainer>
            {loader ? <Spinner /> : isAuthenticated ? <AppNavigator /> : <AccountsNavigator />}
        </NavigationContainer>

    )

}