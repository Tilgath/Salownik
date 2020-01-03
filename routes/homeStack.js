import {
    createAppContainer
} from "react-navigation";
import {
    createStackNavigator
} from 'react-navigation-stack'

import React from 'react';
import HomeScreen from '../HomeScreen';
import SearchScreen from '../SearchScreen';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity
} from 'react-native';

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#1A87C5'
            },
            headerTitle: 'HomeScreen',
            headerTitleStyle: {
                color: 'white',
                flex: 1,
                alignSelf: 'center',
                textAlign: 'center'
            },
            headerLeft: (<View></View>),
            headerRight: () => (
                <TouchableOpacity marginRight onPress={() => navigation.navigate('Search')}>
                    <Text style={{ marginRight: 15, color: 'white', fontSize: 15 }}> SEARCH </Text>
                </TouchableOpacity>
            ),
        }

    },
    Search: {
        screen: SearchScreen
    },

},

);

const AppContainer = createAppContainer(AppNavigator);

export default createAppContainer(AppNavigator);