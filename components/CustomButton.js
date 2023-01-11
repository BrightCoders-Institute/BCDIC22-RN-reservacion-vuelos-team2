import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import React from 'react'

import ButtonStyle from '../styles/ButtonStyle'

const styles = ButtonStyle()

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