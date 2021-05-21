import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Ripple from 'react-native-material-ripple';
import { TEXT_NOTE_COLOR } from '../../../Assets/themes/colors';
import { FONT_SIZE_h4 } from '../../../Assets/themes/fonts';

const EmoComponent=(props)=>{
    return(
    <React.Fragment>
        <Ripple 
            onPress={props.onPress}
            rippleCentered
            rippleContainerBorderRadius={props.emoSize/2}
            style={[styles.container, { height:props.emoSize ? props.emoSize : 70, 
                                            width:props.emoSize ? props.emoSize : 70, 
                                            backgroundColor:props.emoBgColor ? props.emoBgColor : '#C9CED4',
                                            borderRadius:props.emoSize ? props.emoSize/2  : props.emoSize/2,
                                            }
                                        ]}>
            <View style={[styles.upperContainer, {borderRadius:props.emoSize ?
                                                    props.emoSize/2 : props.emoSize/2,
                                                    width:props.emoSize,
                                                }]}>
                {/* <View style={[styles.topLeftIconContainer,{borderRadius:props.emoSize ? */}
                                                    {/* props.emoSize/2 : props.emoSize/2 ,}]}> */}
                    <View style={[styles.topLeftEye,{height:props.eyeHeight ? props.eyeHeight :7,
                                                        width:props.eyeWidth ? props.eyeWidth :7,
                                                        backgroundColor:props.leftEyeColor ? props.leftEyeColor : '#FDFDFD',
                                                        borderTopLeftRadius: props.LEBTLRadius ? props.LEBTLRadius : 0,
                                                        borderTopRightRadius:props.LEBTRRadius ? props.LEBTRRadius : 0,
                                                        borderBottomLeftRadius:props.LEBBLRadius ? props.LEBBLRadius : 0,
                                                        borderBottomRightRadius:props.LEBBRRadius ? props.LEBBRRadius : 0 ,
                                                        transform: props.lefEyeTransform
                                                        }]} 
                    />
                {/* </View> */}
                {/* <View style={[styles.topRightContainer,{borderRadius:props.emoSize ?
                                                    props.emoSize/2 : props.emoSize/2}]}> */}
                    <View style={[styles.topRightEye, {height:props.eyeHeight ? props.eyeHeight :7,
                                                        width:props.eyeWidth ? props.eyeWidth :7,
                                                        backgroundColor:props.rightEyeColor ? props.rightEyeColor : '#FDFDFD',
                                                        borderTopLeftRadius: props.REBTLRadius ? props.REBTLRadius : 0,
                                                        borderTopRightRadius:props.REBTRRadius ? props.REBTRRadius : 0,
                                                        borderBottomLeftRadius:props.REBBLRadius ? props.REBBLRadius : 0,
                                                        borderBottomRightRadius:props.REBBRRadius ? props.REBBRRadius : 0,
                                                        transform: props.rightEyeTransform
                                                        }]} 
                    />
                {/* </View> */}
            </View>
            <View style={[styles.bottomContainer]}>
                 <View style={[styles.smileShape,
                                {
                                    height:props.smilHeight ? props.smilHeight : 6, 
                                    width:props.smileWidth ? props.smileWidth : 5,
                                    backgroundColor:props.smileColor ? props.smileColor : '#FDFDFD',
                                    borderRadius:props.smilHeight ? props.smilHeight/2 : props.smilHeight/2,
                                    transform: props.smileTransform
                                }]} 
                                
                />
            </View>
                <View style={{height:8}} />
            <View style={{alignItems:'center', }}>
                <Text style={{color:props.textColor ? props.textColor : TEXT_NOTE_COLOR, 
                                fontSize:props.textFontSize ? props.textFontSize : FONT_SIZE_h4,
                                fontWeight:"bold"}}> 
                    {props.text}
                </Text>
            </View>
        </Ripple>
    </React.Fragment>
    )
}


export default EmoComponent

const styles=StyleSheet.create({
    container:{ 
        elevation:2,
    },
    upperContainer:{
        height:"45%",
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'flex-end',
    },
    topLeftIconContainer:{
        height:"100%",
        width:'50%',
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },
    topLeftEye:{
    },
    topRightContainer:{
        height:"100%",
        width:'50%',
        justifyContent:'flex-end',
        alignItems:'flex-start',
    },
    topRightEye:{
    },
    bottomContainer:{
        height:"55%", 
        justifyContent:'center',
        alignItems:'center',
    },
    smileShape:{
    }
})