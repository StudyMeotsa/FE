import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          title: "홈",
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
