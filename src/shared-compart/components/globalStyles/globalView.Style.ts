import styled from "styled-components/native";

interface DisplayProps {
    Custonmargin?: string;
}

export const DisplayFlexColumn = styled.View<DisplayProps>`
    display: flex;
    width: 100%;
    flex-direction: column;

    margin: ${(props) => props.Custonmargin ? props.Custonmargin : '0px'}
`;
