import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { Formik } from 'formik';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {

  const validate = (values) => {
    const errors = {}
    if (values.password.length < 8) errors.password = 'Use eight or more characters'
    alert(errors)
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.tittle}>Sign Up</Text>
          <Formik
            onSubmit={values => {
              validate(values);
              Keyboard.dismiss();
            }}>

            {({ handleChange, handleSubmit, values, errors }) => (
              <View>
                <Text style={styles.titlesText}>First Name</Text>
                <TextInput
                  onChangeText={handleChange('firstName')}
                  name="firstName"
                  value={values.firstName}
                  label="firstName"

                  style={styles.input}
                />
                <Text style={styles.titlesText}>Email *</Text>
                <TextInput
                  onChangeText={handleChange('email')}
                  name="email"
                  value={values.email}
                  label="email"

                  style={styles.input}
                />
                  <Text style={styles.titlesText}>Password *</Text>
                  <View style={styles.iconContainer}>

                    <TextInput
                      onChangeText={handleChange('password')}
                      name="password"
                      value={values.password}
                      label="password"
                      secureTextEntry={true}
                      style={styles.input}
                    />
                    <Ionicons
                      style={styles.icon}
                      name='eye'
                      size={18}
                      color='black'
                    />
                  

              
              </View>
                {errors.password ? (
              <Text>{errors.password}</Text>
            ) : (
              <></>
            )}
            <Text style={styles.smallText}>Use 8 or more characters with a mix of letters, numbers and symbols</Text>
            <View style={styles.check}>
              <Text style={styles.textCheck}>I agree to the Terms and Privacy Policy</Text>
              <Text>Suscribe for select product updates</Text>
            </View>
            <View style={styles.buttonsContainer}>
              <Button onPress={handleSubmit} style={styles.button} title="Submit" />
              <Text style={styles.largeText}>or</Text>
              <Button onPress={handleSubmit} style={styles.button} title="Submit" />
              <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                <Text style={styles.largeText}>Already have an account? </Text>
                <Text style={[styles.largeText, styles.login]}>Log In</Text>
              </View>
            </View>
        </View>
            )}
      </Formik>
    </View>
      </ScrollView >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginVertical: 25
  },
  content: {
    padding: 16,
  },
  button: {
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '100%',
    height: 45,
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
    flex: 1,
    alignItems: 'center',
  },
  iconContainer: {
    //display: 'flex',
    // flex: 1,
    flexDirection: 'row',
   // backgroundColor: 'yellow',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 45,
    // paddingTop: 10,
    // marginTop: 10,
    // borderWidth: 1,
    // borderColor: 'gray',
  },
  icon: {
    //backgroundColor: 'red',
    marginTop: 15,
    padding: 7,
    position: 'absolute'
  },
  tittle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#5c6ef8'
  },
  titlesText: {
    fontSize: 17,
    color: 'grey',
    marginTop: 12
  },
  smallText: {
    color: 'gray',
    fontSize: 13,
    marginTop: 10
  },
  textCheck: {
    marginVertical: 10
  },
  check: {
    marginVertical: 30
  },
  buttonsContainer: {
    alignSelf: 'center',

    width: '100%',
    display: 'flex',


  },
  largeText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
    marginVertical: 15
  },
  login: {
    color: '#5c6ef8',
    textDecorationLine: 'underline'
  }
});