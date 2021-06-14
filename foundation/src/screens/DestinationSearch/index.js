import React, {useState} from 'react';
import { View, Text, TextInput, FlatList, Pressable} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'

import styles from './styles.js'
import searchResults from '../../../assets/data/search'

import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import Env from '../../../environment'


const DestinationSearchScreen = (props) => {
    const [inputText, setInputText] = useState('')
    const navigation = useNavigation()

    return (
        <View style = {styles.container}>

            <View style = {{height: 500}}>
                <GooglePlacesAutocomplete
                    placeholder='Search'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}
                    query={{
                        key: 'put key here',
                        language: 'en',
                    }}
                />
            </View>
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
                        <Pressable onPress = {() => navigation.navigate('Guests')} style = {styles.row}>
                            <View style = {styles.iconContainer}>
                                <Entypo name = {"location-pin"} size = {30}/>
                            </View>
                            <Text style = {styles.locationText}>{item.description}</Text>
                        </Pressable>
                    )
                }}
            />
        </View>
    )

}

  

  

export default DestinationSearchScreen
