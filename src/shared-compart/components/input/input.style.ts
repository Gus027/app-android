import styled from 'styled-components/native';
import { theme } from '../../themes/theme';
import { Icon } from '../icon/icon';
/*import { Icon } from 'react-native-vector-icons/Icon';*/

interface ContainerInputProps {
  isError?: boolean;
  secureTextEntry?: boolean;
}

export const ContainerStyledInput = styled.TextInput<ContainerInputProps>`
  width: 100%;
  height: 48px;
  padding: 16px;
  background-color: ${theme.color.neutralTheme.white};
  color: ${theme.color.neutralTheme.black};
  border-radius: 4px;
  border-color: ${(props)=> props.isError ? theme.color.OrangeTheme.orange80 : theme.color.grayTheme.gray80};;

  padding-right: ${(props) => props.secureTextEntry ? '60px' : '16px'};
`;


export const IconEye = styled(Icon)`
  position: absolute;
  right: 16px;
  top: 12px;
`;