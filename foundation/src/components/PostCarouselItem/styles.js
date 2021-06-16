import {ImageBackground, ImageBackgroundComponent, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: 120,
        padding: 5
    },
    innerContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: "hidden"
        
    },
    image: {
        height: '100%',
        aspectRatio: 1,
        resizeMode: 'cover',
    },
    prices: {
        fontSize: 18,
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
        fontSize: 18,
        lineHeight: 26
    }, 
    bedrooms: {
        marginVertical: 10,
        color: '#5b5b5b'
    }

})

export default styles