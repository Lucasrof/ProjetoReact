import React from 'react'
import { View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'

export default function ButtonGame({ focused, size, color, icone }) {
  return (
    <View
      style={[
        focused ? styles.container : '',
        {
          backgroundColor: focused ? '#d65a31' : 'transparent'
        }
      ]}
    >
      {icone}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#F25719',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    shadowColor: '#F25719',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
})
