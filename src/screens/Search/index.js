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
export default class Search extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Button
            transparent
            onPress={() => {
            this
              .props
              .navigation
              .goBack()
          }}>
            <Icon name='arrow-back'/>
          </Button>
          <Item>
            <Icon name="ios-search" style={{
              color: 'orange'
            }}/>
            <Input placeholder="Search"/>
          </Item>
        </Header>
      </Container>
    );
  }
}