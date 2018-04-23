import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {
    Text,
    Content,
    Badge,
    Card,
    CardItem,
    Body,
    Icon
} from "native-base";
import {Col, Row, Grid} from 'react-native-easy-grid';

import styles from "./styles";

const logoMatch = require("../../../assets/match/test.png");

export default class TabTwo extends React.Component {
    render() {
        return (
            <Content style={{backgroundColor: '#DCDCDC'}}>
                <Card>
                    <TouchableOpacity>
                        <CardItem
                            style={{
                            marginRight: 0,
                            paddingRight: 0
                        }}>
                            <Grid>
                                <Col size={8} style={styles.colLeft}>
                                    <Image source={logoMatch} style={styles.image}/>
                                    <Text style={styles.cardText}>ญี่ปุ่น - เจลีก ดิวิชั่น 1</Text>
                                </Col>
                                <Col size={2} style={styles.colRigth}>
                                    <Icon name='ios-notifications-outline'/>
                                </Col>
                            </Grid>
                        </CardItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardItem
                            style={{
                            marginRight: 0,
                            paddingRight: 0
                        }}>
                            <Grid>
                                <Col size={8} style={styles.colLeft}>
                                    <Image source={logoMatch} style={styles.image}/>
                                    <Text style={styles.cardText}>ญี่ปุ่น - เจลีก ดิวิชั่น 1</Text>
                                </Col>
                                <Col size={2} style={styles.colRigth}>
                                    <Icon name='ios-notifications-outline'/>
                                </Col>
                            </Grid>
                        </CardItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardItem
                            style={{
                            marginRight: 0,
                            paddingRight: 0
                        }}>
                            <Grid>
                                <Col size={8} style={styles.colLeft}>
                                    <Image source={logoMatch} style={styles.image}/>
                                    <Text style={styles.cardText}>ญี่ปุ่น - เจลีก ดิวิชั่น 1</Text>
                                </Col>
                                <Col size={2} style={styles.colRigth}>
                                    <Icon name='ios-notifications-outline'/>
                                </Col>
                            </Grid>
                        </CardItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardItem
                            style={{
                            marginRight: 0,
                            paddingRight: 0
                        }}>
                            <Grid>
                                <Col size={8} style={styles.colLeft}>
                                    <Image source={logoMatch} style={styles.image}/>
                                    <Text style={styles.cardText}>ญี่ปุ่น - เจลีก ดิวิชั่น 1</Text>
                                </Col>
                                <Col size={2} style={styles.colRigth}>
                                    <Icon name='ios-notifications-outline'/>
                                </Col>
                            </Grid>
                        </CardItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardItem
                            style={{
                            marginRight: 0,
                            paddingRight: 0
                        }}>
                            <Grid>
                                <Col size={8} style={styles.colLeft}>
                                    <Image source={logoMatch} style={styles.image}/>
                                    <Text style={styles.cardText}>ญี่ปุ่น - เจลีก ดิวิชั่น 1</Text>
                                </Col>
                                <Col size={2} style={styles.colRigth}>
                                    <Icon name='ios-notifications-outline'/>
                                </Col>
                            </Grid>
                        </CardItem>
                    </TouchableOpacity>
                </Card>
            </Content>
        );
    }
}
