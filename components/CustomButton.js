import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import React from 'react'

import ButtonStyle from '../styles/ButtonStyle'
import { buttons, texts } from '../styles/ButtonStyle.js'

const CustomButton = ({ text, state }) => {
  return (
    <View>
      <TouchableOpacity
        style={state ? buttons.buttonGray : buttons.buttonPurple}
        disabled={state}
      >
        <Text style={texts.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CustomButton
