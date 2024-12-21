import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const index = () => {
  return (
    <View className="items-center justify-center flex-1 bg-slate-300">
      <Text className="font-pextrabold">index</Text>
      <Link
        href="/home"
        className="w-2 text-sky-500">
        home
      </Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})
