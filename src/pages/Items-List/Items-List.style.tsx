import { StyleSheet,Dimensions} from "react-native";

export default StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#f7f7f7',
        position: 'relative'
    },
    text:{
        color:'#1667B3',
        fontSize:24
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'lightgray',
        padding: 10,
        marginBottom: 30,
        marginTop: 10
    },
    topBarText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1667B3'
    },
    listItem: {
        position: 'relative',
        width: '40%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: 'rgba(22,103,179, .1)',
        backgroundColor: '#fff',
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
    },
    nearingContainer: {
        position: 'absolute',
        top: -10,
        right: -10,
        backgroundColor: '#f39731',
        // opacity: 0.8,
        padding: 5,
        borderRadius: 3,
        zIndex: 1
    },
    floatingButton: {
        position: 'absolute',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 10,
        right: 10,
        backgroundColor: "#1667B3",
        padding: 10,
        height: 60,
        width: 60,
        borderRadius: 50
    }
})