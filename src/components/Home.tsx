import {inject, observer} from 'mobx-react';
import React, {Component} from 'react';
import {Animated, StyleSheet} from 'react-native';
import {Button, Text} from '@rneui/base';
import globalStyles from "../globals/styles/global-styles";
import View = Animated.View;

type HomeProps = {
    homeStore?: any
}


class Home extends Component<HomeProps, any> {
    constructor(props) {
        super(props);
    }

    render() {
        const {homeStore} = this.props;
        return (
            <View style={styles.container}>

                <Button style={styles.button}
                        onPress={() => homeStore.increment()}>
                    <View><Text>increment</Text></View>
                </Button>

                <Button style={styles.button}
                        onPress={() => homeStore.decrement()}>
                    <View><Text>decremsadsadasdent</Text></View>
                </Button>
                <Text style={styles.text}>{homeStore.count}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ...globalStyles,
    button: {
        flex: 1,
        padding: 10,
    },
    text: {
        flex: 1,
        margin: 'auto',
        padding: 10,
    },
});


export default inject('homeStore')(observer(Home))
