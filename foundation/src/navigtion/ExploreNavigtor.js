import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home'
import SearchResultScreen from '../screens/SearchResults';
import SearchResultsTabNavigtor from './SearchResultsTabNavigator';

const Stack = createStackNavigator()


const Router = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name = {'Welcome'}
                component = {HomeScreen}
                options = {{
                    headerShown: false
                }}   
            />

            <Stack.Screen
                name = {'SearchResults'}
                component = {SearchResultsTabNavigtor}
                options = {{
                    title: 'Search Your Destination'
                }}   
            />


        </Stack.Navigator>
    )

}
 

export default Router
