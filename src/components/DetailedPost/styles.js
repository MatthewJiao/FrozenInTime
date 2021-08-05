import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 3/2,
        resizeMode: 'cover',
        borderRadius: 10,
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
    }, 
    description: {
        marginVertical: 20,
        fontSize: 16,
        lineHeight: 24
    }

})

export default styles