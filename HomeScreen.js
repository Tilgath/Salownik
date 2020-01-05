import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';



export default function HomeScreen({ navigation }) {

    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#1A87C5', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Search"
                onPress={() => { navigation.navigate('Search') }}
            />
        </View>
    )

}