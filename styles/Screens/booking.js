import { StyleSheet } from 'react-native'
import { colorsTheme } from '../colorsTheme'

export const containers = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 20,
    padding: 10
  },
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center'
  },
  backIcon: {
    color: colorsTheme.primaryColor
  }
})

export const graphics = StyleSheet.create({
  backIcon: {
    color: colorsTheme.primaryColor,
    width: '10%',
  }
})

export const controls = StyleSheet.create({
  button: {
    alignSelf: 'flex-end'

  }
})

