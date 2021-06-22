import React, {useEffect, useState} from 'react';
import { View, Text, FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'

import Post from '../../components/Post'


import {API, graphqlOperation} from 'aws-amplify'
import {listPosts} from '../../graphql/queries'



const SearchResultScreen = (props) => {
    const [posts, setPosts] = useState([])
    const {guests} = props
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsResult = await API.graphql(
                    graphqlOperation(listPosts, {
                        filter: {
                            maxGuests: {
                                ge: guests
                            }
                        }
                    })
                )
                setPosts(postsResult.data.listPosts.items)
            } catch (e) {
                console.log(e)
            }
        }

        fetchPosts()
    }, [])

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
