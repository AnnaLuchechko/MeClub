import React, { Component } from 'react';

import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';

class ActivityTab extends Component {
    render() {
        return (
            <TouchableOpacity style={ STYLES.container } onPress={ this.props.onPress }>
                <Image source={ this.props.image } style={ STYLES.image }/>
                <Text style={ STYLES.text }>{ this.props.title }</Text>
            </TouchableOpacity>
        )
    }
}

const STYLES = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginRight: 5
    },
    image: {
        width: 60,
        height: 60
    },
    text: {
        color: "#fff",
        fontSize: 8,
        marginTop: 5
    }
});

ActivityTab.propTypes = {
    title: PropTypes.string,
    image: PropTypes.number,
    onPress: PropTypes.func
};

export default ActivityTab;