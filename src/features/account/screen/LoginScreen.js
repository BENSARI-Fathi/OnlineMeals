import React, { useState, useContext } from 'react'
import { TextInput, Button } from 'react-native-paper';
import { AccountBackground, AccountCover, FormContainer, Title, ErrorContainer } from '../components/AccountStyles'
import { Spacer } from '../../../utils/Spacer'
import { AuthenticationContext } from '../../../services/authentication/authenticationContext'
import { Text } from '../../../utils/Typography'

export default function LoginScreen() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
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
                <TextInput
                    label="Password"
                    secureTextEntry
                    autoCapitalize="none"
                    value={password}
                    onChangeText={value => setPassword(value)}
                />
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
