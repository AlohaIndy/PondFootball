import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class DateTimePickerTester extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      dataDate: "don't have"
    }
  };

  state = {
    isDateTimePickerVisible: false

  };

  _showDateTimePicker = () => this.setState({isDateTimePickerVisible: true});

  _hideDateTimePicker = () => this.setState({isDateTimePickerVisible: false});

  _handleDatePicked = (date) => {
    this.setState({
      dataDate: "" + date
    });
    var choosedDate=this.state.dataDate.substring(8,10);
    var choosedMont=this.state.dataDate.substring(4,7);
    var choosedYear=this.state.dataDate.substring(11,15);
    console.warn(this.state.dataDate.substring(4,15));
    this._hideDateTimePicker();
  };

  render() {
    return (
      <View style={{
        flex: 1
      }}>
        <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text>Show DatePicker</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          mode='date'/>
      </View>
    );
  }

}