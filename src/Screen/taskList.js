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
    Image
  } from 'react-native';

  import Daftar from '../Compponent/daftar';

  const TaskList = ()=>{
    let json = [{
          id: 1,
          Type: 'Cuti',
          Requester: 'Taufan',
          Description: 'Cuti Keluar Negeri'
      }, {
          id: 2,
          Type: 'Cuti',
          Requester: 'Taufan2',
          Description: 'Cuti Keluar Negeri2'
      }, {
          id: 3,
          Type: 'Cuti',
          Requester: 'Taufan3',
          Description: 'Cuti Keluar Negeri3'
        }, {
          id: 4,
          Type: 'Cuti',
          title: 'Kelas 4', 
          Description: 'Cuti Keluar Negeri4'

      },{
        id: 5,
        Type: 'Cuti',
        Requester: 'Taufan5',
        Description: 'Cuti Keluar Negeri5'
    }, {
        id: 6,
        Type: 'Cuti',
        Requester: 'Taufan6',
        Description: 'Cuti Keluar Negeri6'
    }, {
        id: 7,
        Type: 'Cuti',
        Requester: 'Taufan7',
        Description: 'Cuti Keluar Negeri7'
    }, {
        id: 8,
        Type: 'Cuti',
        Requester: 'Taufan8',
        Description: 'Cuti Keluar Negeri8'
    }]

    return (
        <View>
            <Daftar data={json}/>
        </View>
    );

    
  };

  export default TaskList;