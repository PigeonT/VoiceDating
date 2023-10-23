import { observer } from "mobx-react";
import React from 'react';
import { StyleSheet, View } from 'react-native';

class App extends React.Component {
  name: string;
  constructor(props: { name: string }) {
    super(props);
    this.name = props.name;
  }

  render() {
    return (
      <View>
        <button>Button pending</button>
        {this.name}

      </View>

    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default observer(App);
