import { StyleSheet } from 'react-native'

export const graphics = StyleSheet.create({
  icon: {
    marginTop: 23,
    paddingRight: 10,
    position: 'absolute'
  },
  iconActive: {
    color: '#5C6EF8'
  },
  iconInactive: {
    color: '#B6B7BA'
  }

})

export const controls = StyleSheet.create({
  button: {
    marginVertical: 20
  },
  input: {
    borderWidth: 1,
    width: '100%',
    height: 45,
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
    alignItems: 'center',
    fontSize: 14,
    paddingLeft: 5
  },
  inputActive: {
    borderColor: '#5C6EF8'
  },
  inputInactive: {
    borderColor: '#B6B7BA'
  },
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
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 55
    //backgroundColor: 'red',
    //paddingTop:10
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
  }, footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    
    alignItems:'center'
  }

})

export const texts = StyleSheet.create({
  tittle: {
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
    fontSize: 15,
  },
  accountText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'gray',
    marginVertical: 8
  },
  loginText: {
    color: '#5c6ef8',
    textDecorationLine: 'underline'
  },
  asterisk: {
    color: 'red',
    fontWeight: 'bold'
  }
})
