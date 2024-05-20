import { StyleSheet,Dimensions} from "react-native";

export default StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#AAC8A7'
    },
    text:{
        color:'white',
        fontSize:24
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'lightgray',
        padding: 10,
        marginBottom: 30
    },
    topBarText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    listItem: {
        position: 'relative',
        width: '40%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderBottomColor: '#ddd',
        backgroundColor: 'white',
        margin: '5%',
        borderRadius: 5
    },
    listItemText: {
        width: 100,
        fontSize: 18,
        textAlign: 'center',
        color: 'black'
    },
    listItemImage: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    expiredContainer: {
        position: 'absolute',
        top: -10,
        right: -10,
        backgroundColor: 'red',
        // opacity: 0.8,
        padding: 5,
        borderRadius: 3,
        zIndex: 1
    }
})