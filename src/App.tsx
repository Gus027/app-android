import { SafeAreaView, Text } from 'react-native/types';
import styled from 'styled-components/native';

const TextNew = styled.Text`
    color: blue;
`;

const App = () => {
  return (
    <SafeAreaView>
      <TextNew>OLA MUNDO</TextNew>  
      <Text>Hello Word</Text>
    </SafeAreaView>
  );
};

export default App;
