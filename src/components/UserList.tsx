import {inject, observer} from 'mobx-react';
import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {Avatar, ListItem} from "@rneui/themed";
import UserListStore from "../stores/UserListStore";
import {User} from "../models/profiles/User";


type UserListProps = {
    userListStore: UserListStore;
    stack: any;
}

class UserList extends Component<UserListProps> {
    constructor(props: UserListProps) {
        super(props);
    }

    render() {
        const {userListStore, stack} = this.props;
        return (
            <ScrollView>
                {
                    userListStore.users.map((l, i) => (
                        <ListItem
                            onPress={() => this.changeToUserMessageScreen(l, stack)}
                            key={i} bottomDivider>
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
            </ScrollView>
        )
    }

    private changeToUserMessageScreen(l: User, stack: any) {
        stack.navigation.navigate('MessageScreen');
    }
}

export default inject('userListStore')(observer(UserList))