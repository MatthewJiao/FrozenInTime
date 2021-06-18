import React, { useState } from 'react';
import { View, Text} from 'react-native';
import Post from '../../components/Post'

import places from '../../../assets/data/feed'

const post = places[0]

const PostScreen = (props) => {
       

    return (
        <View style = {{backgroundColor: 'white'}}>
            <Post post = {post}/>
        </View>
    )

}

  

  

export default PostScreen
