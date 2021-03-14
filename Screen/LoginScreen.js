import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    Button
} from 'react-native';


import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient'; 



const LoginScreen = () => {

    const [data,setData] = React.useState ({
        email: '',
        passsord: '',
        check_textinputChange: false,
        secureTextEntry: true,
    });

    const textInputChange = (val) => {
        if (val.length >= 0) {
            setData({
                ...data,
                email: val,
                check_textinputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textinputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({        
            ...data,
            password: val,

        });

    }

    const updateSecureTextEntry = () => {
        setData ({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    
    return (
 <View style={style.container}>
     <View style={style.header}>
         <Text style={style.text_header}>Header</Text>
     </View>
     <View style={style.footer}>
         <Text style={style.text_footer}>Email </Text> 
         <View style={style.action }>
             <FontAwesome
             name="user-o"
             size={20}/>
            
             <TextInput 
             placeholder="Your Email"
             style={style.textInput}
             autoCapitalize="none"
             onChangeText={(val)=> textInputChange (val)}
             />
             {data.check_textinputChange ? 
           <Animatable.View 
           animation="bounceIn">

           <Feather 
            name="check-circle"
            color="green"
            size={20}/>

            </Animatable.View>
             : null }
        
         </View>
         <Text style={ style.text_footer}> Password </Text> 
         <View style={style.action }>
             <FontAwesome
             name="lock"
             size={20}/>
            
             <TextInput 
             placeholder=" Your Password"
             secureTextEntry={data.secureTextEntry ? true : false}
             style={style.textInput}
             autoCapitalize="none"
             onChangeText={(val)=> handlePasswordChange (val)}
             />

             <TouchableOpacity
             onPress={updateSecureTextEntry}
             >

                 {data.secureTextEntry ? 


            <Feather 
            name="eye-off"
            size={20}/>
            :
            <Feather 
            name="eye"
            size={20}/>
             }
 </TouchableOpacity>  

         </View>
         <View style={style.button}>

             <LinearGradient colors={['#08d4c4', '#01ab9d']}
             style={style.signIn}
             >
                 <Text style={[style.textSign,{
                     color:'#fff'
                 }]}>Sign In</Text>
             </LinearGradient>

<TouchableOpacity>
<Text> Sign Up </Text>
</TouchableOpacity>

         </View>
     </View>
 </View>
    );
};

export default LoginScreen;

const style = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
        marginTop:43,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });