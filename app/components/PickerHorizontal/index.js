import React from 'react';

import { View } from 'react-native';

import HorizontalPicker from './hpicker';

class PickerHorizontal extends React.Component {
  state = {
    pickerValue:"1"
  }

  render(){
    return (
      <View>
      <HorizontalPicker
        itemWidth={50}
        selectedValue={this.state.pickerValue}
        foregroundColor='white'
        renderOverlay={()=><View style={{flex:1,borderBottomWidth:2,borderColor:'rgba(187, 28, 68, 1)'}}/>}
        onChange={(pickerValue) => this.setState({pickerValue})}>
        <HorizontalPicker.Item label="PUBLIC" value="0" style={{fontSize: 8, marginVertical: 6}} />
        <HorizontalPicker.Item label="FRIENDS" value="1" style={{fontSize: 8, marginVertical: 6}} />
        <HorizontalPicker.Item label="MY CLUBS" value="2" style={{fontSize: 8, marginVertical: 6}} />
        </HorizontalPicker>
      </View>
    )
  }

}

export default PickerHorizontal;
