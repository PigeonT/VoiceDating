import React, {Component} from 'react';
import UserList from "../../components/UserList";
import UserListStore from "../../stores/UserListStore";

class UserListScreen extends Component<any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <UserList userListStore={new UserListStore()}
                      stack={this.props}/>
        )
    }
}

export default UserListScreen;