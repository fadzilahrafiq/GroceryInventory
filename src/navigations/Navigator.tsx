import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ROUTES from '../constants/routes';

import TabNavigation from './TabNavigation';
import Home from '../pages/Home';
import ItemsList from '../pages/Items-List';
import ItemsDetails from '../pages/Items-Details';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='ItemsList' component={ItemsList}/>
    </Stack.Navigator>
  );
}

const ItemsListStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='ItemsList' component={ItemsList}/>
      <Stack.Screen name='ItemsDetails' component={ItemsDetails}/>
    </Stack.Navigator>
  );
}

const Navigator: React.FC = () => {
  return (
    <NavigationContainer >
      {/* <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.HOME} component={TabNavigation} />
      </Stack.Navigator> */}
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name='Home'component={HomeStack}/>
        <Tab.Screen name='ItemsList'component={ItemsListStack}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;