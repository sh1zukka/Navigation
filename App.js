import { StyleSheet} from 'react-native';
import TabNavigator from './components/TabNavigator'; 
import SettingsScreen from './screens/SettingsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator initialRouteName="Tabs" screenOptions={{headerShown: false}}>
          <Tab.Screen name="Tabs" component={TabNavigator}/>
          <Tab.Screen name="Settings" component={SettingsScreen}/>
        </Tab.Navigator>
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
