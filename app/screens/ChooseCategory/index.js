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

import {CreateEventState} from "../../forms/CreateEventState";

import {ActivityRepository} from "../../repositories/Activity";

import _ from 'lodash';

class ChooseCategory extends React.Component {
  state = {
      minHeight:0,
      activities: [],
      form: CreateEventState
  };

  componentWillMount(){
      // load our only activity in Firebase for now @TODO implement all
      ActivityRepository.find('hiking').then((Activity) => {
          //console.warn(JSON.stringify(Activity));
          this.setState({ activities: [Activity] });
      });
  }

  render(){

    return (
      <View style={{flex:1}} onLayout={(e)=>this.setState({minHeight:e.nativeEvent.layout.height})}>
          <ScrollView style={styles.container} contentContainerStyle={{minHeight:this.state.minHeight}}>

            {this.renderContent()}

            <View style={styles.swithView}>
              <TouchableOpacity style={[styles.item, ! this.state.form.isPrivate && styles.selectedItem]} activeOpacity={0.8} onPress={()=>this._updateFormState({isPrivate: false})}>
                <Text style={[styles.itemText, ! this.state.form.isPrivate && styles.selectedText]}>Public</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.item, this.state.form.isPrivate && styles.selectedItem1]} activeOpacity={0.8} onPress={()=>this._updateFormState({isPrivate: true})}>
                <Text style={[styles.itemText, this.state.form.isPrivate && styles.selectedText]}>Secret</Text>
              </TouchableOpacity>
            </View>

              {this.state.form.isPrivate ? <Text style={styles.text}>Only visible through personal invitation</Text> : null}

            <View style={{flex:1}}/>

            <TouchableOpacity style={styles.btnProceed} onPress={()=>this.props.showSetLocation()}>
              <Image source={require('@assets/ic_proceed.png')} style={styles.icon}/>
            </TouchableOpacity>

        <Text style={styles.bottomText}>You can add more activity details on the next page.</Text>

      </ScrollView>
      </View>
    );
  }

  _updateFormState(data){

      this.setState({
          form: _.merge(this.state.form, data)
      });
  }
    _getActivityLevelItems(){
        let options = this.state.form.selectedActivity.level;

        return options.map((item, idx) => {
            return (<Picker.Item label={item} value={idx} key={'level' + idx} />);
        });
    }

    _onActivityLevelChange(itemIdx){

        //console.warn('Chosen', itemIdx);

        this._updateFormState({
            selectedLevelId: itemIdx,
            selectedLevel: _.get(this.state.form.selectedActivity.level, itemIdx)
        });
    }

  renderContent(){
    return (
      <View style={styles.content}>

          <TextInput
              autoCapitalize='none'
              underlineColorAndroid='transparent'
              placeholderTextColor="#5e627a"
              style={styles.input}
              value={this.state.form.selectedActivity.name} editable={false}
          />

          <TextInput
              autoCapitalize='none'
              underlineColorAndroid='transparent'
              placeholderTextColor="#5e627a"
              style={styles.input}
              value={this.state.form.selectedCategory} editable={false}
          />

          <Picker
              style={styles.picker}
              itemStyle={{fontSize: 10, textAlign: "center"}}
              mode="dropdown"
              selectedValue={this.state.form.selectedLevelId}
              onValueChange={this._onActivityLevelChange.bind(this)}>
              {this._getActivityLevelItems()}
          </Picker>

          <TextInput
              autoCapitalize='none'
              underlineColorAndroid='transparent'
              placeholderTextColor="#5e627a"
              placeholder="Number of People"
              style={styles.input} keyboardType="numeric" autoCorrect={false}
              value={this.state.form.people} onChangeText={(text) => this._updateFormState({people: text})}
          />

          <TextInput
              autoCapitalize='none'
              underlineColorAndroid='transparent'
              placeholderTextColor="#5e627a"
              placeholder="Age From"
              style={styles.input} keyboardType="numeric" autoCorrect={false} maxLength={3}
              value={this.state.form.ageFrom} onChangeText={(text) => this._updateFormState({ageFrom: text})}
          />

          <TextInput
              autoCapitalize='none'
              underlineColorAndroid='transparent'
              placeholderTextColor="#5e627a"
              placeholder="Age To"
              style={styles.input} keyboardType="numeric" autoCorrect={false} maxLength={3}
              value={this.state.form.ageTo} onChangeText={(text) => this._updateFormState({ageTo: text})}
          />
      </View>
    )
  }
}

export default ChooseCategory;
