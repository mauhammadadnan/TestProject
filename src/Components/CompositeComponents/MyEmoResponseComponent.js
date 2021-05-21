import React from 'react';
import {View, StyleSheet, } from 'react-native';
import { FONT_SIZE_h3 } from '../../Assets/themes/fonts';
import EmoComponent from '../ModuleComponents/EmoScreen/emoComponent';

const MyEmoResponseComponent=(props)=>{
    return(
        <View style={styles.container}>
            <View style={styles.borderLine} />                            
                <EmoComponent
                    text={"Terrible"}
                    emoSize={50}
                    eyeHeight={9}
                    eyeWidth={7}
                    LEBBLRadius={7}
                    LEBBRRadius={7}
                    REBBLRadius={7}
                    REBBRRadius={7}
                    lefEyeTransform={[  { skewX: "25deg" },
                    { skewY: "25deg" } ]}
                    rightEyeTransform={[  { skewX: "-25deg" },
                    { skewY: "-25deg" } ]}
                    smilHeight={6}
                    smileWidth={12}
                    smileTransform={[ { scaleX : 2 } ]}
                />
                
                <EmoComponent
                    text={"Bad"}
                    emoSize={50}
                    eyeHeight={9}
                    eyeWidth={6}
                    LEBBLRadius={7}
                    LEBBRRadius={7}
                    REBBLRadius={7}
                    REBBRRadius={7}
                    lefEyeTransform={[  { skewX: "-30deg" },
                    { skewY: "-30deg" } ]}
                    rightEyeTransform={[  { skewX: "30deg" },
                    { skewY: "30deg" } ]}
                    smilHeight={6}
                    smileWidth={12}
                    smileTransform={[ { scaleX : 2 } ]}
                />
                
                <EmoComponent
                    text={"Okay"}
                    textColor={"#696158"}
                    textFontSize={FONT_SIZE_h3}
                    emoBgColor={"#FDD896"}
                    leftEyeColor={"#676055"}
                    rightEyeColor={"#676055"}
                    smileColor={"#676055"}
                    emoSize={70}
                    eyeHeight={10}
                    eyeWidth={10}
                    LEBTLRadius={7}
                    LEBBLRadius={7}
                    LEBTRRadius={7}
                    LEBBRRadius={7}
                    REBTLRadius={7}
                    REBBLRadius={7}
                    REBTRRadius={7}
                    REBBRRadius={7}
                    lefEyeTransform={[  { skewX: "0deg" },
                    { skewY: "0deg" } ]}
                    rightEyeTransform={[  { skewX: "0deg" },
                    { skewY: "0deg" } ]}
                    smilHeight={6}
                    smileWidth={25}
                    smileTransform={ [{ rotateZ: "-15deg" }] }
                />
                
                <EmoComponent
                    text={"Good"}
                    emoSize={50}
                    eyeHeight={7}
                    eyeWidth={7}
                    LEBTLRadius={7}
                    LEBBLRadius={7}
                    LEBTRRadius={7}
                    LEBBRRadius={7}
                    REBTLRadius={7}
                    REBBLRadius={7}
                    REBTRRadius={7}
                    REBBRRadius={7}
                    lefEyeTransform={[  { skewX: "0deg" },
                    { skewY: "0deg" } ]}
                    rightEyeTransform={[  { skewX: "0deg" },
                    { skewY: "0deg" } ]}
                    smilHeight={6}
                    smileWidth={12}
                    smileTransform={[ { scaleX : 2 } ]}
                />
                
                <EmoComponent
                    text={"Great"}
                    emoSize={50}
                    eyeHeight={7}
                    eyeWidth={7}
                    LEBTLRadius={7}
                    LEBBLRadius={7}
                    LEBTRRadius={7}
                    LEBBRRadius={7}
                    REBTLRadius={7}
                    REBBLRadius={7}
                    REBTRRadius={7}
                    REBBRRadius={7}
                    lefEyeTransform={[  { skewX: "0deg" },
                    { skewY: "0deg" } ]}
                    rightEyeTransform={[  { skewX: "0deg" },
                    { skewY: "0deg" } ]}
                    smilHeight={10}
                    smileWidth={12}
                    smileTransform={[ { scaleX : 2 } ]}
                />
        </View>
    )
}

export default MyEmoResponseComponent;

const  styles=StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    borderLine:{
        borderWidth:2, 
        borderColor:"#C9CED4",
        width:"90%", 
        flexDirection:'row', 
        justifyContent:'space-evenly',
        alignItems:'center',
        position:'absolute',
    }
})