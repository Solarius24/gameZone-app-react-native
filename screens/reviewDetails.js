import React from 'react'
import {View, StyleSheet,Text} from "react-native"
import { globalStyles } from '../styles/global'

export default function ReviewDetails({route}) {
  const item = route.params
  
  return (
    <View style={globalStyles.container}>
      <Text>{item.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:24
    }
})