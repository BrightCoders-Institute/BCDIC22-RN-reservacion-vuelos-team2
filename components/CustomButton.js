import { Text, TouchableOpacity, View, StyleSheet} from 'react-native'
import React from 'react'

const CustomButton = ({text}) => {

    return (
        <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>
    )

}

export default CustomButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#5C6EF8',
    margin: 20,
    padding: 12,
    borderRadius: 10,
    width: 350
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17
  }
})