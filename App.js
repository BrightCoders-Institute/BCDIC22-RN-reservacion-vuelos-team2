import { useState } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from 'react-native'
import { Formik } from 'formik'
import Checkbox from 'expo-checkbox'
import { InputComponent } from './components/InputComponent'
import { graphics, controls, containers, texts } from './styles/AppStyle.js'

export default function App() {
  // const validate = (values) => {
  //   const errors = {}
  //   if (values.password.length < 8) errors.password = 'Use eight or more characters'
  //   alert(errors)
  // }

  const [isChecked, setChecked] = useState(false)
  const [isChecked2, setChecked2] = useState(false)

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
                values={values}
                type='text'
              />
              <Text style={texts.titlesText}>Email *</Text>

              <InputComponent
                handleChange={handleChange}
                values={values}
                type='text'
              />
              <Text style={texts.titlesText} type='text'>
                Password *
              </Text>

              <InputComponent
                handleChange={handleChange}
                values={values}
                type='password'
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
                />
                <Text style={texts.textCheck}>
                  I agree to the Terms and Privacy Policy
                </Text>
              </View>
              <View style={containers.checkContainer}>
                <Checkbox
                  value={isChecked2}
                  onValueChange={setChecked2}
                  color={isChecked2 ? '#4630EB' : undefined}
                />
                <Text style={texts.textCheck}>
                  Suscribe for select product updates
                </Text>
              </View>
              <View style={containers.buttonsContainer}>
                <Button
                  onPress={handleSubmit}
                  style={controls.button}
                  title='Submit'
                />
                <Text style={texts.accountText}>or</Text>
                <Button
                  onPress={handleSubmit}
                  style={controls.button}
                  title='Submit'
                />
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                  <Text style={texts.accountText}>
                    Already have an account?{' '}
                  </Text>
                  <Text style={[texts.accountText, texts.loginText]}>
                    Log In
                  </Text>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  )
}
