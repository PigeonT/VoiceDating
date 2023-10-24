import React, {Component} from 'react';
import {Text} from 'react-native';
import Profile from "./Profile";


class Home extends Component {
    render() {
        return (
            <>
                <Text>Home Screen</Text>
                <Profile/>
            </>
        )
    }
}

export default Home;