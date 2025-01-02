import { ScrollView, Text, Image, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router, Href } from 'expo-router'

import { images } from '../constants'
import { useGlobalContext } from '@/context/GlobalProvider'
import CustomButton from '@/components/CustomButton'

const logo = require('../assets/images/logo.svg')

const App = () => {
  const { isLogged, loading, user } = useGlobalContext()

  return (
    <View className='items-center h-full p-6 bg-black justify-evenly'>
      <Image source={logo} />
      <Image
        source={images.cards}
        className='max-w-[380px] max-h-[280px]'
      />
      <Text className='text-2xl font-bold text-center text-primary'>
        Discovery endless possibilities
      </Text>
      <CustomButton
        title='Get Started'
        handlePress={() => router.push('/sign-in' as Href)}
      />
    </View>
  )
}

export default App
