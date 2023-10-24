// import {Provider} from "mobx-react";
// import React, {Component} from 'react';
// import {SafeAreaView} from 'react-native';
// import Home from "./src/components/Home";
// import ProfileStore from './src/stores/ProfileStore';
//
// export default class App extends Component {
//     render() {
//         return (
//             <Provider
//                 profileStore={new ProfileStore(10)}>
//                 <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//                     <Home/>
//                 </SafeAreaView>
//             </Provider>
//         )
//     }
// }
//
//

import * as React from 'react';
import {useWindowDimensions} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';
import Home from "./src/components/Home";
import Home2 from "./src/components/Home2";
import {Provider} from "mobx-react";
import ProfileStore from "./src/stores/ProfileStore";

const renderScene = SceneMap({
    home: Home,
    profile: Home2,
});

export default function TabViewExample() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'home', title: 'Home'},
        {key: 'profile', title: 'Profile'},
    ]);

    return (
        <Provider
            profileStore={new ProfileStore(10)}>
            <TabView
                navigationState={{index, routes}}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{width: layout.width}}
            />
        </Provider>
    );
}