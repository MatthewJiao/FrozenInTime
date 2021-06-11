import React from 'react';
import { View, Text, FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'

import Post from '../../components/Post'

import feed from '../../../assets/data/feed'

const SearchResultScreen = (props) => {
    return (
        <View>
            <FlatList
                data = {feed}
                renderItem = {({item}) => <Post post = {item}/>}
            />
        </View>
    )

}

  

  

export default SearchResultScreen;
