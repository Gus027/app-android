import { TextInputProps, View } from 'react-native';

import { theme } from '../../themes/theme';
import Text from '../text/text';
import { ContainerStyledInput, IconEye } from './input.style';
import { DisplayFlexColumn } from '../globalStyles/globalView.Style';
import { useState } from 'react';

/*type InputProps = TextInputProps;*/

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
  margin?: string;
};



const Input = ({ margin, secureTextEntry, title, errorMessage,...props }: InputProps) => {
  const [currentSecure, setCurrentSecure] = useState<boolean>(!!secureTextEntry);
  
const handleOnPressEye = () => {
  setCurrentSecure((current) => !current);
};

  return (
    <DisplayFlexColumn Custonmargin={margin}>
      {title && (
        <Text margin="0px 0px 4px 8px" color={theme.color.neutralTheme.black}>
        {title}
        </Text>
      )}

      <View>
        <ContainerStyledInput secureTextEntry={currentSecure} isError={!!errorMessage} {...props}/>
        {secureTextEntry && <IconEye onPress={handleOnPressEye} name={currentSecure ? "eye" : "eye-blocked"} size={20} /> }
      </View>
      
      {errorMessage && (
        <Text margin="4px 0px 0px 8px"color={theme.color.OrangeTheme.orange80}>
          {errorMessage}
        </Text>
      )}
    </DisplayFlexColumn>
  );
};

export default Input;
