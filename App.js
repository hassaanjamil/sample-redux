
import * as React from 'react';
import CounterScreen from './src/screens/CounterScreen';
import LocationScreen from './src/screens/LocationScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import {primary} from './src/constants/Colors';
import ListScreen from './src/screens/ListScreen';

const App = props => {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Counter') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'Location') {
              iconName = focused ? 'location' : 'location-outline';
            } else if (route.name === 'List') {
              iconName = focused ? 'list-circle' : 'list-circle-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: primary,
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Counter" component={CounterScreen} />
        <Tab.Screen name="Location" component={LocationScreen} />
        <Tab.Screen name="List" component={ListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;