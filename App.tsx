/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import UserProfileScreen from './path/UserProfileScreen.js';
import ListPostsScreen from './path/ListPostsScreen';
import PostDetailsScreen from './path/PostDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="ListPosts" component={ListPostsScreen} />
        <Stack.Screen name="PostDetails" component={PostDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
