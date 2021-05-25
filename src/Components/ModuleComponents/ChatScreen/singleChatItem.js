import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import { SECONDARY_COLOR, TEXT_COLOR, TEXT_NOTE_COLOR } from '../../../Assets/themes/colors';
import { FONT_SIZE_h3, FONT_SIZE_h4 } from '../../../Assets/themes/fonts';
import AbstractSVGContainer from '../../AbstractComponents/abstractSvgContainer';

const SingleChatItem=(props)=>{
    return(
        <View style={[styles.container,{marginBottom:props.sender ? 5 : 5, marginTop:props.sender ?  3 : 5}]}>
            <View style={[
              styles.messageBox, {
                backgroundColor: props.sender ? '#DCF8C5' : SECONDARY_COLOR,
                //margin handle for messageBox send and recevier
                marginLeft: props.sender ? 50 : 0,
                marginRight: props.sender ? 0 : 50,
                //radius handle
                borderTopLeftRadius:props.sender ? 7 : 0,
                borderTopRightRadius: props.sender ? 0 : 7,
                borderBottomRightRadius:props.sender ? 20 : 7,
                borderBottomLeftRadius:props.sender ? 7 : 20,
                //right knock
                borderRightWidth:props.sender ? 10 : 0,
                borderTopWidth: props.sender ? 10 : 10,
                borderTopColor: props.sender ? "#DCF8C5" : SECONDARY_COLOR,
                //left knock
                borderLeftWidth:!props.sender ? 10 : 0,
              }
            ]}>
              <Text style={styles.message}>{props.message}</Text>
              <View style={styles.timeIconContainer}>
                  <Text style={[styles.time,{marginRight:props.svg ? 5 : 10}]}>{props.time}</Text>
                  {
                    props.svg ?
                    <AbstractSVGContainer 
                        style={styles.iconStyle}
                        size={props.size}
                        svg={props.svg}
                    />
                    :
                    false
                  }
              </View>
            </View>
      </View> 
    )
}

const styles=StyleSheet.create({
     container: {
    },
    messageBox: {
      borderRightColor: "transparent",
      borderLeftColor: "transparent",
      
    },
    message: {
      fontSize:FONT_SIZE_h3,
      color:TEXT_COLOR,
      marginLeft:10,
    },
    timeIconContainer:{
        flexDirection:'row', 
        alignSelf:'flex-end', 
        marginBottom:3
    },
    time: {
      alignSelf: "flex-end",
      color: TEXT_NOTE_COLOR,
      fontSize:FONT_SIZE_h4,
    },
    iconStyle:{
        alignSelf:'flex-end',
        marginRight:10,
    }
})

export default SingleChatItem;