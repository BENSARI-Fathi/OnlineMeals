import React, { useContext, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native';
import SearchBar from '../components/SearchBar';
import RestaurantInfoCard from '../components/restaurantInfoCard';
import { SafeArea } from '../../../utils/SafeArea'
import { RestaurantsContext } from '../../../services/restaurants/restaurantContext'
import { FavouritesContext } from '../../../services/favourite/favouriteContext'
import Spinner from '../components/Spinner';
import FavouriteBar from '../../favourite/components/FavouriteBar';
import { RestaurantList } from '../components/restaurentCardStyle'
import { FadeInView } from '../../../utils/FadeAnimation'

export default function RestaurantScreen({ navigation }) {
    const restaurantContext = useContext(RestaurantsContext)
    const { favourites } = useContext(FavouritesContext)
    const { isLoading, restaurants } = restaurantContext
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