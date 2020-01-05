import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';



export default class SearchScreen extends React.Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;

        return (
            <View style={{ flex: 1, backgroundColor: '#1A87C5' }}>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={search}
                />


                <Text>Search Screen</Text>
            </View>
        );
    }
}