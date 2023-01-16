import { useState } from 'react'
import { View, TextInput } from 'react-native';
import CustomButton from './components/CustomButton';
import AppStyle from './styles/AppStyle';


const styles = AppStyle()

export default function App() {

  const [inputText, setInputText] = useState('')

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={value => setInputText(value)}
      />
      {inputText === '' ?
        <CustomButton text='Botón' state={true} /> :
        <CustomButton text='Botón' state={false} />
      }

    </View>
  );
}

