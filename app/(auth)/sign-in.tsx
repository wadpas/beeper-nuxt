import React, { useState } from 'react'
import { Link, router } from 'expo-router'
import { View, Text, ScrollView, Image, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { singIn } from '@/lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'

const SingIn = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { setUser, setIsLogged } = useGlobalContext()

  const handleSubmit = async () => {
    if (!form.email && !form.password) {
      Alert.alert('Error', 'Please fill in all fields')
    }
    try {
      const user = await singIn(form.email, form.password)
      setUser(user)
      setIsLogged(true)
      router.replace('/home')
      router.replace('/home')
    } catch (error: any) {
      Alert.alert('Error', error.message)
    }
  }

  return (
    <SafeAreaView className="h-full bg-black ">
      <ScrollView>
        <View className="w-full justify-center items-center min-h-[85vh] p-4">
          <Image source={images.logo} />
          <Text className="mt-10 text-2xl font-semibold text-white">Login</Text>
          <FormField
            title="Email"
            value={form.email}
            placeholder="Enter your email"
            handleChangeText={(e: any) => setForm({ ...form, email: e })}
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            placeholder="Enter your password"
            handleChangeText={(e: any) => setForm({ ...form, password: e })}
          />
          <CustomButton
            title="Sign In"
            className="bg-black"
            handlePress={handleSubmit}
            isLoading={isSubmitting}
          />
          <View className="flex-row items-center justify-center">
            <Text className="font-semibold text-gray-100 text-md">Don't have an account?</Text>
            <Link
              href="/sign-up"
              className="ml-2 font-semibold text-white text-md">
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SingIn
