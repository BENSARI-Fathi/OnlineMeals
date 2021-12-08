import React from 'react'
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform } from "react-native";
import { Text } from '../../../utils/Typography'

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`

const Item = styled.View`
  border-radius: 10px;
  max-width: 120px;
  align-items: center;
`

const isAndroid = Platform.OS === "android"

export default function CompactRestaurantInfo({ restaurant, isFav = false }) {
  const Image = isAndroid && !isFav ? CompactWebview : CompactImage;
  return (
    <Item>
      <Image
        source={{ uri: restaurant.photos[0] }}
      />
      <Text variant="caption">{restaurant.name}</Text>

    </Item>
  )
}
