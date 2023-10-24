import {inject, observer} from 'mobx-react';
import React, {Component} from 'react';
import {Animated, Pressable, Text} from 'react-native';
import View = Animated.View;

interface ProfileProps {
    profileStore?: any
}


class Profile extends Component<ProfileProps> {
    render() {
        const {profileStore} = this.props;
        return (
            <>
                <Text>{profileStore.count}</Text>
                <Pressable
                    style={({pressed}) => [
                        {opacity: pressed ? 0.5 : 1.0}
                    ]}
                    onPress={() => profileStore.increment()}>
                    <View><Text>increment</Text></View>
                </Pressable>
                <br/>
                <br/>
                <br/>
                <Pressable
                    style={({pressed}) => [
                        {opacity: pressed ? 0.5 : 1.0}
                    ]}
                    onPress={() => profileStore.decrement()}>
                    <View><Text>decrement</Text></View>
                </Pressable>
            </>
        )
    }
}

export default inject('profileStore')(observer(Profile))