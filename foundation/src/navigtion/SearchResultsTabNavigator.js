import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import SearchResults from '../screens/SearchResults';

const Tab = createMaterialTopTabNavigator()

const SearchResultsTabNavigtor = (props) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name = {"list"} component = {SearchResults}/>
            <Tab.Screen name = {"map"} component = {SearchResults}/>

        </Tab.Navigator>
    )

}
 

export default SearchResultsTabNavigtor
