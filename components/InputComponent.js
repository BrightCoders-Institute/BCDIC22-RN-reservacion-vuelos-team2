import { TextInput, View } from 'react-native'
import { controls } from '../styles/AppStyle'
import { useState } from 'react'

export const InputComponent = ({ handleChange, values, type }) => {
  const [inputText, setInputText] = useState('')

  return (
    <View>
      {type === 'text' ? (
        <TextInput
          onChangeText={value => setInputText(value)}
          name='firstName'
          value={values}
          label='firstName'
          style={
            inputText === ''
              ? [controls.inputInactive, controls.input]
              : [controls.inputActive, controls.input]
          }
        />
      ) : type === 'password'?(
        <TextInput
          onChangeText={value => setInputText(value)}
          name='firstName'
          value={values}
          label='firstName'
          style={
            inputText === ''
              ? [controls.inputInactive, controls.input]
              : [controls.inputActive, controls.input]
          }
        />
      ):''}
    </View>
  )
}
