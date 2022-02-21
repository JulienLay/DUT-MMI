import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Frigo from './components/Frigo';

export default function App() {

  

  return (
    <View style={styles.container}>
      <Text>Bienvenue dans mon frigo !</Text>
      <Frigo></Frigo>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
