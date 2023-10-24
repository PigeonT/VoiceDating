import { action, makeObservable, observable } from "mobx";
class ProfileStore {
  count: number;

  constructor(count: number) {
    this.count = count;
    makeObservable(this, {
      count: observable,
      decrement: action,
      increment: action
    })

  }

  increment() {
    this.count++;
  }


  decrement() {
    this.count--
  }
}

export default ProfileStore;