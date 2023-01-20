import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomePage from './screens/HomePage';
import FormScreen from './screens/Login';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <Login />
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
