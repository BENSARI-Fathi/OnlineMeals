import React, { useState, useContext } from 'react'
import { TextInput, Button } from 'react-native-paper';
import {
    AccountBackground,
    AccountCover,
    FormContainer,
    Title,
    ErrorContainer,
    PasswordWrapper, PasswordField, EyeIcon
} from '../components/AccountStyles'
import { Spacer } from '../../../utils/Spacer'
import { AuthenticationContext } from '../../../services/authentication/authenticationContext'
import { Text } from '../../../utils/Typography'
export default function LoginScreen() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [secure, setSecure] = useState(true)
    const name = secure ? "eye-off" : "eye"
    const {
        isLoading,
        error,
        onLogin } = useContext(AuthenticationContext)
    return (
        <AccountBackground>
            <AccountCover />
            <Title>Meals To Go</Title>
            <Spacer position="bottom" size="small" />
            <FormContainer>
                <TextInput
                    label="Email"
                    value={email}
                    autoCapitalize="none"
                    onChangeText={value => setEmail(value)}
                />
                <Spacer position="bottom" size="medium" />
                <PasswordWrapper>
                    <PasswordField
                        label="Password"
                        secureTextEntry={secure}
                        autoCapitalize="none"
                        icon="lock"
                        value={password}
                        onChangeText={value => setPassword(value)}
                    />
                    <EyeIcon name={name} size={24}
                        color="gray"
                        onPress={() => setSecure(!secure)} />
                </PasswordWrapper>
                <Spacer position="bottom" size="medium" />
                <Button icon="lock-outline" loading={isLoading}
                    disabled={isLoading} mode="contained" onPress={() =>
                        onLogin(email, password)
                    }>
                    Login
                </Button>
                {error &&
                    <Spacer position="top" size="medium">
                        <ErrorContainer>
                            <Text variant="error">{error.code}</Text>
                        </ErrorContainer>
                    </Spacer>
                }
            </FormContainer>
        </AccountBackground>

    );
}
