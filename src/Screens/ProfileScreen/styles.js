import {StyleSheet, Dimensions} from 'react-native';
import { SECONDARY_COLOR, TEXT_COLOR, } from '../../Assets/themes/colors';
import { FONT_SIZE_h2, FONT_SIZE_h3, SIDE_MARGIN } from '../../Assets/themes/fonts';

const windowHeight = Dimensions.get('window').height;

const styles=StyleSheet.create({
    container:{
        flex:1,
        width:"100%"
    },
    upperContainer:{
        // flex:1.5,
        height:windowHeight/2.2,
        backgroundColor:'#93228D', 
        justifyContent:'center', 
        alignItems:'center'
    },
    nameEditStyle:{
        alignItems:'center', 
        flexDirection:'row'
    },
    txtName:{
        color:SECONDARY_COLOR, 
        fontSize:FONT_SIZE_h3,
        fontWeight:'bold'
    },
    editButton:{
        height:25,
        width:25, 
        borderRadius:90,
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:SECONDARY_COLOR,
    },
    formContianer:{
        height:500,
        backgroundColor:SECONDARY_COLOR,
        marginLeft:SIDE_MARGIN,
        marginRight:SIDE_MARGIN,
        marginTop:-30
    },
    txtProfile:{
        fontSize:FONT_SIZE_h2,
        color:TEXT_COLOR,
        fontWeight:'bold'
    },
    profileStyle:{
        alignItems:'center', 
        marginTop:20
    }
})

export default styles