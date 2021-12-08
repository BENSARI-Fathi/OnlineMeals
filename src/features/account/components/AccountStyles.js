import styled from "styled-components/native";

export const AccountBackground = styled.ImageBackground.attrs({
    source: require("../../../../assets/home_bg.jpg"),
})`
    flex: 1;
    align-items: center;
    justify-content: center;
  `;

export const AccountCover = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
`

export const AccountContainer = styled.View`
    background-color: rgba(255, 255, 255, 0.7);
    padding: ${(props) => props.theme.sizes[1]};
`

export const FormContainer = styled.View`
    background-color: rgba(255, 255, 255, 0.7);
    padding: ${(props) => props.theme.sizes[1]};
    width: 300px;
`

export const Title = styled.Text`
    font-weight: bold;
    font-size: 30px;
`

export const ErrorContainer = styled.View`
    align-items: center;
    justify-content: center;
`

export const AnimationCover = styled.View`
    width: 100%;
    height: 40%;
    position: absolute;
    top: 50px;
    padding: ${(props) => props.theme.sizes[2]};
`