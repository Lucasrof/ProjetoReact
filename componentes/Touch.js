import React, {useState} from 'react'
import {View, Text, StyleSheet,TouchableHighlight} from 'react-native'

export default function(){
    return(
        <View>
            <TouchableHighlight 
            style={styles.button} 
            underlayColor='#F25719'
            >
                <Text style={styles.buttonText}>Comece Agora!</Text>
            </TouchableHighlight>  
        </View>
    );
}

const styles=StyleSheet.create({
    button:{
        alignItems: 'center',
        backgroundColor: '#F25719',
        padding: 10,
        borderRadius: 50,
        marginTop: 40,
    },
    buttonText:{
        color:'#fff',
        fontSize: 20,
    }
})