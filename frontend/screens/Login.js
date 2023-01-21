import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, SafeAreaView} from 'react-native';
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
          <Text>Email:</Text>
          <TextInput style={styles.textInput} value={email} onChangeText={setEmail} />
        </View>

      <Text>Password:</Text>
      <TextInput value={pwd} onChangeText={setPwd}/>

      <Button title="Submit" onPress={handleSubmit}/></View>
      </View>

    </SafeAreaView>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    margin: 20,
  },
  header: {
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  heading: {
      fontSize: 35,
      fontWeight: "bold",
  },
  circleContainer: {
     justifyContent: 'center'
  },
  circle: {
      height: 50,
      width: 50,
      borderRadius: 25,
      backgroundColor: '#000', 
      margin: 'auto',
  }
});