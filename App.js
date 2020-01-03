import React from 'react';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import {
  AppLoading
} from 'expo';
import Navigator from './routes/homeStack';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';



export default function App() {

  return <Navigator />;

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A87C5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});