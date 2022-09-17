import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = ({route, navigation}) => {
  return (
    <SafeAreaView>
    <View>
      <Text>HomeScreen</Text>
      <Button title="Go Detail" onPress={() => {
        navigation.navigate("Detail", {
            id: 1
        });
      }} />
    </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})