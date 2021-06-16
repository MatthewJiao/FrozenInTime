import {ImageBackground, ImageBackgroundComponent, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: 120,
        padding: 5
    },
    innerContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 15,
        overflow: "hidden"
        
    },
    image: {
        height: '100%',
        aspectRatio: 1,
        resizeMode: 'cover',
    },
    prices: {
        fontSize: 15,
        marginVertical: 10
    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',
    },
    price: {
        fontWeight: 'bold'
    },
    totalPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'underline',

    },
    description: {
        fontSize: 15,
    }, 
    bedrooms: {
        marginVertical: 10,
        color: '#5b5b5b'
    }

})

export default styles