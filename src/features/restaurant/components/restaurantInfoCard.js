import React from 'react'
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star'
import open from '../../../../assets/open'
import { Spacer } from '../../../utils/Spacer'
import { Text } from '../../../utils/Typography'
import {
    RestaurentCard, RestaurentCardCover,
    Info, Section, SectionEnd,
    RestaurentIcon, Rating
} from './restaurentCardStyle'
import Favourite from '../../../features/favourite/components/Favourite'



export default function RestaurantInfoCard({ restaurant = {} }) {
    const {
        name = 'Some Restaurent',
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"
        ],
        address = '100 Some random street',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
        placeId
    } = restaurant
    const ratingArray = Array.from(new Array(Math.floor(rating)));
    return (
        <RestaurentCard>
            <Card elevation={5}>
                <Favourite restaurant={restaurant} />
                <RestaurentCardCover source={{ uri: photos[0] }} />
                <Info>
                    <Text variant="label">{name}</Text>
                    <Section>
                        <Rating>
                            {ratingArray.map((_, index) => (
                                <SvgXml key={`${placeId}-${index}`} xml={star} width={20} height={20} />
                            ))}
                        </Rating>
                        <SectionEnd>
                            <Spacer position="right" size="medium">
                                {isClosedTemporarily && <Text variant="error">Closed Temporarely</Text>}
                            </Spacer>
                            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                            <Spacer position="left" size="medium">
                                <RestaurentIcon source={{ uri: icon }} />
                            </Spacer>
                        </SectionEnd>
                    </Section>
                    <Text variant="caption">{address}</Text>
                </Info>
            </Card>
        </RestaurentCard>
    )
}
