import { Stack } from "expo-router";

export default function TimerLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='timer'
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
