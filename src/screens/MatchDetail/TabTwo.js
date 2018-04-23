import React from 'react';
import {TouchableOpacity, ImageBackground} from 'react-native';
import {
    Text,
    Content,
    Badge,
    Card,
    CardItem,
    Body,
} from "native-base";

import {Grid, Row, Col} from 'react-native-easy-grid';

import styles from "./styles";

export default class TabTwo extends React.Component {
    render() {
        return (
            <Content  style={{backgroundColor: '#DCDCDC'}}>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={styles.cardTextHeaderTabOne}>
                                อัตราต่อรอง
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem style={{paddingTop: 0}}>
                        <Body>
                            <Text style={styles.cardTextHeaderSecondTabOne}>
                                Three way - ชนะเสมอแพ้
                            </Text>
                            <Grid>
                                <Col size={6}>
                                    <Text style={styles.cardTextBodyTabOne}>
                                        เสมอ
                                    </Text>
                                </Col>
                                <Col size={4}>
                                    <Text style={styles.cardTextBodySecondTabOne}>
                                        1.57
                                    </Text>
                                </Col>
                            </Grid>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={styles.cardTextHeaderTabOne}>
                                ผู้ตัดสิน
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem style={{paddingTop: 0}}>
                        <Body>
                            <Grid>
                                <Col size={6}>
                                    <Text style={styles.cardTextBodyTabOne}>
                                        ผู้ตัดสิน
                                    </Text>
                                </Col>
                                <Col size={4}>
                                    <Text style={styles.cardTextBodySecondTabOne}>
                                        S. Johannesson
                                    </Text>
                                </Col>
                            </Grid>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={styles.cardTextHeaderTabOne}>
                                ข้อเท็จจริง
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem style={{paddingTop: 0}}>
                        <Body>
                            <Grid>
                                <Col size={6}>
                                    <Text style={styles.cardTextBodyTabOne}>
                                        เวลาเริ่ม
                                    </Text>
                                </Col>
                                <Col size={4}>
                                    <Text style={styles.cardTextBodySecondTabOne}>
                                        17/4/18, 00:00
                                    </Text>
                                </Col>
                            </Grid>
                            <Grid>
                                <Col size={6}>
                                    <Text style={styles.cardTextBodyTabOne}>
                                        รอบการแข่ง
                                    </Text>
                                </Col>
                                <Col size={4}>
                                    <Text style={styles.cardTextBodySecondTabOne}>
                                        Regular Season
                                    </Text>
                                </Col>
                            </Grid>
                            <Grid>
                                <Col size={6}>
                                    <Text style={styles.cardTextBodyTabOne}>
                                        ประเทศ
                                    </Text>
                                </Col>
                                <Col size={4}>
                                    <Text style={styles.cardTextBodySecondTabOne}>
                                       สวีเดน
                                    </Text>
                                </Col>
                            </Grid>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={styles.cardTextHeaderTabOne}>
                                สนาม
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem style={{paddingTop: 0}}>
                        <Body>
                            <Grid>
                                <Col size={6}>
                                    <Text style={styles.cardTextBodyTabOne}>
                                        ชื่อ
                                    </Text>
                                </Col>
                                <Col size={4}>
                                    <Text style={styles.cardTextBodySecondTabOne}>
                                        Tele2 Arena
                                    </Text>
                                </Col>
                            </Grid>
                            <Grid>
                                <Col size={6}>
                                    <Text style={styles.cardTextBodyTabOne}>
                                        สถานที่
                                    </Text>
                                </Col>
                                <Col size={4}>
                                    <Text style={styles.cardTextBodySecondTabOne}>
                                        Sweden
                                    </Text>
                                </Col>
                            </Grid>
                            <Grid>
                                <Col size={6}>
                                    <Text style={styles.cardTextBodyTabOne}>
                                        ความจุ
                                    </Text>
                                </Col>
                                <Col size={4}>
                                    <Text style={styles.cardTextBodySecondTabOne}>
                                       33000
                                    </Text>
                                </Col>
                            </Grid>
                            <Grid>
                                <Col size={6}>
                                    <Text style={styles.cardTextBodyTabOne}>
                                        จำนวนผู้เข้าชม
                                    </Text>
                                </Col>
                                <Col size={4}>
                                    <Text style={styles.cardTextBodySecondTabOne}>
                                       20630
                                    </Text>
                                </Col>
                            </Grid>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        );
    }
}
