import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import SmsAndroid  from 'react-native-get-sms-android';
/* List SMS messages matching the filter */
var filter = {
    box: 'inbox', // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all
    // the next 4 filters should NOT be used together, they are OR-ed so pick one
    read: 0, // 0 for unread SMS, 1 for SMS already read
    _id: 1234, // specify the msg id
    address: '+1888------', // sender's phone number
    body: 'How are you', // content to match
    // the next 2 filters can be used for pagination
    indexFrom: 0, // start from index 0
    maxCount: 10, // count of SMS to return each time
};

SmsAndroid.list(JSON.stringify(filter), (fail) => {
        console.warn("Failed with this error: " + fail)
    },
    (count, smsList) => {
        console.warn('Count: ', count);
        console.warn('List: ', smsList);
        var arr = JSON.parse(smsList);

        arr.forEach(function(object){
            console.warn("Object: " + object);
            console.warn("-->" + object.date);
            console.warn("-->" + object.body);
        })
    });

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>auth0 login example!!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
