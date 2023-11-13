import {makeObservable, observable} from "mobx";
import {User} from "../models/profiles/User";

class UserListStore {
    users: Array<User> = [
        {name: 'John Doe', url: 'President'},
        {name: 'John Doe2', url: 'President2'},
        {name: 'John Doe3', url: 'President3'},
    ];

    constructor() {
        makeObservable(this, {
            users: observable,
        })
    }
}

export default UserListStore;