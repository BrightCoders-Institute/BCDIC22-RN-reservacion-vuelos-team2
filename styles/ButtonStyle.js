import {
  StyleSheet,
} from "react-native";

export default function ButtonStyle() {
  return (
      StyleSheet.create({
        button: {
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
  )
};