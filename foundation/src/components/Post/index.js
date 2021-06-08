import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import styles from './styles.js'


const Post = (props) => {

  

  return (
    <View style = {styles.container} >
        
        <Image 
            style = {styles.image}
            source = {require('../../../assets/images/post1.jpg')}

        />


     
     



    </View>
  );
};



export default Post;
