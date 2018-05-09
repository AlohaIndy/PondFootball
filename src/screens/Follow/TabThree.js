import React from 'react';
import {TouchableOpacity, Image, FlatList} from 'react-native';
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
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    };
    componentDidMount() {
        // return fetch(API.followthree).then((response) =>
        // response.json()).then((responseJson) => {   this     .setState({ isLoading:
        // false,       dataSource: responseJson.movies     }, function () {});
        // }).catch((error) => {   console.error(error); });
        this.setState({
            isLoading: false,
            dataSource: [
                {
                    "id": "0",
                    "header": "พฤ. - 19 เม.ย. 2018",
                    "detail": [
                        {
                            "id": "0",
                            "keylink": "key",
                            "teamone": "Real Madrid",
                            "teamtwo": "Bayern",
                            "imageone": "https://sport.guim.co.uk/football/crests/120/26303.png",
                            "imagetwo": "https://sport.guim.co.uk/football/crests/120/26247.png"
                        }
                    ]
                },
                {
                    "id": "1",
                    "header": "พฤ. - 19 เม.ย. 2018",
                    "detail": [
                        {
                            "id": "0",
                            "keylink": "key",
                            "teamone": "Real Madrid",
                            "teamtwo": "Bayern",
                            "imageone": "https://sport.guim.co.uk/football/crests/120/26303.png",
                            "imagetwo": "https://sport.guim.co.uk/football/crests/120/26247.png"
                        },
                        {
                            "id": "1",
                            "keylink": "key",
                            "teamone": "Real Madrid",
                            "teamtwo": "Bayern",
                            "imageone": "https://sport.guim.co.uk/football/crests/120/26303.png",
                            "imagetwo": "https://sport.guim.co.uk/football/crests/120/26247.png"
                        }
                    ]
                }
            ]
        });
    };
    _linkData = (keylink) => {
        alert(keylink);
    };
    _delete = (keylink) => {
        alert("delete");
    };
    render() {
        return (
            <Content style={{
                backgroundColor: '#DCDCDC'
            }}>

                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Card>
                    <CardItem bordered>
                        <Icon name='calendar'/>
                        <Text style={styles.cardTextHeader}>{item.header}</Text>
                    </CardItem>
                    <FlatList
                    data={item.detail}
                    renderItem={({item}) =><TouchableOpacity onPress={() => this._linkData(item.keylink)}>
                    <CardItem
                        style={{
                        marginRight: 0,
                        paddingRight: 0
                    }}>
                        <Grid>
                            <Col size={1} style={styles.cardColCenter}></Col>
                            <Col size={4} style={styles.cardColRight}>
                                <Text style={styles.cardTextBody}>{item.teamone}</Text>
                            </Col>
                            <Col size={1} style={styles.cardColCenter}>
                                <Image 
                                    source={{
                                        uri: item.imageone
                                    }} 
                                    style={styles.cardImageBody}
                                />
                            </Col>
                            <Col size={2} style={styles.cardColCenter}>
                                <Text style={styles.cardTextBodyCenter}>-</Text>
                            </Col>
                            <Col size={1} style={styles.cardColCenter}>
                                <Image 
                                    source={{
                                        uri: item.imagetwo
                                    }} 
                                    style={styles.cardImageBody}
                                />
                            </Col>
                            <Col size={4} style={styles.cardColLeft}>
                                <Text style={styles.cardTextBody}>{item.teamtwo}</Text>
                            </Col>
                            <Col size={1} style={styles.cardColIcon}>
                            </Col>
                            <TouchableOpacity onPress={() => this._delete()}>
                            <Col size={1} style={styles.cardColIcon}>
                                <Icon
                                    style={{
                                    alignSelf: "flex-end"
                                }}
                                    name="ios-close"/>
                            </Col>
                            </TouchableOpacity>
                        </Grid>
                    </CardItem>
                </TouchableOpacity>}
                    keyExtractor={item => item.id}/>
                    
                </Card>}
                    keyExtractor={item => item.id}/>

            </Content>
        );
    }
}
