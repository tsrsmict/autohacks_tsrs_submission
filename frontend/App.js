import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import FormScreen from './screens/Login';
import SignUp from './screens/Signup';
import AddEmail from './screens/AddEmail';
export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <AddEmail/>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
