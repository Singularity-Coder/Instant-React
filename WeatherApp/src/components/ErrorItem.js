import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const ErrorItem = () => {
  return (
    <View style={styles.container}>
      <Feather name={'frown'} size={100} color={'white'} />
      <Text style={styles.errorMessage}>Sorry, something went wrong.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorMessage: {
    fontSize: 24,
    color: 'white',
    marginHorizontal: 10,
    marginTop: 16,
    textAlign: 'center'
  }
})

export default ErrorItem
