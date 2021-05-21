import React, { Component } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
//Task 1
import ProfileScreen from './src/Screens/ProfileScreen';
//Task 2
import MyEmoResponseComponent from './src/Components/CompositeComponents/MyEmoResponseComponent';


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <SafeAreaView style={style.conatienr}>
          <MyEmoResponseComponent  /> 
      </SafeAreaView>
    );
  }
}
 
export default App;
const style=StyleSheet.create({
  conatienr:{
    flex:1, 
    justifyContent:'center',
    alignItems:'center'
  }
})