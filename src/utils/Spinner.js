import React from 'react'
import { ActivityIndicator, Colors } from 'react-native-paper';
import styled from 'styled-components/native';

const Loader = styled(ActivityIndicator)`
    flex: 1;
    align-content: center;
`

export default function Spinner(props) {
    const {
        color = Colors.red800,
        size = 'large'
    } = props
    return (
        <Loader color={color} size={size} />
    )
}
