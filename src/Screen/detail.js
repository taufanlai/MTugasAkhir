import React,{Fragment} from'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput, 
    StatusBar,
    Button,
    ToastAndroid,
    Picker,
    Image
  } from 'react-native';

  const logoDragon  = '../img/Taygarian.png'

  const Detail = ({navigation})=>{
    
  const itemId = navigation.getParam('itemId','Tidak ada ')
 
  return(
        
    <View style={{display:"flex", flex:1,
                       justifyContent: "center",
                       backgroundColor:"#a70e0e"}}>
       <View style={styles.ViewContent}>
              <View style={{  display:"flex",  flexDirection:"row", justifyContent:"center"}}>
                 <Image 
                    style={  {width: 150,
                            height: 150,
                            resizeMode: 'stretch'}}
                    source={require(logoDragon)}
                    >
                    </Image> 
              </View>

              <Text style ={styles.Text}>
                House
              </Text>     
              <Picker
                     style={{height: 50, width: '100%'}}
                >
                  <Picker.Item label="Stark" value="Stark" />
                  <Picker.Item label="Targaryen" value="Targaryen" />
                </Picker>

            <Text style ={styles.Text}>
                Nama
            </Text>
            <TextInput style={styles.TextInput} >
                      {itemId}
            </TextInput>
            <Text style ={styles.Text}>
                Keterangan
            </Text>
            <TextInput
              style={styles.TextInput}   
             
            /> 

           <View style={{margin:5}}>
          <Button  title="Save"
                  color="#96804b"
                  accessibilityLabel="Learn more about this purple button"
                  onPress={()=>navigation.navigate('TaskList')} 
                  >
            </Button>
           
          </View>

          
          <View style={{margin:5}}>
          <Button  title="Close"
                  color="#96804b"
                  accessibilityLabel="Learn more about this purple button"
                  onPress={()=>navigation.navigate('TaskList')} 
                  >
            </Button>
            
           
          </View>
      </View>
    </View>

    );
};


  const styles = StyleSheet.create({
    TextInput:{
      margin:5,
      height: 40, borderColor: '#96804b', 
      borderWidth: 1,
      color:'#96804b'

    },
    Text:{
      margin:5,
      color:	"#96804b",
      fontWeight: 'bold'
      
    },
    Button:{
     margin:5
   },
    ViewContent:{
      display:"flex",
      justifyContent: "space-between",
      flexDirection: "column",
   
    }



 });

  export default Detail;