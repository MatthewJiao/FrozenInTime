import React, {useState} from 'react';
import { View, Text, TextInput, FlatList} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'

import styles from './styles.js'
import searchResults from '../../../assets/data/search'


const DestinationSearchScreen = (props) => {
    const [inputText, setInputText] = useState('')
    return (
        <View style = {styles.container}>
            <TextInput
                style = {styles.textInput}
                placeholder = "where are you going?"
                value = {inputText}
                onChange={setInputText}
            />

            <FlatList
                data = {searchResults}
                renderItem = {({item}) => {
                    return (
                        <View style = {styles.row}>
                            <View style = {styles.iconContainer}>
                                <Entypo name = {"location-pin"} size = {30}/>
                            </View>
                            <Text style = {styles.locationText}>{item.description}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )

}

  

  

export default DestinationSearchScreen
