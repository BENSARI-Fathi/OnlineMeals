import React, { useContext } from 'react'
import { FavouritesContext } from '../../../services/favourite/favouriteContext'
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`

export default function Favourite({ restaurant }) {
    const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouritesContext)
    const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId)
    const name = isFavourite ? "heart" : "hearto"
    const color = isFavourite ? "red" : "white"
    return (
        <FavouriteButton
            onPress={() =>
                !isFavourite
                    ? addToFavourites(restaurant)
                    : removeFromFavourites(restaurant)
            }>
            <AntDesign name={name} size={24} color={color} />
        </FavouriteButton>
    )
}
