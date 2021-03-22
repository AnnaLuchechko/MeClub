import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import Picker from 'react-native-wheel-picker';
import _ from 'lodash';

import {ActivityRepository} from '../../repositories/Activity';
import {CreateEventState} from "../../forms/CreateEventState";

import PropTypes from 'prop-types';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const list = [
  {
    index:0,
    title:'SURFING',
    icon:require('@assets/ic_surfing.png')
  },
  {
    index:1,
    title:'CYCLING',
    icon:require('@assets/ic_cycling.png')
  },
  {
    index:2,
    title:'SKATEBOARDING',
    icon:require('@assets/ic_skateboarding.png')
  },
  {
    index:3,
    title:'DOG WALKING',
    icon:require('@assets/ic_dog_walking.png')
  },
  {
    index:4,
    title:'BEACH',
    icon:require('@assets/ic_beach.png')
  },
  {
    index:5,
    title:'GOLFING',
    icon:require('@assets/ic_golfing.png')
  },
  {
    index:6,
    title:'SOCIAL HOUR',
    icon:require('@assets/ic_social_hour.png')
  },
  {
    index:7,
    title:'WORKOUT',
    icon:require('@assets/ic_workout.png')
  }
];

const iconSize = 30;
const d = 210;
const firstItemY = 0;
const O = {x: (d - iconSize)/ 2, y: (d - iconSize) / 2};
const source = {x: (d - iconSize) /2, y: firstItemY - iconSize / 2};

class AddActivity extends React.Component {
  state = {
    categories: list,
    activities: [],
    form: CreateEventState
  };

  componentWillMount(){
      // load our only activity in Firebase for now @TODO implement all
      ActivityRepository.find('hiking').then((Activity) => {
        //console.warn(JSON.stringify(Activity));
        this.setState({activities: [Activity]});
      });
  }

  _getCategoryPickerItems(){

    let items = this.state.activities.map((Activity) => {
        return Activity.categories.map((category, idx) => {
          return (<Picker.Item label={category} value={idx} key={Activity.name + idx} />);
        });
    });

    return items;
  }

  _getIdForActivity(idx){

    // @TODO grab actual activity chosen
    let activity = _.first(this.state.activities);

    if (activity){
      return _.get(activity.categories, idx);
    }

    return null;
  }

  _onPickerChange(itemIdx){

      this._updateFormState({
          selectedId: itemIdx,
          selectedActivity: _.first(this.state.activities),
          selectedCategory: this._getIdForActivity(itemIdx)
      });
  }

  _updateFormState(data){

    this.setState({
        form: _.merge(this.state.form, data)
    });

  }

  render(){
    let { categories} = this.state;
    let { selectedId } = this.state.form;

    let angle = Math.PI * 2 / (categories.length);
    let items = [];
    for (let i = 0; i < categories.length; i++) {
      let {x, y} = this.rotate_point(O, angle * (i), source);
      let style = {position: 'absolute', top: y, left: x};
      items.push(this.renderItem(categories[i], style, i));
    }

    return (
      <View style={styles.container}>
        <View style={styles.wrap}>
          <View style={styles.backgroundView} />
          <View style={styles.hightLight}/>
          <View style={{width:210,height:210,marginLeft:45,marginTop:45}}>
            {items}
          </View>
          <View style={styles.centerView}>
          <Picker
            style={{width: 120, height: 120}}
            itemStyle={{color:"white", fontSize:10}}
            selectedValue={selectedId}
            onValueChange={this._onPickerChange.bind(this)}>
              {/* need empty below */}
              <Picker.Item label="" value={0} key="hiking" />
              {this._getCategoryPickerItems()}
            </Picker>
          </View>
        </View>

        <View style={{flex:1}}/>

        <TouchableOpacity style={styles.btnProceed} onPress={() => this.props.nextScreen()}>
          <Image source={require('@assets/ic_proceed.png')} style={styles.iconProceed}/>
        </TouchableOpacity>
      </View>
    )
  }

  rotate_point(cp, angle, p) {
    return {
      x: (Math.cos(angle) * (p.x - cp.x) - Math.sin(angle) * (p.y - cp.y) + cp.x),
      y: (Math.sin(angle) * (p.x - cp.x) + Math.cos(angle) * (p.y - cp.y) + cp.y)
    }
  }

  renderItem(item,style, idx){
    return (
      <View style={[styles.item,style]} key={idx}>
        <TouchableOpacity onPress={()=>this.onChangeCategory(item)}>
          <Image source={item.icon} style={styles.icon}/>
        </TouchableOpacity>
        <Text style={styles.iconText}>{item.title}</Text>
      </View>
    )
  }

  onChangeCategory(item){
    let index = this.state.categories.indexOf(item);
    if (index != 0) {
      var list = []
       for (var i = index; i < this.state.categories.length; i++) {
         list.push(this.state.categories[i])
       }
       for (var i = 0; i < index; i++) {
         list.push(this.state.categories[i])
       }
      this.setState({categories:list})
    }
  }
}

AddActivity.propTypes = {
    nextScreen: PropTypes.func
};

export default AddActivity;
