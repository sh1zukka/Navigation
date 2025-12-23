import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function TabNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen
                initialParams={{
                    screen: "HomeScreen"
                }}
            options={{
                unmountOnBlur: true,
            }}
            name="HomeScreen"
            component={HomeScreen}
            />

            <Stack.Screen
                initialParams={{
                    screen: 'Tabs/ProfileScreen'
                }}
            options={{
                unmountOnBlur: true,
            }}
            name="ProfileScreen"
            component={ProfileScreen}
            />

            <Stack.Screen
                initialParams={{
                    screen: 'Tabs/SettingsScreen'
                }}
            options={{
                unmountOnBlur: true,
            }}
            name="SettingsScreen"
            component={SettingsScreen}
            />
        </Stack.Navigator>
    )
}