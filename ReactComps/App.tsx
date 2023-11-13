import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeReact from './src/screens/WelcomeReact';
import Home from './src/screens/Home';
import CustomButtons from './src/screens/CustomButtons';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{
          title: "Home",
          headerShown: false,
        }} />
        <Stack.Screen name="WelcomeReact" component={WelcomeReact} />
        <Stack.Screen name="CustomButtons" component={CustomButtons} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


// Vs code templates - not working - https://stackoverflow.com/questions/71071558/vs-code-generate-boilerplate-code-when-creating-a-new-component