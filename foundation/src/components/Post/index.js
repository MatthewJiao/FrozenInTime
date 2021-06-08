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

        <Text style = {styles.bedrooms}>1 bed 1 bedroom</Text>
        <Text style = {styles.description} numberOfLines = {2}>What is Lorem Ipsum Lorem Ipsum is simply dummy 
            text of the printing and typesetting industry Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s
        </Text>

        <Text style = {styles.prices}>
            <Text style = {styles.oldPrice}>$36 </Text>
            <Text style = {styles.price}> $30 </Text>
            / night
        </Text>

        <Text style = {styles.totalPrice}>$230 total</Text>




    </View>
  );
};



export default Post;
