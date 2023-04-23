import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { button1 } from '../common/button'

const Welcome = ({ navigation }) => {
  return (
    <View>
        <Text style={styles.head}>Welcome</Text>
        <Text 
          style={button1}
          onPress={() => navigation.navigate('login')}  
        >Login</Text>
        <Text 
          style={button1}
          onPress={() => navigation.navigate('signup')}  
        >Signup</Text>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    head: {
        fontSize: 30,
    }
})