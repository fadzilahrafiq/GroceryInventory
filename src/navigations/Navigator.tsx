import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ROUTES from '../constants/routes';

import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.HOME} component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;