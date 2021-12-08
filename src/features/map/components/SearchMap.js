import React, { useState, useContext, useEffect } from 'react'
import { Searchbar } from 'react-native-paper'
import { LocationContext } from '../../../services/location/locationContext'
import styled from 'styled-components/native';


const SearchBarContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
    position: absolute;
    z-index: 999;
    top: 40px;
    width: 100%;
`


export default function SearchMap() {
    const { keyword, search } = useContext(LocationContext)
    const [searchQuery, setSearchQuery] = useState(keyword);
    useEffect(() => {
        setSearchQuery(keyword)
    }, [keyword])

    return (
        <SearchBarContainer>
            <Searchbar
                placeholder="Search for a location"
                icon="google-maps"
                onChangeText={(query) => setSearchQuery(query)}
                value={searchQuery}
                onSubmitEditing={() => {
                    search(searchQuery)
                }}
                clearIcon
            />
        </SearchBarContainer>
    );
}
