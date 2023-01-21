import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import axios from "axios";

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
    <View>
      <View style={{ alignItems: "center", alignContent: 'middle' , top: 100}}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Login</Text>
      <View style={{ height: 20 }} />
      <View style={{alignItems: ""}}>
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail}/>

      <Text>Password:</Text>
      <TextInput value={pwd} onChangeText={setPwd} />

      <Button title="Submit" onPress={handleSubmit} /></View>
      </View>
    </View>
  );
};

export default FormScreen;
