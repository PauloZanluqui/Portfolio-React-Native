import React from "react";
import { View, Text } from "react-native";
import { SkillsInterface } from "../../screens/Skills/Skills";

import { FontAwesome } from "@expo/vector-icons";

import { styles } from "./SkillStyles";

export function Skill(habilidades: SkillsInterface) {
  var stars = [];
  stars = new Array(habilidades.stars).fill(1)

  return (
    <View style={styles.container}>
      <Text>{habilidades.title}</Text>

      <View style={styles.stars}>
        {stars.map((i, index) => {
          return(<FontAwesome key={i + '-' +index} name="star" size={24} color="orange" />)
        })}
      </View>
    </View>
  );
}
