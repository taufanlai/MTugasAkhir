import React,{Fragment} from'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    ToastAndroid,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions
  } from 'react-native';
  import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { tsPropertySignature } from '@babel/types';

  const{height,width} = Dimensions.get('window')

  const Tombol = ({warna})=>{
      return(
          <View >
               <TouchableOpacity
                style={styles.button}
                // onPress={()=>alert('Testadsafdsa')}
                   
                 
               >
                <View style={styles.Tombol}>
                     <Text style={{color:warna}}>Tombol</Text>
                    </View>
                </TouchableOpacity>

          </View>

      );
  };

  const styles = StyleSheet.create({
   
    button: {
      alignItems: 'center',
      backgroundColor: '#EF6C00',
      padding: 10,
      width:width-20,
      borderRadius:5,
      justifyContent:'center',
      alignItems:'center',
    },
    tombolfront:{
        color:'white'
    },
 

    
  })
  export default Tombol;