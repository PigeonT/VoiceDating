import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { Button, Text } from 'react-native';
import Profile from './Profile';



class Home extends Component {
  render() {
    return (
      <>
        <Profile />
      </>
    )
  }
}

export default Home;