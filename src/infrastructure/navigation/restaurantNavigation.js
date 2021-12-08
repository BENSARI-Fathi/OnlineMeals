import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import RestaurantScreen from '../../features/restaurant/screen/restaurantScreen';
import RestaurantDetailScreen from '../../features/restaurant/screen/RestaurantDetailScreen'

const RestaurantStack = createStackNavigator()
export const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator screenOptions={{
            headerShown: false,
            ...TransitionPresets.ModalSlideFromBottomIOS
        }}>
            <RestaurantStack.Screen
                name="Restaurants"
                component={RestaurantScreen}

            />
            <RestaurantStack.Screen
                name="RestaurantDetail"
                component={RestaurantDetailScreen}
            />
        </RestaurantStack.Navigator>
    )
}