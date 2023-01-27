import { useState } from 'react'
import { Text, View, Alert } from 'react-native'
import { Formik } from 'formik'
import { CustomInput } from '../components/CustomInput'
import { controls, containers, texts } from '../styles/Screens/login'
import CustomButton from '../components/CustomButton'
import CustomUnderlined from '../components/CustomUnderlined'

const Login = () => {

  const [inputText, setInputText] = useState('')

  const validate = (values) => {
    if (values.email === '' || values.password === '') {
      Alert.alert("Error", "You must fill all the fields to continue")
    }
  }

  return (
    <View style={containers.container}>

      <Text style={texts.title}>Login</Text>
      <Formik
        initialValues={{email: '', password: '' }}
        onSubmit={values => {
          validate(values)
        }}
      >
        {({ handleChange, values, errors, handleSubmit }) => (
          <View style={containers.screenContainer}>

            
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
            
            <View style={containers.buttonsContainer}>

              <CustomButton text='Login' disabled={false} icon={false} handleSubmit={handleSubmit} />
              <Text style={texts.accountText}>or</Text>
              <CustomButton text='Login with Google' disabled={false} icon={true} handleSubmit={handleSubmit} />

              <View style={containers.footerContainer}>
                <Text style={texts.accountText}>
                  Don't you have an account?{' '}
                </Text>
                <CustomUnderlined text='Signup'
                  color='purple'
                />
              </View>
            </View>

          </View>
        )}
      </Formik>

    </View>
  )
}

export default Login
