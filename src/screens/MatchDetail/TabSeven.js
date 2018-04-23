import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {
    Text,
    Content,
    Badge,
    Card,
    CardItem,
    Body,
    Thumbnail
} from "native-base";

import {Grid, Row, Col} from 'react-native-easy-grid';

import styles from "./styles";

const urlLogoTeamOne = "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Emblem_of_Korea_Football_As" +
        "sociation.svg/1200px-Emblem_of_Korea_Football_Association.svg.png";
const urlLogoTeamTwo = "https://i.pinimg.com/originals/f1/e5/0e/f1e50ea352389ed9eab9700d99313adc.png";
const urlPhoto = "https://jboyecom.files.wordpress.com/2017/04/profile-icon-9.png?w=512";

export default class TabThree extends React.Component {
    render() {
        return (
            <Content  style={{backgroundColor: '#DCDCDC'}}>
                <Card>
                    <CardItem
                        style={{
                        paddingTop: 10,
                        paddingBottom: 0
                    }}>
                        <Body>
                            <Grid>
                                <Col size={2}>
                                    <Image
                                        source={{
                                        uri: urlLogoTeamOne
                                    }}
                                        style={{
                                        width: 30,
                                        height: 35
                                    }}/>
                                </Col>
                                <Col size={5}>
                                    <Text style={styles.cardTextHeaderTabFour}>
                                        ชื่อทีม 1
                                    </Text>
                                </Col>
                                <Col size={2}>
                                    <Image
                                        source={{
                                        uri: urlLogoTeamTwo
                                    }}
                                        style={{
                                        width: 30,
                                        height: 35
                                    }}/>
                                </Col>
                                <Col size={5}>
                                    <Text style={styles.cardTextHeaderTabFour}>
                                        ชื่อทีม 2
                                    </Text>
                                </Col>
                            </Grid>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.cardTextBodyTabFour}>
                                โค้ช/ผู้จัดการทีม
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
                                <Col size={2}>
                                    <Row
                                        style={{
                                        marginBottom: 5
                                    }}>
                                        <Thumbnail
                                            small
                                            source={{
                                            uri: urlPhoto
                                        }}
                                            style={{
                                            borderColor: 'green',
                                            borderWidth: 1
                                        }}/>
                                    </Row>
                                </Col>
                                <Col size={5}>
                                    <Row
                                        style={{
                                        marginBottom: 5
                                    }}>
                                        <Text style={styles.cardTextBodySecondTabSeven}>
                                            ชื่อคน
                                        </Text>
                                    </Row>
                                </Col>
                                <Col size={2}>
                                    <Row
                                        style={{
                                        marginBottom: 5
                                    }}>
                                        <Thumbnail
                                            small
                                            source={{
                                            uri: urlPhoto
                                        }}
                                            style={{
                                            borderColor: 'orange',
                                            borderWidth: 1
                                        }}/>
                                    </Row>
                                </Col>
                                <Col size={5}>
                                    <Row
                                        style={{
                                        marginBottom: 5
                                    }}>
                                        <Text style={styles.cardTextBodySecondTabSeven}>
                                            ชื่อคน
                                        </Text>
                                    </Row>
                                </Col>
                            </Grid>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.cardTextBodyTabFour}>
                                รายชื่อผู้เล่น
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
                                <Col size={2}>
                                    <Row
                                        style={{
                                        marginBottom: 5
                                    }}>
                                        <Thumbnail
                                            small
                                            source={{
                                            uri: urlPhoto
                                        }}
                                            style={{
                                            borderColor: 'green',
                                            borderWidth: 1
                                        }}/>
                                    </Row>
                                    <Row
                                        style={{
                                        marginBottom: 5
                                    }}>
                                        <Thumbnail
                                            small
                                            source={{
                                            uri: urlPhoto
                                        }}
                                            style={{
                                            borderColor: 'green',
                                            borderWidth: 1
                                        }}/>
                                    </Row>
                                    <Row
                                        style={{
                                        marginBottom: 5
                                    }}>
                                        <Thumbnail
                                            small
                                            source={{
                                            uri: urlPhoto
                                        }}
                                            style={{
                                            borderColor: 'green',
                                            borderWidth: 1
                                        }}/>
                                    </Row>
                                </Col>
                                <Col size={5}>
                                    <Row
                                        style={{
                                        marginBottom: 5
                                    }}>
                                        <Text style={styles.cardTextBodySecondTabSeven}>
                                            ชื่อคน
                                        </Text>
                                    </Row>
                                    <Row
                                        style={{
                                        marginBottom: 5
                                    }}>
                                        <Text style={styles.cardTextBodySecondTabSeven}>
                                            ชื่อคน
                                        </Text>
                                    </Row>
                                    <Row
                                        style={{
                                        marginBottom: 5
                                    }}>
                                        <Text style={styles.cardTextBodySecondTabSeven}>
                                            ชื่อคน
                                        </Text>
                                    </Row>
                                </Col>
                                <Col size={2}>
                                    <Row
                                        style={{
                                        marginBottom: 5
                                    }}>
                                        <Thumbnail
                                            small
                                            source={{
                                            uri: urlPhoto
                                        }}
                                            style={{
                                            borderColor: 'orange',
                                            borderWidth: 1
                                        }}/>
                                    </Row>
                                    <Row
                                        style={{
                                        marginBottom: 5
                                    }}>
                                        <Thumbnail
                                            small
                                            source={{
                                            uri: urlPhoto
                                        }}
                                            style={{
                                            borderColor: 'orange',
                                            borderWidth: 1
                                        }}/>
                                    </Row>
                                </Col>
                                <Col size={5}>
                                    <Row
                                        style={{
                                        marginBottom: 5
                                    }}>
                                        <Text style={styles.cardTextBodySecondTabSeven}>
                                            ชื่อคน
                                        </Text>
                                    </Row>
                                    <Row
                                        style={{
                                        marginBottom: 5
                                    }}>
                                        <Text style={styles.cardTextBodySecondTabSeven}>
                                            ชื่อคน
                                        </Text>
                                    </Row>
                                </Col>
                            </Grid>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={styles.cardTextBodyTabFour}>
                                เปลี่ยนตัว
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
                                <Col size={2}>
                                    <Row
                                        style={{
                                        marginBottom: 5
                                    }}>
                                        <Thumbnail
                                            small
                                            source={{
                                            uri: urlPhoto
                                        }}
                                            style={{
                                            borderColor: 'green',
                                            borderWidth: 1
                                        }}/>
                                    </Row>
                                    <Row
                                        style={{
                                        marginBottom: 5
                                    }}>
                                        <Thumbnail
                                            small
                                            source={{
                                            uri: urlPhoto
                                        }}
                                            style={{
                                            borderColor: 'green',
                                            borderWidth: 1
                                        }}/>
                                    </Row>
                                    <Row
                                        style={{
                                        marginBottom: 5
                                    }}>
                                        <Thumbnail
                                            small
                                            source={{
                                            uri: urlPhoto
                                        }}
                                            style={{
                                            borderColor: 'green',
                                            borderWidth: 1
                                        }}/>
                                    </Row>
                                </Col>
                                <Col size={5}>
                                    <Row
                                        style={{
                                        marginBottom: 5
                                    }}>
                                        <Text style={styles.cardTextBodySecondTabSeven}>
                                            ชื่อคน
                                        </Text>
                                    </Row>
                                    <Row
                                        style={{
                                        marginBottom: 5
                                    }}>
                                        <Text style={styles.cardTextBodySecondTabSeven}>
                                            ชื่อคน
                                        </Text>
                                    </Row>
                                    <Row
                                        style={{
                                        marginBottom: 5
                                    }}>
                                        <Text style={styles.cardTextBodySecondTabSeven}>
                                            ชื่อคน
                                        </Text>
                                    </Row>
                                </Col>
                                <Col size={2}>
                                    <Row
                                        style={{
                                        marginBottom: 5
                                    }}>
                                        <Thumbnail
                                            small
                                            source={{
                                            uri: urlPhoto
                                        }}
                                            style={{
                                            borderColor: 'orange',
                                            borderWidth: 1
                                        }}/>
                                    </Row>
                                    <Row
                                        style={{
                                        marginBottom: 5
                                    }}>
                                        <Thumbnail
                                            small
                                            source={{
                                            uri: urlPhoto
                                        }}
                                            style={{
                                            borderColor: 'orange',
                                            borderWidth: 1
                                        }}/>
                                    </Row>
                                </Col>
                                <Col size={5}>
                                    <Row
                                        style={{
                                        marginBottom: 5
                                    }}>
                                        <Text style={styles.cardTextBodySecondTabSeven}>
                                            ชื่อคน
                                        </Text>
                                    </Row>
                                    <Row
                                        style={{
                                        marginBottom: 5
                                    }}>
                                        <Text style={styles.cardTextBodySecondTabSeven}>
                                            ชื่อคน
                                        </Text>
                                    </Row>
                                </Col>
                            </Grid>
                        </Body>
                    </CardItem>

                </Card>
            </Content>
        );
    }
}
