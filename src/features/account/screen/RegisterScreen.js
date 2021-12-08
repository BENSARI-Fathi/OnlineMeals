import React, { useState, useContext } from 'react'
import { TextInput, Button } from 'react-native-paper';
import { AccountBackground, AccountCover, FormContainer, Title, ErrorContainer } from '../components/AccountStyles'
import { Spacer } from '../../../utils/Spacer'
import { AuthenticationContext } from '../../../services/authentication/authenticationContext'
import { Text } from '../../../utils/Typography'

export default function RegisterScreen() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const {
        isLoading,
        error,
        onRegister } = useContext(AuthenticationContext)
    return (
        <AccountBackground>
            <AccountCover />
            <Title>Meals To Go</Title>
            <Spacer position="bottom" size="small" />
            <FormContainer>
                <TextInput
                    label="email"
                    value={email}
                    autoCapitalize="none"
                    onChangeText={value => setEmail(value)}
                />
                <Spacer position="bottom" size="medium" />
                <TextInput
                    label="password"
                    secureTextEntry
                    autoCapitalize="none"
                    value={password}
                    onChangeText={value => setPassword(value)}
                />
                <Spacer position="bottom" size="medium" />
                <TextInput
                    label="password confirmation"
                    secureTextEntry
                    autoCapitalize="none"
                    value={passwordConfirm}
                    onChangeText={value => setPasswordConfirm(value)}
                />
                <Spacer position="bottom" size="medium" />
                <Button icon="lock-outline" loading={isLoading}
                    disabled={isLoading} mode="contained" onPress={() =>
                        onRegister(email, password, passwordConfirm)
                    }>
                    Register
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
