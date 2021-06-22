import React from 'react';
import { View, Text, FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'

import Post from '../../components/Post'






const SearchResultScreen = (props) => {
    const {posts} = props
    

    return (
        <View>
            <FlatList
                data = {posts}
                renderItem = {({item}) => <Post post = {item}/>}
            />
        </View>
    )

}

  

  

export default SearchResultScreen;
