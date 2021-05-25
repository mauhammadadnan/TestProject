import React, { Component } from 'react';
import {View, ImageBackground} from 'react-native';
import ChatComponent from '../../Components/CompositeComponents/ChatComponent';
import styles from './styles';

class ChatScreen extends Component {
    state = {  }
    render() { 
        return ( 
            <View style={styles.container}>
                <ImageBackground  
                    source={require('../../Assets/images/WhatsAppBgImage.jpeg')}
                    style={styles.iamgeStyle}>
                    <ChatComponent  />
                </ImageBackground>
            </View>
        );
    }
}
 
export default ChatScreen;