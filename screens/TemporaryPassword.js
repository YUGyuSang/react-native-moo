import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity,TextInput } from 'react-native';
import { FeatureHeader } from '../components/FeaturePage';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons/faCirclePlus";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons/faCircleXmark";

export const TemporaryPassword = () => {
  const [contentList, setContentList] = useState([]);
  const [inputText, setinputText] = useState('');
  const [startTime, setstartTime] = useState('');
  const [endTime, setendTime] = useState('');
  const [passwordBoxs,setpasswordBoxs] = useState('');

  const handleChangeText =(value)=>{
    setinputText(value);
  }
  
  const startText =(value)=>{
    setstartTime(value);
  }

  const endText =(value)=>{
    setendTime(value);
  }

  const plusClick = () => {

    const newBox =(
      
      <View style={[styles.setBar,{display:'flex',zIndex:2}]}>
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

          <TouchableOpacity style={[styles.btnInput]}>
            <Text style={{color:'white',fontWeight:900,}}>뒤로</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnInput]} onPress={okClick}>
            <Text style={{color:'white',fontWeight:900,}}>확인</Text>
          </TouchableOpacity>
        </View>
    );

    // const newPlus = (
    //   <View style={[styles.passwordBox]}>
    //     <Text style={[styles.textAline]}>{contentList.length + 1}. 5시 집 청소 </Text>
    //     <Text style={[styles.textAline]}>PM 06:00 ~ PM 07:00</Text>
    //   </View>
    // );
    
    setContentList([newBox]);
  };

  const okClick = ()=>{
  const passwordBox = (
    <View style={[styles.passwordBox]}>
         <Text style={[styles.textAline]}>hi</Text>
         <Text style={[styles.textAline]}>PM 06:00 ~ PM 07:00</Text>
    </View>
  );

  setContentList([passwordBox]);
}

 

  const removeContent = (index) => {
    const updatedContentList = [...contentList];
    updatedContentList.splice(index, 1);
    setContentList(updatedContentList);
  };

  const idx = "임시 비밀번호 설정";

  return (
    <View>
      <FeatureHeader param={"임시 비밀번호 설정"} />

        {contentList.map((content, index) => (
          <View key={index} style={[styles.passwordBox,{borderBottomWidth: 0,}]}>
            
            <Text style={styles.textAline}>{content}</Text>

            <TouchableOpacity onPress={() => removeContent(index)}>
              <FontAwesomeIcon icon={faCircleXmark} size={23} style={[styles.faPlus]} />
            </TouchableOpacity>

          </View>
        ))}

        {/* <View style={[styles.setBar]}>
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

          <TouchableOpacity style={[styles.btnInput]}>
            <Text style={{color:'white',fontWeight:900,}}>뒤로</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnInput]}>
            <Text style={{color:'white',fontWeight:900,}}>확인</Text>
          </TouchableOpacity>
        </View> */}

      <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={plusClick}>
            <FontAwesomeIcon icon={faCirclePlus} size={23} style={[styles.faPlus]} />
          </TouchableOpacity>
        </View>
     

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity onPress={plusClick}>
          <FontAwesomeIcon icon={faCirclePlus} size={23} style={[styles.faPlus]} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordBox: {
    flexDirection: "row",
    justifyContent: 'center',
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingLeft: 5,
    alignItems:'center',
  },

  textAline: {
    flex:1,
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: '600',
    alignItems: 'center',
  },

  faPlus: {
    marginTop: 20,
  },
  setBar:{
    display:'none', //newBox 
    alignItems:'center',
    width:'100%',
    height:571,
    backgroundColor:'pink',
    borderTopWidth:1,
    borderColor:'#eee',
    flex:1,
    justifyContent: 'flex-end',
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
  }
});
