import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

// components
import ListRepository from './app/modules/repository/list/pages/repository.component';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="listRepository" component={ListRepository} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
