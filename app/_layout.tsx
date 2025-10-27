import { Stack } from "expo-router";
import "react-native-reanimated";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  return (
    // initialWindowMetrics : 첫 프레임에서 인셋 측정(비동기) 대기 없이 바로 안전영역을 적용해서 초기 깜빡임/점프를 줄이고 렌더를 빠르게 한다.
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Stack>
        <Stack.Screen
          name='(tabs)'
          options={{ headerShown: false }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}