import * as React from 'react';
import { View, Text} from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

 
// Screens
import Home from '../../screens/private/Dashboard';
import Extrato from '../../screens/private/Extrato';
import Aporte from '../../screens/private/Aporte';
import Resgate from '../../screens/private/Resgate';
import Servicos from '../../screens/private/Servicos';
import ServicosItens from '../../screens/private/ServicosItens';
import Notificacao from '../../screens/private/Notificacao';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ServicesTabs() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
     initialRouteName="Servicos"
    > 
      <Stack.Screen name="Servicos" component={Servicos} />
      <Stack.Screen name="ServicosItens" component={ServicosItens} />
      <Stack.Screen name="Notificacao" component={Notificacao} />
      </Stack.Navigator>
  );
}

function PrivateTabNavigator() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName; 

        if (route.name === 'Home') {
          iconName = focused ? 'md-home' : 'md-home';
        } else if (route.name === 'Extrato') {
          iconName = focused ? 'ios-menu' : 'ios-menu';
        } else if (route.name === 'Aporte') {
          iconName = focused ? 'ios-add-circle' : 'ios-add-circle';
        } else if (route.name === 'Resgate') {
          iconName = focused ? 'ios-remove-circle' : 'ios-remove-circle';
        } else if (route.name === 'Servicos') {
          iconName = focused ? 'ios-settings' : 'ios-settings';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#0088cc',
      inactiveTintColor: 'gray',
    }}      
    > 
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Extrato" component={Extrato} />
      <Tab.Screen name="Aporte" component={Aporte} />
      <Tab.Screen name="Resgate" component={Resgate} />
      <Tab.Screen name="Servicos" component={ServicesTabs} />
    </Tab.Navigator>
  );
}

export default PrivateTabNavigator;