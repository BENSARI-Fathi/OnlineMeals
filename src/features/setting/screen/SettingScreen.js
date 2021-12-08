import React, { useContext, useState, useCallback } from 'react'
import { SafeArea } from '../../../utils/SafeArea'
import { AuthenticationContext } from '../../../services/authentication/authenticationContext'
import { List, Avatar } from 'react-native-paper';
import styled from "styled-components/native";
import { Text } from '../../../utils/Typography'
import { Spacer } from '../../../utils/Spacer'
import { TouchableOpacity } from 'react-native'
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingItem = styled(List.Item)`
    padding: ${(props) => props.theme.space[3]};
`

const AvatarContaier = styled.View`
    align-items: center;
    margin: ${(props) => props.theme.space[3]}
`

export default function SettingScreen({ navigation }) {
    const { onLogout, user } = useContext(AuthenticationContext)
    const [photo, setPhoto] = useState(null);
    const getProfilePicture = async (currentUser) => {
        const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
        setPhoto(photoUri);
    };

    const pictureCallback = useCallback(
        () => {
            getProfilePicture(user);
        },
        [user],
    )
    useFocusEffect(pictureCallback);


    return (
        <SafeArea>
            <AvatarContaier>
                <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
                    {photo ? <Avatar.Image
                        size={180}
                        source={{ uri: photo }}
                        backgroundColor="#2182BD"
                    /> :
                        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
                    }

                </TouchableOpacity>
                <Spacer position="top" size="large">
                    <Text variant="label">{user.email}</Text>
                </Spacer>
            </AvatarContaier>
            <List.Section>
                <SettingItem
                    style={{ padding: 16 }}
                    title="Favourites"
                    description="View your favourites"
                    left={(props) => <List.Icon {...props} color="black" icon="heart" />}
                    onPress={() => navigation.navigate("Favourites")}
                />
                <SettingItem
                    style={{ padding: 16 }}
                    title="Logout"
                    left={(props) => <List.Icon {...props} color="black" icon="door" />}
                    onPress={onLogout}
                />
            </List.Section>
        </SafeArea>
    )
}
