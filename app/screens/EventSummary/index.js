import React from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './style';

import {DashboardItem, DashboardHeader} from '@components';

import {CreateEventState} from "../../forms/CreateEventState";

class EventSummary extends React.Component {
  state = {
      form: CreateEventState
  };

  componentDidMount(){
      //console.warn(JSON.stringify(this.state.form));
  }

  onNext(){
      if (! this.props.isSaving){
          this.props.next();
      }
  }

  render(){
    return (

      <ScrollView style={{flex:1, backgroundColor:'#090f2e'}} contentContainerStyle={styles.container}>
        <View style={styles.topView}>
            <View style={styles.topRow} />
            <Image source={{ uri: this.state.form.selectedActivity.icon }} style={ styles.logo } />
        </View>
        <View style={styles.row}>
          <View style={styles.item}>
            <Image source={require('@assets/ic_location.png')} style={styles.icon}/>
            <Text style={styles.text}>LOCATION</Text>
          </View>
          <View style={[styles.rightItem, {width: 120}]}>
            {this.state.form.location ?
              <Text style={[styles.rightItemText]}>
                  {this.state.form.location}
              </Text>
            : null}
            <Text style={[styles.rightItemText]}>
                {this.state.form.address}
            </Text>
            <Text style={[styles.rightItemText]}>
                {this.state.form.cityStateZip()}
            </Text>
          </View>
        </View>
        <View style={styles.row1}>
          <View style={styles.leftView}>
            <View style={styles.item}>
              <Image source={require('@assets/ic_datetime.png')} style={styles.icon}/>
              <Text style={styles.text}>DATE / TIME</Text>
            </View>
            <View style={styles.rightItem}>
              <Text style={styles.rightItemText} numberOfLines={2}>
                  {this.state.form.startDate()}
              </Text>
                {this.state.form.repeatText() ?
                    <Text style={styles.rightItemText}>
                        {this.state.form.repeatText()}
                    </Text>
                : null}
            </View>
          </View>
          <View style={styles.rightView}>
            <Text style={styles.rightItemText1}>{ this.state.form.startTime() }</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.item}>
          <Image source={require('@assets/ic_group.png')} style={styles.icon}/>
          <Text style={styles.text}>AGE GROUP</Text>
          </View>
          <View style={[styles.rightItem, {width: 120}]}>
            <Text style={[styles.rightItemText]}>
                {this.state.form.ageGroup()}
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.rightItem, {width: 120}]}>
            <Text style={[styles.rightItemText]}>
                {this.state.form.peopleNeeded()}
            </Text>
          </View>
        </View>

        {this.state.form.note ?
        <View style={styles.noteWrap}>
          <Text style={styles.note}>{this.state.form.note}</Text>
        </View>
        : null}

        {! this.props.isSaving ?
            <TouchableOpacity style={styles.btnNext} activeOpacity={0.8} onPress={() => this.props.next()}>
                <Image source={require('@assets/ic_next_button.png')} style={styles.btnIcon}/>
            </TouchableOpacity>
        : <Text style={{color: 'white', fontSize: 14, alignSelf: 'center'}}>Saving...</Text>}

      </ScrollView>
    )
  }
}

EventSummary.propTypes = {
    isSaving: PropTypes.bool,
    next: PropTypes.func
};

export default EventSummary;
