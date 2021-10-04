import React, { useEffect, useState } from "react";

import { View, Text, TextInput, Pressable, Alert } from "react-native";
import { useAuth } from "../providers/AuthProvider";
import styles from "../stylesheet";

export function WelcomeView({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp, signIn } = useAuth();

  useEffect(() => {
    // If there is a user logged in, go to the Projects page.
    if (user != null) {
      navigation.navigate("Feed");
    }
  }, [user]);

  // The onPressSignIn method calls AuthProvider.signIn with the
  // email/password in state.
  const onPressSignIn = async () => {
    console.log("Press sign in");
    try {
      await signIn(email, password);
    } catch (error) {
      Alert.alert(`Failed to sign in: ${error.message}`);
    }
  };

  // The onPressSignUp method calls AuthProvider.signUp with the
  // email/password in state and then signs in.
  const onPressSignUp = async () => {
    try {
      await signUp(email, password);
      signIn(email, password);
    } catch (error) {
      Alert.alert(`Failed to sign up: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Sign In</Text>
        <TextInput
            value={email}
            onChangeText={setEmail}
            label='Email'
            placeholder='Email'
            placeholderTextColor='grey'
            color='black'
            style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          label='Password'
          placeholder='Password'
          placeholderTextColor='grey'
          color='black'
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Pressable
            style={styles.button}
            onPress={onPressSignIn}>
            <Text style={styles.buttontext}>LOGIN</Text>
        </Pressable>
        <Pressable
            style={styles.button}
            onPress={onPressSignUp}>
            <Text style={styles.buttontext}>SIGN UP</Text>
        </Pressable>
    </View>
  );
}