import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

const FormField = ({ title, value, placeholder, handleChangeText, keyboardType }: any) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View className='w-full space-y-1'>
      <Text className='ml-4 text-white'>{title}</Text>
      <TextInput
        className='p-4 text-white bg-slate-900 rounded-2xl'
        value={value}
        placeholder={placeholder}
        placeholderTextColor='#64748B'
        onChangeText={handleChangeText}
        keyboardType={keyboardType}
        secureTextEntry={title === 'Password' && !showPassword}
      />
      {title === 'Password' && (
        <Pressable
          className='absolute right-3 bottom-3'
          onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? 'eye-off' : 'eye'}
            color='#EA580C'
            size={26}
          />
        </Pressable>
      )}
    </View>
  )
}

export default FormField
