import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native'
import React from 'react'
import { formgroup, fp, head1, head2, input, label, link, link2 } from '../common/formcss'
import { button1 } from '../common/button'


const Signup = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.container1}>
            <ScrollView style={styles.s2}>
                <Text style={head1}>Create a new account</Text>
                <Text style={link2}>Already registered?&nbsp;
                    <Text 
                        style={link}
                        onPress={() => navigation.navigate('login')}
                    >Login here</Text>
                </Text>
                <View style={formgroup}>
                    <Text style={label}>Name</Text>
                    <TextInput style={input} placeholder='Name'/>
                </View>
                <View style={formgroup}>
                    <Text style={label}>Email</Text>
                    <TextInput style={input} placeholder='Email'/>
                </View>
                <View style={formgroup}>
                    <Text style={label}>DOB</Text>
                    <TextInput style={input} placeholder='Date of birth'/>
                </View>
                <View style={formgroup}>
                    <Text style={label}>Password</Text>
                    <TextInput style={input} placeholder='Password'/>
                </View>
                <View style={formgroup}>
                    <Text style={label}>Confirm Password</Text>
                    <TextInput style={input} placeholder='Confirm password'/>
                </View>   

                <Text style={button1}>Signup</Text>
            </ScrollView>
        </View>
    </View>
  )
}

export default Signup

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
        padding: 20,
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