import React, { Component } from 'react';
import {View, Text, ScrollView} from 'react-native';
import Ripple from 'react-native-material-ripple';
import AbstractSVGContainer from '../../Components/AbstractComponents/abstractSvgContainer';
import ProfileButton from '../../Components/ModuleComponents/ProfileScreen/profileButton';
import ProfileImgeComponent from '../../Components/ModuleComponents/ProfileScreen/profileImageComponent';
import ProfileInputFieldComponent from '../../Components/ModuleComponents/ProfileScreen/profileInputFieldComponent';
import styles from './styles';
import DatePickerComponent from '../../Components/ModuleComponents/ProfileScreen/datePickerComponent';
import ValidationComponent from 'react-native-form-validator';

class ProfileScreen extends ValidationComponent {
    state = { 
        name:'',
        email:'',
        mobileNo:'',
        dateofBirth:'',
        isDateTimePickerVisible: false,
        nameValidation:"none",
        emailValidation:"none",
        mobileNoValidation:"none",
    }
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
    _handleDatePicked = (pickeddate) => {
        let day   = pickeddate.getDate();
        let month = pickeddate.getMonth()+1;
        let year  = pickeddate.getFullYear();
        month = month < 10 ? '0'+month : month;
        // console.log('' + day + '/' + month + '/' + year);
        this.setState({dateofBirth: day + ' / ' + month + ' / ' + year})
        this._hideDateTimePicker();
    };
    onFocusStart = () => {
        this._handleDatePicked();
    }
    _handleName=()=>{
        const {name}=this.state;
        if(name.length < 3){
            this.setState({name:name, nameValidation:"error",  })
            this.validate({
                    name: { required: true, minlength:3,},
                    email: { required: true, email: true,},
                    mobileNo:{required: true, numbers: true, minlength:10},
            });
            return false;
        }
        else{
            this.setState({name:name, nameValidation:"valid",})
            return true;
        }
        return;
    }
    _handleEmail=()=>{
        const {email}=this.state;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(email)===false){
            this.setState({email:email, emailValidation:"error",})
            this.validate({
                name: { required: true, minlength:3,},
                email: { required: true, email: true,},
                mobileNo:{required: true, numbers: true, minlength:10},
            });
            return false;
        }else{
            this.setState({email:email, emailValidation:"valid",})
            return true;
        }
        return;
    }
    _handleMobileNo=()=>{
        const {mobileNo}=this.state;
        if(mobileNo.length<10){
            this.setState({mobileNo:mobileNo, mobileNoValidation:"error",})
            this.validate({
                name: { required: true, minlength:3,},
                email: { required: true, email: true,},
                mobileNo:{required: true, numbers: true, minlength:10},
            });
            return false;
        }else{
            this.setState({mobileNo:mobileNo, mobileNoValidation:"valid",})
            return true;
        }
        return;
    }
    _handleSave=()=>{
        if(this._handleName()===false  && this._handleEmail()===false && this._handleMobileNo()===false ){
            this.validate({
                name: { required: true, minlength:3,},
                email: { required: true, email: true,},
                mobileNo:{required: true, numbers: true, minlength:10},
            });
        }
        else if(this._handleName()===true  && this._handleEmail()===true && this._handleMobileNo()===true ){
        }
    }
    render() { 
        const nameError = this.isFieldInError('name')
        ? this.getErrorsInField('name')[0]
        : '';
        const emailError = this.isFieldInError('email')
        ? this.getErrorsInField('email')[0]
        : '';
        const mobileNoError = this.isFieldInError('mobileNo')
        ? this.getErrorsInField('mobileNo')[0]
        : '';
        return ( 
            <View style={styles.container}>
                <ScrollView style={{flexGrow:1}} showsVerticalScrollIndicator={false}>
                    <View style={styles.upperContainer}>
                        <ProfileImgeComponent />
                        <View style={styles.nameEditStyle}>
                           <View>
                               <Text style={styles.txtName}>
                                    {"Lacey Fernadez"}
                                </Text>
                            </View>
                                <View style={{width:5}} />
                                <Ripple 
                                    rippleCentered
                                    rippleContainerBorderRadius={90}
                                    style={styles.editButton}>
                                    <AbstractSVGContainer
                                        size={12}
                                        svg={`<?xml version="1.0"?>
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 401.52289 401" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path xmlns="http://www.w3.org/2000/svg" d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0" fill="#999999" data-original="#000000" style=""/><path xmlns="http://www.w3.org/2000/svg" d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0" fill="#999999" data-original="#000000" style=""/></g></svg>`}
                                    />
                                </Ripple>
                        </View>
                    </View>
                    <View style={{flex:2}}>
                        <View style={styles.formContianer}>
                            <View style={styles.profileStyle}>
                                <Text style={styles.txtProfile}>{"USER PROFILE"}</Text>
                            </View>
                                <View style={{height:30}} />
                            <ProfileInputFieldComponent 
                                lablel={"User Name"}
                                placeholder={"Enter User Name"}
                                value={this.state.name}
                                onChangeText={(name)=>this.setState({name:name})}
                                validation={this.state.nameValidation}
                                validationMessage={nameError}
                                onBlur={this._handleName}
                                size={15}
                                svg={`<?xml version="1.0"?>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M437.02,330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521,243.251,404,198.548,404,148    C404,66.393,337.607,0,256,0S108,66.393,108,148c0,50.548,25.479,95.251,64.262,121.962    c-36.21,12.495-69.398,33.136-97.281,61.018C26.629,379.333,0,443.62,0,512h40c0-119.103,96.897-216,216-216s216,96.897,216,216    h40C512,443.62,485.371,379.333,437.02,330.98z M256,256c-59.551,0-108-48.448-108-108S196.449,40,256,40    c59.551,0,108,48.448,108,108S315.551,256,256,256z" fill="#ffffff" data-original="#000000" style="" class=""/>
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
                                </g></svg>`}
                            />
                                <View style={{height:30}} />
                            <ProfileInputFieldComponent 
                                lablel={"Email id"}
                                placeholder={"Enter Email"}
                                keyboardType={'email-address'}
                                value={this.state.email}
                                onChangeText={(email)=>this.setState({email:email})}
                                validation={this.state.emailValidation}
                                validationMessage={emailError}
                                onBlur={this._handleEmail}
                                size={15}
                                svg={`<?xml version="1.0"?>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <polygon points="339.392,258.624 512,367.744 512,144.896   " fill="#ffffff" data-original="#000000" style="" class=""/>
                                    </g>
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <polygon points="0,144.896 0,367.744 172.608,258.624   " fill="#ffffff" data-original="#000000" style="" class=""/>
                                    </g>
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M480,80H32C16.032,80,3.36,91.904,0.96,107.232L256,275.264l255.04-168.032C508.64,91.904,495.968,80,480,80z" fill="#ffffff" data-original="#000000" style="" class=""/>
                                    </g>
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M310.08,277.952l-45.28,29.824c-2.688,1.76-5.728,2.624-8.8,2.624c-3.072,0-6.112-0.864-8.8-2.624l-45.28-29.856    L1.024,404.992C3.488,420.192,16.096,432,32,432h448c15.904,0,28.512-11.808,30.976-27.008L310.08,277.952z" fill="#ffffff" data-original="#000000" style="" class=""/>
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
                              <View style={{height:30}} />
                            <ProfileInputFieldComponent 
                                lablel={"Mobile No"}
                                placeholder={"Enter your 10 digit number"}
                                keyboardType={'phone-pad'}
                                value={this.state.mobileNo}
                                onChangeText={(mobileNo)=>this.setState({mobileNo:mobileNo})}
                                validation={this.state.mobileNoValidation}
                                validationMessage={mobileNoError}
                                onBlur={this._handleMobileNo}
                                size={20}
                                svg={`<?xml version="1.0"?>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 27.442 27.442" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.494,0H7.948C6.843,0,5.951,0.896,5.951,1.999v23.446c0,1.102,0.892,1.997,1.997,1.997h11.546   c1.103,0,1.997-0.895,1.997-1.997V1.999C21.491,0.896,20.597,0,19.494,0z M10.872,1.214h5.7c0.144,0,0.261,0.215,0.261,0.481   s-0.117,0.482-0.261,0.482h-5.7c-0.145,0-0.26-0.216-0.26-0.482C10.612,1.429,10.727,1.214,10.872,1.214z M13.722,25.469   c-0.703,0-1.275-0.572-1.275-1.276s0.572-1.274,1.275-1.274c0.701,0,1.273,0.57,1.273,1.274S14.423,25.469,13.722,25.469z    M19.995,21.1H7.448V3.373h12.547V21.1z" fill="#ffffff" data-original="#000000" style="" class=""/>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
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
                              <View style={{height:30}} />
                            <DatePickerComponent 
                                lablel={"Date of Birth"}
                                placeholder={"DD / MM / YYYY"}
                                value={this.state.dateofBirth}
                                onChangeText={(dateofBirth)=>this.setState({dateofBirth:dateofBirth})}
                                isVisible={this.state.isDateTimePickerVisible}
                                onPress={this._showDateTimePicker}
                                onFocus={this.onFocusStart}
                                onConfirm={this._handleDatePicked}
                                onCancel={this._hideDateTimePicker}
                                mode={'date'}
                                size={18}
                                svg={`<?xml version="1.0"?>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M452,40h-24V0h-40v40H124V0H84v40H60C26.916,40,0,66.916,0,100v352c0,33.084,26.916,60,60,60h392    c33.084,0,60-26.916,60-60V100C512,66.916,485.084,40,452,40z M472,452c0,11.028-8.972,20-20,20H60c-11.028,0-20-8.972-20-20V188    h432V452z M472,148H40v-48c0-11.028,8.972-20,20-20h24v40h40V80h264v40h40V80h24c11.028,0,20,8.972,20,20V148z" fill="#ffffff" data-original="#000000" style="" class=""/>
                                    </g>
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <rect x="76" y="230" width="40" height="40" fill="#ffffff" data-original="#000000" style="" class=""/>
                                    </g>
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <rect x="156" y="230" width="40" height="40" fill="#ffffff" data-original="#000000" style="" class=""/>
                                    </g>
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <rect x="236" y="230" width="40" height="40" fill="#ffffff" data-original="#000000" style="" class=""/>
                                    </g>
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <rect x="316" y="230" width="40" height="40" fill="#ffffff" data-original="#000000" style="" class=""/>
                                    </g>
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <rect x="396" y="230" width="40" height="40" fill="#ffffff" data-original="#000000" style="" class=""/>
                                    </g>
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <rect x="76" y="310" width="40" height="40" fill="#ffffff" data-original="#000000" style="" class=""/>
                                    </g>
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <rect x="156" y="310" width="40" height="40" fill="#ffffff" data-original="#000000" style="" class=""/>
                                    </g>
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <rect x="236" y="310" width="40" height="40" fill="#ffffff" data-original="#000000" style="" class=""/>
                                    </g>
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <rect x="316" y="310" width="40" height="40" fill="#ffffff" data-original="#000000" style="" class=""/>
                                    </g>
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <rect x="76" y="390" width="40" height="40" fill="#ffffff" data-original="#000000" style="" class=""/>
                                    </g>
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <rect x="156" y="390" width="40" height="40" fill="#ffffff" data-original="#000000" style="" class=""/>
                                    </g>
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <rect x="236" y="390" width="40" height="40" fill="#ffffff" data-original="#000000" style="" class=""/>
                                    </g>
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <rect x="316" y="390" width="40" height="40" fill="#ffffff" data-original="#000000" style="" class=""/>
                                    </g>
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <rect x="396" y="310" width="40" height="40" fill="#ffffff" data-original="#000000" style="" class=""/>
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
                                </g></svg>`}
                            />
                                <View style={{height:30}} />
                            <ProfileButton 
                                onPress={this._handleSave}
                            />
                        </View>
                        <View style={{height:40}} />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default ProfileScreen;