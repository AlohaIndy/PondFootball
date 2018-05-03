import React from 'react';
import {View, StatusBar, Image, TouchableOpacity, ActivityIndicator, FlatList} from 'react-native';
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
    Badge,
    Spinner,
    Header,
    Right,
    Left,
    Title
} from "native-base";
import { NavigationActions } from "react-navigation";
import {Col, Row, Grid} from 'react-native-easy-grid';

import styles from "./styles";

import API from "../../API";

const logoMatch = require("../../../assets/match/test.png");
const logoTeam = require("../../../assets/team/test.png");

export default class Match extends React.Component {
    static navigationOptions = {
        header: null
    };
    static defaultProps = {
        date: new Date().toLocaleString()
    };
    render() {
        // console.warn(this.props.date);
        return (
            <Container>
                <StatusBar barStyle="light-content"/>
                <Header>
                    <Left>
                        <Title style={styles.fontHeader}>To day</Title>
                    </Left>
                    <Right>
                        <Button transparent onPress={() => {this.props.navigation.navigate('Search');}}>
                        <Icon style={{color: 'orange'}} name='search' />
                        </Button>
                        <Button transparent onPress={() => {this.props.navigation.navigate('Search');}}>
                        <Icon style={{color: 'orange'}} name='calendar' />
                        </Button>
                    </Right>
                </Header>
                <Content style={{backgroundColor: '#DCDCDC',flex: 1}}>
                    <Data date={this.props.date} navigation={this.props.navigation} />
                </Content>
                <Footer>
                    <FooterTab>
                        <Button
                            active
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
        );
    }
};

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true
        }
    };
    componentDidMount() {
        // return fetch(API.match+this.props.date).then((response) => response.json()).then((responseJson) => {
        //   this
        //     .setState({
        //       isLoading: false,
        //       dataSource: responseJson.movies
        //     }, function () {});
    
        // }).catch((error) => {
        //   console.error(error);
        // });
        this.setState({
            isLoading: false,
            dataSource: [
                {
                    "id": "0",
                    "header": "The Guardian0",
                    "image" : "https://cdn.bleacherreport.net/images/team_logos/328x328/russia.png",
                    "detail": [
                        {
                            "id": "0",
                            "keylink": "key",
                            "teamone": "Real Madrid",
                            "teamtwo": "Bayern",
                            "time": "21:00",
                            "score": "2-5",
                            "imageone": "https://sport.guim.co.uk/football/crests/120/26303.png",
                            "imagetwo": "https://sport.guim.co.uk/football/crests/120/26247.png"
                        },
                    ]
                },
                {
                    "id": "1",
                    "header": "The Guardian1",
                    "image" : "https://cdn.bleacherreport.net/images/team_logos/328x328/russia.png",
                    "detail": [
                        {
                            "id": "0",
                            "keylink": "key",
                            "teamone": "Real Madrid",
                            "teamtwo": "Bayern",
                            "time": "21:00",
                            "score": "2-5",
                            "imageone": "https://sport.guim.co.uk/football/crests/120/26303.png",
                            "imagetwo": "https://sport.guim.co.uk/football/crests/120/26247.png"
                        },
                    ]
                },
                {
                    "id": "2",
                    "header": "The Guardian2",
                    "image" : "https://cdn.bleacherreport.net/images/team_logos/328x328/russia.png",
                    "detail": [
                        {
                            "id": "0",
                            "keylink": "key",
                            "teamone": "Real Madrid",
                            "teamtwo": "Bayern",
                            "time": "21:00",
                            "score": "2-5",
                            "imageone": "https://sport.guim.co.uk/football/crests/120/26303.png",
                            "imagetwo": "https://sport.guim.co.uk/football/crests/120/26247.png"
                        },
                    ]
                },
            ]
        });
    }
    render() {
        const navigation = this.props.navigation;
        if (this.state.isLoading) {
          return (
            <Spinner color='orange' />
          )
        }
    
        return (
          <View style={{
            flex: 1,
          }}>
            <FlatList
                data={this.state.dataSource}
                renderItem={({item}) =>                     
              
                <Card>
                    <CardItem bordered>
                        <Image source={{uri: item.image}} style={styles.cardImageHeader}/>
                        <Text style={styles.cardTextHeader}>{item.header}</Text>
                    </CardItem>
                    <DataDetail detail={item.detail} navigation={navigation} />
                </Card>}

                keyExtractor={item => item.id}
            />
          </View>
        );
    }
}


class DataDetail extends React.Component {
    render() {
        const navigation = this.props.navigation;
        return (
          <View style={{
            flex: 1,
          }}>
            <FlatList
                data={this.props.detail}
                renderItem={({item}) =>                     
                    <TouchableOpacity onPress={() => {navigation.navigate('MatchDetail', {keylink: item.keylink});}}>
                        <CardItem style={{marginRight: 0,paddingRight:0}}>
                            <Grid>
                            <Col size={1} style={styles.cardColCenter}>
                                </Col>
                                <Col size={4} style={styles.cardColRight}>
                                    <Text style={styles.cardTextBody}>{item.teamone}</Text>
                                </Col>
                                <Col size={1} style={styles.cardColCenter}>
                                    <Image source={{uri: item.imageone}} style={styles.cardImageBody}/>
                                </Col>
                                <Col size={2} style={styles.cardColCenter}>
                                    <Row>
                                        <Text style={styles.cardTextBodyPale}>{item.time}</Text>
                                    </Row>
                                    <Row>
                                        <Text style={styles.cardTextBodyCenter}>{item.score}</Text>
                                    </Row>
                                </Col>
                                <Col size={1} style={styles.cardColCenter}>
                                    <Image source={{uri: item.imagetwo}} style={styles.cardImageBody}/>
                                </Col>
                                <Col size={4} style={styles.cardColLeft}>
                                    <Text style={styles.cardTextBody}>{item.teamtwo}</Text>
                                </Col>
                                <Col size={1} style={styles.cardColIcon}>
                                </Col>
                                <Col size={1} style={styles.cardColIcon}>
                                    <Icon style={{alignSelf: "flex-end",}} name="md-more"/>
                                </Col>
                            </Grid>
                        </CardItem>
                    </TouchableOpacity>
                }
                keyExtractor={item => item.id}/>
          </View>
        );
    }
}
