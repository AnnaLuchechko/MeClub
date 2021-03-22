import React, { Component } from "react";

import formStyles from './formStyle';

import t from 'tcomb-form-native';

// by default all fields are required
const Name = t.struct({
    first: t.String,
    last: t.String
});

const User = t.struct({
    id: t.String,
    name: Name,
    email: t.String,
    phoneNumber: t.maybe(t.String),
    photoUrl: t.maybe(t.String)
});

const FormOptions = {
    auto: 'placeholders',
    order: ['id', 'name', 'email', 'phoneNumber', 'photoUrl'],
    label: null,
    underlineColorAndroid: 'transparent',
    placeholderTextColor: "grey",
    stylesheet: formStyles,
    fields: {
        id: {
            hidden: true
        },
        photoUrl: {
            hidden: true
        }
    }
};

export default class Form extends Component {

    getValue(){
        return this.refs.form.getValue();
    }

    render(){
        return (
            <t.form.Form ref="form" type={ User } options={ FormOptions } value={ this.props.value } onChange={ this.props.onChange } />
        )
    }
}