import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { button1 } from '../common/button'

const Welcome = () => {
  return (
    <View>
        <Text style={styles.head}>Welcome</Text>
        <Text style={button1}>Login</Text>
        <Text style={button1}>Signup</Text>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    head: {
        fontSize: 30,
    }
})