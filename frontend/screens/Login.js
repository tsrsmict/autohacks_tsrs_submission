import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const FormScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:5000/submitform', {
        name,
        email,
        age,
        message,
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

      <Text>Age:</Text>
      <TextInput value={age} onChangeText={setAge} keyboardType="numeric" />

      <Text>Message:</Text>
      <TextInput value={message} onChangeText={setMessage} multiline={true} />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default FormScreen;