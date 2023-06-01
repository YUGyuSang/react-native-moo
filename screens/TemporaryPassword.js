import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { FeatureHeader } from '../components/FeaturePage';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons/faCirclePlus";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons/faCircleXmark";

export const  TemporaryPassword = () => {
  const [showContent, setShowContent] = useState(false);

  const plusClick = () => {
    setShowContent(true);
  };

  const subtractClick = () =>{
    setShowContent(false);
  }

  
  return (
    <View>
      <FeatureHeader param={"임시 비밀번호 설정"}/>

      {showContent && (
      <View style={[styles.passwordBox]}>
            <Text style={[styles.textAline]}>5시 집 청소</Text> 
            <Text style={[styles.textAline]}>PM 06:00 ~ PM 07:00</Text>
      </View>
      )}

      <View style={{ alignItems: 'center',}}>
            <TouchableOpacity onPress={plusClick}>
              <FontAwesomeIcon icon={faCirclePlus} size={23} style={[styles.faPlus]} />
            </TouchableOpacity>
            <TouchableOpacity onPress={subtractClick}>
              <FontAwesomeIcon icon={faCircleXmark} size={23} style={[styles.faPlus]}/>
            </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  passwordBox: {
    flexDirection: "row",
    justifyContent:'space-between',
    width: '100%',
    height: 50,
    borderBottomWidth:2,
    borderBottomColor:'black',
    paddingLeft:20,
  },

  textAline: {
    flex:1,
    justifyContent:'center',
    fontSize:16,
    fontWeight:600,
    alignItems:'center'
  },

  faPlus: {
    marginTop: 20,
    
  }
});


