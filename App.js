import { StatusBar } from 'expo-status-bar';
import {React, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Contents, Footer } from './components/Layout';
import  {  FontAwesomeIcon  }  from  '@fortawesome/react-native-fontawesome';

export default function App() {
  const [defaultId, setDefaultId] = useState(1);

    const idPlus = () => {
      if (defaultId === 4) {
        return setDefaultId(1);
      }
      setDefaultId(defaultId + 1);
    };
  
    const idMinus = () => {
      if (defaultId === 1) {
        return setDefaultId(4);
      }
      setDefaultId(defaultId - 1);
    };

  return (
    <View style={styles.container}>
      <Header />
      <Contents idPlus={idPlus} idMinus={idMinus} defaultId={defaultId}/>
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
