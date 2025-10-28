import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import UserThumbnail from "./UserThumbnail";

interface SubmitButtonProps {
  label: string;
}

const UserData = Array.from({ length: 10 }, (_, i) => ({
  key: `user-${i}`,
}));

// 데이터 분할
const RowOne = UserData.filter((_, i) => i % 2 === 0);
const RowTwo = UserData.filter((_, i) => i % 2 !== 0);

function SubmitButton({ label }: SubmitButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}>
      <Image source={require("@/assets/images/plusIcon.png")} />
      <Text style={styles.text}>{label}</Text>

      <View style={styles.userImageContainer}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>
          <View style={styles.gridWrapper}>
            <View style={styles.gridRow}>
              {RowOne.map((item) => (
                <UserThumbnail key={item.key} />
              ))}
            </View>
            <View style={styles.gridRow}>
              {RowTwo.map((item) => (
                <UserThumbnail key={item.key} />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 40,
    alignItems: "center",
    width: 327,
    height: 75,
    backgroundColor: "#976A50",
    paddingHorizontal: 24,
    overflow: "hidden",
  },
  text: {
    color: "white",
    marginLeft: 15,
    marginRight: 80,
  },
  pressed: {
    opacity: 0.8,
  },
  userImageContainer: {
    flex: 1,
    justifyContent: "center",
    maxHeight: 60,
  },
  scrollContent: {
    // ScrollView의 내용이 컨테이너를 가득 채우는 역할
    flexGrow: 1,
  },
  gridWrapper: {
    flexDirection: "column",
    height: "100%",
    // 2개의 행을 75px 높이 안에서 균등하게 분배
    justifyContent: "space-around",
  },
  // 썸네일들을 가로로 배열
  gridRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default SubmitButton;
