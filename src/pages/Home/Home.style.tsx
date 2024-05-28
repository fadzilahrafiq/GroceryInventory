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
    warningBorder: {
        borderColor: 'rgba(243,151,49, .2)'
    },
    warningText: {
        color: 'rgba(243,151,49, 1)'
    },
    errorBorder: {
        borderColor: 'rgba(238,83,47, .2)'
    },
    errorText: {
        color: 'rgba(238,83,47, 1)'
    },
    text:{
        color:'#1667B3',
        fontSize:24
    
    },
    userBarContainer: {
        width: '100%',
        // marginBottom: 30
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
        fontWeight: 'bold',
        fontSize: 25
    },
    userBarIcon: {
        width: 35,
        height: 35,
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
        paddingTop: 20,
        // backgroundColor: 'red'
    },
    contentContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center'
    },
    pillBoxes: {
        width: '45%',
        // flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(22,103,179, .2)',
        paddingTop: 10,
        paddingBottom: 10
    },
    pillBox: {
        width: '95%',
        marginTop: 20,
        // flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(22,103,179, .2)',
        paddingTop: 10,
        paddingBottom: 10
    },
    pillBoxLeft: {
        width: '30%',
        padding: 5
    },
    pillBoxleftText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'rgb(22,103,179)'
    },
    pillBoxRight: {
        width: '70%',
        padding: 5
    },
    pillBoxRightText: {
        fontSize: 15,
        color: '#1f1f1f'
    },
    graphContainer: {
        backgroundColor: '#1667b3',
        // width: '100%',
        minHeight: 50,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
        paddingTop: 20
    },
    graphTitle: {
        fontWeight: '900',
        color: 'white'
    },
    graphContent: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    statsContainer: {
        justifyContent: 'space-evenly',
    },
    statPills: {
        width: '45%',
        backgroundColor: 'rgba(255,255,255,.1)',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        padding: 10,
        borderRadius: 50
    },
    statsHeader: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 900
    },
    statsSub: {
        textAlign: 'center'
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