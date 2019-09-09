import React, { useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

  
const logoDragon  = '../img/Taygarian.png'

const Daftar = ({data,navigation}) => {
    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
                <View style={{flexDirection: "row",backgroundColor:"#a70e0e",padding:5}}>
                       <TouchableHighlight style={{width:"100%"}}
                           onPressIn={()=>navigation.navigate('Detail',{
                            itemId:item.id})}
                       >
                            <View style={styles.TaskItem}>
                                <View style={{
                                    width:5,backgroundColor:"#96804b"
                                }}>
                                    
                                </View>
                                <View style={{padding:5}}>
                                    <Image
                                    style={  {width: 50,
                                        height: 50,
                                        resizeMode: 'stretch'}}
                                        source={require(logoDragon)}
                                    >
                                    </Image>
                                </View>
                                <View style={{padding:5}}>
                                    <Text style={styles.TaskItemRequestor}>{item.Requester}</Text>
                                    <Text>{item.Description}</Text>
                                
                                </View>
                            
                            </View> 
                        </TouchableHighlight>
                           
                </View>
            )}
        />
    )
};

const styles = StyleSheet.create({
   
    TaskItem: {
      display:"flex",
      backgroundColor:"#e3dcc0",
      flexDirection:"row",
      justifyContent:"flex-start",
      height: 70,
      width:"100%",
   
     
    },
    TaskItemRequestor:{
        fontWeight:"bold"
    }

    
  });


export default Daftar