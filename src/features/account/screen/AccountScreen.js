import React from 'react'
import { AccountBackground, AccountCover, AccountContainer, Title, AnimationCover } from '../components/AccountStyles'
import { Button } from 'react-native-paper';
import { Spacer } from '../../../utils/Spacer'
import LottieView from "lottie-react-native";

export default function AccountScreen({ navigation }) {
    return (
        <AccountBackground>
            <AccountCover />
            <AnimationCover>
                <LottieView
                    key="animation"
                    autoPlay
                    loop
                    resizeMode="cover"
                    source={require("../../../../assets/HambourgerArrox.json")}
                />
            </AnimationCover>
            <Title>Meals To Go</Title>
            <Spacer position="bottom" size="small" />
            <AccountContainer>
                <Button icon="lock-outline" mode="contained" onPress={() =>
                    navigation.navigate("Login")
                }>
                    Login
                </Button>
                <Spacer position="bottom" size="small" />
                <Button icon="lock-outline" mode="contained" onPress={() =>
                    navigation.navigate("Register")
                }>
                    Register
                </Button>
            </AccountContainer>
        </AccountBackground>
    )
}
