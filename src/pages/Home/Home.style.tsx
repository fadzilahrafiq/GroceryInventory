import { StyleSheet,Dimensions} from "react-native";

export default StyleSheet.create({

    container:{
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor:'#AAC8A7',
        alignContent: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50
    
    },
    text:{
        color:'white',
        fontSize:24
    
    },
    header: {
        width: '100%',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerLogo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    headerText: {
        width: '100%',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    content: {
        width: '100%',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginTop: 40
    },
    contentBox: {
        width: '100%',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,.1)'
    },
    contentLogoContainer: {
        width: '30%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentTextContainer: {
        width: '70%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'black'
    },
    contentPlaceholderLogo: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
    contentTextCommon: {
        width: '100%'
    },
    contentTextTitle: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    contentTextSub: {
        fontSize: 18
    },
    contentTextLink: {
        fontSize: 12,
        marginTop: 20,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'right',
    }
})