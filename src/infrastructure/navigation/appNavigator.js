import React from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RestaurantsNavigator } from './restaurantNavigation'
import MapScreen from '../../features/map/screen/MapScreen'
import { FavouritesContextProvider } from '../../services/favourite/favouriteContext'
import { RestaurantsContextProvider } from '../../services/restaurants/restaurantContext'
import { LocationContextProvider } from '../../services/location/locationContext'
import { SettingNavigator } from './settingNavigator'

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    return (
        <FavouritesContextProvider>
            <LocationContextProvider>
                <RestaurantsContextProvider>
                    <Tab.Navigator initialRouteName="Home"
                        screenOptions={{
                            tabBarActiveTintColor: '#e91e63',
                        }}>
                        <Tab.Screen name="Restaurant"
                            component={RestaurantsNavigator}
                            options={{
                                headerShown: false,
                                tabBarLabel: 'Restaurant',
                                tabBarIcon: ({ color, size }) => (
                                    <Ionicons name="restaurant-outline" color={color} size={size} />
                                ),
                            }} />
                        <Tab.Screen name="Map"
                            component={MapScreen}
                            options={{
                                headerShown: false,
                                tabBarLabel: 'Map',
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="google-maps" color={color} size={size} />
                                ),
                            }} />
                        <Tab.Screen name="Settings"
                            component={SettingNavigator}
                            options={{
                                headerShown: false,
                                tabBarLabel: 'Settings',
                                tabBarIcon: ({ color, size }) => (
                                    <Ionicons name="settings-outline" color={color} size={size} />
                                ),
                            }} />
                    </Tab.Navigator>
                </RestaurantsContextProvider>
            </LocationContextProvider>
        </FavouritesContextProvider>
    )
}
