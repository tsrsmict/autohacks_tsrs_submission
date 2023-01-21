import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, SafeAreaView } from 'react-native';
import axios from 'axios';

const FormScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:5000/submitform', {
        name,
        email,

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

        <View style={styles.formContainer}>
          <Text>Email:</Text>
          <TextInput style={styles.textInput} value={email} onChangeText={setEmail} />
        </View>

        <Button style={styles.submit} title="Submit" onPress={handleSubmit} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 20,
    maxHeight: 'screen',
  },
  textInput: {
    marginLeft: 10,
    borderColor: '#0000',

  },
  formContainer: {
      flexDirection: 'row',
      margin: 15,
  },
  submit: {
    height: 10,
    width: 60,

  },
  formWrap: {
    top: 200,
  },
  heading: {
    top: 10,
    fontSize: 35,
    fontWeight: "bold",
},

});