import {makeObservable, observable} from "mobx";
import {User} from "../models/profiles/User";
import axios from "axios";

class UserListStore {
    users: Array<User> = [];

    constructor() {
        makeObservable(this, {
            users: observable,
        })
        this.init();
    }

    private async init() {
        try {
            this.users = (await axios.get('https://dummyjson.com/users')).data.users;
        } catch (error) {
            console.error(error);
        }
    }
}

export default UserListStore;