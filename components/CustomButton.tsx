import { Button } from 'react-native'

import React from 'react'

const CustomButton = ({ title, handlePress, isLoading }: any) => {
  return (
    <Button
      title={title}
      onPress={handlePress}
      disabled={isLoading}
      color="#f97316"></Button>
  )
}

export default CustomButton
