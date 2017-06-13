import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'nachos-ui';
import TextInput from './TextInput';
import IngredientList from './IngredientList';
import App from './App';

export default class RecipesViewer extends React.Component {
    render(){
        return(
                <View>
                {this.props.recipesViewer.map( function(Recipe) {
                    return(
                        <View>
                        <Text> {Recipe} </Text>
                        </View>
                    )
                })}
            </View>
        )
    }
}