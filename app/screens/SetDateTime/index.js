import React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Picker
} from 'react-native';

import styles from './style';

import DatePicker from 'react-native-datepicker';

import _ from 'lodash';

import PropTypes from 'prop-types';

import {CreateEventState} from "../../forms/CreateEventState";

class SetDateTime extends React.Component {
  state = {
      minHeight:0,
      form: CreateEventState
  };

  _updateFormState(data){

      this.setState({
          form: _.merge(this.state.form, data)
      });
  }

  _onRepeatChange(itemIdx){

      //console.warn('Chosen', itemIdx);

      this._updateFormState({
          repeats: itemIdx
      });
  }

  render(){

    return (
      <View style={{flex:1}} onLayout={(e)=>this.setState({minHeight:e.nativeEvent.layout.height})}>
        <ScrollView style={styles.container} contentContainerStyle={{minHeight:this.state.minHeight}}>
          <View style={styles.swithView}>
            <TouchableOpacity style={[styles.item, this.state.form.allDay && styles.selectedItem]} activeOpacity={0.8} onPress={() => this._updateFormState({allDay: true})}>
              <Text style={[styles.itemText, this.state.form.allDay && styles.selectedText]}>All Day On</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.item, ! this.state.form.allDay && styles.selectedItem1]} activeOpacity={0.8} onPress={() => this._updateFormState({allDay: false})}>
              <Text style={[styles.itemText, ! this.state.form.allDay && styles.selectedText]}>All Day Off</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
              {/* Date Formats courtesy of: http://momentjs.com/ */}
              <DatePicker
                  style={styles.datePicker}
                  showIcon={false}
                  is24Hour={false}
                  date={this.state.form.starts}
                  mode="datetime"
                  placeholder="Select Start Date"
                  format="MMM DD, YYYY | h:mmA"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  minDate={new Date()}
                  customStyles={{
                      dateTouchBody: {
                          flexDirection: 'column',
                          height: 30
                      },
                      dateInput: {
                          height: 30,
                          marginLeft: 0,
                          paddingVertical: 0,
                          paddingHorizontal: 0,
                          borderWidth: 0
                      },
                      dateText: {
                          fontSize: 10,
                          color: "#5e627a"
                      },
                      placeholderText: {
                        fontSize: 10,
                        color: "#5e627a"
                      }
                  }}
                  onDateChange={(dateFmt, date) => this._updateFormState({starts: date})}
              />


              {! this.state.form.allDay ?
                  (<DatePicker
                      style={styles.datePicker}
                      showIcon={false}
                      is24Hour={false}
                      date={this.state.form.ends}
                      mode="datetime"
                      placeholder="Select End Date"
                      format="MMM DD, YYYY | h:mmA"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      minDate={new Date()}
                      customStyles={{
                          dateTouchBody: {
                              flexDirection: 'column',
                              height: 30
                          },
                          dateInput: {
                              height: 30,
                              marginLeft: 0,
                              paddingVertical: 0,
                              paddingHorizontal: 0,
                              borderWidth: 0
                          },
                          dateText: {
                              fontSize: 10,
                              color: "#5e627a"
                          },
                          placeholderText: {
                              fontSize: 10,
                              color: "#5e627a"
                          }
                      }}
                      onDateChange={(dateFmt, date) => this._updateFormState({ends: date})}
                  />) : null
              }

              <Picker
                  style={styles.picker}
                  itemStyle={{fontSize: 10, textAlign: "center"}}
                  mode="dropdown" placeholder="Repeats"
                  selectedValue={this.state.form.repeats} defaultValue="never"
                  onValueChange={this._onRepeatChange.bind(this)}>
                  <Picker.Item label="Never" value="never"/>
                  <Picker.Item label="Every day" value="daily"/>
                  <Picker.Item label="Every week" value="weekly"/>
                  <Picker.Item label="Every 2 weeks" value="biweekly"/>
                  <Picker.Item label="Every month" value="monthly"/>
                  <Picker.Item label="Every year" value="yearly"/>
              </Picker>

              <TextInput
                  autoCapitalize='none'
                  underlineColorAndroid='transparent'
                  placeholderTextColor="#5e627a"
                  placeholder="Add a note about activity"
                  style={[styles.input, {height:150,paddingVertical:10}]}
                  multiline={true}
                  textAlignVertical="top"
                  value={this.state.form.note}
                  onChangeText={(text) => this._updateFormState({note: text})}/>

          </View>

          <TouchableOpacity style={styles.btnProceed} onPress={() => this.props.nextScreen()}>
              <Image source={require('@assets/ic_proceed.png')} style={styles.icon}/>
          </TouchableOpacity>

        </ScrollView>
      </View>
    )
  }

}

SetDateTime.propTypes = {
    nextScreen: PropTypes.func
};

export default SetDateTime;