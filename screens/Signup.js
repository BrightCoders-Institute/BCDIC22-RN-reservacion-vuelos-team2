import { useState } from 'react'
import {
  Text,
  View,
  ScrollView,
  Alert
} from 'react-native'
import { Formik } from 'formik'
import Checkbox from 'expo-checkbox'
import { CustomInput } from '../components/CustomInput'
import { controls, containers, texts } from '../styles/Screens/login'
import CustomButton from '../components/CustomButton'
import CustomUnderlined from '../components/CustomUnderlined'
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const [isChecked, setChecked] = useState(false)
  const [isChecked2, setChecked2] = useState(false)
  const [inputText, setInputText] = useState('')
  const navigation = useNavigation();

  const validate = (values) => {
    if (values.name === '' || values.email === '' || values.password === '') {
      Alert.alert("Error", "You must fill all the fields to continue")
    }
  }

  return (
    <View style={containers.container}>
      <ScrollView>
        <Text style={texts.title}>Sign Up</Text>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={values => {
            validate(values)
          }}
        >
          {({ handleChange, values, errors, handleSubmit }) => (
            <View style={containers.screenContainer}>

              <Text style={texts.titlesText}>First Name</Text>
              <CustomInput
                handleChange={handleChange('name')}
                value={values.name}
                type='text'
              />

              <Text style={texts.titlesText}>Email *</Text>
              <CustomInput
                handleChange={handleChange('email')}
                value={values.email}
                type='text'
              />

              <Text style={texts.titlesText} type='text'>Password *</Text>
              <CustomInput
                handleChange={handleChange('password')}
                value={values.password}
                type='password'
                
              />
              <Text style={texts.warningPassword}>
                Use 8 or more characters with a mix of letters, numbers and symbols
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
                  <CustomUnderlined text='Terms' color='gray' />
                  <Text style={texts.textCheck}> and </Text>
                  <CustomUnderlined text=' Privacy Policy.' color='gray' />
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
                {isChecked === true ?
                  <CustomButton text='Sign Up' disabled={false} icon={false} handlePress={()=>navigation.navigate('Booking')} /> :
                  <CustomButton text='Sign Up' disabled={true} icon={false} handlePress={()=>navigation.navigate('Booking')} />
                }
                <Text style={texts.accountText}>or</Text>
                <CustomButton text='Sign Up with Google' disabled={false} icon={true} handlePress={()=>navigation.navigate('Booking')} />

                <View style={containers.footerContainer}>
                  <Text style={texts.accountText}>
                    Already have an account?{' '}
                  </Text>
                  <CustomUnderlined text='Login'
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

export default Signup
