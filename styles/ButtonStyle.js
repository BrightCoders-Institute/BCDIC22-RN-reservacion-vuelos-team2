import {
  StyleSheet,
} from "react-native";


export const containers = StyleSheet.create({
  main: {
    display:'flex',
    flexDirection:'row',
    backgroundColor:'pink',
    justifyContent:'center'
  }
})

export const buttons = StyleSheet.create({
  buttonGray: {
    margin: 20,
    padding: 12,
    borderRadius: 10,
    width: 350,
    backgroundColor: '#B6B7BA'
  },
  buttonPurple: {
    margin: 20,
    padding: 12,
    borderRadius: 10,
    width: 365,
    backgroundColor: '#5C6EF8'
  }
})

export const texts = StyleSheet.create({
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 19
  }
})

export const graphics = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    marginRight: 20
  }
})