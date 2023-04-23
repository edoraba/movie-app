import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { formgroup, fp, head1, head2, input, label, link, link2 } from '../common/formcss'
import { button1 } from '../common/button'

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.container1}>
            <View style={styles.s2}>
                <Text style={head1}>Login</Text>
                <Text style={head2}>Sign in to continue</Text>
                <View style={formgroup}>
                    <Text style={label}>Email</Text>
                    <TextInput 
                        style={input} 
                        placeholder="Email"
                    />
                </View>
                <View style={formgroup}>
                    <Text style={label}>Password</Text>
                    <TextInput 
                        style={input} 
                        placeholder="Password"
                    />
                </View>
                <View style={fp}>
                    <Text style={link}>Forgot Password?</Text>
                </View>
                <Text style={button1}>Login</Text>
                <Text style={link2}>Don't have an account? 
                    <Text 
                        style={link}
                        onPress={() => navigation.navigate('signup')}
                    > Create a new account</Text>
                </Text>
            </View>
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex'
    },
    container1: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    s2: {
        display: 'flex',
        backgroundColor: 'lightblue',
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20
    },
    formgroup: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginVertical: 10
    },
    label: {
        fontSize: 20,
        color: 'black',
        marginLeft: 10,
        marginBottom: 5
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10
    }
})