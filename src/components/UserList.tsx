import {inject, observer} from 'mobx-react';
import React, {Component} from 'react';
import {Animated} from 'react-native';
import {Avatar, ListItem} from "@rneui/themed";
import UserListStore from "../stores/UserListStore";
import View = Animated.View;


type UserListProps = {
    userListStore: UserListStore
}

class UserList extends Component<UserListProps> {
    constructor(props: UserListProps) {
        super(props);
    }

    render() {
        const {userListStore} = this.props;
        return (
            <View>
                {
                    userListStore.users.map((l, i) => (
                        <ListItem key={i} bottomDivider>
                            <Avatar
                                rounded
                                source={{uri: l.image}}
                            />
                            <ListItem.Content>
                                <ListItem.Title>{l.username}</ListItem.Title>
                                <ListItem.Subtitle>{l.email}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
            </View>
        )
    }
}

export default inject('userListStore')(observer(UserList))