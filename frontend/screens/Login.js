import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const FormScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://10.0.2:5000/submitform', {
        name,
        email,

      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <Text>Name:</Text>
      <TextInput value={name} onChangeText={setName} />

      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default FormScreen;