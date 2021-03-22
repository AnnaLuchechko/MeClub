import React from 'react'
import {
  View,
  Modal,
  TouchableOpacity,
  Image,
  Platform,
  Text,
  TouchableWithoutFeedback
}from 'react-native'
import styles from './style'

class FindOutMoreModal extends React.Component {

  static defaultProps = {
    isShow:false,
    url:'',
    onHide:()=>{},
    onFindOutMore:()=>{},
  }

  render(){
    var {isShow,onHide,onFindOutMore} = this.props

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isShow}
        onRequestClose={() => {}}
        >
          <TouchableOpacity style={styles.container} activeOpacity={1.0} onPress={onHide}>

            <TouchableWithoutFeedback>
            <View style={styles.content}>
              <TouchableOpacity onPress={onFindOutMore} style={styles.btnFind}>
                <Text style={styles.btnFindText}>FIND OUT MORE</Text>
              </TouchableOpacity>
              <View style={{flex:1}}>
                <View style={[styles.row,styles.borderBottom]}>
                  <View style={styles.textWrap}><Text style={styles.text}>Workout</Text></View>
                  <View style={styles.middleLine}/>
                  <View style={styles.textWrap}><Text style={styles.text}>Gym</Text></View>
                </View>
                <View style={[styles.row,styles.borderBottom]}>
                  <View style={styles.textWrap}><Text style={styles.text}>Need more people</Text></View>
                  <View style={styles.middleLine}/>
                  <View style={styles.textWrap}><Text style={styles.text}>Intermediate</Text></View>
                </View>
                <View style={styles.row}>
                  <View style={styles.textWrap}><Text style={styles.text}>Sun Nov 19</Text></View>
                  <View style={styles.middleLine}/>
                  <View style={styles.textWrap}><Text style={styles.text}>12:00 PM</Text></View>
                </View>
              </View>
            </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
      </Modal>
    )
  }
}

export default FindOutMoreModal
