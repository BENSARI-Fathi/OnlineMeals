import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import SettingScreen from '../../features/setting/screen/SettingScreen'
import FavouriteScreen from '../../features/setting/screen/FavouriteScreen'
import { CameraScreen } from '../../features/setting/screen/CameraScreen'


const SettingStack = createStackNavigator()
export const SettingNavigator = () => {
    return (
        <SettingStack.Navigator screenOptions={{
            headerShown: false,
            ...TransitionPresets.ModalSlideFromBottomIOS
        }}>
            <SettingStack.Screen
                name="Setting"
                component={SettingScreen}

            />
            <SettingStack.Screen
                options={{
                    headerShown: true,
                }}
                name="Favourites"
                component={FavouriteScreen}
            />
            <SettingStack.Screen
                options={{
                    headerShown: true,
                }}
                name="Camera"
                component={CameraScreen}
            />
        </SettingStack.Navigator>
    )
}