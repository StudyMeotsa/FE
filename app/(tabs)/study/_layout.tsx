import { colors } from "@/constants";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Stack } from "expo-router";
import { Pressable } from "react-native";

export default function StudyLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: colors.WHITE },
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name='index'
        options={{
          title: "나의 스터디룸",
          headerRight: () => (
            <Pressable>
              <AntDesign
                name='plus'
                size={24}
                color={colors.BLACK}
              />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name='[id]'
        options={{
          title: "~~~스터디",
          headerBackButtonDisplayMode: "minimal", // 뒤로가기 글자 감추기
        }}
      />
      <Stack.Screen
        name='todo'
        options={{
          title: "이번주 할 일",
          headerBackButtonDisplayMode: "minimal", // 뒤로가기 글자 감추기
        }}
      />
    </Stack>
  );
}
