/**
 * For testing fuzziness:
 * import string_score from 'string_score';
 * alert(string_score("El Segundo, CA 90245, USA", "90245"));
 */

import React, { Component } from 'react';
import { TouchableHighlight, Text, TextInput, View } from 'react-native';
import stringScore from 'string_score';
import Styles from './style';
import PropTypes from 'prop-types';

class AutoComplete extends Component {
    componentDidMount () {
        this.suggestions = this.filterSuggestions(
            this.props.suggestions, this.props.value
        )
    }

    componentWillUpdate (nextProps, nextState) {
        this.suggestions = this.filterSuggestions(
            nextProps.suggestions, nextProps.value
        );
    }

    getSuggestionText = (suggestion) => {
        if (this.props.suggestionObjectTextProperty) {
            return suggestion[this.props.suggestionObjectTextProperty]
        }

        return suggestion;
    }

    isSimilar = (value, suggestionText) => {
        const suggestionScore = stringScore(
            suggestionText, value, this.props.comparationFuzziness
        )

        return suggestionScore >= this.props.minimumSimilarityScore
    }

    shouldFilterSuggestions = (newSuggestions, value) => {
        return newSuggestions && newSuggestions.length &&
            value && !this.selectedSuggestion;
    }

    filterSuggestions = (newSuggestions, value) => {
        if (! this.shouldFilterSuggestions(newSuggestions, value)) {
            return {};
        }

        return newSuggestions.reduce((suggestions, suggestion) => {
            const suggestionText = this.getSuggestionText(suggestion)

            if (! suggestionText || ! this.isSimilar(value, suggestionText)) {
                return suggestions;
            }

            suggestions[suggestionText] = suggestion;

            return suggestions;
        }, {})
    }

    onChangeText = (value) => {
        this.selectedSuggestion = false;

        if (this.props.onChangeText) {
            this.props.onChangeText(value);
        }
    }

    suggestionClick = (suggestion) => () => {
        this.selectedSuggestion = true;
        this.suggestions = {};
        this.props.onSelect(suggestion);
    }

    renderSuggestions = () => {
        const suggestionTexts = Object.keys(this.suggestions || {})

        if (!suggestionTexts.length) {
            return null;
        }

        return (
            <View
                style={this.props.suggestionsWrapperStyle || Styles.suggestionsWrapper}
            >
                {
                    suggestionTexts.map((text, index) => (
                        <TouchableHighlight
                            key={index}
                            suggestionText={text}
                            activeOpacity={0.6}
                            style={this.props.suggestionStyle || Styles.suggestion}
                            onPress={this.suggestionClick(this.suggestions[text])}
                            underlayColor='white'
                        >
                            <Text
                                style={this.props.suggestionTextStyle || Styles.suggestionText}
                            >
                                {text}
                            </Text>
                        </TouchableHighlight>
                    ))
                }
            </View>
        )
    }

    render () {
        return (
            <View style={this.props.style || Styles.wrapper}>
                <TextInput
                    {...this.props}
                    onChangeText={this.onChangeText}
                    style={this.props.inputStyle || Styles.input}
                />

                {this.renderSuggestions()}
            </View>
        )
    }
}

AutoComplete.propTypes = {
    suggestions: PropTypes.array,
    value: PropTypes.string,
    minimumSimilarityScore: PropTypes.number,
    comparationFuzziness: PropTypes.number,
    suggestionObjectTextProperty: PropTypes.string,
    onChangeText: PropTypes.func,
    onSelect: PropTypes.func.isRequired,
    suggestionsWrapperStyle: PropTypes.any,
    suggestionStyle: PropTypes.any,
    suggestionTextStyle: PropTypes.any,
    style: PropTypes.any,
    inputStyle: PropTypes.any
};

AutoComplete.defaultProps = {
    minimumSimilarityScore: 0.45,
    comparationFuzziness: 0.45
};

export default AutoComplete;