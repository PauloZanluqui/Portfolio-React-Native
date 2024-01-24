import React from "react";
import { Text, TouchableOpacity, Linking } from "react-native";

import { styles } from "./ButtonStyles";
import { useNavigation } from "@react-navigation/native";

interface Prop{
  title: string,
  socialNetwork?: eSocialNetworks
  toForm?: string
}

export enum eSocialNetworks{
  linkedin,
  github,
  email
}

var linkedinUrl = 'https://www.linkedin.com/in/paulo-zanluqui/';
var githubProfile = 'https://github.com/PauloZanluqui'
var email = 'mailto:paulozanluqui13@gmail.com'

export default function Button({title, socialNetwork, toForm = ''}: Prop) {
  const { navigate } = useNavigation<any>();

  async function goTo(){
    if(toForm == '') {
      switch(socialNetwork){
        case eSocialNetworks.linkedin:
          await Linking.openURL(linkedinUrl)
          break;
        case eSocialNetworks.github:
          await Linking.openURL(githubProfile)
          break;
        case eSocialNetworks.email:
          Linking.openURL(email)
          break;
      }
    } else {
      navigate(toForm)
    }
  }

  return (
    <>
      <TouchableOpacity style={styles.buttonContainer} onPress={goTo}>
        <Text style={styles.textButtonContainer}>{title}</Text>
      </TouchableOpacity>
    </>
  );
}
