import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { FeatureHeader } from "../components/FeaturePage";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons/faCirclePlus";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons/faCircleXmark";

export const TemporaryPassword = () => {
  const [contentList, setContentList] = useState([]);

  const plusClick = () => {
    const newPlus = (
      <View style={[styles.passwordBox]}>
        <Text style={[styles.textAline]}>5시 집 청소 {contentList.length + 1}</Text>
        <Text style={[styles.textAline]}>PM 06:00 ~ PM 07:00</Text>
      </View>
    );
    setContentList([...contentList, newPlus]);
  };

  const removeContent = (index) => {
    const updatedContentList = [...contentList];
    updatedContentList.splice(index, 1);
    setContentList(updatedContentList);
  };

  const idx = "임시 비밀번호 설정";

  return (
    <View>
      <FeatureHeader param={idx} />
      {contentList.map((content, index) => (
        <View key={index} style={styles.passwordBox}>
          <Text style={styles.textAline}>{content}</Text>
          <TouchableOpacity onPress={() => removeContent(index)}>
            <FontAwesomeIcon icon={faCircleXmark} size={23} style={[styles.faPlus]} />
          </TouchableOpacity>
        </View>
      ))}

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
    justifyContent: "space-between",
    width: "100%",
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: "black",
    paddingLeft: 20,
  },

  textAline: {
    flex: 1,
    justifyContent: "center",
    fontSize: 16,
    fontWeight: "600",
    alignItems: "center",
  },

  faPlus: {
    marginTop: 20,
  },
});
