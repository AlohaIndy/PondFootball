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

const logoTeam = require("../../../assets/team/test.png");

export default class TabThree extends React.Component {
    render() {
        return (
            <Content style={{backgroundColor: '#DCDCDC'}}>
                <Card>
                    <CardItem bordered>
                        <Icon name='calendar'/>
                        <Text style={styles.cardTextHeader}>พฤ. - 19 เม.ย. 2018</Text>
                    </CardItem>
                    <TouchableOpacity>
                        <CardItem
                            style={{
                            marginRight: 0,
                            paddingRight: 0
                        }}>
                            <Grid>
                                <Col size={1} style={styles.cardColCenter}></Col>
                                <Col size={4} style={styles.cardColRight}>
                                    <Text style={styles.cardTextBody}>ชื่อทีม 1</Text>
                                </Col>
                                <Col size={1} style={styles.cardColCenter}>
                                    <Image source={logoTeam} style={styles.cardImageBody}/>
                                </Col>
                                <Col size={2} style={styles.cardColCenter}>
                                    <Text style={styles.cardTextBodyCenter}>-</Text>
                                </Col>
                                <Col size={1} style={styles.cardColCenter}>
                                    <Image source={logoTeam} style={styles.cardImageBody}/>
                                </Col>
                                <Col size={4} style={styles.cardColLeft}>
                                    <Text style={styles.cardTextBody}>ชื่อทีม 2</Text>
                                </Col>
                                <Col size={1} style={styles.cardColIcon}></Col>
                                <Col size={1} style={styles.cardColIcon}>
                                    <Icon
                                        style={{
                                        alignSelf: "flex-end"
                                    }}
                                        name="ios-notifications-outline"/>
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
                                <Col size={1} style={styles.cardColCenter}></Col>
                                <Col size={4} style={styles.cardColRight}>
                                    <Text style={styles.cardTextBody}>ชื่อทีม 1</Text>
                                </Col>
                                <Col size={1} style={styles.cardColCenter}>
                                    <Image source={logoTeam} style={styles.cardImageBody}/>
                                </Col>
                                <Col size={2} style={styles.cardColCenter}>
                                    <Text style={styles.cardTextBodyCenter}>-</Text>
                                </Col>
                                <Col size={1} style={styles.cardColCenter}>
                                    <Image source={logoTeam} style={styles.cardImageBody}/>
                                </Col>
                                <Col size={4} style={styles.cardColLeft}>
                                    <Text style={styles.cardTextBody}>ชื่อทีม 2</Text>
                                </Col>
                                <Col size={1} style={styles.cardColIcon}></Col>
                                <Col size={1} style={styles.cardColIcon}>
                                    <Icon
                                        style={{
                                        alignSelf: "flex-end"
                                    }}
                                        name="ios-notifications-outline"/>
                                </Col>
                            </Grid>
                        </CardItem>
                    </TouchableOpacity>
                </Card>
                <Card>
                    <CardItem bordered>
                        <Icon name='calendar'/>
                        <Text style={styles.cardTextHeader}>พฤ. - 19 เม.ย. 2018</Text>
                    </CardItem>
                    <TouchableOpacity>
                        <CardItem
                            style={{
                            marginRight: 0,
                            paddingRight: 0
                        }}>
                            <Grid>
                                <Col size={1} style={styles.cardColCenter}></Col>
                                <Col size={4} style={styles.cardColRight}>
                                    <Text style={styles.cardTextBody}>ชื่อทีม 1</Text>
                                </Col>
                                <Col size={1} style={styles.cardColCenter}>
                                    <Image source={logoTeam} style={styles.cardImageBody}/>
                                </Col>
                                <Col size={2} style={styles.cardColCenter}>
                                    <Text style={styles.cardTextBodyCenter}>-</Text>
                                </Col>
                                <Col size={1} style={styles.cardColCenter}>
                                    <Image source={logoTeam} style={styles.cardImageBody}/>
                                </Col>
                                <Col size={4} style={styles.cardColLeft}>
                                    <Text style={styles.cardTextBody}>ชื่อทีม 2</Text>
                                </Col>
                                <Col size={1} style={styles.cardColIcon}></Col>
                                <Col size={1} style={styles.cardColIcon}>
                                    <Icon
                                        style={{
                                        alignSelf: "flex-end"
                                    }}
                                        name="ios-notifications-outline"/>
                                </Col>
                            </Grid>
                        </CardItem>
                    </TouchableOpacity>
                </Card>
            </Content>
        );
    }
}
