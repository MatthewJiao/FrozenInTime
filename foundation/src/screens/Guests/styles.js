import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#676767'
    },
    row: {flexDirection: 'row',
    justifyContent: 'space-between', 
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',

    }
})

export default styles