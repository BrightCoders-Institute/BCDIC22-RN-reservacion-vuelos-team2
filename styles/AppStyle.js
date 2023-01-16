import {
  StyleSheet,
} from "react-native";

export default function AppStyle() {
  return (
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        input:{
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 10,
          padding: 10,
          width: '80%'
        }
      })
  )
};