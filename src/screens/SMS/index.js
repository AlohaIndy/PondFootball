import React, {Component} from 'react';
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text,
  View
} from 'native-base';
import SendSMS from 'react-native-sms'

export default class SMS extends Component {
  static navigationOptions = {
    header: null
  };
  _sendSMS = () => {
    SendSMS.send({
      body: 'The default body of the SMS!',
      recipients: [
        '0882166230'
      ],
      successTypes: ['sent', 'queued']
    }, (completed, cancelled, error) => {

      console.warn('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);

    });
  };
  render() {
    return (
      <View
        style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View>
          <Button onPress={this._sendSMS}>
            <Text>5555</Text>
          </Button>
        </View>
      </View>
    );
  }
}