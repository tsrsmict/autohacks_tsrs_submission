import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import axios from "axios";

const FormScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    try {
<<<<<<< HEAD
      const res = await axios.post("http://10.0.2.2:5000/submitform", {
=======
      const res = await axios.post('http://localhost:19000/submitform', {
>>>>>>> 8b9514aff6c11585e7a245d50976c59478bd03cd
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
