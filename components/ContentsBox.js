import React from 'react';
import { FlatList, Text, StyleSheet,View,TouchableOpacity} from 'react-native';

const PublicBtn = (props) => {
    return (
      <TouchableOpacity style={{
        width:165,
        height:80,
        backgroundColor:'#7D74E4',
        borderColor:'#eee',
        borderRadius:20,borderWidth:3,
        justifyContent:'center',
        margin:20
        }}>
        <Text style={{color:'white',fontSize:24,fontWeight:700,textAlign:'center'}}>{props.text}</Text>
      </TouchableOpacity>
    );
  };

export default PublicBtn;