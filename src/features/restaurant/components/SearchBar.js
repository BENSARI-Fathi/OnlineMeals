import React, { useState, useContext } from 'react'
import { Searchbar } from 'react-native-paper'
import { LocationContext } from '../../../services/location/locationContext'



export default function SearchBar({ isFavouritesToggled, onFavouritesToggle }) {
    const { keyword, search } = useContext(LocationContext)
    const [searchQuery, setSearchQuery] = useState(keyword);

    return (
        <Searchbar
            icon={isFavouritesToggled ? "heart" : "heart-outline"}
            onIconPress={() => onFavouritesToggle()}
            placeholder="Search for a location"
            onChangeText={(query) => setSearchQuery(query)}
            value={searchQuery}
            onSubmitEditing={() => {
                search(searchQuery)
            }}
            clearIcon
        />
    );
}
