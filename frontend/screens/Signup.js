import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirm, setConfirm] = useState("");
  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://10.0.2.2:5000/signup", {
        email,
        pwd,
        confirm
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail}/>

      <Text>Password:</Text>
      <TextInput value={pwd} onChangeText={setPwd} />
      <Text>Confirm Password:</Text>
      <TextInput value={confirm} onChangeText={setConfirm} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default SignUp;
