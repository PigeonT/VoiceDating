import React, {Component} from 'react';
import Home from "../../components/Home";
import {View} from "react-native";
import globalStyles from '../../globals/styles/global-styles';
import HomeStore from "../../stores/HomeStore";


class HomeScreen extends Component {
    render() {
        return (
            <View style={globalStyles.container}>
                <Home homeStore={new HomeStore()}/>
            </View>
        )
    }
}

export default HomeScreen;