import React, {Component} from 'react';
import styles from './styles';
import {AppRegistry, View, Text} from 'react-native';

export default class viewmessagedetailscomponent extends Component {
    render() {
        return (
            <View>
                <Text> component works </Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('viewmessagedetailscomponent', () => viewmessagedetailscomponent);