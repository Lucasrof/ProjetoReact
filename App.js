import React from 'react';
import { StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './componentes/inicio';
import Login from './componentes/login';




const navTelas =  createStackNavigator()

export default function App(){
  return(
    <View style={styles.container}>
    <NavigationContainer>
    <navTelas.Navigator initialRouteName="Home" screenOptions={{headerStyle: { height: 0}}}>
      <navTelas.Screen Home name = 'Home' component={Home}   options={{title:''}}/>
      <navTelas.Screen Home name = 'Login' component={Login} options={{title:''}}/>
    </navTelas.Navigator>
    </NavigationContainer>
    </View>
)}

const styles=StyleSheet.create({
  container:{
    flex: 1
  }
})
