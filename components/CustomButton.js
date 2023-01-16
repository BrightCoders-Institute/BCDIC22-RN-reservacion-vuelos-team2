import { Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { buttons, texts, graphics, containers } from '../styles/ButtonStyle.js'

const CustomButton = ({ text, disabled, icon }) => {
  return (

    <TouchableOpacity
      style={disabled ? [containers.main, buttons.buttonGray] : [containers.main, buttons.buttonPurple]}
      disabled={disabled}
    >
      {icon ? 
      <Image
        source = {require('../assets/google.png')}
        style = {graphics.icon}
      /> : ''}

      <Text style={texts.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton