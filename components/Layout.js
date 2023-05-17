import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import  {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons/faHouse';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faClock} from '@fortawesome/free-solid-svg-icons/faClock';


export const Header = () => {
    return (
      <View style={[styles.container, styles.header]}>
        <View style={[styles.headerView]}>
            <FontAwesomeIcon style={{color:'white'}} icon={faUser} size={32}/>
            <Text style={{color:'white', fontSize:20, lineHeight:30, marginLeft:10, fontWeight:900}}>홍길동 님</Text>
        </View>
        <TouchableOpacity style={[styles.headerView, styles.duoClass]}>
            <FontAwesomeIcon icon={faClock} style={{color:'white'}}/>
            <Text style={{color:'white',marginLeft:10}}>이용내역</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export const Contents = () => {
    return(
      <View style={[styles.container, styles.contents]}>
        <Text style={[styles.text]}>Contents</Text>
      </View>
    );
  };
  
  export const Footer = () =>{
    return(
      <View style={[styles.container, styles.footer]}>
        <View style={[styles.footerview]}>
        <TouchableOpacity
            style={[styles.touchStyle]}><FontAwesomeIcon icon={faHouse} size={32} style={[styles.fontIcon]}/><Text style={{ color : 'white', fontSize: 30, textAlign:'center',marginTop:10}}>홈</Text></TouchableOpacity>
            <View style={{
                width:1,
                height:'100%',
                backgroundColor:'white',
            }}></View>
            <TouchableOpacity
            style={[styles.touchStyle]}><FontAwesomeIcon icon={faBars} size={32} style={[styles.fontIcon]}/><Text style={{ color : 'white', fontSize: 30, textAlign:'center',marginTop:10}}>전체메뉴</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    duoClass:{
        marginTop:100,
    },
    headerView:{
        flexDirection: 'row',
    },
    fontIcon:{
        color:'white', 
        marginLeft:60,
    },
    touchStyle:{
        backgroundColor: '#7D74E4',
        height:'100%',
        width:'100%',
        padding: 30,
        flex: 1,
        marginTop:10
    },

    footerview:{
        flexDirection: 'row',
        justifyContent: 'between'
    },
    container: {
      width: '100%',
      alignItems : 'center',
      justifyContent : 'center',
      height: 80,
    },
    header:{
      flexDirection: 'row',
      justifyContent:'space-between',
      width: '100%',
      height:170,
      backgroundColor: '#7D74E4',
      padding:30,
    },
    contents:{
      flex: 1,
      backgroundColor: 'white',
    },
    footer:{
      height: 100,
      backgroundColor: '#7D74E4',
    },
    text:{
      fontSize: 26,
    },
  });
  