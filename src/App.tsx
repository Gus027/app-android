import React, { useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import styled from 'styled-components/native';

import Login from './modules/login';
import { ContainerLogin } from './modules/login/styles/login.styles';
import Button from './shared-compart/components/button/Button';
import Input from './shared-compart/components/input/input';
import { buttonsTheme } from './shared-compart/themes/buttons';

const App = () => {
  const handleOnPress = () => {
    console.log('Clicou');
  };

  return (
    <SafeAreaView>
      <Login />
    </SafeAreaView>
  );
};

export default App;
