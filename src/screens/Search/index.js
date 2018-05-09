import React, {Component} from 'react';
import {TouchableOpacity, Image, FlatList} from 'react-native';
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text,
  Body,
  Content,
  View,
  Footer,
  Card,
  CardItem,
  Spinner
} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import styles from "./styles";
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textsearch: 'ข้อความเริ่มต้น'
    };
  };
  componentDidMount = () => {
    // return fetch(API.search+this.state.textsearch).then((response) =>
    // response.json()).then((responseJson) => {   this     .setState({ isLoading:
    // false,       dataSource: responseJson.movies     }, function () {});
    // }).catch((error) => {   console.error(error); });
    this.setState({
      isLoading: false,
      dataSource: [
        {
          "id": "0",
          "keylink": "key",
          "teamone": "Real Madrid",
          "teamtwo": "Bayern",
          "imageone": "https://sport.guim.co.uk/football/crests/120/26303.png",
          "imagetwo": "https://sport.guim.co.uk/football/crests/120/26247.png"
        }

      ]
    });
  };
  componentDidUpdate = () => {
    console.warn("load data => " + this.state.textsearch);
  };
  _linkData = (keylink) => {
    alert(keylink);
  };
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" style={{
              color: 'orange'
            }}/>
            <Input
              onChangeText={(textsearch) => this.setState({textsearch})}
              placeholder="Search"/>
          </Item>
        </Header>
        <Content>
          <View >
                    


                    <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) =><Card><TouchableOpacity onPress={() => this._linkData(item.keylink)}>
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
                            <Col size={1} style={styles.cardColIcon}>
                            </Col>
                        </Grid>
                    </CardItem>
                </TouchableOpacity></Card>}
                    keyExtractor={item => item.id}/>
                    
         



          </View>
          <View
            style={{
            marginTop: 5,
            marginLeft: 5,
            marginRight: 5
          }}>
            <Button
              onPress={() => {
              this
                .props
                .navigation
                .goBack()
            }}
              block
              style={{
              backgroundColor: "orange"
            }}>
              <Text style={styles.text}>ย้อนกลับ</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}