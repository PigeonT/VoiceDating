import { action, computed, makeObservable, observable } from 'mobx';

class Profile {
    name:string;
    profileImage = ''
    constructor(name) {
        makeObservable(this, {
            name: observable,
            changeName: action
        })
        this.name = name
    }

    get double() {
        return this.name;
    }

    changeName() {
        this.name = `${this.name} haha`
    }
}

export default new Profile('Bob');
