import styled from "styled-components/native";

import {MaterialIcons} from "@expo/vector-icons"
import { css } from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 56px;

    background-color: ${({theme}) => theme.COLORS.GRAY_500};

    flex-direction: row;
    align-items: center;

    margin-bottom: 16px;
    border-radius: 6px;
`;

export const Name = styled.Text`
    flex: 1;

${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SM}px;
`}
`;

export const Icon = styled(MaterialIcons).attrs(({theme}) => ({
    size: 24,
    color: theme.COLORS.GRAY_200,

}))`
    margin-left: 16px;
    margin-right: 4px;
`

