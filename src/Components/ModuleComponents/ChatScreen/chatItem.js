import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { SECONDARY_COLOR, TEXT_COLOR, TEXT_NOTE_COLOR } from '../../../Assets/themes/colors';
import { FONT_SIZE_h4 } from '../../../Assets/themes/fonts';
import AbstractSVGContainer from '../../AbstractComponents/abstractSvgContainer';

const ChatItem=(props)=>{
    return(
        <View style={[styles.messageBox,{
                        backgroundColor: props.sender ? '#DCF8C5' : SECONDARY_COLOR,
                        borderTopLeftRadius:props.sender ? 10 : 0,
                        borderTopRightRadius: props.sender ? 0 : 10,
                        borderBottomRightRadius:props.sender ? 20 : 10,
                        borderBottomLeftRadius:props.sender ? 10 : 20,
                        alignSelf:props.sender ? 'flex-end' : 'flex-start',
                        //right knock
                        borderRightWidth:props.sender ? 10 : 0,
                        borderTopColor: props.sender ? "#DCF8C5" : SECONDARY_COLOR,
                        //left knock
                        borderLeftWidth:props.sender ? 0 : 10,
                         //margin handle for messageBox sender and recvier
                        marginLeft: props.sender ? 100 : 0,
                        marginRight: props.sender ? 0 : 100,
                     }]}>
                <View>
                  <Text style={styles.message}>
                    {props.message}
                  </Text>
                </View>
                <View style={styles.timeIconContainer}>
                    <Text style={[styles.time,{marginRight:props.svg ? 5 : 10}]}>
                      {props.time}
                    </Text>
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
    )
}

export default ChatItem;

const styles=StyleSheet.create({
    messageBox:{
        marginBottom:10, 
        paddingBottom:10,
        borderRightColor: "transparent",
        borderLeftColor: "transparent",
        borderTopWidth: 10,
        flexDirection:'row',
    },
    timeIconContainer:{
        flexDirection:'row', 
        alignSelf:'flex-end',
        marginBottom:-5,
    },
    message: {
        fontSize:14,
        color:TEXT_COLOR,
        marginLeft:10,
        marginRight:10,
    },
    time: {
        alignSelf: "flex-end",
        color: TEXT_NOTE_COLOR,
        fontSize:FONT_SIZE_h4,
    },
    iconStyle:{
        marginRight:10,
    }
})