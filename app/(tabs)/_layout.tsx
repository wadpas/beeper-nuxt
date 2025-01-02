import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#fb923c',
        tabBarStyle: {
          backgroundColor: '#161632',
          height: 52,
        },
      }}>
      <Tabs.Screen
        name='home'
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home-sharp' : 'home-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='bookmark'
        options={{
          headerShown: false,
          title: 'Bookmark',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'bookmark-sharp' : 'bookmark-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='create'
        options={{
          headerShown: false,
          title: 'Create',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'add-circle-sharp' : 'add-circle-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'person-sharp' : 'person-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
