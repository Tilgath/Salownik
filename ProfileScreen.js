import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class AboutScreen extends Component {
    static navigationOptions = {

        headerTitle: <Text resizeMode={'contain'} style={{ height: 15, flex: 1, textAlign: 'center' }}>BLABLABLA </Text>,

        /*

        headerTitleStyle: {
            alignSelf: 'center',
            textAlign: "center",
            justifyContent: 'center',
            flex: 1,
            fontWeight: 'bold',
            textAlignVertical: 'center'
        },
        */

        headerRight: (<View></View>),
        headerTintColor: 'black',
        headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
            textAlign: 'center'
        },



    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#1A87C5', justifyContent: 'center' }}>
                <Text>About Screen</Text>
            </View>
        )
    }
}