import { useState } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { Formik } from 'formik'
import Checkbox from 'expo-checkbox'
import { InputComponent } from './components/InputComponent'
import { graphics, controls, containers, texts } from './styles/AppStyle.js'
import CustomButton from './components/CustomButton'
import UnderlinedText from './components/UnderlinedText'

export default function App() {
  // const validate = (values) => {
  //   const errors = {}
  //   if (values.password.length < 8) errors.password = 'Use eight or more characters'
  //   alert(errors)
  // }

  const [isChecked, setChecked] = useState(false)
  const [isChecked2, setChecked2] = useState(false)
  const [inputText, setInputText] = useState('')


  return (
    <View style={containers.container}>
      <ScrollView>
        <Text style={texts.tittle}>Sign Up</Text>
        <Formik
          onSubmit={values => {
            validate(values)
            Keyboard.dismiss()
          }}
        >
          {({ handleChange, handleSubmit, values, errors }) => (
            <View style={containers.screenContainer}>
              <Text style={texts.titlesText}>First Name</Text>
              <InputComponent
                handleChange={handleChange}
                inputText={inputText}
                values={values}
                type='text'
              />

              <Text style={texts.titlesText}>Email *</Text>

              <InputComponent
                handleChange={handleChange}
                values={values}
                type='text'
                onChangeText={value => setInputText(value)}

              />
              <Text style={texts.titlesText} type='text'>
                Password *
              </Text>

              <InputComponent
                handleChange={handleChange}
                values={values}
                type='password'
                onChangeText={value => setInputText(value)}
              />

              {errors.password ? <Text>{errors.password}</Text> : <></>}
              <Text style={texts.warningPassword}>
                Use 8 or more characters with a mix of letters, numbers and
                symbols
              </Text>
              <View style={containers.checkContainer}>
                <Checkbox
                  value={isChecked}
                  onValueChange={setChecked}
                  color={isChecked ? '#4630EB' : undefined}
                  style={controls.check}
                />
                <View style={containers.underlinedTextContainer}>
                  <Text style={texts.textCheck}>I agree to the </Text>
                  <UnderlinedText text='Terms' color='gray' />
                  <Text style={texts.textCheck}> and </Text> 
                  <UnderlinedText text=' Privacy Policy.' color='gray'/>
                  <Text style={texts.asterisk}> *</Text> 
                </View>
              </View>
              <View style={containers.checkContainer}>
                <Checkbox
                  value={isChecked2}
                  onValueChange={setChecked2}
                  color={isChecked2 ? '#4630EB' : undefined}
                  style={controls.check}
                />
                <Text style={texts.textCheck}>
                  Suscribe for select product updates
                </Text>
              </View>
              <View style={containers.buttonsContainer}>
                {isChecked && isChecked2 === true ?
                  <CustomButton text='Sign Up' disabled={false} /> :
                  <CustomButton text='Sign Up' disabled={true} />
                }

                <Text style={texts.accountText}>or</Text>

                {isChecked && isChecked2 === true ?
                  <CustomButton text='Sign Up with Google' disabled={false} /> :
                  <CustomButton text='Sign Up with Google' disabled={true} />
                }

                <View style={containers.footerContainer}>
                  <Text style={texts.accountText}>
                    Already have an account?{' '}
                  </Text>
                  <UnderlinedText text='Login' 
                    color='purple'
                  />
                </View>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  )
}
