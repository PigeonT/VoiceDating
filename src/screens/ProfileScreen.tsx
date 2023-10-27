import React, {Component} from 'react';
import {Image, View} from 'react-native';
import {Text} from '@rneui/base';
import globalStyles from "../globals/styles/global-styles";

const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64,
};

class ProfileScreen extends Component {
    render() {
        return (
            <View style={globalStyles.container}>
                <Text style={{fontSize: 96}}>Scroll me plz</Text>
                <Image source={logo}/>

                <Text style={{fontSize: 80}}>React Native</Text>
            </View>
        )
    }
}

export default ProfileScreen;