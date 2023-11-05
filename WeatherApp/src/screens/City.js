import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  View,
  ImageBackground
} from 'react-native'
import moment from 'moment'
import IconText from '../components/IconText'

const City = ({ weatherData }) => {
  const {
    container,
    cityName,
    cityText,
    countryName,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout,
    imageLayout,
    styleCommonContainer
  } = styles
  const { name, country, population, sunrise, sunset } = weatherData
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={imageLayout}
        source={require('../../assets/city-background.jpg')}
      >
        <View style={styleCommonContainer}>
          <Text style={[cityName, cityText]}>{name}</Text>
          <Text style={[countryName, cityText]}>{country}</Text>
        </View>

        <View style={styleCommonContainer}>
          <View style={[populationWrapper, rowLayout]}>
            <IconText
              iconName={'user'}
              iconColor={'black'}
              bodyText={`Population: ${population}`}
              bodyTextStyles={populationText}
            />
          </View>
        </View>
        <View style={[riseSetWrapper, rowLayout, styleCommonContainer]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'black'}
            bodyText={moment(sunrise).format('h:mm:ss a')}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'black'}
            bodyText={moment(sunset).format('h:mm:ss a')}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  imageLayout: {
    flex: 1
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  // common style
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'black'
  },
  populationWrapper: {
    justifyContent: 'center'
  },
  populationText: {
    fontSize: 25,
    color: 'black'
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 0
  },
  riseSetText: {
    fontSize: 20,
    color: 'black'
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  styleCommonContainer: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
    opacity: 0.8,
    paddingTop: 16,
    paddingBottom: 16
  }
})

export default City
