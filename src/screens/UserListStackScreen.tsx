import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserListStore from "../stores/UserListStore";
import MessageScreen from "./user-list-screen/MessageScreen";
import UserListScreen from "./user-list-screen/UserListScreen";

type UserListProps = {
    userListStore: UserListStore
}

class UserListStackScreen extends Component<any> {
    private stack = createStackNavigator();

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <this.stack.Navigator>
                <this.stack.Screen name="UserListScreen" component={UserListScreen} initialParams={this.stack}/>
                <this.stack.Screen name="MessageScreen" component={MessageScreen} initialParams={this.stack}/>
            </this.stack.Navigator>
        )
    }
}

export default UserListStackScreen