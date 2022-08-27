import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, 
          Text, 
          View, 
        } from 'react-native';
import{useFonts, Inter_900Black} from '@expo-google-fonts/inter'
import { Button} from '@rneui/themed'
import { color } from '@rneui/themed/dist/config';



export default function Home({navigation}) {
    let [fotsLoaded] = useFonts({
        Inter_900Black
      })
      if (!fotsLoaded) {
        return null
      }
    return (
      <View style={styles.container}>     
        <StatusBar style="auto"/>
        <View style={styles.Text}>
          <Text style={styles.cardTitles}> Vamos Começar!</Text>   
          <Text style={styles.cardSubTitle}>Crescendo Juntos!</Text>
        </View>
        <View style={styles.Button}>
         <Button buttonStyle={{borderRadius: 12}} color='#F25719' onPress={()=>navigation.navigate('Login')}>
            Começar!
         </Button>
         </View>
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
    },
    Button: {
      marginBottom: 48,
      marginTop: 46
    }
  });
  