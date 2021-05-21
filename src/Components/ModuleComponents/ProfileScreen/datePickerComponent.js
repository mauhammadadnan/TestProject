import React from 'react';
import{View,StyleSheet, TextInput, Text} from 'react-native';
import Ripple from 'react-native-material-ripple';
import { ERROR_COLOR, TEXT_COLOR, TEXT_NOTE_COLOR } from '../../../Assets/themes/colors';
import { FONT_SIZE_h3, SIDE_MARGIN } from '../../../Assets/themes/fonts';
import AbstractSVGContainer from '../../AbstractComponents/abstractSvgContainer';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DatePickerComponent=(props)=>{
    return(
        <View style={[styles.inputContianer]}>
            <View style={styles.lblBox}>
                <Text style={{color:"#93228D", fontSize:FONT_SIZE_h3}}>{props.lablel}</Text>
            </View>
            <View style={styles.inuptBox}>
                <View style={styles.leftInputContainer}>
                    <View style={styles.iconCircle}>
                        <AbstractSVGContainer 
                            size={props.size}
                            svg={props.svg}
                        />
                    </View>
                </View>
                <Ripple 
                    onPress={props.onPress}
                    rippleCentered
                    rippleContainerBorderRadius={40}
                    style={styles.rightInputContainer}>
                    <TextInput 
                        placeholder={props.placeholder}
                        style={{color:TEXT_COLOR, fontSize:FONT_SIZE_h3}}
                        value={props.value}
                        onChangeText={props.onChangeText}
                        editable={false}
                        onFocus={props.onFocus}
                    />
                </Ripple>
                <DateTimePickerModal
                    isVisible={props.isVisible}
                    onConfirm={props.onConfirm}
                    onCancel={props.onCancel}
                    mode={props.mode}
                    datePickerModeAndroid={'spinner'}
                />
            </View>
            <View style={styles.validationBox}>
                <Text style={{fontSize:FONT_SIZE_h3, color:ERROR_COLOR}}>{props.errorMessage}</Text>
            </View>
        </View>
    )
}

export default DatePickerComponent;

const inputSize=60

const styles=StyleSheet.create({
    inputContianer:{
       height:inputSize,
       justifyContent:'center',
       marginLeft:20,
       marginRight:20
    },
    lblBox:{
        height:25,
        justifyContent:'center'
    },
    inuptBox:{
        height:"80%",
        borderWidth:1,
        borderColor:TEXT_NOTE_COLOR,
        borderRadius:50,
        flexDirection:'row',
    },
    leftInputContainer:{
        height:40,
        width:40,
        alignSelf:'center',
        marginLeft:10,
    },
    iconCircle:{
       height:"100%",
       width:"100%",
       backgroundColor:'#93228D',
       alignItems:'center',
       justifyContent:'center',
       borderRadius:50
    },
    rightInputContainer:{
        flex:1,
        marginLeft:10,
        marginRight:10,
    },
    validationBox:{
        height:25,
    }
})