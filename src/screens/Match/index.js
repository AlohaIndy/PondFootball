import React from 'react';
import {View, StatusBar, Image, TouchableOpacity} from 'react-native';
import {
    Text,
    Container,
    Content,
    Button,
    Icon,
    Card,
    CardItem,
    Footer,
    FooterTab,
    Badge
} from "native-base";
import {Col, Row, Grid} from 'react-native-easy-grid';

import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
} from 'react-native-admob';

import styles from "./styles";

const logoMatch = require("../../../assets/match/test.png");
const logoTeam = require("../../../assets/team/test.png");

export default class Match extends React.Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <Container>
                <StatusBar barStyle="light-content"/>
                <Content style={{backgroundColor: '#DCDCDC'}}>
                    <Card>
                        <CardItem bordered>
                            <Image source={logoMatch} style={styles.cardImageHeader}/>
                            <Text style={styles.cardTextHeader}>ชื่อแมตช์</Text>
                        </CardItem>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('MatchDetail')}}>
                            <CardItem style={{marginRight: 0,paddingRight:0}}>
                                <Grid>
                                <Col size={1} style={styles.cardColCenter}>
                                        
                                    </Col>
                                    <Col size={4} style={styles.cardColRight}>
                                        <Text style={styles.cardTextBody}>ชื่อทีม 1</Text>
                                    </Col>
                                    <Col size={1} style={styles.cardColCenter}>
                                        <Image source={logoTeam} style={styles.cardImageBody}/>
                                    </Col>
                                    <Col size={2} style={styles.cardColCenter}>
                                        <Row>
                                            <Text style={styles.cardTextBodyPale}>4 hr</Text>
                                        </Row>
                                        <Row>
                                            <Text style={styles.cardTextBodyCenter}>22:00</Text>
                                        </Row>
                                    </Col>
                                    <Col size={1} style={styles.cardColCenter}>
                                        <Image source={logoTeam} style={styles.cardImageBody}/>
                                    </Col>
                                    <Col size={4} style={styles.cardColLeft}>
                                        <Text style={styles.cardTextBody}>ชื่อทีม 2</Text>
                                    </Col>
                                    <Col size={1} style={styles.cardColIcon}>
                                    </Col>
                                    <Col size={1} style={styles.cardColIcon}>
                                        <Icon style={{alignSelf: "flex-end",}} name="md-more"/>
                                    </Col>
                                </Grid>
                            </CardItem>
                        </TouchableOpacity>
                    </Card>
                    <Card>
                        <CardItem bordered>
                            <Image source={logoMatch} style={styles.cardImageHeader}/>
                            <Text style={styles.cardTextHeader}>ชื่อแมตช์</Text>
                        </CardItem>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('MatchDetail')}}>
                            <CardItem style={{marginRight: 0,paddingRight:0}}>
                                <Grid>
                                <Col size={1} style={styles.cardColCenter}>
                                        
                                    </Col>
                                    <Col size={4} style={styles.cardColRight}>
                                        <Text style={styles.cardTextBody}>ชื่อทีม 1</Text>
                                    </Col>
                                    <Col size={1} style={styles.cardColCenter}>
                                        <Image source={logoTeam} style={styles.cardImageBody}/>
                                    </Col>
                                    <Col size={2} style={styles.cardColCenter}>
                                        <Row>
                                            <Text style={styles.cardTextBodyPale}>4 hr</Text>
                                        </Row>
                                        <Row>
                                            <Text style={styles.cardTextBodyCenter}>22:00</Text>
                                        </Row>
                                    </Col>
                                    <Col size={1} style={styles.cardColCenter}>
                                        <Image source={logoTeam} style={styles.cardImageBody}/>
                                    </Col>
                                    <Col size={4} style={styles.cardColLeft}>
                                        <Text style={styles.cardTextBody}>ชื่อทีม 2</Text>
                                    </Col>
                                    <Col size={1} style={styles.cardColIcon}>
                                    </Col>
                                    <Col size={1} style={styles.cardColIcon}>
                                        <Icon style={{alignSelf: "flex-end",}} name="md-more"/>
                                    </Col>
                                </Grid>
                            </CardItem>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('MatchDetail')}}>
                            <CardItem style={{marginRight: 0,paddingRight:0}}>
                                <Grid>
                                <Col size={1} style={styles.cardColCenter}>
                                        
                                    </Col>
                                    <Col size={4} style={styles.cardColRight}>
                                        <Text style={styles.cardTextBody}>ชื่อทีม 1</Text>
                                    </Col>
                                    <Col size={1} style={styles.cardColCenter}>
                                        <Image source={logoTeam} style={styles.cardImageBody}/>
                                    </Col>
                                    <Col size={2} style={styles.cardColCenter}>
                                        <Row>
                                            <Text style={styles.cardTextBodyPale}>4 hr</Text>
                                        </Row>
                                        <Row>
                                            <Text style={styles.cardTextBodyCenter}>22:00</Text>
                                        </Row>
                                    </Col>
                                    <Col size={1} style={styles.cardColCenter}>
                                        <Image source={logoTeam} style={styles.cardImageBody}/>
                                    </Col>
                                    <Col size={4} style={styles.cardColLeft}>
                                        <Text style={styles.cardTextBody}>ชื่อทีม 2</Text>
                                    </Col>
                                    <Col size={1} style={styles.cardColIcon}>
                                    </Col>
                                    <Col size={1} style={styles.cardColIcon}>
                                        <Icon style={{alignSelf: "flex-end",}} name="md-more"/>
                                    </Col>
                                </Grid>
                            </CardItem>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('MatchDetail')}}>
                            <CardItem style={{marginRight: 0,paddingRight:0}}>
                                <Grid>
                                <Col size={1} style={styles.cardColCenter}>
                                        
                                    </Col>
                                    <Col size={4} style={styles.cardColRight}>
                                        <Text style={styles.cardTextBody}>ชื่อทีม 1</Text>
                                    </Col>
                                    <Col size={1} style={styles.cardColCenter}>
                                        <Image source={logoTeam} style={styles.cardImageBody}/>
                                    </Col>
                                    <Col size={2} style={styles.cardColCenter}>
                                        <Row>
                                            <Text style={styles.cardTextBodyPale}>4 hr</Text>
                                        </Row>
                                        <Row>
                                            <Text style={styles.cardTextBodyCenter}>22:00</Text>
                                        </Row>
                                    </Col>
                                    <Col size={1} style={styles.cardColCenter}>
                                        <Image source={logoTeam} style={styles.cardImageBody}/>
                                    </Col>
                                    <Col size={4} style={styles.cardColLeft}>
                                        <Text style={styles.cardTextBody}>ชื่อทีม 2</Text>
                                    </Col>
                                    <Col size={1} style={styles.cardColIcon}>
                                    </Col>
                                    <Col size={1} style={styles.cardColIcon}>
                                        <Icon style={{alignSelf: "flex-end",}} name="md-more"/>
                                    </Col>
                                </Grid>
                            </CardItem>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('MatchDetail')}}>
                            <CardItem style={{marginRight: 0,paddingRight:0}}>
                                <Grid>
                                <Col size={1} style={styles.cardColCenter}>
                                        
                                    </Col>
                                    <Col size={4} style={styles.cardColRight}>
                                        <Text style={styles.cardTextBody}>ชื่อทีม 1</Text>
                                    </Col>
                                    <Col size={1} style={styles.cardColCenter}>
                                        <Image source={logoTeam} style={styles.cardImageBody}/>
                                    </Col>
                                    <Col size={2} style={styles.cardColCenter}>
                                        <Row>
                                            <Text style={styles.cardTextBodyPale}>4 hr</Text>
                                        </Row>
                                        <Row>
                                            <Text style={styles.cardTextBodyCenter}>22:00</Text>
                                        </Row>
                                    </Col>
                                    <Col size={1} style={styles.cardColCenter}>
                                        <Image source={logoTeam} style={styles.cardImageBody}/>
                                    </Col>
                                    <Col size={4} style={styles.cardColLeft}>
                                        <Text style={styles.cardTextBody}>ชื่อทีม 2</Text>
                                    </Col>
                                    <Col size={1} style={styles.cardColIcon}>
                                    </Col>
                                    <Col size={1} style={styles.cardColIcon}>
                                        <Icon style={{alignSelf: "flex-end",}} name="md-more"/>
                                    </Col>
                                </Grid>
                            </CardItem>
                        </TouchableOpacity>
                    </Card>
                    <Card>
                        <CardItem bordered>
                            <Image source={logoMatch} style={styles.cardImageHeader}/>
                            <Text style={styles.cardTextHeader}>ชื่อแมตช์</Text>
                        </CardItem>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('MatchDetail')}}>
                            <CardItem style={{marginRight: 0,paddingRight:0}}>
                                <Grid>
                                <Col size={1} style={styles.cardColCenter}>
                                        
                                    </Col>
                                    <Col size={4} style={styles.cardColRight}>
                                        <Text style={styles.cardTextBody}>ชื่อทีม 1</Text>
                                    </Col>
                                    <Col size={1} style={styles.cardColCenter}>
                                        <Image source={logoTeam} style={styles.cardImageBody}/>
                                    </Col>
                                    <Col size={2} style={styles.cardColCenter}>
                                        <Row>
                                            <Text style={styles.cardTextBodyPale}>4 hr</Text>
                                        </Row>
                                        <Row>
                                            <Text style={styles.cardTextBodyCenter}>22:00</Text>
                                        </Row>
                                    </Col>
                                    <Col size={1} style={styles.cardColCenter}>
                                        <Image source={logoTeam} style={styles.cardImageBody}/>
                                    </Col>
                                    <Col size={4} style={styles.cardColLeft}>
                                        <Text style={styles.cardTextBody}>ชื่อทีม 2</Text>
                                    </Col>
                                    <Col size={1} style={styles.cardColIcon}>
                                    </Col>
                                    <Col size={1} style={styles.cardColIcon}>
                                        <Icon style={{alignSelf: "flex-end",}} name="md-more"/>
                                    </Col>
                                </Grid>
                            </CardItem>
                        </TouchableOpacity>
                    </Card>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button
                            active
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
