import React, { useState, useEffect, useRef } from 'react';
import { View, FlatList} from 'react-native';
import MapView, {CalloutSubview, Marker} from 'react-native-maps'

import CustomMarker from '../../components/CustomMarker/index.';
import PostCarouselItem from '../../components/PostCarouselItem';

import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';


import {API, graphqlOperation} from 'aws-amplify'
import {listPosts} from '../../graphql/queries'


const SearchResultsMap = (props) => {
    const {posts} = props
    const [selectedPlaceId, setSelectedPlaceId] = useState(null)


    const flatlist = useRef()

    const map = useRef()

    const viewConfig = useRef({itemVisiblePercentThreshold: 100})

    const onViewChanged = useRef(({viewableItems}) => {
        if (viewableItems.length == 1) {
            const selectedPlace = viewableItems[0].item
            setSelectedPlaceId(selectedPlace.id)
        }
    })

    const width = useWindowDimensions().width

    
    
    useEffect(() => {
        if (!selectedPlaceId || !flatlist) {
            return
        }
        const index = posts.findIndex(place => place.id == selectedPlaceId)
        flatlist.current.scrollToIndex({index})
        console.log("scroll to ", selectedPlaceId)

        const selectedPlace = posts[index]
        const region = {
            latitude: selectedPlace.latitude,
            longitude: selectedPlace.longitude,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8
        }

        map.current.animateToRegion(region)
    }, [selectedPlaceId])

    return (
        <View style  = {{width: '100%', height: '100%'}}>
             <MapView
                ref = {map}
                style = {{width: '100%', height: '100%'}}
                initialRegion={{
                latitude: 28.3279822,
                longitude: -16.5124847,
                latitudeDelta: 0.8,
                longitudeDelta: 0.8,
                }}
            >
            
                {posts.map(place => 
                    <CustomMarker 
                        coordinate = {{latitude: place.latitude, longitude: place.longitude}} 
                        price = {place.newPrice}
                        isSelected = {place.id == selectedPlaceId}
                        onPress = {() => setSelectedPlaceId(place.id)}
                    />
                        
                )}

            </MapView>

            <View style = {{position: 'absolute', bottom: 10}}>
                <FlatList 
                    ref = {flatlist}
                    data = {posts}
                    renderItem = {({item}) => <PostCarouselItem post = {item}/> }
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    snapToInterval = {width - 80}
                    snapToAlignment = {"center"}
                    decelerationRate = {"fast"}
                    viewabilityConfig = {viewConfig.current}
                    onViewableItemsChanged = {onViewChanged.current}
                />
            </View>
        </View>
    )

}

  

  

export default SearchResultsMap
