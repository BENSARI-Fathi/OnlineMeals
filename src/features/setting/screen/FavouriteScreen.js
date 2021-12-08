import React, { useContext } from 'react'
import { FavouritesContext } from '../../../services/favourite/favouriteContext'
import { TouchableOpacity } from 'react-native'
import RestaurantInfoCard from '../../restaurant/components/restaurantInfoCard'
import { RestaurantList } from '../../restaurant/components/restaurentCardStyle'
import { SafeArea } from '../../../utils/SafeArea'
import styled from 'styled-components/native';
import { Text } from '../../../utils/Typography'
import { Spacer } from '../../../utils/Spacer'

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export default function FavouriteScreen({ navigation }) {
    const { favourites } = useContext(FavouritesContext)
    return favourites.length ?
        (
            <SafeArea>
                <RestaurantList
                    data={favourites}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail",
                                { restaurant: item })}>
                                <Spacer position="bottom" size="large">
                                    <RestaurantInfoCard restaurant={item} />
                                </Spacer>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item) => item.name}
                />
            </SafeArea>
        ) :
        <NoFavouritesArea>
            <Text>No favourites yet</Text>
        </NoFavouritesArea>
}
