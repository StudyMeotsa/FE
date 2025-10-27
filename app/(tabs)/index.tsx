import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Latte from "../../assets/images/Latte.png";
import Lamp from "../../assets/images/lamp.png";
import Man from "../../assets/images/man.png";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.topBackground}>
        <Image
          source={Lamp}
          style={styles.lampImage}
        />

        <Text style={styles.textIntro}>김멋사님,</Text>
        <Text style={styles.textIntro2}>안녕하세요!</Text>
        <Text style={styles.textIntro3}>바로 시작해볼까요?</Text>

        <Image
          source={Man}
          style={styles.manIamge}
        />

        <TouchableOpacity
          style={styles.startButton}
          onPress={() => alert("START")} // navigation.navigate("위치")
        >
          <Text style={styles.startButtonText}>공부 시작하기 →</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.textStudy}>예정된 스터디</Text>

      <TouchableOpacity
        style={styles.subjectcontainers}
        onPress={() => alert("공부 과목 버튼 클릭!")} // navigation.navigate("위치")
      >
        {/* <View style={styles.circle}></View> */}
        <View style={styles.subjectcontainer}>
          <View style={styles.textWrapper}>
            <Text style={styles.studydate}>9월 00일 화요일</Text>
            <Text style={styles.studyclock}>6:00 PM</Text>
            <Text style={styles.studysubject}>알고리즘</Text>
          </View>
          <View style={styles.circleWrapper}>
            <Image
              source={Latte}
              style={styles.latteImage}
            />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.subjectcontainers}
        onPress={() => alert("공부 과목 버튼 클릭!")} // navigation.navigate("위치")
      >
        {/* <View style={styles.circle}></View> */}
        <View style={styles.subjectcontainer}>
          <View style={styles.textWrapper}>
            <Text style={styles.studydate}>9월 00일 화요일</Text>
            <Text style={styles.studyclock}>6:00 PM</Text>
            <Text style={styles.studysubject}>컴퓨터 구조</Text>
          </View>
          <View style={styles.circleWrapper}>
            <Image
              source={Latte}
              style={styles.latteImage}
            />
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topBackground: {
    width: "100%",
    height: 330,
    backgroundColor: "#A67247",
    overflow: "hidden", // 자식 요소가 이 뷰 밖으로 나가지 않도록
  },
  lampImage: {
    width: 110,
    height: 145,
    marginLeft: 50,
  },
  manIamge: {
    width: 220,
    height: 260,
    marginLeft: 170,
  },
  textIntro: {
    color: "#ffffff",
    fontSize: 20,
    position: "absolute",
    paddingTop: 170,
    paddingLeft: 30,
  },
  textIntro2: {
    color: "#ffffff",
    fontSize: 20,
    position: "absolute",
    paddingTop: 200,
    paddingLeft: 30,
  },
  textIntro3: {
    color: "#ffffff",
    fontSize: 15,
    position: "absolute",
    paddingTop: 240,
    paddingLeft: 30,
  },
  startButton: {
    backgroundColor: "#c98b64ff",
    width: 150,
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 270,
    marginLeft: 20,
    alignSelf: "flex-start",
    position: "absolute",
  },
  startButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  textStudy: {
    fontSize: 20,
    fontWeight: "bold",
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
    alignItems: "center",
  },
  subjectcontainer: {
    width: 300,
    height: 140,
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#9E9E9E",
    flexDirection: "row",
    alignItems: "center",
  },
  textWrapper: {
    marginLeft: 25,
  },
  studydate: {
    width: 130,
    fontSize: 14,
    fontWeight: "500",
    color: "#72777A",
  },
  studyclock: {
    width: 130,
    fontSize: 20,
    fontWeight: "600",
    color: "#3d3d3d",
  },
  studysubject: {
    width: 130,
    fontSize: 20,
    marginTop: 10,
    fontWeight: "700",
    color: "#3D3D3D",
  },
  circleWrapper: {
    marginLeft: 10,
  },
  latteImage: {
    width: 100,
    height: 110,
  },
});
