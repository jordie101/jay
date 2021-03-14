import React from 'react';
import { SafeAreaView, Text,View,StyleSheet, Button,Alert, Dimensions,Platform, Image,item, ImageBackground, TextInput} from 'react-native';
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';


const LoginScreen = () => {
    
    const [data,setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    });

    const textInputChange = (val) => {
        if(val.length >= 0 ) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
        }
    }


    return (
     
        <ImageBackground source={require('../assets/images/background.png')} style={style.container}>
           <View style={style.header} >
               <Text style={style.text_header}  > Sell & Buy With Cryptocurrency</Text>
               
           
           </View>
            <View style={style.footer} >
               <Text style={style.text_footer} style={style.box}></Text>
               <View style={style.action}/>
               
             
               <TextInput placeholder= "Email"
               style={style.textInput}
               autoCapitalize='none'
               onChangeText= {(val) =>textInputChange(val)}/>
                  
               <View>
               <TextInput placeholder= "Password"
               secureTextEntry={true}
               style={style.boxing}
               autoCapitalize='none'/>
               </View>
           </View >
           <View>
           </View>
        </ImageBackground> 
    );
};


export default LoginScreen;

const {height}= Dimensions.get("screen")

const height_logo =height * 0.28;

const style = StyleSheet.create ({
    container: {
     backgroundColor: colors.blue,  
    flex: 1,
  
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
       
    },


    footer: {
        flex:1,
        backgroundColor: colors.washedwhite,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal:50,
        paddingVertical: 30,
        
    
    },
    text_header:{
        fontSize:30,
        textAlign: 'center',
        fontFamily:'Poppins-Regular',
        color:colors.white,
        fontSize: 16,
        paddingBottom:102,
    },

text_footer: {
    },

action:{
flexDirection:'row',
marginTop:43,
height:0,

    },
textInput: {
flex:1,
marginTop: Platform.OS = 'ios' ? 0 : -12,
paddingLeft: 40,
marginBottom:243,
borderRadius:10,
backgroundColor:colors.white,
borderColor: colors.white,
fontFamily:'Poppins-Regular',
fontSize:14,
bottom:35,
    },
boxing:{
        bottom:262,
        borderColor:colors.white,
        backgroundColor:colors.white,
        fontFamily:'Poppins-Regular',
        fontSize:14,
        borderRadius:10,
        paddingLeft:43,
        marginBottom:-2,
        height:60,
    },
    button: {
    alignItems: 'center',
    marginTop: 50,
    },
    signIn: {
        width:'100%',
        height:50,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 10,

    },
  textSign: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    border: {
    marginTop:0,
    },
    input:{
    },
    
    
});













const App = () => {
    const [showOnboard, setShowOnboard] = useState (true);
  
    const handleOnboardFinish = () => {
      setShowOnboard(false);
    }
  
    return <>
    {showOnboard && <Onboard handleDone={handleOnboardFinish} />}
    {!showOnboard && <LoginScreen />}
    </>;
  };