import React, { Component } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
//Task 1
import ProfileScreen from './src/Screens/ProfileScreen';
//Task 2
import MyEmoResponseComponent from './src/Components/CompositeComponents/MyEmoResponseComponent';
//Task 3
import ChatScreen from './src/Screens/ChatScreen';


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <SafeAreaView style={style.conatienr}>
          <ChatScreen  /> 
      </SafeAreaView>
    );
  }
}
 
const style=StyleSheet.create({
  conatienr:{
    flex:1, 
  }
})

export default App;
