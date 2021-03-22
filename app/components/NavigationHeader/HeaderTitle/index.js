import React from 'react';

import {
  View,
  Text,
} from 'react-native';

import styles from './style';

import PropTypes from 'prop-types';

class HeaderTitle extends React.Component {

  static defaultProps = {
    hideSub: false,
    style: {},
    titleStyle: {}
  };

  render(){
    let {title,hideSub,subTitle,style,titleStyle} = this.props;
    return (
      <View style={[styles.container, style]}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
        {!hideSub && <Text style={styles.subTitle}>{subTitle}</Text>}
      </View>
    )
  }
}

HeaderTitle.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string
};

export default HeaderTitle;