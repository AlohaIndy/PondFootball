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
    Badge,
    Header,
    Right,
    Left,
    Body,
    Title,
    ScrollableTab,
} from "native-base";
import {Col, Row, Grid} from 'react-native-easy-grid';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

import Tab1 from './TabOne';
import Tab2 from './TabTwo';
import Tab3 from './TabThree';
import Tab4 from './TabFour';
import Tab5 from './TabFive';
import Tab6 from './TabSix';
import Tab7 from './TabSeven';
import Tab8 from './TabEight';
import Tab9 from './TabNine';

import styles from "./styles";

const logoTeam = require("../../../assets/team/test.png");

export default class MatchDetail extends React.Component {
    static navigationOptions = {
        header: null
    };
    render() {
        const { params } = this.props.navigation.state;
        const keylink = params ? params.keylink : null;
        console.warn(keylink);
        return (
            <Container>
                <StatusBar barStyle="light-content"/>
                <Header hasTabs style={{paddingLeft: 0, paddingRight: 0}}>
                    <Grid>
                        <Col size={1} style={{justifyContent: 'center'}}>
                            <Button transparent onPress={() => {this.props.navigation.goBack()}}>
                                <Icon name='arrow-back' />
                            </Button>
                        </Col>
                        <Col size={4} style={{flexDirection: 'row', justifyContent: 'center', alignContent: 'center'}}>
                            <TouchableOpacity style={{alignSelf: 'center'}}>
                                <Image source={logoTeam} style={{width: 22, height: 26, alignSelf: 'center'}}/>
                            </TouchableOpacity>
                            <Text style={styles.headerText}>
                                2 - 0
                            </Text>
                            <TouchableOpacity style={{alignSelf: 'center'}}>
                                <Image source={logoTeam} style={{width: 22, height: 26, alignSelf: 'center'}}/>
                            </TouchableOpacity>
                        </Col>
                        <Col size={1} style={{justifyContent: 'center'}}>
                            <Button transparent>
                                <Icon name='ios-notifications' />
                            </Button>
                        </Col>
                    </Grid>
                </Header>
                <StyleProvider style={getTheme(material)}>
                    <Tabs renderTabBar={()=> <ScrollableTab />}>
                        <Tab heading={
                            <TabHeading>
                                <Text>สื่อ</Text>
                            </TabHeading>
                        }>
                            <Tab1/>
                        </Tab>
                        <Tab heading={
                            <TabHeading>
                                <Text>ภาพรวม</Text>
                            </TabHeading>
                        }>
                            <Tab2/>
                        </Tab>
                        <Tab heading={
                            <TabHeading>
                                <Text>เหตุการณ์</Text>
                            </TabHeading>
                        }>
                            <Tab3/>
                        </Tab>
                        <Tab heading={
                            <TabHeading>
                                <Text>สถิติ</Text>
                            </TabHeading>
                        }>
                            <Tab4/>
                        </Tab>
                        <Tab heading={
                            <TabHeading>
                                <Text>ไฮไลท์</Text>
                            </TabHeading>
                        }>
                            <Tab5/>
                        </Tab>
                        <Tab heading={
                            <TabHeading>
                                <Text>คำบรรยาย</Text>
                            </TabHeading>
                        }>
                            <Tab6/>
                        </Tab>
                        <Tab heading={
                            <TabHeading>
                                <Text>รายชื่อผู้เล่น</Text>
                            </TabHeading>
                        }>
                            <Tab7/>
                        </Tab>
                        <Tab heading={
                            <TabHeading>
                                <Text>วิเคราะห์ก่อนแข่ง</Text>
                            </TabHeading>
                        }>
                            <Tab8/>
                        </Tab>
                        <Tab heading={
                            <TabHeading>
                                <Text>ตารางอันดับสด</Text>
                            </TabHeading>
                        }>
                            <Tab9/>
                        </Tab>
                    </Tabs>
                </StyleProvider>
            </Container>
            
        );
    }
}
