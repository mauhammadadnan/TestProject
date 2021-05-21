import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Ripple from 'react-native-material-ripple';
import { SECONDARY_COLOR } from '../../../Assets/themes/colors';
import { FONT_SIZE_h2, SIDE_MARGIN } from '../../../Assets/themes/fonts';
import windowWidthWithSideMargin from '../../AbstractComponents/abstractScreenWidth';


const ProfileButton=(props)=>{
    return(
        <Ripple 
            onPress={props.onPress}
            rippleCentered
            rippleContainerBorderRadius={buttonSize/2}
            style={[styles.buttonConatiner]}>
            <Text style={{color:SECONDARY_COLOR, fontSize:FONT_SIZE_h2}}>{"SAVE"}</Text>
        </Ripple>
    )
}
export default ProfileButton;

const buttonSize=40;

const styles=StyleSheet.create({
    buttonConatiner:{
        height:buttonSize,
        borderRadius:buttonSize/2,
        backgroundColor:'#93228D',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20, 
        marginRight:20
    }
})