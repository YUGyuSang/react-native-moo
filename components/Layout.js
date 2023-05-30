import { React, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ListBar from "./ListBar.js";
import PublicBtn from "./ContentsBox";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons/faLockOpen";

export const Header = () => {
  return (
    <View style={[styles.container, styles.header]}>
      <View style={[styles.headerView]}>
        <FontAwesomeIcon style={{ color: "white" }} icon={faUser} size={32} />
        <Text style={{ color: "white", fontSize: 20, lineHeight: 30, marginLeft: 10, fontWeight: 900 }}>홍길동 님</Text>
      </View>
      <TouchableOpacity style={[styles.headerView, styles.duoClass]}>
        <FontAwesomeIcon icon={faClock} style={{ color: "white" }} />
        <Text style={{ color: "white", marginLeft: 10 }}>이용내역</Text>
      </TouchableOpacity>
    </View>
  );
};

export const Contents = ({ idPlus, idMinus, defaultId }) => {
  let [btnTrigger, setBtnTrigger] = useState(0);

  return (
    <View style={[styles.container, styles.contents]}>
      <Text style={[styles.text]}>스마트 도어락</Text>
      <View style={[styles.contntsIcons]}>
        <TouchableOpacity onPress={idMinus} style={[styles.iconRl]}>
          <FontAwesomeIcon icon={faAngleLeft} size={60} style={[styles.contentIcon]} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setBtnTrigger(btnTrigger === 0 ? 1 : 0)}
          style={{ width: 170, height: 170, borderColor: "#7D74E4", borderRadius: 500, backgroundColor: "white", borderWidth: 7 }}
        >
          {btnTrigger === 0 ? (
            <FontAwesomeIcon icon={faLock} size={80} style={{ color: "pink", marginLeft: 37, marginTop: 30 }} />
          ) : (
            <FontAwesomeIcon icon={faLockOpen} size={80} style={{ color: "#7D74E4", marginLeft: 37, marginTop: 30 }} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={idPlus} style={[styles.iconRl]}>
          <FontAwesomeIcon icon={faAngleRight} size={60} style={[styles.contentIcon]} />
        </TouchableOpacity>
      </View>
      <View>
        <ListBar defaultId={defaultId} />
      </View>
      <View>
        <Text style={{ fontSize: 36, fontWeight: 700, marginTop: 40 }}>Home</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View>
          <PublicBtn text={"개패시간 예약"} />
          <PublicBtn text={"무    적"} />
        </View>
        <View>
          <PublicBtn text={"비밀번호 관리"} />
          <PublicBtn text={"임시 비밀번호"} />
        </View>
      </View>
    </View>
  );
};

export const Footer = () => {
  return (
    <View style={[styles.container, styles.footer]}>
      <View style={[styles.footerview]}>
        <TouchableOpacity style={[styles.touchStyle]}>
          <FontAwesomeIcon icon={faHouse} size={32} style={[styles.fontIcon]} />
          <Text style={{ color: "white", fontSize: 30, textAlign: "center" }}>홈</Text>
        </TouchableOpacity>
        <View
          style={{
            width: 1,
            height: "100%",
            backgroundColor: "white",
          }}
        ></View>
        <TouchableOpacity style={[styles.touchStyle]}>
          <FontAwesomeIcon icon={faBars} size={32} style={[styles.fontIcon]} />
          <Text style={{ color: "white", fontSize: 30, textAlign: "center" }}>전체메뉴</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // contents css
  contents: {
    flex: 1,
    backgroundColor: "white",
  },
  contentIcon: {
    color: "#7D74E4",
    marginTop: -3,
    padding: 0,
  },
  contntsIcons: {
    flexDirection: "row",
    marginTop: 50,
  },

  // header css
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 170,
    backgroundColor: "#7D74E4",
    padding: 30,
  },
  headerView: {
    flexDirection: "row",
  },

  // footer css
  footerview: {
    flexDirection: "row",
    justifyContent: "between",
  },
  footer: {
    height: 100,
    backgroundColor: "#7D74E4",
  },

  // 공용 css
  container: {
    width: "100%",
    alignItems: "center",
    height: 80,
  },
  text: {
    fontSize: 30,
    paddingTop: 20,
  },

  iconRl: {
    marginTop: 60,
  },
  duoClass: {
    marginTop: 100,
  },
  fontIcon: {
    color: "white",
    marginLeft: 90,
    marginTop:15,
  },
  touchStyle: {
    backgroundColor: "#7D74E4",
    height: "100%",
    width: "100%",
    flex: 1,
    marginBottom: "100%",
  },
});
