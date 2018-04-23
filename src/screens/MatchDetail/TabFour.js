import React from 'react';
import {TouchableOpacity, ProgressBarAndroid} from 'react-native';
import {
    Text,
    Content,
    Badge,
    Card,
    CardItem,
    Body,
    View,
    Button
} from "native-base";
import {Grid, Row, Col} from 'react-native-easy-grid';

import styles from "./styles";

export default class TabFour extends React.Component {

    render() {
        return (
            <Content style={{backgroundColor: '#DCDCDC'}}>
                <Card>
                    <CardItem>
                        <Body>
                            <Grid>
                                <Col size={1}>
                                    <Button
                                        style={{
                                        backgroundColor: 'green',
                                        width: 30,
                                        height: 30
                                    }}/>
                                </Col>
                                <Col size={8}>
                                    <Text style={styles.cardTextHeaderTabFour}>
                                        ชื่อทีม 1
                                    </Text>
                                </Col>
                            </Grid>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Grid>
                                <Col size={1}>
                                    <Button
                                        style={{
                                        backgroundColor: 'orange',
                                        width: 30,
                                        height: 30
                                    }}/>
                                </Col>
                                <Col size={8}>
                                    <Text style={styles.cardTextHeaderTabFour}>
                                        ชื่อทีม 2
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
                                เกมส์บุก
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem style={{
                        paddingTop: 0
                    }}>
                        <Body>
                            <Text style={styles.cardTextBodyTabOne}>
                                ประตู
                            </Text>
                            <Grid>
                                <Col size={8} style={{justifyContent: 'center'}}>
                                    <ProgressBarAndroid
                                        styleAttr="Horizontal"
                                        indeterminate={false}
                                        progress={0.4}
                                        color="green"/>
                                </Col>
                                <Col size={2} style={{justifyContent: 'center'}}>
                                    <Text style={styles.cardTextBodySecondTabOne}>
                                        4
                                    </Text>
                                </Col>
                            </Grid>
                            <Grid>
                                <Col size={8} style={{justifyContent: 'center'}}>
                                    <ProgressBarAndroid
                                        styleAttr="Horizontal"
                                        indeterminate={false}
                                        progress={0}
                                        color="orange"/>
                                </Col>
                                <Col size={2} style={{justifyContent: 'center'}}>
                                    <Text style={styles.cardTextBodySecondTabOne}>
                                        0
                                    </Text>
                                </Col>
                            </Grid>
                        </Body>
                    </CardItem>
                    <CardItem style={{
                        paddingTop: 0
                    }}>
                        <Body>
                            <Text style={styles.cardTextBodyTabOne}>
                                เกมส์บุก
                            </Text>
                            <Grid>
                                <Col size={8} style={{justifyContent: 'center'}}>
                                    <ProgressBarAndroid
                                        styleAttr="Horizontal"
                                        indeterminate={false}
                                        progress={0.54}
                                        color="green"/>
                                </Col>
                                <Col size={2} style={{justifyContent: 'center'}}>
                                    <Text style={styles.cardTextBodySecondTabOne}>
                                        54
                                    </Text>
                                </Col>
                            </Grid>
                            <Grid>
                                <Col size={8} style={{justifyContent: 'center'}}>
                                    <ProgressBarAndroid
                                        styleAttr="Horizontal"
                                        indeterminate={false}
                                        progress={0.51}
                                        color="orange"/>
                                </Col>
                                <Col size={2} style={{justifyContent: 'center'}}>
                                    <Text style={styles.cardTextBodySecondTabOne}>
                                        51
                                    </Text>
                                </Col>
                            </Grid>
                        </Body>
                    </CardItem>
                    <CardItem style={{
                        paddingTop: 0
                    }}>
                        <Body>
                            <Text style={styles.cardTextBodyTabOne}>
                                เกมส์บุกที่อันตราย
                            </Text>
                            <Grid>
                                <Col size={8} style={{justifyContent: 'center'}}>
                                    <ProgressBarAndroid
                                        styleAttr="Horizontal"
                                        indeterminate={false}
                                        progress={0.42}
                                        color="green"/>
                                </Col>
                                <Col size={2} style={{justifyContent: 'center'}}>
                                    <Text style={styles.cardTextBodySecondTabOne}>
                                        42
                                    </Text>
                                </Col>
                            </Grid>
                            <Grid>
                                <Col size={8} style={{justifyContent: 'center'}}>
                                    <ProgressBarAndroid
                                        styleAttr="Horizontal"
                                        indeterminate={false}
                                        progress={0.35}
                                        color="orange"/>
                                </Col>
                                <Col size={2} style={{justifyContent: 'center'}}>
                                    <Text style={styles.cardTextBodySecondTabOne}>
                                        35
                                    </Text>
                                </Col>
                            </Grid>
                        </Body>
                    </CardItem>
                    <CardItem style={{
                        paddingTop: 0
                    }}>
                        <Body>
                            <Text style={styles.cardTextBodyTabOne}>
                                ครองบอล
                            </Text>
                            <Grid>
                                <Col size={8} style={{justifyContent: 'center'}}>
                                    <ProgressBarAndroid
                                        styleAttr="Horizontal"
                                        indeterminate={false}
                                        progress={0.49}
                                        color="green"/>
                                </Col>
                                <Col size={2} style={{justifyContent: 'center'}}>
                                    <Text style={styles.cardTextBodySecondTabOne}>
                                        49%
                                    </Text>
                                </Col>
                            </Grid>
                            <Grid>
                                <Col size={8} style={{justifyContent: 'center'}}>
                                    <ProgressBarAndroid
                                        styleAttr="Horizontal"
                                        indeterminate={false}
                                        progress={0.51}
                                        color="orange"/>
                                </Col>
                                <Col size={2} style={{justifyContent: 'center'}}>
                                    <Text style={styles.cardTextBodySecondTabOne}>
                                        51%
                                    </Text>
                                </Col>
                            </Grid>
                        </Body>
                    </CardItem>
                    <CardItem style={{
                        paddingTop: 0
                    }}>
                        <Body>
                            <Text style={styles.cardTextBodyTabOne}>
                                เตะมุม
                            </Text>
                            <Grid>
                                <Col size={8} style={{justifyContent: 'center'}}>
                                    <ProgressBarAndroid
                                        styleAttr="Horizontal"
                                        indeterminate={false}
                                        progress={0.2}
                                        color="green"/>
                                </Col>
                                <Col size={2} style={{justifyContent: 'center'}}>
                                    <Text style={styles.cardTextBodySecondTabOne}>
                                        2
                                    </Text>
                                </Col>
                            </Grid>
                            <Grid>
                                <Col size={8} style={{justifyContent: 'center'}}>
                                    <ProgressBarAndroid
                                        styleAttr="Horizontal"
                                        indeterminate={false}
                                        progress={0.7}
                                        color="orange"/>
                                </Col>
                                <Col size={2} style={{justifyContent: 'center'}}>
                                    <Text style={styles.cardTextBodySecondTabOne}>
                                        7
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
