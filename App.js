import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import CustomButton from './components/CustomButton';
import AppStyle from './styles/AppStyle';

const styles = AppStyle()

export default function App() {

  const [inputText, setInputText]=useState('')

  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.input}
      onChangeText={value => setInputText(value)}
      />
      {inputText === '' ? 
      <CustomButton text='Botón' color="#B6B7BA" state = {true} /> :
      <CustomButton text='Botón' color="#5C6EF8" state = {false} />
      }
      <StatusBar style="auto" />
    </View>
  );
}
