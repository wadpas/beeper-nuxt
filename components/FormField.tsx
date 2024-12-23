import { View, Text, TextInput } from 'react-native'
import React from 'react'

const FormField = ({ title, value, placeholder, handleChangeText, keyboardType }: any) => {
  return (
    <View className="w-full mt-10">
      <Text className="ml-2 text-white">{title}</Text>
      <View className="p-4 rounded-lg bg-black-100">
        <TextInput
          className="text-white"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          keyboardType={keyboardType}
          secureTextEntry={title === 'Password' ? true : false}
        />
      </View>
    </View>
  )
}

export default FormField
