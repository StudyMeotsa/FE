import { router, useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function StudyDetailScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text>{id}번 스터디 10월 28일</Text>
        <ScrollView
          horizontal
          contentContainerStyle={styles.scrollContainer}>
          <View style={styles.memberContainer}>
            <Text>사람1</Text>
          </View>
          <View style={styles.memberContainer}>
            <Text>사람2</Text>
          </View>
          <View style={styles.memberContainer}>
            <Text>사람3</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={() => router.push("/(tabs)/study/todo")}>
          <Text>이번주 할 일</Text>
        </Pressable>
        <Pressable onPress={() => router.push("/timer")}>
          <Text>공부하기</Text>
        </Pressable>
      </View>
      <View style={styles.dashboardContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
  },
  headerContainer: {
    flex: 2,
    borderWidth: 1,
    gap: 30,
  },
  buttonContainer: {
    flex: 1,
    borderWidth: 1,
    flexDirection: "row",
    gap: 10,
  },
  dashboardContainer: {
    flex: 9,
    borderWidth: 1,
  },
  scrollContainer: {
    gap: 10,
  },
  memberContainer: {
    borderWidth: 1,
    padding: 15,
  },
});
