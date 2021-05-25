import React,{useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import SingleChatItem from '../ModuleComponents/ChatScreen/singleChatItem';

const ChatComponent=(props)=>{
    const [chatList, setChatList]=useState([
        {
            id:1,
            sender:true,
            message:"Fine",
            time:"11:13",
            size:20,
            svg:`<?xml version="1.0"?>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg"><path d="m473.074 120.729-203.295 203.296-21.212-21.212 153.765-153.764-38.926-38.926-153.765 153.765-61.047-61.047-38.926 38.926 61.047 61.047-21.211 21.211-110.578-110.577-38.926 38.926 149.503 149.503 60.138-60.137 60.137 60.137 242.222-242.221z" fill="#55c2e9" data-original="#000000" style=""/></g></g></svg>
            `
        },
        {
            id:2,
            sender:true,
            message:"Thank you",
            time:"11:13",
            size:20,
            svg:`<?xml version="1.0"?>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg"><path d="m473.074 120.729-203.295 203.296-21.212-21.212 153.765-153.764-38.926-38.926-153.765 153.765-61.047-61.047-38.926 38.926 61.047 61.047-21.211 21.211-110.578-110.577-38.926 38.926 149.503 149.503 60.138-60.137 60.137 60.137 242.222-242.221z" fill="#55c2e9" data-original="#000000" style=""/></g></g></svg>
            `
        },
        {
            id:3,
            sender:false,
            message:"Good to see you",
            time:"11:15",
        },
        {
            id:4,
            sender:true,
            message:"by",
            time:"11:16",
            size:20,
            svg:`<?xml version="1.0"?>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg"><path d="m473.074 120.729-203.295 203.296-21.212-21.212 153.765-153.764-38.926-38.926-153.765 153.765-61.047-61.047-38.926 38.926 61.047 61.047-21.211 21.211-110.578-110.577-38.926 38.926 149.503 149.503 60.138-60.137 60.137 60.137 242.222-242.221z" fill="#55c2e9" data-original="#000000" style=""/></g></g></svg>
            `
        },
        {
            id:5,
            sender:false,
            message:"Taker Care",
            time:"11:15",
        },
        {
            id:6,
            sender:false,
            message:"Okay",
            time:"11:18",
        },
        {
            id:7,
            sender:true,
            message:"bye",
            time:"11:19",
            size:20,
            svg:`<?xml version="1.0"?>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg"><path d="m473.074 120.729-203.295 203.296-21.212-21.212 153.765-153.764-38.926-38.926-153.765 153.765-61.047-61.047-38.926 38.926 61.047 61.047-21.211 21.211-110.578-110.577-38.926 38.926 149.503 149.503 60.138-60.137 60.137 60.137 242.222-242.221z" fill="#99999999" data-original="#000000" style="" class=""/></g></g></svg>`
        },
    ])
    return(
        <View style={styles.container}>
              <FlatList 
                        showsVerticalScrollIndicator={false}
                        data={chatList}
                        numColumns={1}
                        keyExtractor={item => `cl${item.id}`}
                        renderItem={({item}) => (
                            <SingleChatItem 
                                sender={item.sender}
                                message={item.message}
                                time={item.time}
                                size={item.size}
                                svg={item.svg}
                            />
                        )}
                />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:10
    }
})

export default ChatComponent;