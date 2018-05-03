import React from 'react';
import {StackNavigator} from 'react-navigation';
import {StyleProvider} from "native-base";

import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

import Match from '.././screens/Match';
import News from '.././screens/News';
import Follow from '.././screens/Follow';
import Menu from '.././screens/Menu';
import Login from '.././screens/Login';
import Splash from '.././screens/Splash';

import MatchDetail from '.././screens/MatchDetail';
import Search from '.././screens/Search';

import Test from '.././screens/Test';
import Tests from '.././screens/Tests';

const MainStack = StackNavigator({
    Match: {
        screen: Match
    },
    News: {
        screen: News
    },
    Follow: {
        screen: Follow
    },
    Menu: {
        screen: Menu
    },
    Login: {
        screen: Login
    },
    Splash: {
        screen: Splash
    },
    Test: {
        screen: Test
    },
    Tests: {
        screen: Tests
    },
}, {initialRouteName: 'Tests'});

const RootStack = StackNavigator({
    Main: {
        screen: MainStack   
    },
    MatchDetail: {
        screen: MatchDetail
    },
    Search: {
        screen: Search
    }
}, {
    mode: 'modal',
    headerMode: 'none'
});

export default class setup extends React.Component {
    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <RootStack/>
            </StyleProvider>
        );
    }
}
