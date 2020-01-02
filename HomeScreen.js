import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class HomeScreen extends Component {
    static navigationOptions = {

        headerTitle: <Text resizeMode={'contain'} style={{ height: 15, alignSelf: "center", marginLeft: "auto", marginRight: "auto" }}>BLABLABLA </Text>,

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

        headerTintColor: 'black',
        headerTitleStyle: {
            fontWeight: 'bold',
        },



    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#1A87C5', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to About"
                    onPress={() => this.props.navigation.navigate('About')}
                />
            </View>
        )
    }
}