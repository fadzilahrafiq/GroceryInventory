import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/Home/Home';
import ItemsList from '../pages/Items-List/Items-List';
import ROUTES from '../constants/routes';
// import CustomIcon from '../components/Icon/CustomIcon';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      // initialRouteName={ROUTES.HOME}
      // screenOptions={({route}) => ({
      //   tabBarActiveTintColor: '#009FBD',
      //   tabBarInactiveTintColor: '#393646',
      //   headerShown: false,
      // })}>
      >
      <Tab.Screen
        name={ROUTES.HOME}
        component={Home}
      />
      {/* <Tab.Screen name={ROUTES.HOME} component={Home} /> */}
      <Tab.Screen name={ROUTES.ITEM} component={ItemsList} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;