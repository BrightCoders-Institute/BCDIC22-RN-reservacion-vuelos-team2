import { TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { containers, graphics, controls } from '../styles/Screens/booking'
import BookingTitle from '../components/BookingTitle'
import FlightInfo from '../components/FlightInfo'
import CustomButtom from '../components/CustomButton'
import SelectMenu from '../components/SelectMenu'
import { useNavigation } from "@react-navigation/native";
import Passengers from '../components/Passengers'


const Booking = () => {
  const navigation = useNavigation();
  return (
    <View style={containers.main}>
      <View style={containers.container}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Login')
          }>
          <Ionicons
            name='chevron-back-outline'
            size={30}
            color='#5c6ef8'
            style={graphics.backIcon}
          />
        </TouchableOpacity>
        <FlightInfo />
        {/* <BookingTitle text={'Where Are You Now?'} />
        <SelectMenu /> */}
        <Passengers />
        <CustomButtom style={controls.button} text='Next' />
      </View>
    </View>
  )
}

export default Booking
