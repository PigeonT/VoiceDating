import React, {Component} from 'react';
import {View} from "react-native";
import {Button, Text} from "@rneui/base";


class MessageScreen extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>message screen</Text>
                <Button title="Go back" onPress={() => this.props.navigation.goBack()}/>
            </View>
        )
    }
}

export default MessageScreen;