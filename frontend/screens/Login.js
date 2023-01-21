import React, { useState } from 'react';
import { View, Text, TextInput, Button, SafeAreaView } from 'react-native';
import axios from 'axios';

const FormScreen = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://10.0.2.2:5000/submitform", {
        email,
        pwd,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>Login</Text>
        </View>
        <View style={styles.formWrap}>
        <View style={styles.formContainer}>
          <Text>Name:</Text>
          <TextInput style={styles.textInput} value={name} onChangeText={setName} />
        </View>

      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} />

      <Button title="Submit" onPress={handleSubmit} /></View>
      </View>

    </SafeAreaView>
  );
};

export default FormScreen;