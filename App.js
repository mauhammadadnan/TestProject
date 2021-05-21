import React, { Component } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import DemoImage from './src/Components/AbstractComponents/demoImage';
import ImageExample from './src/Components/AbstractComponents/imageExample';
import ProfileButton from './src/Components/ModuleComponents/ProfileScreen/profileButton';
import ProfileImgeComponent from './src/Components/ModuleComponents/ProfileScreen/profileImageComponent';
import ProfileInputFieldComponent from './src/Components/ModuleComponents/ProfileScreen/profileInputFieldComponent';
import ProfileScreen from './src/Screens/ProfileScreen';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <SafeAreaView style={style.conatienr}>
          <ProfileImgeComponent  /> 
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