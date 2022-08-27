import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, 
          Text, 
          View, 
          Alert,
          TouchableHighlight
        } from 'react-native';
import{useFonts, Inter_900Black} from '@expo-google-fonts/inter'
import { Button, Input } from '@rneui/themed'



export default function Login() {
    let [fotsLoaded] = useFonts({
        Inter_900Black
      })
      if (!fotsLoaded) {
        return null
      }
    return (
      <View style={styles.container}>     
        <StatusBar style="auto"/>
          <Text style={styles.cardTitles}> Vamos Começar!</Text>   
          <Text style={styles.cardSubTitle}>Crescendo Juntos!</Text>
      </View>
    );
  
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: '#F25719'
    },
    cardTitles:{
      color: '#F25719',
      fontFamily: 'Inter_900Black',
      fontSize: 44,
      fontWeight: 'bold',
      marginTop: 500,
      
    },
    cardSubTitle:{
      color: '#F25719',
      fontSize: 14,
      fontWeight: 'bold',
      marginRight: 190,
    }
  });
  