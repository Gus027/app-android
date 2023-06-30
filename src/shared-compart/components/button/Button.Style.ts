import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

import { theme } from '../../themes/theme';

interface ButtonContainerProps {
  margin?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  align-items: center;
  flex-direction: row;
  background-color: blue;
  justify-content: center;
  margin: 16px;
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
`;

export const GranditButton = styled(LinearGradient)<ButtonContainerProps>`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  align-items: center;
  flex-direction: row;
  background-color: blue;
  justify-content: center;
  margin: 16px;
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
`;

export const ButtonSecondary = styled(ButtonContainer)<ButtonContainerProps>`
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}

  background-color: transparent;

  border-width: 1px;
  border-color: ${theme.color.mainTheme.primary};
`;


export const ButtonDisabled = styled(ButtonContainer)<ButtonContainerProps>`
  background-color: ${theme.color.grayTheme.gray80};
`