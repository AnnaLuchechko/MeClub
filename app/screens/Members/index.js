import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity
}from 'react-native'
import styles from './style'
import {ManageClubItem,DashboardHeader} from '@components'

const data = [
  {
    color:"white",
    name:'John Masin'
  },
  {
    color:"#c31f4d",
    name:'Peter Cortez'
  },
  {
    color:"#c31f4d",
    name:'Tim Smith'
  },
  {
    color:"white",
    name:'Joe Ross'
  },
  {
    color:"#c31f4d",
    name:'Jack Baker'
  }
];
class Memebers extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <View style={styles.row}>
            <View style={styles.leftView}/>
            <Text style={styles.title}>FLYING GRANNIES</Text>
          </View>
          <View style={styles.content}>
            <View style={styles.leftView}>
              <Image source={require('@assets/ic_surfing.png')} style={styles.icon}/>
            </View>
            <Text style={styles.text}>{"Beach, Surfing, Need Transport, Expert\nSunday March 17, 5:00PM\n2672 WHILSHIRE BLVD\nSANTA MONICA, CA 90053"}</Text>
          </View>
        </View>

        <View style={styles.listWrap}>
          <View style={[styles.leftView,{justifyContent:'space-between',marginTop:10}]}>
            <TouchableOpacity>
              <Image source={require('@assets/ic_arrow_up_white.png')} style={styles.arrowIcon}/>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image source={require('@assets/ic_arrow_down_white.png')} style={styles.arrowIcon}/>
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            {data.map((item,index)=>this.renderItem(item,index))}
          </View>
        </View>
        <View style={{flex:1}}/>
        
        <View style={styles.bottomView}>
          <TouchableOpacity style={[styles.button,{backgroundColor:'#c31f4d'}]} activeOpacity={0.8} onPress={()=>{}}>
            <Text style={styles.buttonText}>PLAY AGAIN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button,{backgroundColor:'#005ba3'}]} activeOpacity={0.8} onPress={()=>{}}>
            <Text style={styles.buttonText}>INVITE ALL AGAIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  renderItem(item,index){
    return (
      <View style={styles.item} key={index}>
        <View style={[styles.square,{backgroundColor:item.color}]}/>
        <Text style={styles.text}>{item.name}</Text>
      </View>
    )
  }
}

export default Memebers
