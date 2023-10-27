import React, {Component} from 'react';
import Home from "../components/Home";
import {View} from "react-native";
import globalStyles from '../globals/styles/global-styles';


class HomeScreen extends Component {
    render() {
        return (
            <View style={globalStyles.container}>
                <Home/>
            </View>
        )
    }
}

export default HomeScreen;