import React from 'react'
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Picker
}from 'react-native'
import styles from './style'

class StartAClub extends React.Component {
  state = {
    minHeight:0,
    selectedIndex:0
  }
  render(){
    let {selectedIndex} = this.state
    return (
      <View style={{flex:1}} onLayout={(e)=>this.setState({minHeight:e.nativeEvent.layout.height})}>
        <ScrollView style={styles.container} contentContainerStyle={{minHeight:this.state.minHeight}}>
          <TextInput
              autoCapitalize='none'
              underlineColorAndroid='transparent'
              placeholderTextColor="#5e627a"
              placeholder="Name your club"
              style={styles.input}/>
            <TextInput
                  autoCapitalize='none'
                  underlineColorAndroid='transparent'
                  placeholderTextColor="#5e627a"
                  placeholder="Describe your club"
                  style={[styles.input,{height:150,paddingVertical:10}]}
                  multiline={true}
                  textAlignVertical="top"/>

                  <TouchableOpacity style={styles.btnAdd} activeOpacity={0.8} onPress={()=>{}}>
                    <Text style={styles.btnAddText}>Add club / company logo</Text>
                  </TouchableOpacity>

                  <View style={styles.swithView}>
                    <TouchableOpacity style={[styles.item,selectedIndex==0 && styles.selectedItem]} activeOpacity={0.8} onPress={()=>this.setState({selectedIndex:0})}>
                      <Text style={[styles.itemText,selectedIndex==0 && styles.selectedText]}>All Day On</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.item,selectedIndex==1 && styles.selectedItem1]} activeOpacity={0.8} onPress={()=>this.setState({selectedIndex:1})}>
                      <Text style={[styles.itemText,selectedIndex==1 && styles.selectedText]}>All Day Off</Text>
                    </TouchableOpacity>
                  </View>

                <Text style={styles.text}>Only visable through personal invitation, not searchable.</Text>
            <View style={{flex:1}}/>
            <Image source={require('@assets/ic_proceed.png')} style={styles.icon}/>
          </ScrollView>
        </View>
    )
  }
}

export default StartAClub
