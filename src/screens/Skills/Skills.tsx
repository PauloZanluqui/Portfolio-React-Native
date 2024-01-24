import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './SkillsStyles';
import Photo from '../../components/Photo/Photo';
import { Skill } from '../../components/Skill/Skill';

export interface SkillsInterface {
  title: string,
  stars: number
}

const habilidades: SkillsInterface[] = [
  {
    title: 'HTML',
    stars: 5
  },
  {
    title: 'CSS',
    stars: 3
  },
  {
    title: 'JS',
    stars: 5
  },
  {
    title: 'TypeScript',
    stars: 5
  },
  {
    title: 'Angular',
    stars: 4
  },
  {
    title: 'React',
    stars: 4
  },
  {
    title: 'React Native',
    stars: 4
  },
]

export default function Skills() {
  return (
    <View style={styles.container}>
      <Photo />
      <Text style={styles.label}>Minhas Habilidades</Text>

      {habilidades.map((skill, i) => {
        return(
          <Skill title={skill.title} stars={skill.stars} key={i}/>
        )
      })}      
    </View>
  );
}