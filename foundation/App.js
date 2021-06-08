import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  
} from 'react-native';
 


import Icon from 'react-native-vector-icons/dist/FontAwesome'
import HomeScreen from './src/screens/Home'
import Post from './src/components/Post'


const App: () => Node = () => {

  

  return (
    <SafeAreaView >
     <Post/> 
    </SafeAreaView>
  );
};



export default App;
