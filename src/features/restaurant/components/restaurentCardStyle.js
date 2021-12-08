import styled from 'styled-components/native';
import { Card } from "react-native-paper";
import { FlatList } from 'react-native';

export const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 0,
    },
})``

export const RestaurentCard = styled.View`
        padding: ${(props) => props.theme.space[3]};
        backgroundColor: ${(props) => props.theme.colors.bg.primary};
    `
export const RestaurentCardCover = styled(Card.Cover)`
padding: ${(props) => props.theme.space[3]};
backgroundColor: white;
`
export const Info = styled.View`
    padding: ${(props) => props.theme.space[3]};
`
export const Section = styled.View`
        flex-direction: row;
        align-items: center;
    `
export const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`
export const RestaurentIcon = styled.Image`
        width: 15px;
        height: 15px;
    `
export const Rating = styled.View`
flex-direction: row;
padding-top: ${(props) => props.theme.space[1]}
`