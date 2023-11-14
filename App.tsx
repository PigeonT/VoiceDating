import * as React from 'react';
import {Component} from 'react';
import {Provider} from "mobx-react";
import HomeScreen from "./src/screens/HomeScreen";
import UserListScreen from "./src/screens/UserListScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

class TabViewExample extends Component {
    render() {
        return (
            <SafeAreaProvider>
                <Provider>
                    <NavigationContainer>
                        <Tab.Navigator>
                            <Tab.Screen name="Home"
                                        component={HomeScreen}/>
                            <Tab.Screen name="UserList"
                                        component={UserListScreen}/>
                        </Tab.Navigator>
                    </NavigationContainer>
                </Provider>
            </SafeAreaProvider>
        );
    }
}


export default TabViewExample;