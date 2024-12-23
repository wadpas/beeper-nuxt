import React, { useState } from 'react'
import { Link } from 'expo-router'
import { View, Text, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'

const SingIn = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = () => {
    console.log('form: ', form)
  }

  return (
    <SafeAreaView className="h-full bg-black ">
      <ScrollView>
        <View className="w-full justify-center items-center min-h-[85vh] p-4">
          <Image source={images.cull} />
          <Text className="mt-10 text-2xl font-semibold text-white">Login to CULL</Text>
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
