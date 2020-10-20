import React, { useRef, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux'; 

// Routes
import PublicNavigator from './public/publicNavigator';
import PrivateNavigator from './private/privateNavigator';
import PrivateTabNavigator from './private/privateTabNavigator';

const Stack = createStackNavigator();

//const isLoggedIn = true; //isLoggedIn (true/false) determina se vai acessar a restrita ou não

function RootNavigator({signed}) {

  console.log('********definir a rota*********');
  console.log(signed);
  console.log('********definir a rota**********');
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }} 
    >
      {signed ? (
          <>
        <Stack.Screen name="PrivateTabNavigator" component={PrivateTabNavigator} />
      </>
        ) : (
        <Stack.Screen name="PublicNavigator" component={PublicNavigator} />
      )} 
    </Stack.Navigator>
  );
  


  /*
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="PublicNavigator" component={PublicNavigator} />
      <Stack.Screen name="PrivateNavigator" component={PrivateNavigator} />
      <Stack.Screen name="PrivateTabNavigator" component={PrivateTabNavigator} />
      
    </Stack.Navigator>
  );
  */



}

export default RootNavigator;