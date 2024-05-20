import React, {useState, useEffect} from 'react';
import {Image, View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Home.style';

const Home: React.FC = () => {
  const [data, setData] = useState([]);
  const [expiredData, setExpired] = useState([]);
  const [nearingData, setNearing] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('../../constants/sample-data.json');
        // const jsonData = await response.json();
        // setData(jsonData.itemList);
        const response = require('../../constants/sample-data.json');
        setData(response.itemList);

        // Filter out expired items
        let tempValueHolder = response.itemList;

        setExpired(response.itemList.filter( (el) => { return new Date() > new Date(el.expiry_date) }));

        setNearing(response.itemList.filter( el => {
          var expiryDate = new Date(el.expiry_date);
          var oneMonthPrior = expiryDate.setDate(expiryDate.getDate() - 30);
          var currDate = new Date();
          return currDate < new Date(el.expiry_date) && currDate >= oneMonthPrior ;
        }))
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
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
    <View style={styles.container}>
      {/* HEADER CONTAINER */}
      <View style={styles.header}>
        <Image source={require('../../assets/images/default.png')} style={ styles.headerLogo } />
        <Text style={styles.headerText}>YouGrocer</Text>
      </View>
      {/* CONTENT CONTAINER */}
      <View style={styles.content}>
        {/* CONTENT NEARING EXPIRY */}
        <View style={styles.contentBox}>
          <View style={styles.contentLogoContainer}>
            <Image source={require('../../assets/images/default.png')} style={ styles.contentPlaceholderLogo } />
          </View>
          <View style={styles.contentTextContainer}>
            <Text style={[styles.contentTextCommon, styles.contentTextTitle]}>Nearing Expiry</Text>
            <Text style={[styles.contentTextCommon, styles.contentTextSub]}>{nearingData.length} items are nearing expiry</Text>
            <Text style={[styles.contentTextCommon, styles.contentTextLink]} onPress={handleViewPress}>Click to view</Text>
          </View>
        </View>

        {/* CONTENT EXPIRED */}
        <View style={styles.contentBox}>
          <View style={styles.contentLogoContainer}>
            <Image source={require('../../assets/images/default.png')} style={ styles.contentPlaceholderLogo } />
          </View>
          <View style={styles.contentTextContainer}>
            <Text style={[styles.contentTextCommon, styles.contentTextTitle]}>Expired Items</Text>
            <Text style={[styles.contentTextCommon, styles.contentTextSub]}>{expiredData.length} items have expired</Text>
            <Text style={[styles.contentTextCommon, styles.contentTextLink]} onPress={handleReviewPress}>Click to review</Text>
          </View>
        </View>

        {/* CONTENT ADD NEW ITEMS */}
        <View style={styles.contentBox}>
          <View style={styles.contentLogoContainer}>
            <Image source={require('../../assets/images/default.png')} style={ styles.contentPlaceholderLogo } />
          </View>
          <View style={styles.contentTextContainer}>
            <Text style={[styles.contentTextCommon, styles.contentTextTitle]}>Add Items</Text>
            <Text style={[styles.contentTextCommon, styles.contentTextSub]}>Total {data.length} items are listed</Text>
            <Text style={[styles.contentTextCommon, styles.contentTextLink]} onPress={handleAddPress}>Click to add new items</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;