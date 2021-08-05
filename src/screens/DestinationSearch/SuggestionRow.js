import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

import Entypo from 'react-native-vector-icons/Entypo'


const SuggestionRow = ({item}) => {
    return (
        <View style = {styles.row}>
            <View style = {styles.iconContainer}>
                <Entypo name = {"location-pin"} size = {30}/>
            </View>
            <Text style = {styles.locationText}>{item.description}</Text>
        </View>
    )
}

export default SuggestionRow