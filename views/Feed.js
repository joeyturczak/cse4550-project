import React from "react";
import { View, Text } from "react-native";
import { DropButton } from "../components/DropButton";
import styles from "../stylesheet";

export function Feed({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Feed placeholder</Text>
      <DropButton />
    </View>
  );
}