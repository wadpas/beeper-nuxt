import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const index = () => {
  return (
    <View className="items-center justify-center flex-1 bg-white0">
      <Text className="font-pextrabold">index</Text>
      <Link
        href="/profile"
        className="text-sky-500">
        Profile
      </Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})
