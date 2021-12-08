import React from 'react'
import { TouchableOpacity, ScrollView, Image } from 'react-native'
import styled from "styled-components/native";
import { Text } from '../../../utils/Typography'
import CompactRestaurantInfo from '../../restaurant/components/compactRestaurantInfo'
import { Spacer } from '../../../utils/Spacer'

const FavouritesWrapper = styled.View`
    padding: ${(props) => props.theme.space[3]};
`

export default function FavouriteBar({ favourites, onNavigation }) {
    return (
        <FavouritesWrapper>
            <Spacer position="bottom" size="medium">
                <Text variant="caption">Favourites</Text>
            </Spacer>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {favourites.map((restaurant) => {
                    return (
                        <Spacer key={restaurant.name} position="left" size="medium">
                            <TouchableOpacity onPress={() =>
                                onNavigation("RestaurantDetail", { restaurant })
                            }>
                                <CompactRestaurantInfo restaurant={restaurant} isFav />
                            </TouchableOpacity>
                        </Spacer>
                    )
                })}
            </ScrollView>
        </FavouritesWrapper>
    )
}

