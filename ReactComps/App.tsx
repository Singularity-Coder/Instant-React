import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeReact from './src/screens/WelcomeReact';
import Home from './src/screens/Home';
import CustomButtons from './src/screens/CustomButtons';
import CustomLists from './src/screens/lists/CustomLists';
import { ScreenNames } from './src/helpers/constants/Constants';
import CustomFlatList from './src/screens/lists/CustomFlatList';
import CustomSectionList from './src/screens/lists/CustomSectionList';
import SelectableFlatList from './src/screens/lists/SelectableFlatList';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{
          title: "Home",
          headerShown: false,
        }} />
        <Stack.Screen name={ScreenNames.welcomeReact} component={WelcomeReact} />
        <Stack.Screen name={ScreenNames.customButtons} component={CustomButtons} />
        <Stack.Screen name={ScreenNames.customLists} component={CustomLists} />
        <Stack.Screen name={ScreenNames.flatList} component={CustomFlatList} />
        <Stack.Screen name={ScreenNames.sectionList} component={CustomSectionList} />
        <Stack.Screen name={ScreenNames.selectableFlatList} component={SelectableFlatList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


// Vs code templates - not working - https://stackoverflow.com/questions/71071558/vs-code-generate-boilerplate-code-when-creating-a-new-component