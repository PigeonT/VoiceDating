import { Provider } from "mobx-react";
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import Home from "./src/components/Home";
import ProfileStore from './src/stores/ProfileStore';

export default class App extends Component {
  render() {
    return (
      <Provider
        profileStore={new ProfileStore(10)}>
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Home />
        </SafeAreaView>
      </Provider>
    )
  }
}