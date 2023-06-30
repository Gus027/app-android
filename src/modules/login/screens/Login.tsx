import { Text, View } from 'react-native';

import Button from '../../../shared-compart/components/button/Button';
import Input from '../../../shared-compart/components/input/input';
import { buttonsTheme } from '../../../shared-compart/themes/buttons';
import { theme } from '../../../shared-compart/themes/theme';
import { ContainerLogin } from '../styles/login.styles';

const Login = () => {
  const handleOnPress = () => {
    console.log('clicou');
  };
  return (
    <View>
      <ContainerLogin>
        <Input margin="0px 0px 8px 0px" placeholder="Digite seu E-mail" title="Email"/> 
        <Input secureTextEntry placeholder="Digite a sua senha" title="Senha"/>  
        <Button
          type={theme.buttonsTheme.buttonsTheme.primary}
          margin="16px"
          title="ENTRAR"
          /*loading*/  
          onPress={handleOnPress}
        />
      </ContainerLogin>
    </View>
  );
};

export default Login;

/*         type={buttonsTheme.primary}
        margin="16px"
        title="ENTRAR"*/
