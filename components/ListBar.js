import {React, useState} from 'react';
import { FlatList, Text, StyleSheet,View} from 'react-native';


const ListBar = (props) => {
    const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  
    const renderItem = (param) => {
      if (props.defaultId === param.item.id) {
        return <View style={{ width: 10, height: 10, backgroundColor: "#7D74E4", borderRadius: 50, marginRight: 15  }}></View>;
      } else {
        return <View style={{ width: 10, height: 10, backgroundColor: "gray", borderRadius: 50, marginRight: 15 }}></View>;
      }
    };
  
    return (
      <View style={{ flexDirection: "row", marginTop:20,marginLeft:15}}>
        {data.map((item) => (
          <View key={item.id.toString()}>{renderItem({ item })}</View>
        ))}
      </View>
    );
  };


export default ListBar;