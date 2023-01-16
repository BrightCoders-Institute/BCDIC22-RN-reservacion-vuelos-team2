import { StyleSheet } from 'react-native';

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
  }
})

export const containers = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 55
  },
})