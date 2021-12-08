import React, { createContext, useState } from 'react'
import { loginRequest, registerRequest, auth, logoutRequest } from './authenticationService'

export const AuthenticationContext = createContext()

export const AuthenticationContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState({})
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const userSession = (loadingSpinner) => {
        return auth.onAuthStateChanged((usr) => {
            if (usr) {
                setUser(usr);
                setIsAuthenticated(true)
                loadingSpinner(false)
            } else {
                loadingSpinner(false)
                setIsAuthenticated(false)
            }
        })
    }

    const onLogin = (email, password) => {
        setIsLoading(true);
        { error && setError({}) }
        loginRequest(email, password)
            .then((u) => {
                setUser(u);
                setIsLoading(false);
                setIsAuthenticated(true);
            })
            .catch((e) => {
                setIsLoading(false);
                setError(e);
            });
    };
    const onRegister = (email, password, passwordConfirm) => {
        if (password !== passwordConfirm) {
            setError({ "code": "Password did not match" })
            return
        }
        setIsLoading(true);
        { error && setError({}) }
        registerRequest(email, password)
            .then((u) => {
                setUser(u);
                setIsLoading(false);
                setIsAuthenticated(true);
            })
            .catch((e) => {
                setIsLoading(false);
                setError(e);
            });
    }
    const onLogout = () => {
        setIsLoading(true)
        logoutRequest()
        setIsLoading(false)
    }
    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated,
                user,
                isLoading,
                error,
                onLogin,
                onRegister,
                onLogout,
                userSession,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}