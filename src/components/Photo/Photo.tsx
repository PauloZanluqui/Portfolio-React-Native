import React from 'react';
import { Image } from 'react-native';

import { styles } from './PhotoStyles';

export default function Photo() {
  return (
    <>
        <Image style={styles.container} src='https://github.com/PauloZanluqui.png' />
    </>
  );
}