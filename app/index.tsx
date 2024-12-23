import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { router, Href, Redirect } from 'expo-router'
import { images } from '../constants'
import CustomButton from '@/components/CustomButton'
import { useGlobalContext } from '@/context/GlobalProvider'

const index = () => {
  const { isLogged, loading, user } = useGlobalContext()

  if (isLogged && !loading) return <Redirect href="/(tabs)/home" />
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="items-center justify-between w-full h-full p-4">
          <Image source={images.logo} />
          <View>
            <Image
              source={images.cards}
              className="max-w-[380px] w-full max-h-[280px]"
              resizeMode="contain"
            />
            <Text className="text-2xl font-bold text-center text-white">
              Discover Endless{'\n'}
              Possibilities with <Text className="text-secondary-200">Kultu</Text>
            </Text>
          </View>
          <CustomButton
            title="Get Started"
            handlePress={() => router.push('/sign-in' as Href)}
          />
        </View>
      </ScrollView>
      <StatusBar
        backgroundColor="#161622"
        style="light"
      />
    </SafeAreaView>
  )
}

export default index
