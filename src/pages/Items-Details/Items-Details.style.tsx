import { StyleSheet,Dimensions} from "react-native";

export default StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#AAC8A7',
    paddingTop: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'flex-start',
    justifyContent: 'center',
  },
  containerCommon: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100
  },
  inputFieldContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20
  },
  textInputHeader: {
    width: '100%',
    fontSize: 12,
    marginBottom: 10,
    color: 'rgba(0,0,0,.8)'
  },
  textInput: {
    width: '100%',
    fontSize: 18,
    backgroundColor: 'white',
    borderRadius: 5,
    color: 'black'
  },
  submitButton: {
    backgroundColor: '#1E90FF', 
    paddingVertical: 15, 
    width: '100%', 
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 70
  }
})