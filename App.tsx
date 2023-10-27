import * as React from 'react';
import {Component} from 'react';
import {Provider} from "mobx-react";
import HomeStore from "./src/stores/HomeStore";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

class TabViewExample extends Component {
    render() {
        return (
            <SafeAreaProvider>
                <Provider homeStore={new HomeStore(10)}>
                    <NavigationContainer>
                        <Tab.Navigator>
                            <Tab.Screen name="Home"
                                        component={HomeScreen}/>
                            <Tab.Screen name="Profile"
                                        component={ProfileScreen}/>
                        </Tab.Navigator>
                    </NavigationContainer>
                </Provider>
            </SafeAreaProvider>
        );
    }
}


export default TabViewExample;