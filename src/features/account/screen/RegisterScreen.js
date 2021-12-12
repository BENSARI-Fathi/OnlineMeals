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

export default function RegisterScreen() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [secure, setSecure] = useState(true)
    const name = secure ? "eye-off" : "eye"
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
                <PasswordWrapper>
                    <PasswordField
                        label="password"
                        secureTextEntry
                        autoCapitalize="none"
                        value={password}
                        onChangeText={value => setPassword(value)}
                    />
                    <EyeIcon name={name} size={24}
                        color="gray"
                        onPress={() => setSecure(!secure)} />
                </PasswordWrapper>
                <Spacer position="bottom" size="medium" />
                <PasswordWrapper>
                    <PasswordField
                        label="password confirmation"
                        secureTextEntry
                        autoCapitalize="none"
                        value={passwordConfirm}
                        onChangeText={value => setPasswordConfirm(value)}
                    />
                    <EyeIcon name={name} size={24}
                        color="gray"
                        onPress={() => setSecure(!secure)} />
                </PasswordWrapper>
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
