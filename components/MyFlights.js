import { Text, View, Button, ScrollView, Alert } from 'react-native'
import { containers, texts, graphics } from '../styles/Components/flightInfo'
import Ionicons from '@expo/vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect } from 'react'
import store from '../redux/store'
import CustomButton from './CustomButton'

const MyFligths = () => {
  const [parsedCurrentUser, setParsedCurrentUser] = useState(null)
  const [parsedCurrentUserFlights, setParsedCurrentUserFlights] = useState(null)
  const [flights, setFlights] = useState(vuelos)
  let vuelos

  useEffect(() => {
    getCurrentUser()
  }, [])

  const getCurrentUser = async () => {
    try {
      const currentUser = await AsyncStorage.getItem('current_user')
      const variable = JSON.parse(currentUser)
      store.dispatch({
        type: 'GET_RESERVATION',
        payload: {
          user: variable.email
        }
      })
    } catch (e) {
    }
  }


  const getCurrentUserFlights = async () => {
    try {
      const currentUserFlights = await AsyncStorage.getItem(
        'current_user_flights'
      )
      let flights2 = JSON.parse(currentUserFlights)

      return flights2
    } catch (e) {
    }
  }

  const handlePress = () => {
    getCurrentUserFlights().then(data => {
      vuelos = data[0]
      setFlights(prev => vuelos)
    })
  }

  return (
    <View style={containers.master}>
      <ScrollView >
        <CustomButton text='Ver mis vuelos' handlePress={handlePress} />

        {flights?.map(flight => {
          return (
            <View key={flight._id} style={containers.main}>
              <View style={containers.infoContainer}>
                <View style={containers.placeContainerL}>
                  <Text style={texts.cityText}>{flight.originCode}</Text>
                  <Text style={texts.countryText}>
                    {flight.originCountry}
                  </Text>
                </View>
                <View style={containers.iconContainer}>
                  <Ionicons
                    name='airplane'
                    size={24}
                    color='#5c6ef8'
                    style={graphics.icon}
                  />
                </View>
                <View style={containers.placeContainerR}>
                  <Text style={texts.cityText}>
                    {flight.destinationCode}
                  </Text>
                  <Text style={texts.countryText}>
                    {flight.destinationCountry}
                  </Text>
                </View>
              </View>
              <View
                style={containers.datePassengersContainer}
              >
                <Text style={texts.dateText}>{flight.date}</Text>
                <Text style={texts.dateText}>
                  {flight.passengers} passengers
                </Text>
              </View>
            </View>
          )
        })
        }
      </ScrollView>
    </View>
  )
}

export default MyFligths
