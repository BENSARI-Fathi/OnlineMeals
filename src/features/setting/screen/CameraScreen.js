import React, { useRef, useState, useEffect, useContext } from "react";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { View, Dimensions } from "react-native";
import { Text } from "../../../utils/Typography";
import { AuthenticationContext } from "../../../services/authentication/authenticationContext";
import { IconButton, Colors } from 'react-native-paper';

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const SnapButton = styled(IconButton)`
    position: absolute;
    bottom: 20px;
    left: ${Dimensions.get('window').width / 2 - 50}px;
`

export const CameraScreen = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const cameraRef = useRef();
    const { user } = useContext(AuthenticationContext);

    const snap = async () => {
        if (cameraRef) {
            const photo = await cameraRef.current.takePictureAsync();
            AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
            navigation.goBack();
        }
    };

    useEffect(() => {
        (async () => {
            try {
                const { status } = await Camera.requestCameraPermissionsAsync();
                setHasPermission(status === "granted");
            } catch (error) {
                console.log(error)
            }
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <ProfileCamera
            ref={(camera) => (cameraRef.current = camera)}
            type={Camera.Constants.Type.front}
        >
            <SnapButton
                icon="camera"
                color={Colors.red500}
                size={50}
                onPress={snap}
            />
        </ProfileCamera>
    );
};