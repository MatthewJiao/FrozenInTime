import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  
} from 'react-native';



import Icon from 'react-native-vector-icons/dist/FontAwesome'
import HomeScreen from './src/screens/Home'


const App: () => Node = () => {

  

  return (
    <SafeAreaView >
     <HomeScreen/> 
    </SafeAreaView>
  );
};



export default App;
