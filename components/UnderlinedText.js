import React from 'react'
import {
  Text,
  View, TouchableOpacity
} from 'react-native';
import { texts } from '../styles/UnderlinedTextStyle'

const UnderlinedText = ({ text,color }) => {
  return (
    <TouchableOpacity>
      <Text
        style= {color === 'gray' ? texts.underlinedText : texts.underlinedTextPurple}
      >{text}</Text>
    </TouchableOpacity>
  );
};

export default UnderlinedText;