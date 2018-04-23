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
import {Col, Row, Grid} from 'react-native-easy-grid';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

import Tab1 from './TabOne';
import Tab2 from './TabTwo';
import Tab3 from './TabThree';

import styles from "./styles";

const logoMatch = require("../../../assets/match/test.png");
const logoTeam = require("../../../assets/team/test.png");

export default class News extends React.Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <Container>
                <StatusBar barStyle="light-content"/>
                <Tabs>
                    <Tab heading={
                        <TabHeading>
                            <Text>โซเซียลฟีต</Text>
                        </TabHeading>
                    }>
                        <Tab1/>
                    </Tab>
                    <Tab heading={
                        <TabHeading>
                            <Text>เรื่องเด่น</Text>
                        </TabHeading>
                    }>
                        <Tab2/>
                    </Tab>
                    <Tab heading={
                        <TabHeading>
                            <Text>ข่าวทั้งหมด</Text>
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
                            this
                                .props
                                .navigation
                                .navigate('Match')
                        }}>
                            <Icon name="stopwatch"/>
                            <Text style={styles.text}>แมตช์</Text>
                        </Button>
                        <Button
                            active
                            vertical
                            onPress={() => {
                            this
                                .props
                                .navigation
                                .navigate('News')
                        }}>
                            <Icon name="globe"/>
                            <Text style={styles.text}>ข่าวสาร</Text>
                        </Button>
                        <Button 
                            badge 
                            vertical
                            onPress={() => {
                            this
                                .props
                                .navigation
                                .navigate('Follow')
                        }}>
                            <Badge >
                                <Text>51</Text>
                            </Badge>
                            <Icon active name="star"/>
                            <Text style={styles.text}>ติดตาม</Text>
                        </Button>
                        <Button
                            vertical
                            onPress={() => {
                            this
                                .props
                                .navigation
                                .navigate('Menu')
                        }}>
                            <Icon name="menu"/>
                            <Text style={styles.text}>เมนู</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
