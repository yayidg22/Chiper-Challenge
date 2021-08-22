import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigators/Navigators';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

