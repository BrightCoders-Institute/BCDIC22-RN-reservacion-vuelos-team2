import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({ text, color, state }) => {
  return (
    <View>
      <TouchableOpacity style={[styles.button, {backgroundColor: color}]} disabled={state}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  button: {
    margin: 20,
    padding: 12,
    borderRadius: 10,
    width: 350
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17
  }
})