import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  
} from 'react-native';
import 'react-native-gesture-handler'
 


import HomeScreen from './src/screens/Home'


const App: () => Node = () => {

  

  return (
    <SafeAreaView >
     {/*<Post post = {post2}/> */}
     {/*<SearchResultScreen/>*/}
     <HomeScreen/>
    </SafeAreaView>
  );
};



export default App;
