import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {
    Text,
    Content,
    Badge,
    Card,
    CardItem,
    Body
} from "native-base";

import {Grid, Row, Col} from 'react-native-easy-grid';

import styles from "./styles";

const logoTeam = require("../../../assets/team/test.png");

export default class TabNine extends React.Component {
    render() {
        return (
            <Content style={{backgroundColor: '#DCDCDC'}}>
                <Card style={{
                    paddingBottom: 10
                }}>
                    <CardItem>
                        <Body>
                            <Text style={styles.cardTextHeaderTabOne}>
                                Group A
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem
                        style={{
                        paddingTop: 0,
                        paddingBottom: 0
                    }}>
                        <Body>
                            <Grid>
                                <Col size={6}>
                                    <Text style={styles.cardTextBodySecondTabNine}>อันดับ</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>P</Text>
                                </Col>
                                {/* <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>W</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>D</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>L</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>GF</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>GA</Text>
                                </Col> */}
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>GD</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>Pts.</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>ฟอร์ม</Text>
                                </Col>
                            </Grid>
                        </Body>
                    </CardItem>
                    <CardItem
                        style={{
                        paddingTop: 3,
                        paddingBottom: 3
                    }}>
                        <Body>
                            <Grid>
                                <Col
                                    size={6}
                                    style={{
                                    flexDirection: 'row'
                                }}>
                                    <Text
                                        style={[
                                        styles.cardTextBodySecondTabNine, {
                                            marginRight: 5,
                                            marginLeft: 0
                                        }
                                    ]}>1</Text>
                                    <Image
                                        source={logoTeam}
                                        style={{
                                        width: 22,
                                        height: 26,
                                        marginRight: 5
                                    }}/>
                                    <Text style={styles.cardTextBodySecondTabNine}>ชื่อทีม</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>4</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>3</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>7</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>กราฟ</Text>
                                </Col>
                            </Grid>
                        </Body>
                    </CardItem>
                    <CardItem
                        style={{
                        paddingTop: 3,
                        paddingBottom: 3
                    }}>
                        <Body>
                            <Grid>
                                <Col
                                    size={6}
                                    style={{
                                    flexDirection: 'row'
                                }}>
                                    <Text
                                        style={[
                                        styles.cardTextBodySecondTabNine, {
                                            marginRight: 5,
                                            marginLeft: 0
                                        }
                                    ]}>2</Text>
                                    <Image
                                        source={logoTeam}
                                        style={{
                                        width: 22,
                                        height: 26,
                                        marginRight: 5
                                    }}/>
                                    <Text style={styles.cardTextBodySecondTabNine}>ชื่อทีม</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>4</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>3</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>7</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>กราฟ</Text>
                                </Col>
                            </Grid>
                        </Body>
                    </CardItem>
                    <CardItem
                        style={{
                        paddingTop: 3,
                        paddingBottom: 3
                    }}>
                        <Body>
                            <Grid>
                                <Col
                                    size={6}
                                    style={{
                                    flexDirection: 'row'
                                }}>
                                    <Text
                                        style={[
                                        styles.cardTextBodySecondTabNine, {
                                            marginRight: 5,
                                            marginLeft: 0
                                        }
                                    ]}>3</Text>
                                    <Image
                                        source={logoTeam}
                                        style={{
                                        width: 22,
                                        height: 26,
                                        marginRight: 5
                                    }}/>
                                    <Text style={styles.cardTextBodySecondTabNine}>ชื่อทีม</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>4</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>3</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>7</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>กราฟ</Text>
                                </Col>
                            </Grid>
                        </Body>
                    </CardItem>
                    <CardItem
                        style={{
                        paddingTop: 3,
                        paddingBottom: 3
                    }}>
                        <Body>
                            <Grid>
                                <Col
                                    size={6}
                                    style={{
                                    flexDirection: 'row'
                                }}>
                                    <Text
                                        style={[
                                        styles.cardTextBodySecondTabNine, {
                                            marginRight: 5,
                                            marginLeft: 0
                                        }
                                    ]}>4</Text>
                                    <Image
                                        source={logoTeam}
                                        style={{
                                        width: 22,
                                        height: 26,
                                        marginRight: 5
                                    }}/>
                                    <Text style={styles.cardTextBodySecondTabNine}>ชื่อทีม</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>4</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>3</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>7</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>กราฟ</Text>
                                </Col>
                            </Grid>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <Grid>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabSeven}>
                                        p
                                    </Text>
                                </Col>
                                <Col size={13}>
                                    <Text style={styles.cardTextBodySecondTabSeven}>
                                        ครั้งที่เล่น
                                    </Text>
                                </Col>
                            </Grid>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Grid>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabSeven}>
                                        GD
                                    </Text>
                                </Col>
                                <Col size={13}>
                                    <Text style={styles.cardTextBodySecondTabSeven}>
                                        ผลต่างประตูได้เสีย
                                    </Text>
                                </Col>
                            </Grid>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Grid>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabSeven}>
                                        Pts.
                                    </Text>
                                </Col>
                                <Col size={13}>
                                    <Text style={styles.cardTextBodySecondTabSeven}>
                                        คะแนน
                                    </Text>
                                </Col>
                            </Grid>
                        </Body>
                    </CardItem>
                </Card>
                <Card style={{
                    paddingBottom: 10
                }}>
                    <CardItem>
                        <Body>
                            <Text style={styles.cardTextHeaderTabOne}>
                                Group B
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem
                        style={{
                        paddingTop: 0,
                        paddingBottom: 0
                    }}>
                        <Body>
                            <Grid>
                                <Col size={6}>
                                    <Text style={styles.cardTextBodySecondTabNine}>อันดับ</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>P</Text>
                                </Col>
                                {/* <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>W</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>D</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>L</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>GF</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>GA</Text>
                                </Col> */}
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>GD</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>Pts.</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>ฟอร์ม</Text>
                                </Col>
                            </Grid>
                        </Body>
                    </CardItem>
                    <CardItem
                        style={{
                        paddingTop: 3,
                        paddingBottom: 3
                    }}>
                        <Body>
                            <Grid>
                                <Col
                                    size={6}
                                    style={{
                                    flexDirection: 'row'
                                }}>
                                    <Text
                                        style={[
                                        styles.cardTextBodySecondTabNine, {
                                            marginRight: 5,
                                            marginLeft: 0
                                        }
                                    ]}>1</Text>
                                    <Image
                                        source={logoTeam}
                                        style={{
                                        width: 22,
                                        height: 26,
                                        marginRight: 5
                                    }}/>
                                    <Text style={styles.cardTextBodySecondTabNine}>ชื่อทีม</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>4</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>3</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>7</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>กราฟ</Text>
                                </Col>
                            </Grid>
                        </Body>
                    </CardItem>
                    <CardItem
                        style={{
                        paddingTop: 3,
                        paddingBottom: 3
                    }}>
                        <Body>
                            <Grid>
                                <Col
                                    size={6}
                                    style={{
                                    flexDirection: 'row'
                                }}>
                                    <Text
                                        style={[
                                        styles.cardTextBodySecondTabNine, {
                                            marginRight: 5,
                                            marginLeft: 0
                                        }
                                    ]}>2</Text>
                                    <Image
                                        source={logoTeam}
                                        style={{
                                        width: 22,
                                        height: 26,
                                        marginRight: 5
                                    }}/>
                                    <Text style={styles.cardTextBodySecondTabNine}>ชื่อทีม</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>4</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>3</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>7</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>กราฟ</Text>
                                </Col>
                            </Grid>
                        </Body>
                    </CardItem>
                    <CardItem
                        style={{
                        paddingTop: 3,
                        paddingBottom: 3
                    }}>
                        <Body>
                            <Grid>
                                <Col
                                    size={6}
                                    style={{
                                    flexDirection: 'row'
                                }}>
                                    <Text
                                        style={[
                                        styles.cardTextBodySecondTabNine, {
                                            marginRight: 5,
                                            marginLeft: 0
                                        }
                                    ]}>3</Text>
                                    <Image
                                        source={logoTeam}
                                        style={{
                                        width: 22,
                                        height: 26,
                                        marginRight: 5
                                    }}/>
                                    <Text style={styles.cardTextBodySecondTabNine}>ชื่อทีม</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>4</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>3</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>7</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>กราฟ</Text>
                                </Col>
                            </Grid>
                        </Body>
                    </CardItem>
                    <CardItem
                        style={{
                        paddingTop: 3,
                        paddingBottom: 3
                    }}>
                        <Body>
                            <Grid>
                                <Col
                                    size={6}
                                    style={{
                                    flexDirection: 'row'
                                }}>
                                    <Text
                                        style={[
                                        styles.cardTextBodySecondTabNine, {
                                            marginRight: 5,
                                            marginLeft: 0
                                        }
                                    ]}>4</Text>
                                    <Image
                                        source={logoTeam}
                                        style={{
                                        width: 22,
                                        height: 26,
                                        marginRight: 5
                                    }}/>
                                    <Text style={styles.cardTextBodySecondTabNine}>ชื่อทีม</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>4</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>3</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>7</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabNine}>กราฟ</Text>
                                </Col>
                            </Grid>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <Grid>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabSeven}>
                                        p
                                    </Text>
                                </Col>
                                <Col size={13}>
                                    <Text style={styles.cardTextBodySecondTabSeven}>
                                        ครั้งที่เล่น
                                    </Text>
                                </Col>
                            </Grid>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Grid>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabSeven}>
                                        GD
                                    </Text>
                                </Col>
                                <Col size={13}>
                                    <Text style={styles.cardTextBodySecondTabSeven}>
                                        ผลต่างประตูได้เสีย
                                    </Text>
                                </Col>
                            </Grid>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Grid>
                                <Col size={1}>
                                    <Text style={styles.cardTextBodySecondTabSeven}>
                                        Pts.
                                    </Text>
                                </Col>
                                <Col size={13}>
                                    <Text style={styles.cardTextBodySecondTabSeven}>
                                        คะแนน
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
