import { useMemo } from 'react';
import { TextProps } from 'react-native';

import { ContainerText } from './text-styled';
import { textTypes } from './textTypes';

interface TextPropss extends TextProps {
  color?: string;
  type?: string;
  margin?: string;
}

const Text = ({ margin, color, type, ...props }: TextPropss) => {
  const handleFontSize = useMemo(() => {
    switch (type) {
      case textTypes.TITLE:
        return '32px';
      default:
        return '16px';
    }
  }, [type]);

  return <ContainerText
   marginCustom={margin}
   fontSize={handleFontSize} 
   color={color}
    {...props} />;
};

export default Text;
