import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import { styles } from "./HomeStyles";
import Button, { eSocialNetworks } from "../../components/Button/Button";
import Photo from "../../components/Photo/Photo";

export default function Home() {
  return (
    <View style={styles.container}>
      <Photo />
      <Text style={styles.label}>Paulo Zanluqui</Text>
      <Button title="Linkedin" socialNetwork={eSocialNetworks.linkedin} />
      <Button title="GitHub" socialNetwork={eSocialNetworks.github} />
      <Button title="Email" socialNetwork={eSocialNetworks.email} />
      <Button title="Skills" toForm="Skills" />
      <StatusBar style="auto" />
    </View>
  );
}
