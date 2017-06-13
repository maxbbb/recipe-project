import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'nachos-ui';
import IngredientList from './IngredientList';
import RecipesViewer from './RecipesViewer';
import App from './App';


export default class TextInput extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    inputBox: null
  }
}


  render() {
    return (
<View style={styles.container}>
<View style={styles.dirt}>
      <Input
      style={{}}
      placeholder='Enter ingredients'
      value={this.state.inputBox}
      onChangeText={returnText => this.setState({ inputBox :returnText })}
   />
</View>

  <View style={styles.btnStyle}>
    <Button 
    type='success' 
    style={{}}
    onPress= {this.props.addIngredients.bind(this, this.state.inputBox)}
    >
    Go
    </Button>
  </View>
<View>
</View>
</View>
  )
 }
}
const styles = StyleSheet.create({
  btnStyle: {
    width: 150,
    alignSelf: 'center'
  },
  container: {
    flex: 1,
  },
  dirt: {
    margin: 25,
    width: 300,  
  }
});
