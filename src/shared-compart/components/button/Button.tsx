import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { buttonsTheme } from '../../themes/buttons';
import { theme } from '../../themes/theme';
import Text from '../text/text';
import { ButtonContainer, ButtonSecondary, GranditButton, ButtonDisabled } from './Button.Style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
  disable?: boolean;
  loading?: boolean;
  onPress?: () => void;
};

const Button = ({ title, type, margin,loading,disable, onPress, ...props }: ButtonProps) => {
  const handleOnPress = () =>{
    if(!loading && !disable && onPress){
      onPress();
    }
    
  };


  const renderText = (color: string) => (
    <>
      {loading ?(
        <ActivityIndicator color={theme.color.neutralTheme.white} />
      ) : (
        <Text color={color}>{title}</Text>
      )}  
    </>
  );

  if(disable){
    return(
      <ButtonDisabled {...props} margin={margin}>
        {renderText(theme.color.neutralTheme.white)}
      </ButtonDisabled>
    );
  }


  switch (type) {
    case theme.buttonsTheme.buttonsTheme.secondary:
      return (
        <ButtonSecondary margin={margin} {...props} onPress={handleOnPress}>
          {renderText(theme.color.mainTheme.primary)}
        </ButtonSecondary>
      );
    case theme.buttonsTheme.buttonsTheme.primary:
    default:
      return (
        <ButtonContainer margin={margin} {...props} onPress={handleOnPress}>
          <GranditButton
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 1.0 }}
            colors={[theme.color.purpleTheme.purple80, theme.color.pinkTheme.pink80]}
          >
            {renderText(theme.color.neutralTheme.white)}
          </GranditButton>
        </ButtonContainer>
      );
  }
};

export default Button;
