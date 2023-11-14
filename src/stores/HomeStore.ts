import {action, makeObservable, observable} from "mobx";

class HomeStore {
  count: number;

  constructor() {
    this.count = 10;
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

export default HomeStore;