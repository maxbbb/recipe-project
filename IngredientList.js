import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'nachos-ui';
import TextInput from './TextInput';
import RecipesViewer from './RecipesViewer';
import App from './App';

export default class IngredientList extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                {this.props.ingredientList.map( function(name) {
                    return(
                        <View style={styles.bubble}>
                        <Text style={{margin: 10}}> {name} </Text>
                        </View>
                    )
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    bubble: {
        backgroundColor: '#45c7f0',
        margin: 3,
        borderRadius: 20,
        height: 30,
        justifyContent: 'center'
    }
});