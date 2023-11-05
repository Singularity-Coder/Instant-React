import React from 'react'
import {
  SafeAreaView,
  StyleSheet, FlatList,
  ImageBackground
} from 'react-native'
import ListItem from '../components/ListItem'

// const DATA = [
//   {
//     dt_text: '2023-02-18 12:00:00',
//     main: {
//       temp_max: 8.5,
//       temp_min: 7.55
//     },
//     weather: [
//       {
//         main: 'Clear'
//       }
//     ]
//   },
//   {
//     dt_text: '2023-02-18 15:00:00',
//     main: {
//       temp_max: 8.5,
//       temp_min: 7.55
//     },
//     weather: [
//       {
//         main: 'Clouds'
//       }
//     ]
//   },
//   {
//     dt_text: '2023-02-18 18:00:00',
//     main: {
//       temp_max: 8.5,
//       temp_min: 7.55
//     },
//     weather: [
//       {
//         main: 'Rain'
//       }
//     ]
//   }
// ]

const UpcomingWeather = ({weatherData}) => {
  const renderItem = ({ item }) => {
    return (
      <ListItem
        dt_txt={item.dt_text}
        max={item.main.temp_max}
        min={item.main.temp_min}
        condition={item.weather[0].main}
      />
    )
  }
  const { container, image } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={image}
        source={require('../../assets/upcoming-background.jpg')}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'royalblue',
    // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  image: {
    flex: 1
  }
})

export default UpcomingWeather
