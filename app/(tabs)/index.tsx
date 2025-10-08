import { StyleSheet, Text, View, Button, Dimensions, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from 'react-native-svg';  // 상단 background 배경 svg

const { width } = Dimensions.get("window"); // 화면의 width 함수 정의

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.topBackground}>
        <View style={styles.leftCurveBackground} />
        <Text style = {styles.textIntro}>김멋사님,</Text>
        <Text style = {styles.textIntro2}>안녕하세요!</Text>
        <Text style = {styles.textIntro3}>바로 시작해볼까요?</Text>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => console.log("start")}
        >
          <Text style={styles.startButtonText}>공부 시작하기 →</Text>
        </TouchableOpacity>
      </View>

      <Text style = {styles.textStudy}>예정된 스터디</Text>
    
      <View style={styles.subjectcontainers}>
        {/* <View style={styles.circle}></View> */}
        <View style={styles.subjectcontainer}>
          <View style={styles.textWrapper}>
            <Text style = {styles.studydate}>9월 00일 화요일</Text>
            <Text style = {styles.studyclock}>6:00 PM</Text>
            <Text style = {styles.studytitle}>공부 과목</Text>
            <Text style = {styles.studysubject}>알고리즘</Text>
          </View>
          <View style={styles.circleWrapper}>
            <View style={styles.circleImage}></View>
          </View>
        </View>
      </View>

      <View style={styles.subjectcontainers}>
        {/* <View style={styles.circle}></View> */}
        <View style={styles.subjectcontainer}>
          <View style={styles.textWrapper}>
            <Text style = {styles.studydate}>9월 00일 화요일</Text>
            <Text style = {styles.studyclock}>6:00 PM</Text>
            <Text style = {styles.studytitle}>공부 과목</Text>
            <Text style = {styles.studysubject}>컴퓨터 구조</Text>
          </View>
          <View style={styles.circleWrapper}>
            <View style={styles.circleImage}></View>
          </View>
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topBackground: {
    width: "100%",
    height: 330,
    backgroundColor: "#EDEDED",
    overflow: 'hidden', // 자식 요소가 이 뷰 밖으로 나가지 않도록
  },
  leftCurveBackground: {
    width: 250,
    height: 330,
    backgroundColor: '#868686', // 회색 배경
         
  },
  textIntro: {
    color: '#ffffff',
    fontSize: 20,
    position: 'absolute',
    paddingTop: 170,
    paddingLeft: 30,
  },
  textIntro2: {
    color: '#ffffff',
    fontSize: 20,
    position: 'absolute',
    paddingTop: 200,
    paddingLeft: 30,
  },
  textIntro3: {
    color: '#ffffff',
    fontSize: 15,
    position: 'absolute',
    paddingTop: 240,
    paddingLeft: 30,
  },
  startButton: {
    backgroundColor: '#C67C4E',
    width:150,
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 270,
    marginLeft: 20,
    alignSelf: 'flex-start', 
    position: 'absolute',
  },
  startButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textStudy: {
    fontSize: 20,
    fontWeight: 'bold',
    width: 150,
    marginTop: 30,
    marginLeft: 30,
  },
// circle: {
//     width: 25,
//     height: 25,
//     borderRadius: 20,
//     backgroundColor: '#868686',
//     borderWidth: 2,
//     borderColor: '#9E9E9E',
//     marginTop: 20,
//     marginLeft: 30,
//   },
  subjectcontainers: {
    alignItems: 'center',
  },
  subjectcontainer: {
   width: 300,
    height: 140,
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#9E9E9E', 
    flexDirection: 'row',
    alignItems: 'center',
  },
  textWrapper: {
    marginLeft: 25,
  },
  studydate: {
    width: 130,
    fontSize: 12,
    color: '#72777A',
  },
  studyclock: {
    width: 130,
    fontSize: 12,
    color: '#72777A',
  },
  studytitle: {
    width: 130,
    fontSize: 12,
    marginTop: 15,
    color: '#090A0A',
  },
  studysubject: {
    width:130,
    fontSize: 18,
    marginTop: 10,
    color: '#3D3D3D',
  },
  circleWrapper: {
    marginLeft: 10,
  },
  circleImage: {
    width: 100,
    height: 100,
    borderRadius: 200,
    backgroundColor: '#C4C4C4',
    borderWidth: 2,
    borderColor: '#C4C4C4',
    
  },
});