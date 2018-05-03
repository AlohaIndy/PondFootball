import React, {Component} from 'react';
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text
} from 'native-base';
import DeviceInfo from 'react-native-device-info';

const APILevel = DeviceInfo.getAPILevel();
const Brand = DeviceInfo.getBrand();
export default class SearchBarExample extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    console.warn("APILevel: " + APILevel);
    console.warn("Brand: " + Brand);
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search"/>
            <Input placeholder="Search"/>
            <Icon name="ios-people"/>
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>
    );
  }
}