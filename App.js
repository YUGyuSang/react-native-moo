import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Contents, Footer } from './components/Layout';
import  {  FontAwesomeIcon  }  from  '@fortawesome/react-native-fontawesome';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Contents />
      <Footer />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
