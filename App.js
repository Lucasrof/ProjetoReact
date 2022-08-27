import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, 
          Text, 
          View, 
          Button, 
          Alert,
          TouchableHighlight
        } from 'react-native';
import Touch from './componentes/Touch'

          
const msg=()=>{
  Alert.alert('MSG','Cassino React')
}

export default function App() {
  return (
    <View style={styles.container}>     
      <StatusBar style="auto"/>
        <Text style={styles.cardTitles}> Vamos Começar!</Text>
        <Text style={styles.cardSubTitle}>Crescendo Juntos!</Text>
        <Touch/>
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
