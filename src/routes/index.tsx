import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../pages/Home';


const { Navigator, Screen } = createStackNavigator();


function AppStack(){
  return(
    <NavigationContainer>
       <Navigator screenOptions={{ headerShown: false }}>
        <Screen  name="Home" component={Home}/>
       </Navigator>
    </NavigationContainer>
  )
}

export default AppStack;