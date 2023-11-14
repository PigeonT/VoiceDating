import React, {Component} from 'react';
import UserList from "../components/UserList";
import UserListStore from "../stores/UserListStore";


class UserListScreen extends Component<any, any> {
    render() {
        return (
            <UserList userListStore={new UserListStore()}/>
        )
    }
}

export default UserListScreen;