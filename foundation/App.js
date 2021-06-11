import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  
} from 'react-native';
 


import Icon from 'react-native-vector-icons/dist/FontAwesome'
import HomeScreen from './src/screens/Home'
import Post from './src/components/Post'
import SearchResultScreen from './src/screens/SearchResults'

import feed from './assets/data/feed'

const post1 = feed[0]
const post2 = feed[2]

const App: () => Node = () => {

  

  return (
    <SafeAreaView >
     {/*<Post post = {post2}/> */}
     <SearchResultScreen/>

    </SafeAreaView>
  );
};



export default App;
