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

class StartClubConfirm extends React.Component {
  state = {
    minHeight:0,
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
              placeholder="FLYING GRANNIES"
              style={styles.input}/>
            <TextInput
                  autoCapitalize='none'
                  underlineColorAndroid='transparent'
                  placeholderTextColor="#5e627a"
                  placeholder="Sed ut perspiciatis unde omnis iste natus error sit vlek luptatem accusantium doloremque laudan tium, totam rem aperiam, eaque ipsa quae ab illo inventor veritatis et qua. architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam vluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisqua  m est, qui dolorem ipsum quia dolor sit amet consectetur heskdr."
                  style={[styles.input,{height:150,paddingVertical:10}]}
                  multiline={true}
                  textAlignVertical="top"/>
            <View style={{flex:1}}/>
            <Image source={require('@assets/ic_proceed.png')} style={styles.icon}/>
          </ScrollView>
        </View>
    )
  }
}

export default StartClubConfirm
