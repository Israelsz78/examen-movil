import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import { MainNavigator } from './navigaitors/MainNavigaitor';
import {NavigationContainer} from '@react-navigation/native'
export default function App() {

  return (
    <View style={styles.container}>
    <NavigationContainer>
      <MainNavigator/>
    </NavigationContainer>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
