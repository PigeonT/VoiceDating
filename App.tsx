import * as React from 'react';
import {Component} from 'react';
import HomeScreen from "./src/screens/home-screen/HomeScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import UserListStackScreen from "./src/screens/UserListStackScreen";

const Tab = createBottomTabNavigator();

class TabViewExample extends Component {

    render() {
        return (
            <SafeAreaProvider>
                    <NavigationContainer>
                        <Tab.Navigator>
                            <Tab.Screen name="Home"
                                        component={HomeScreen}/>
                            <Tab.Screen name="UserList"
                                        component={UserListStackScreen}/>
                        </Tab.Navigator>
                    </NavigationContainer>
            </SafeAreaProvider>
        );
    }
}


export default TabViewExample;