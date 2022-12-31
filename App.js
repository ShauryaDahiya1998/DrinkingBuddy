import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LandingPage from './screens/LandingPage';
import CocktailsScreen from './screens/CocktailsScreen';
import EatsScreen from './screens/EatsScreen';
import DrinkingGamesScreen from './screens/DrinkingGamesScreen';
import MocktailsScreen from './screens/MocktailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
        <Stack.Navigator >
            <Stack.Screen name="Home" component={LandingPage} />
            <Stack.Screen name="CocktailsScreen" component={CocktailsScreen} options={{contentStyle:{backgroundColor:'#c4dcf5'}}} />
            <Stack.Screen name="EatsScreen" component={EatsScreen}  />
            <Stack.Screen name="DrinkingGamesScreen" component={DrinkingGamesScreen}  />
            <Stack.Screen name="MocktailsScreen" component={MocktailsScreen}  />
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
