import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, SafeAreaView} from 'react-native';
import axios from 'axios';

const FormScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");
 const [server, SetServer] = useState("")
  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://10.0.2.2:5000/checkemail", {
        email,
        password,
        server
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
          <Text style={styles.heading}>Add an Email Acccount</Text>
        </View>
        <View style={styles.formWrap}>
        <View style={styles.formContainer}>
          <Text>Email:</Text>
          <TextInput style={styles.textInput} value={email} onChangeText={setEmail} />
        </View>
        <View style={styles.formContainer}>
          <Text>Email Service:</Text>
          <TextInput style={styles.textInput} value={server} onChangeText={SetServer} />
        </View>
      <Text>Password:</Text>
      <TextInput value={password} onChangeText={setPwd}/>

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
});;
