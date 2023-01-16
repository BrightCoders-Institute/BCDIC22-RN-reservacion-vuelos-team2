import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { buttons, texts } from '../styles/ButtonStyle.js'

const CustomButton = ({ text, disabled }) => {
  return (
    <View>
      <TouchableOpacity
        style={disabled ? buttons.buttonGray : buttons.buttonPurple}
        disabled={disabled}
      >
        <Text style={texts.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CustomButton