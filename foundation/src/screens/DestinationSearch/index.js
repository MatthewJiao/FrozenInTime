import React, {useState} from 'react';
import { View, Text, TextInput, FlatList, Pressable} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'

import styles from './styles.js'
import searchResults from '../../../assets/data/search'

import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


import Env from '../../../environment'

import SuggestionRow from './SuggestionRow.js';


const DestinationSearchScreen = (props) => {
    const navigation = useNavigation()

    return (
        <View style = {styles.container}>

            <GooglePlacesAutocomplete
                placeholder='Where are you going?'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                    navigation.navigate('Guests', {viewport: details.geometry.viewport})
                }}
                fetchDetails
                styles = {
                    styles.textInput

                }
                query={{
                    key: Env.GOOGLE_PLACES_API_KEY,
                    language: 'en'
                }}
                suppressDefaultStyles
                renderRow = {(item) => <SuggestionRow item = {item}/>}
            />
                    
        </View>
    )

}

  

  

export default DestinationSearchScreen
