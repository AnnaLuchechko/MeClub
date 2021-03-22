import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
}from 'react-native'
import styles from './style'
import Picker from 'react-native-wheel-picker'

class MyClub extends React.Component {
  state = {
    type:4
  }
  render(){
    return (
      <View style={styles.container}>
        <Picker
          style={styles.picker}
          itemStyle={{
            color:"white",
            fontSize:16
          }}
          selectedValue={this.state.type}
          onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
          <Picker.Item label="Football Club" value={1} />
          <Picker.Item label="Rowing Club" value={2} />
          <Picker.Item label="Chess Club" value={3} />
          <Picker.Item label="Flying Grannies" value={4} />
          <Picker.Item label="Sewing Club" value={5} />
          <Picker.Item label="Tennis Club" value={6} />
          <Picker.Item label="Drinking Club" value={7} />
          </Picker>

          <TouchableOpacity style={styles.btnSearch} activeOpacity={0.8}>
            <Text style={styles.btnSearchText}>SEARCH CLUBS</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

export default MyClub
