import React from 'react'
import {
  View,
  Text,
  SectionList
}from 'react-native'
import styles from './style'
import {DashboardItem,DashboardHeader} from '@components'
const data = [
  {
    day:'FRIDAY',
    monthDay:'APRIL 25',
    data:[{title:'ANIMAL SHELTER',icon:require('@assets/ic_animal_shelter.png'),status:'INVITED'}]
  },
  {
    day:'THURSDAY',
    monthDay:'APRIL 24',
    data:[{title:'BOWLING',icon:require('@assets/ic_bowling.png'),status:'CONFIRMED'},{title:'LIVE MUSIC',icon:require('@assets/ic_live_music.png'),status:'GOING'}]
  },
  {
    day:'SUNDAY',
    monthDay:'MARCH 10',
    data:[{title:'KAYAKING',icon:require('@assets/ic_kayaking.png'),status:'GOING'}]
  },
  {
    day:'MONDAY',
    monthDay:'MAY 25',
    data:[{title:'ANIMAL SHELTER',icon:require('@assets/ic_animal_shelter.png'),status:'INVITED'}]
  },
  {
    day:'TUESDAY',
    monthDay:'MAY 26',
    data:[{title:'BOWLING',icon:require('@assets/ic_bowling.png'),status:'CONFIRMED'},{title:'LIVE MUSIC',icon:require('@assets/ic_live_music.png'),status:'GOING'}]
  },
  {
    day:'WEDNESDAY',
    monthDay:'MAY 27',
    data:[{title:'KAYAKING',icon:require('@assets/ic_kayaking.png'),status:'GOING'}]
  },
  {
    day:'THURSDAY',
    monthDay:'MAY 28',
    data:[{title:'ANIMAL SHELTER',icon:require('@assets/ic_animal_shelter.png'),status:'INVITED'}]
  },
  {
    day:'FRIDAY',
    monthDay:'MAY 29',
    data:[{title:'BOWLING',icon:require('@assets/ic_bowling.png'),status:'CONFIRMED'},{title:'LIVE MUSIC',icon:require('@assets/ic_live_music.png'),status:'GOING'}]
  },
  {
    day:'SATURDAY',
    monthDay:'MAY 30',
    data:[{title:'KAYAKING',icon:require('@assets/ic_kayaking.png'),status:'GOING'}]
  }
];
class Dashboard extends React.Component {
  render(){
    return (
      <SectionList
        keyExtractor={(item,index)=>index}
        style={styles.container}
        renderItem={this.renderItem.bind(this)}
        renderSectionHeader={this.renderHeader.bind(this)}
        sections={data}
        ItemSeparatorComponent={() => <View style={styles.separator}/>}
      />
    )
  }

  renderItem({item,index,section}){
    return <DashboardItem item={item} showInfo={this.props.showInfo} />
  }

  renderHeader({section}){
    return <DashboardHeader day={section.day} monthDay={section.monthDay}/>
  }
}

export default Dashboard
