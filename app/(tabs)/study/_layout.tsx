import { Stack } from "expo-router";

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
        }}
      />
    </Stack>
  );
}
