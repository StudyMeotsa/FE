import { colors } from "@/constants";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.BROWN_300,
      }}>
      <Tabs.Screen
        name='index'
        options={{
          title: "홈",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color} // tabBarActiveTintColor 적용
            />
          ),
        }}
      />
      <Tabs.Screen
        name='timer' // 경로
        options={{
          title: "타이머",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "timer-lock" : "timer-lock-open-outline"}
              size={24}
              color={color} // tabBarActiveTintColor 적용
            />
          ),
        }}
      />
      <Tabs.Screen
        name='study' // 경로
        options={{
          title: "스터디룸",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={
                focused
                  ? "book-open-page-variant"
                  : "book-open-page-variant-outline"
              }
              size={24}
              color={color} // tabBarActiveTintColor 적용
            />
          ),
        }}
      />
      <Tabs.Screen
        name='collection' // 경로
        options={{
          title: "컬렉션",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "egg-easter" : "egg-outline"}
              size={24}
              color={color} // tabBarActiveTintColor 적용
            />
          ),
        }}
      />
      <Tabs.Screen
        name='my' // 경로
        options={{
          title: "내 프로필",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "account" : "account-outline"}
              size={24}
              color={color} // tabBarActiveTintColor 적용
            />
          ),
        }}
      />
    </Tabs>
  );
}
