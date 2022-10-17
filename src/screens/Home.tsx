import React from 'react';
import { Button, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../root/RootStackParamList';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go to About" onPress={() => navigation.push('About')} />
    </View>
  );
};

export default Home;
