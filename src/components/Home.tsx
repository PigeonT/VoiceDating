import {inject, observer} from 'mobx-react';
import React, {Component} from 'react';
import {Animated, Pressable, Text} from 'react-native';
import View = Animated.View;

interface HomeProps {
    homeStore?: any
}


class Home extends Component<HomeProps> {
    render() {
        const {homeStore} = this.props;
        return (
            <>
                <Text>{homeStore.count}</Text>
                <Pressable
                    style={({pressed}) => [
                        {opacity: pressed ? 0.5 : 1.0}
                    ]}
                    onPress={() => homeStore.increment()}>
                    <View><Text>increment</Text></View>
                </Pressable>
                <br/>
                <br/>
                <br/>
                <Pressable
                    style={({pressed}) => [
                        {opacity: pressed ? 0.5 : 1.0}
                    ]}
                    onPress={() => homeStore.decrement()}>
                    <View><Text>decrement</Text></View>
                </Pressable>
            </>
        )
    }
}

export default inject('homeStore')(observer(Home))