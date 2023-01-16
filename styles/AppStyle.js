import { StyleSheet } from 'react-native'

export const controls = StyleSheet.create({
  check: {
    marginRight: 10
  }
})

export const containers = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginVertical: 25,
    padding: 16
  },
  buttonsContainer: {
    alignSelf: 'center',
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  checkContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  screenContainer: {
    marginTop: 20
  },
  underlinedTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center'
  }
})

export const texts = StyleSheet.create({
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#5c6ef8'
  },
  titlesText: {
    fontSize: 16,
    color: 'grey',
    marginTop: 12
  },
  warningPassword: {
    color: 'gray',
    fontSize: 11,
    marginTop: 10,
    marginBottom: 20
  },
  textCheck: {
    marginVertical: 10,
    color: 'grey',
    fontSize: 15
  },
  accountText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'gray',
    marginVertical: 8
  },
  asterisk: {
    color: 'red',
    fontWeight: 'bold'
  }
})
