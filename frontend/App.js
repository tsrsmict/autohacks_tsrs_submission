import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import FormScreen from './screens/Login';
import SignUp from './screens/Signup';
export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <SignUp />
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 400,
    backgroundColor: '#fff',
  },
});
