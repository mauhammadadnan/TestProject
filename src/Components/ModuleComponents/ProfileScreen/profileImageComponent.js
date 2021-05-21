import React, {useState} from 'react';
import {View,StyleSheet,Image,ImageBackground,TouchableOpacity, ToastAndroid } from 'react-native';
import AbstractSVGContainer from '../../AbstractComponents/abstractSvgContainer';
import Ripple from 'react-native-material-ripple';
import { SECONDARY_COLOR } from '../../../Assets/themes/colors';
import ImagePicker from 'react-native-image-crop-picker';

const ProfileImgeComponent=(props)=>{
    const [imagePic, setImagePick]=useState(null);
    const _handleImage = () => {
        ImagePicker.openPicker({
          width: 130,
          height: 130
        }).then(image => {
          // console.log(image);
          let imgSource = {
            uri: image.path,
            type: image.mime,
            name: image.path.replace(/^.*[\\\/]/, "")
          };
         setImagePick(imgSource)
        });
    };

    return(
        <View style={styles.imageMainContainer}>
            <View style={styles.imageSubContainer}>
                <Image
                    resizeMode="cover"
                    source={imagePic  ? imagePic : {uri: "https://i.pinimg.com/564x/97/fe/c3/97fec39b422cf74973a6d257db8469d5.jpg"}}
                    style={styles.imageStyle}>
                </Image>
            </View>
            <Ripple 
                    onPress={_handleImage}
                    rippleCentered
                    rippleContainerBorderRadius={90}
                    style={styles.imagePickButton}>
                    <AbstractSVGContainer
                        size={15}
                        svg={`<?xml version="1.0"?>
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g>
                                        <g xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <g>
                                                    <path d="M464,0H48C21.49,0,0,21.49,0,48v416c0,26.51,21.49,48,48,48h416c26.51,0,48-21.49,48-48V48C512,21.49,490.51,0,464,0z      M480,464c0,8.837-7.163,16-16,16H48c-8.837,0-16-7.163-16-16V48c0-8.837,7.163-16,16-16h416c8.837,0,16,7.163,16,16V464z" fill="#999999" data-original="#000000" style="" class=""/>
                                                    <path d="M347.36,276.64c-6.241-6.204-16.319-6.204-22.56,0l-36.8,36.8l-68.64-68.64c-6.241-6.204-16.319-6.204-22.56,0l-112,112     c-6.186,6.31-6.087,16.44,0.223,22.626c2.935,2.878,6.866,4.516,10.977,4.574h320c8.836,0.051,16.041-7.07,16.093-15.907     c0.025-4.299-1.681-8.426-4.733-11.453L347.36,276.64z" fill="#999999" data-original="#000000" style="" class=""/>
                                                    <circle cx="304" cy="176" r="48" fill="#999999" data-original="#000000" style="" class=""/>
                                                </g>
                                            </g>
                                        </g>
                                        <g xmlns="http://www.w3.org/2000/svg">
                                        </g>
                                        <g xmlns="http://www.w3.org/2000/svg">
                                        </g>
                                        <g xmlns="http://www.w3.org/2000/svg">
                                        </g>
                                        <g xmlns="http://www.w3.org/2000/svg">
                                        </g>
                                        <g xmlns="http://www.w3.org/2000/svg">
                                        </g>
                                        <g xmlns="http://www.w3.org/2000/svg">
                                        </g>
                                        <g xmlns="http://www.w3.org/2000/svg">
                                        </g>
                                        <g xmlns="http://www.w3.org/2000/svg">
                                        </g>
                                        <g xmlns="http://www.w3.org/2000/svg">
                                        </g>
                                        <g xmlns="http://www.w3.org/2000/svg">
                                        </g>
                                        <g xmlns="http://www.w3.org/2000/svg">
                                        </g>
                                        <g xmlns="http://www.w3.org/2000/svg">
                                        </g>
                                        <g xmlns="http://www.w3.org/2000/svg">
                                        </g>
                                        <g xmlns="http://www.w3.org/2000/svg">
                                        </g>
                                        <g xmlns="http://www.w3.org/2000/svg">
                                        </g>
                                        </g></svg>
                        `}
                    />
            </Ripple>
        </View>
    )
}

export default ProfileImgeComponent;

const imageSize=170;
const imagePickBuutonSize=30;

const styles = StyleSheet.create({
    imageMainContainer:{
        height:imageSize,
        width:imageSize, 
        justifyContent:'center',
        alignItems:'center',
    },
    imageSubContainer:{
        height:imageSize-30,
        width:imageSize-30
    },
    imageStyle:{
        height:"100%", 
        width:'100%', 
        borderRadius:imageSize/2,
    },
    imagePickButton:{
        height:imagePickBuutonSize,
        width:imagePickBuutonSize, 
        borderRadius:90,
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:SECONDARY_COLOR,
        position:'absolute',
        zIndex:999,
        top:5,
        right:imageSize/4
    },
})
