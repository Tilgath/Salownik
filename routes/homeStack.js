import {
    createAppContainer
} from "react-navigation";
import {
    createStackNavigator
} from 'react-navigation-stack'

import HomeScreen from '../HomeScreen';
import AboutScreen from '../ProfileScreen';

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    About: {
        screen: AboutScreen
    },

},

);

const AppContainer = createAppContainer(AppNavigator);

export default createAppContainer(AppNavigator);