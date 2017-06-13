import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'nachos-ui';
import TextInput from './TextInput';
import IngredientList from './IngredientList';
import RecipesViewer from './RecipesViewer';



export default class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    ingredientArray: [],
    recipeData: []
  };
}

addIngredients(ingredient) {
  var newArray = this.state.ingredientArray
  newArray.push(ingredient)
  this.setState({ingredientArray: newArray})
  this.theRequest.bind(this)()
};


theRequest() {
 var ingredientString = ""
  for (var i = 0; i<this.state.ingredientArray.length; i++){
    ingredientString+=this.state.ingredientArray[i] + "+"
  }
   fetch('https://api.edamam.com/search?q=' + ingredientString + '&app_id=54d89045&app_key=b42d1708fb1fb05049e0a9aac1dd4c89', {  
 method: 'GET',
 headers: {
   'Accept': 'application/json',
   'Content-Type': 'application/json',
 }
}).then((res) => {
  return res.json()
}).then((json) => {
  console.log(json.hits[i]),
  this.setState({recipeData: json.hits[i]}),
  console.log(recipeData)
})
};

componentWillMount(){
  var ingredientString = ""
  for (var i = 0; i<this.state.ingredientArray.length; i++){
    ingredientString+=this.state.ingredientArray[i] + "+"
  }
   fetch('https://api.edamam.com/search?q=' + ingredientString + '&app_id=54d89045&app_key=b42d1708fb1fb05049e0a9aac1dd4c89', {  
 method: 'GET',
 headers: {
   'Accept': 'application/json',
   'Content-Type': 'application/json',
 }
}).then((res) => {
  return res.json()
}).then((json) => {
  console.log(json.q)
})
}

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.headerText}>Your Kitchen</Text>
        <TextInput addIngredients={this.addIngredients.bind(this)}/>
        <IngredientList ingredientList={this.state.ingredientArray}/>
        <RecipesViewer recipesViewer={this.state.recipeData}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerText: {
    fontSize: 20,
  }
});
