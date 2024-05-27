import React, {useState, useEffect} from 'react';
import {Image, View, Text, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Home.style';
import { firebase } from '@react-native-firebase/database';
import VARIABLES from '../../constants/variables';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home: React.FC = () => {
  const [data, setData] = useState([]);
  const [expiredData, setExpired] = useState([]);
  const [nearingData, setNearing] = useState([]);

  const navigation = useNavigation();

  const reference = firebase
  .app()
  .database(VARIABLES.FIREBASE_DB)
  .ref('/itemList');

  useEffect(() => {

    const fetchFirebaseData = async () => {
      reference.on('value', snapshot => {
        let tempData = snapshot.val();

        setData(tempData);

        setExpired(tempData.filter( (el) => { return new Date() > new Date(el.expiry_date) }));

        setNearing(tempData.filter( el => {
          var expiryDate = new Date(el.expiry_date);
          var oneMonthPrior = expiryDate.setDate(expiryDate.getDate() - 30);
          var currDate = new Date();
          return currDate < new Date(el.expiry_date) && currDate >= oneMonthPrior ;
        }))

      })
    }

    fetchFirebaseData();

  }, []);

  const handleReviewPress = () => {
    const combinedParams = { }; // Combine params
    navigation.navigate('ItemsList', {isExpired: true}); // Pass combined params in navigation
  };

  const handleViewPress = () => {
    const combinedParams = { }; // Combine params
    navigation.navigate('ItemsList', {isNearing: true}); // Pass combined params in navigation
  };

  const handleAddPress = () => {
    const combinedParams = { }; // Combine params
    navigation.navigate('ItemsList', {isAdd: true}); // Pass combined params in navigation
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* HEADER CONTAINER */}
        <View style={styles.userBar}>
          <Text style={styles.userBarText}></Text>
          <View>
            {/* <Icon name='notifications' color='red' size={10}/> */}
            <Image source={require('../../assets/images/default.png')} style={ styles.userBarIcon }/>
          </View>
        </View>
        <View style={styles.header}>
          <Image source={require('../../assets/images/default.png')} style={ styles.headerLogo } />
          <Text style={styles.headerText}>YouGrocer</Text>
        </View>
        {/* CONTENT CONTAINER */}
        <View style={styles.content}>
          {/* CONTENT NEARING EXPIRY */}
          <View style={[styles.contentBox, styles.contentBoxWarning]}>
            {/* <View style={styles.contentLogoContainer}>
              <Image source={require('../../assets/images/default.png')} style={ styles.contentPlaceholderLogo } />
            </View> */}
            <View style={[styles.contentTextContainer]}>
              <Text style={[styles.contentTextCommon, styles.contentTextTitle, styles.contextTextWarning]}>Nearing Expiry</Text>
              <Text style={[styles.contentTextCommon, styles.contentTextSub, styles.contextTextWarning]}>{nearingData.length} items are nearing expiry</Text>
              <Text style={[styles.contentTextCommon, styles.contentTextLink, styles.contextTextWarning]} onPress={handleViewPress}>Click to view <Icon name='angle-right'/></Text>
            </View>
          </View>

          {/* CONTENT EXPIRED */}
          <View style={[styles.contentBox, styles.contentBoxError]}>
            {/* <View style={styles.contentLogoContainer}>
              <Image source={require('../../assets/images/default.png')} style={ styles.contentPlaceholderLogo } />
            </View> */}
            <View style={styles.contentTextContainer}>
              <Text style={[styles.contentTextCommon, styles.contentTextTitle, styles.contextTextError]}>Expired Items</Text>
              <Text style={[styles.contentTextCommon, styles.contentTextSub, styles.contextTextError]}>{expiredData.length} items have expired</Text>
              <Text style={[styles.contentTextCommon, styles.contentTextLink, styles.contextTextError]} onPress={handleReviewPress}>Click to review <Icon name='angle-right'/></Text>
            </View>
          </View>

          {/* CONTENT ADD NEW ITEMS */}
          <View style={styles.contentBox}>
            {/* <View style={styles.contentLogoContainer}>
              <Image source={require('../../assets/images/default.png')} style={ styles.contentPlaceholderLogo } />
            </View> */}
            <View style={styles.contentTextContainer}>
              <Text style={[styles.contentTextCommon, styles.contentTextTitle]}>Add Items</Text>
              <Text style={[styles.contentTextCommon, styles.contentTextSub]}>Total {data.length} items are listed</Text>
              <Text style={[styles.contentTextCommon, styles.contentTextLink]} onPress={handleAddPress}>Click to add items <Icon name='angle-right'/></Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;