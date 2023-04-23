import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/screens/Welcome';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="welcome" 
          options={{ headerShown: false }}
        >
          {props => <Welcome {...props} />}
        </Stack.Screen>

        <Stack.Screen 
          name="login" 
          options={{ headerShown: false }}
        >
          {props => <Login {...props} />}
        </Stack.Screen>

        <Stack.Screen 
          name="signup" 
          options={{ headerShown: false }}
        >
          {props => <Signup {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});