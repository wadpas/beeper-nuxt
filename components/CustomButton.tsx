import { Button, View } from 'react-native'

import React from 'react'

const CustomButton = ({ title, handlePress, isLoading }: any) => {
  return (
    <View className="w-full m-10 rounded-xl">
      <Button
        title={title}
        onPress={handlePress}
        disabled={isLoading}
        color="#f97316"
      />
    </View>
  )
}

export default CustomButton
