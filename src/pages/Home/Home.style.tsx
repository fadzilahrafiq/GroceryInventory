import { StyleSheet,Dimensions} from "react-native";

export default StyleSheet.create({

    container:{
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor:'#f7f7f7',
        alignContent: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center'
        // overflow: 'scroll'
    },
    text:{
        color:'#1667B3',
        fontSize:24
    
    },
    userBar: {
        width: '100%',
        // backgroundColor: 'red',
        padding: 20,
        paddingTop: 20,
        paddingBottom: 60,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center'
    },
    userBarText: {
        color: '#1667B3',
    },
    userBarIcon: {
        width: 40,
        height: 40,
        borderRadius: 50
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
        color: '#1667B3',
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
        paddingBottom: 5,
        paddingTop: 5,
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',//'rgba(22,103,179,1)',
        borderWidth: 1,
        borderColor: 'rgba(22,103,179, .2)',
    },
    contentBoxWarning: {
        backgroundColor: 'rgba(243,151,49, 1)',
    },
    contentBoxError: {
        backgroundColor: 'rgba(238,83,47, 1)',
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
        width: '100%',//'70%',
        padding: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#1667B3'
        // backgroundColor: 'black'
    },
    contextTextWarning: {
        color: 'white'//'#ff9800' 
    },
    contextTextError: {
        color: 'white',//'#ff5722' 
    },
    contentPlaceholderLogo: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
    contentTextCommon: {
        width: '100%',
        color: '#1667B3'
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
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'right',
        color: '#1f1f1f',
        marginTop: 20,
        marginBottom: 0
    }
})