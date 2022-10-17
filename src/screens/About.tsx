import React from "react";
import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../root/RootStackParamList';

type AboutProps = NativeStackScreenProps<RootStackParamList, 'About'>;
const About: React.FC<AboutProps> = (Props: AboutProps) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen {Props.route.params.name}</Text>
    </View>
  );
};

export default About;
