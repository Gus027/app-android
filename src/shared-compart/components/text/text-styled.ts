import styled from 'styled-components/native';

interface ContainerText {
  color?: string;
  fontSize?: string;
  marginCustom?: string;
}

export const ContainerText = styled.Text<ContainerText>`
  ${(props) => (props.color ? `color: ${props.color};` : '')}
  ${(props) => (props.marginCustom ? `margin: ${props.marginCustom};` : '')}

  font-size: ${(props) => props.fontSize};
`;
