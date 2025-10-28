import { router } from "expo-router";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

function index() {
  const items = [
    {
      id: 1,
      name: "알고리즘",
      description: "기초/중급 문제풀이 스터디",
      term: 14,
    },
    {
      id: 2,
      name: "자료구조",
      description: "스택/큐/트리/그래프 구현",
      term: 21,
    },
    {
      id: 3,
      name: "데이터베이스",
      description: "정규화·인덱스·트랜잭션 기본",
      term: 28,
    },
  ];

  //상세 스터디룸 이동 핸들러
  const handlePressItem = (id: number) => {
    router.push(`/study/${id}`);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        //가로스크롤
        horizontal
        showsHorizontalScrollIndicator={false}>
        {items.map((item) => (
          <Pressable
            key={item.id}
            style={styles.itemContainer}
            onPress={() => handlePressItem(item.id)} // 상테 페이지로 이동
          >
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>{item.term}</Text>
          </Pressable>
        ))}

        {/* 마지막 여백 */}
        <View style={{ height: 24 }} />
      </ScrollView>
    </View>
  );
}

export default index;

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContainer: {
    alignItems: "center",
    padding: 20,
    gap: 10,
  },
  itemContainer: {
    borderWidth: 1,
    padding: 20,
  },
  itemText: {},
});
