import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';

import NewPost from '../screens/NewPost';
import Post from '../screens/Post';
import SelectedPost from '../screens/SelectedPost';
import EditPost from '../screens/EditPost';

enableScreens(); // Enable react-native-screens

const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="NewPost" component={NewPost} options={{ headerShown: false }} />
        <Stack.Screen name="Post" component={Post} options={{ headerShown: false }}  />
        <Stack.Screen name="SelectedPost" component={SelectedPost} options={{ headerShown: false }} />
        <Stack.Screen name="Edit" component={EditPost} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreen;
