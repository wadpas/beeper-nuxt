import React, { useState } from 'react'
import { Link, router, RelativePathString } from 'expo-router'
import { View, Text, ScrollView, Image, Alert } from 'react-native'
import FormField from '@/components/FormField'

import CustomButton from '@/components/CustomButton'
import { createUser } from '@/lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'

const logo = require('../../assets/images/logo.svg')

const SingUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { setUser, setIsLogged } = useGlobalContext()

  const handleSubmit = async () => {
    if (!form.username && !form.email && !form.password) {
      Alert.alert('Error', 'Please fill in all fields')
    }
    setIsSubmitting(true)
    try {
      const user = createUser(form.email, form.password, form.username)
      setUser(user)
      setIsLogged(true)
      router.replace('/home')
    } catch (error: any) {
      Alert.alert('Error', error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <View className='items-center justify-center h-full p-6 space-y-8 bg-black'>
      <Image source={logo} />
      <View></View>
      <FormField
        title='Username'
        value={form.email}
        placeholder='Enter your username'
        handleChangeText={(e: any) => setForm({ ...form, email: e })}
      />
      <FormField
        title='Email'
        value={form.email}
        placeholder='Enter your email'
        handleChangeText={(e: any) => setForm({ ...form, email: e })}
        keyboardType='email-address'
      />
      <FormField
        title='Password'
        value={form.password}
        placeholder='Enter your password'
        handleChangeText={(e: any) => setForm({ ...form, password: e })}
      />
      <View></View>
      <CustomButton
        title='Sign Up'
        handlePress={handleSubmit}
        isLoading={isSubmitting}
      />
      <Text className='text-white '>
        Have an account already?
        <Link
          href={'/sign-in' as RelativePathString}
          className='ml-2 font-bold text-primary'>
          Sign In
        </Link>
      </Text>
    </View>
  )
}

export default SingUp
