import React, {Component} from 'react';
import {View} from 'react-native';
import globalStyles from "../globals/styles/global-styles";
import {Avatar, ListItem} from '@rneui/themed';

const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64,
};

class ProfileScreen extends Component {
    render() {
        return (
            <View style={globalStyles.container}>
                <ListItem bottomDivider>
                    <Avatar
                        rounded
                        source={{uri: "https://randomuser.me/api/portraits/men/36.jpg"}}
                    />
                    <ListItem.Content>
                        <ListItem.Title>John Doe</ListItem.Title>
                        <ListItem.Subtitle>President</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                <ListItem bottomDivider>
                    <Avatar
                        rounded
                        icon={{
                            name: "person-outline",
                            type: "material",
                            size: 26,
                        }}
                        containerStyle={{backgroundColor: "#c2c2c2"}}
                    />
                    <ListItem.Content>
                        <ListItem.Title>Alba King</ListItem.Title>
                        <ListItem.Subtitle>Vice President</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                <ListItem>
                    <Avatar rounded
                            title="A"
                            containerStyle={{backgroundColor: "grey"}}/>
                    <ListItem.Content>
                        <ListItem.Title>Adam Eva</ListItem.Title>
                        <ListItem.Subtitle>Vice Chairman</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            </View>
        )
    }
}

export default ProfileScreen;