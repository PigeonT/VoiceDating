import {inject, observer} from 'mobx-react';
import React, {Component} from 'react';
import {Animated, StyleSheet} from 'react-native';
import globalStyles from "../globals/styles/global-styles";
import {Avatar, ListItem} from "@rneui/themed";
import View = Animated.View;


type UserListProps = {
    userListStore?: any
}

class UserList extends Component<UserListProps, any> {
    constructor(props) {
        super(props);
    }

    render() {
        const {userListStore} = this.props;
        return (
            <View style={globalStyles.container}>
                {
                    userListStore.users.map((l, i) => (
                        <ListItem key={i} bottomDivider>
                            <Avatar
                                rounded
                                source={{uri: "https://randomuser.me/api/portraits/men/36.jpg"}}
                            />
                            <ListItem.Content>
                                <ListItem.Title>{l.name}</ListItem.Title>
                                <ListItem.Subtitle>{l.url}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
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

export default inject('userListStore')(observer(UserList))