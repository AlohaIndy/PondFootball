import React from 'react';
import {View, StatusBar, Image, TouchableOpacity} from 'react-native';
import {
    Text,
    Container,
    Content,
    Button,
    Icon,
    Tab,
    Tabs,
    TabHeading,
    Footer,
    FooterTab,
    StyleProvider,
    Badge
} from "native-base";
import { NavigationActions } from "react-navigation";
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

import Tab1 from './TabOne';
import Tab2 from './TabTwo';
import Tab3 from './TabThree';

import styles from "./styles";

const logoMatch = require("../../../assets/match/test.png");
const logoTeam = require("../../../assets/team/test.png");

export default class Follow extends React.Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (      
            <StyleProvider style={getTheme(material)}>
                <Container>
                    <StatusBar barStyle="light-content"/>
                    
                        <Tabs>
                            <Tab heading={
                                <TabHeading>
                                    <Text>รายการแข่งขัน</Text>
                                </TabHeading>
                            }>
                                <Tab1/>
                            </Tab>
                            <Tab heading={
                                <TabHeading>
                                    <Text>ทีม</Text>
                                </TabHeading>
                            }>
                                <Tab2/>
                            </Tab>
                            <Tab heading={
                                <TabHeading>
                                    <Text>แมตช์</Text>
                                </TabHeading>
                            }>
                                <Tab3/>
                            </Tab>
                        </Tabs>
                    <Footer>
                        <FooterTab>
                            <Button
                                vertical
                                onPress={() => {
                                    this.props.navigation.dispatch(
                                        NavigationActions.reset({
                                        index: 0,
                                        actions: [NavigationActions.navigate({ routeName: "Match" })]
                                        })
                                    );
                                }}
                            >
                                <Icon name="stopwatch"/>
                                <Text style={styles.text}>แมตช์</Text>
                            </Button>
                            <Button 
                                vertical
                                onPress={() => {
                                    this.props.navigation.dispatch(
                                        NavigationActions.reset({
                                        index: 0,
                                        actions: [NavigationActions.navigate({ routeName: "News" })]
                                        })
                                    );
                                }}
                            >
                                <Icon name="globe"/>
                                <Text style={styles.text}>ข่าวสาร</Text>
                            </Button>
                            <Button
                                active
                                badge 
                                vertical
                                onPress={() => {
                                    this.props.navigation.dispatch(
                                        NavigationActions.reset({
                                        index: 0,
                                        actions: [NavigationActions.navigate({ routeName: "Follow" })]
                                        })
                                    );
                                }}
                            >
                                <Badge >
                                    <Text>51</Text>
                                </Badge>
                                <Icon active name="star"/>
                                <Text style={styles.text}>ติดตาม</Text>
                            </Button>
                            <Button
                                vertical
                                onPress={() => {
                                    this.props.navigation.dispatch(
                                        NavigationActions.reset({
                                        index: 0,
                                        actions: [NavigationActions.navigate({ routeName: "Menu" })]
                                        })
                                    );
                                }}
                            >
                                <Icon name="menu"/>
                                <Text style={styles.text}>เมนู</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </StyleProvider>
        );
    }
}
