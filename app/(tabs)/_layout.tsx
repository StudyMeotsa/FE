import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name='index'
        options={{
          title: "홈",
        }}
      />
      <Tabs.Screen
        name='timer' // 경로
        options={{
          title: "타이머",
        }}
      />
      <Tabs.Screen
        name='study' // 경로
        options={{
          title: "스터디룸",
        }}
      />
      <Tabs.Screen
        name='collection' // 경로
        options={{
          title: "컬렉션",
        }}
      />
      <Tabs.Screen
        name='my' // 경로
        options={{
          title: "내 프로필",
        }}
      />
    </Tabs>
  );
}
