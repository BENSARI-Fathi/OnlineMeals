import React from 'react'
import AccountScreen from '../../features/account/screen/AccountScreen'
import LoginScreen from '../../features/account/screen/LoginScreen'
import RegisterScreen from '../../features/account/screen/RegisterScreen'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

const AccountStack = createStackNavigator()

export const AccountsNavigator = () => {
    return (
        <AccountStack.Navigator screenOptions={{
            headerShown: false,
            ...TransitionPresets.ModalSlideFromBottomIOS
        }}>
            <AccountStack.Screen
                name="Main"
                component={AccountScreen}

            />
            <AccountStack.Screen
                name="Login"
                component={LoginScreen}
            />
            <AccountStack.Screen
                name="Register"
                component={RegisterScreen}
            />
        </AccountStack.Navigator>
    )
}