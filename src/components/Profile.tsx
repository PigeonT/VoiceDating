import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { Button, Text } from 'react-native';
interface ProfileProps {
  profileStore?: any
}


class Profile extends Component<ProfileProps> {
  render() {
    const { profileStore } = this.props;
    return (
      <>
        <Text>{profileStore.count}</Text>
        <Button title="increment" onPress={() => profileStore.increment()} />
        <Button title="decrement" onPress={() => profileStore.decrement()} />
      </>
    )
  }
}

export default inject('profileStore')(observer(Profile))