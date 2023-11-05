import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  ImageBackground
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
    styleCommonContainer,
    imageLayout
  } = styles

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData

  // ? is optional chaining which returns undefined instead of an error
  const weatherCondition = weather[0]?.main

  return (
    <SafeAreaView style={[wrapper]}>
      <ImageBackground
        style={imageLayout}
        source={require('../../assets/city-background.jpg')}
      >
        <View style={[container, styleCommonContainer]}>
          <Feather
            name={weatherType[weatherCondition].icon}
            size={100}
            color={`${weatherType[weatherCondition]?.backgroundColor}`}
          />

          <Text style={tempStyles}>{`${temp}°`}</Text>

          <Text style={feels}>{`Feels like ${feels_like}°`}</Text>

          <RowText
            messageOne={`High: ${temp_max}° `}
            messageTwo={`Low: ${temp_min}°`}
            containerStyles={highLowWrapper}
            messageOneStyles={highLow}
            messageTwoStyles={highLow}
          />
        </View>

        <RowText
          messageOne={weather[0]?.description}
          messageTwo={weatherType[weatherCondition]?.message}
          containerStyles={[bodyWrapper, styleCommonContainer]}
          messageOneStyles={description}
          messageTwoStyles={message}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  tempStyles: {
    color: '#000000',
    fontSize: 48,
    fontWeight: 'bold',
    marginTop: 8
  },
  feels: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold'
  },
  highLow: {
    color: '#000000',
    fontSize: 16
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    marginBottom: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  description: {
    fontSize: 32,
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  message: {
    fontSize: 16
  },
  styleCommonContainer: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
    opacity: 0.8,
    paddingTop: 16,
    paddingBottom: 16
  },
  imageLayout: {
    flex: 1
  }
})

export default CurrentWeather
