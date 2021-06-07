import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center',

    },
    title: {
        fontSize: 80,
        fontWeight: 'bold',
        color: '#ffffff',
        width: '70%',
        marginLeft: 25
    }, 
    button: {
        backgroundColor: '#fff',
        width: 200,
        marginLeft: 25,
        marginTop: 25,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold'
    }, 
    searchButton: {
        backgroundColor: '#fff',
        width: Dimensions.get('screen').width - 20,
        marginHorizontal: 10,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        elevation: 100,
        top: 20
        
    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default styles