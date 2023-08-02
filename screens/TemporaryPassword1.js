import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity,TextInput } from 'react-native';
import { FeatureHeader } from '../components/FeaturePage';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons/faCirclePlus";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons/faCircleXmark";
import { height } from '@fortawesome/free-solid-svg-icons/faHouse';

//이게 진짜로 쓸거임 일단 TemporaryPassword 이거 참고용,TemporaryPassword1이게 깔끔하게 정리한거 기능 구현 ㅈㄴ 어렵다 
//이거 배열로 데이터 받아서 처리해야할거 같은데 이건 할 줄 모른다. 그냥 보여주기식 정도만 만들었다.

export const TemporaryPassword1 = () => {
    const [inputText, setinputText] = useState('');
    const [startTime, setstartTime] = useState('');
    const [endTime, setendTime] = useState('');
    const [endBox, setendBox] = useState(false);
    const [plusBtn, setplusBtn] = useState(true);
    const [contentBox,setcontentBox] = useState(false);

    const okBoxs = () =>{
        setcontentBox(!contentBox);
        setendBox(!endBox);
        setplusBtn(!plusBtn);
    }

    const contentBoxs = () =>{
        setcontentBox(!contentBox);
    }

    const plus = () =>{
        setplusBtn(!plusBtn);
    }

    const startBoxs = () =>{
        setendBox(!endBox);
        plus();
    }

    const endBoxs = () =>{
        setendBox(!endBox);
        plus(true);
    }

    const handleChangeText =(value)=>{
        setinputText(value);
      }
      
      const startText =(value)=>{
        setstartTime(value);
      }
    
      const endText =(value)=>{
        setendTime(value);
      }

    
  return (
    <View>
       <FeatureHeader param={"임시 비밀번호 설정"} />

       {endBox && (<View style={[styles.setBar]}>
          <TextInput
          style={styles.input}
          onChangeText={handleChangeText}
          value={inputText}
          placeholder="제목 입력해주세요"
          />

          <TextInput 
          style={[styles.timeInput]}
          onChangeText={startText}
          value={startTime}
          placeholder="시작시간 입력해주세요"/>

          <TextInput 
          style={[styles.timeInput]}
          onChangeText={endText}
          value={endTime}
          placeholder="끝나는 시간 입력해주세요"/>

          <TouchableOpacity style={[styles.btnInput]} onPress={endBoxs}>
            <Text style={{color:'white',fontWeight:900,}}>뒤로</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnInput]} onPress={okBoxs}>
            <Text style={{color:'white',fontWeight:900,}}>확인</Text>
          </TouchableOpacity>
        </View>)}

        {contentBox && (<View style={[styles.contentBox]}>
            <Text>{inputText}</Text>
            <Text style={{fontSize:20}}>{startTime}</Text>
            <Text>~</Text>
            <Text style={{fontSize:20}}>{endTime}</Text>
        </View>)}

        {plusBtn && (<TouchableOpacity onPress={startBoxs} style={{alignItems:'center'}}>
            <FontAwesomeIcon icon={faCirclePlus} size={23} style={[styles.faPlus]} />
        </TouchableOpacity>)}

    </View>
    
  );
};
const styles = StyleSheet.create({
    setBar:{
        alignItems:'center',
        width:'100%',
        height:571,
        backgroundColor:'pink',
        borderTopWidth:1,
        borderColor:'#eee',
      },
      input: {
        height: 70,
        borderColor: 'white',
        borderWidth: 1,
        marginBottom: 50,
        paddingHorizontal: 10,
        marginTop:50,
        backgroundColor:'white',
        borderRadius:70,
        width:350,
        fontSize:20,
      },
      timeInput:{
        height: 50,
        borderColor:'white',
        borderWidth: 1,
        paddingHorizontal: 10,
        backgroundColor:'white',
        borderRadius:70,
        fontSize:16,
        marginBottom:50,
      },
      btnInput:{
        height:50,
        backgroundColor:'black',
        width:300,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:70,
        marginBottom:30,
      },
      contentBox:{
        width:'100%',
        height:70,
        flexDirection: "row",
        borderBottomColor:'gray',
        borderBottomWidth:1,
        marginBottom:20,
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:25,
      }
      
})

