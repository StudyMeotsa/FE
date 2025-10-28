import { colors } from "@/constants";
import { Feather } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { Pressable } from "react-native";

export default function TimerLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: colors.WHITE },
      }}>
      <Stack.Screen
        name='index'
        options={{
          title: "타이머",
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <Feather
                name='arrow-left'
                size={28}
                color='black'
              />
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
}
