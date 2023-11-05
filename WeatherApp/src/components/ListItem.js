import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'
import moment from 'moment'

// Option + Shift + 8 = °

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props
  const { item, date, temp, dateTextWrapper, icon } = styles
  return (
    <View style={item}>
      <Feather 
      name={weatherType[condition]?.icon} size={40} color={'black'} 
      style={icon}
      />
      <View style={styles.dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format("dddd")}</Text>
        <Text style={date}>{moment(dt_txt).format("h:mm:ss a")}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 0,
    borderRadius: 8,
    marginTop: 16,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    opacity: 0.8
  },
  temp: {
    color: 'black',
    fontSize: 32
  },
  date: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  dateTextWrapper: {
    flexDirection: 'column',
    alignContent: 'flex-start'
  },
  icon: {
  }
})

export default ListItem
