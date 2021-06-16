import React, { useState } from 'react';
import { View, FlatList} from 'react-native';
import MapView, {Marker} from 'react-native-maps'

import places from '../../../assets/data/feed'
import CustomMarker from '../../components/CustomMarker/index.';
import PostCarouselItem from '../../components/PostCarouselItem';

import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';


const SearchResultsMap = (props) => {
    const [selectedPlaceId, setSelectedPlaceId] = useState(null)
    const width = useWindowDimensions().width
    return (
        <View style  = {{width: '100%', height: '100%'}}>
             <MapView
                style = {{width: '100%', height: '100%'}}
                initialRegion={{
                latitude: 28.3279822,
                longitude: -16.5124847,
                latitudeDelta: 0.8,
                longitudeDelta: 0.8,
                }}
            >
            
                {places.map(place => 
                    <CustomMarker 
                        coordinate = {place.coordinate} 
                        price = {place.newPrice}
                        isSelected = {place.id == selectedPlaceId}
                        onPress = {() => setSelectedPlaceId(place.id)}
                    />
                        
                )}

            </MapView>

            <View style = {{position: 'absolute', bottom: 10}}>
                <FlatList 
                    data = {places}
                    renderItem = {({item}) => <PostCarouselItem post = {item}/> }
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    snapToInterval = {width - 80}
                    snapToAlignment = {"center"}
                    decelerationRate = {"fast"}
                />
            </View>
        </View>
    )

}

  

  

export default SearchResultsMap
