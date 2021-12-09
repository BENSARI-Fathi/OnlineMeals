import React, { useContext, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native';
import SearchBar from '../components/SearchBar';
import RestaurantInfoCard from '../components/restaurantInfoCard';
import { SafeArea } from '../../../utils/SafeArea'
import { RestaurantsContext } from '../../../services/restaurants/restaurantContext'
import { FavouritesContext } from '../../../services/favourite/favouriteContext'
import { LocationContext } from '../../../services/location/locationContext'
import Spinner from '../components/Spinner';
import FavouriteBar from '../../favourite/components/FavouriteBar';
import { RestaurantList, ErrorMessage } from '../components/restaurentCardStyle'
import { FadeInView } from '../../../utils/FadeAnimation'
import { Text } from '../../../utils/Typography'

export default function RestaurantScreen({ navigation }) {
    const restaurantContext = useContext(RestaurantsContext)
    const { favourites } = useContext(FavouritesContext)
    const { isLoading, restaurants, error } = restaurantContext
    const { error: errorLocation } = useContext(LocationContext)
    const [isToggled, setIsToggled] = useState(false);
    const SearchBarContainer = styled.View`
        padding: ${(props) => props.theme.space[3]};
    `
    return (
        <SafeArea>
            <SearchBarContainer>
                <SearchBar
                    isFavouritesToggled={isToggled}
                    onFavouritesToggle={() => setIsToggled(!isToggled)}
                />
            </SearchBarContainer>
            {isToggled && <FavouriteBar favourites={favourites} onNavigation={navigation.navigate} />}
            {isLoading ?
                <Spinner color="#e91e63" /> :
                error || errorLocation ?
                    <ErrorMessage>
                        <Text variant="error">Something went wrong while retrieving the data</Text>
                    </ErrorMessage>
                    :
                    <RestaurantList
                        data={restaurants}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail",
                                    { restaurant: item })}>
                                    <FadeInView>
                                        <RestaurantInfoCard restaurant={item} />
                                    </FadeInView>
                                </TouchableOpacity>
                            )
                        }}
                        keyExtractor={(item) => item.name}
                    />
            }

        </SafeArea>
    )
}