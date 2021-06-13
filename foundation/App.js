import React from 'react';
import type {Node} from 'react';
import {
  StatusBar,
  
} from 'react-native';
import 'react-native-gesture-handler'
 import Router from './src/navigtion/Router'


import HomeScreen from './src/screens/Home'


const App: () => Node = () => {

  

  return (
      <>
        <StatusBar barStyle = "dark-content"/>
        <Router/>
      </>
  );
};



export default App;
