import React, { useState } from 'react'
import { Link, router } from 'expo-router'
import { View, Text, ScrollView, Image, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { createUser } from '@/lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'

const SingUp = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' })
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
    <SafeAreaView className="h-full bg-black">
      <ScrollView>
        <View className="w-full justify-center items-center min-h-[85vh] p-4">
          <Image source={images.logo} />
          <Text className="mt-10 text-2xl font-semibold text-white">Register</Text>
          <FormField
            title="Username"
            value={form.username}
            placeholder="Enter your username"
            handleChangeText={(e: any) => setForm({ ...form, username: e })}
          />
          <FormField
            title="Email"
            className="bg-black-100"
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
            title="Sign Up"
            className="w-full m-10"
            handlePress={handleSubmit}
            isLoading={isSubmitting}
          />
          <View className="flex-row items-center justify-center">
            <Text className="font-semibold text-gray-100 text-md">Have an account already?</Text>
            <Link
              href="/sign-in"
              className="ml-2 font-semibold text-white text-md">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SingUp
