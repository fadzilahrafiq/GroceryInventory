import React, {useState, useEffect} from 'react';
import {Image, View, Text} from 'react-native';
import styles from './Home.style';

const Home: React.FC = () => {
  const [data, setData] = useState([]);
  const [expiredData, setExpired] = useState([]);
  const [nearingData, setNearing] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('../../constants/sample-data.json');
        // const jsonData = await response.json();
        // setData(jsonData.itemList);
        const response = require('../../constants/sample-data.json');
        setData(response.itemList);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

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
            <Text style={[styles.contentTextCommon, styles.contentTextSub]}>n items are nearing expiry</Text>
            <Text style={[styles.contentTextCommon, styles.contentTextLink]}>Click to view</Text>
          </View>
        </View>

        {/* CONTENT EXPIRED */}
        <View style={styles.contentBox}>
          <View style={styles.contentLogoContainer}>
            <Image source={require('../../assets/images/default.png')} style={ styles.contentPlaceholderLogo } />
          </View>
          <View style={styles.contentTextContainer}>
            <Text style={[styles.contentTextCommon, styles.contentTextTitle]}>Expired Items</Text>
            <Text style={[styles.contentTextCommon, styles.contentTextSub]}>n items have expired</Text>
            <Text style={[styles.contentTextCommon, styles.contentTextLink]}>Click to review</Text>
          </View>
        </View>

        {/* CONTENT ADD NEW ITEMS */}
        <View style={styles.contentBox}>
          <View style={styles.contentLogoContainer}>
            <Image source={require('../../assets/images/default.png')} style={ styles.contentPlaceholderLogo } />
          </View>
          <View style={styles.contentTextContainer}>
            <Text style={[styles.contentTextCommon, styles.contentTextTitle]}>Add Items</Text>
            <Text style={[styles.contentTextCommon, styles.contentTextSub]}>Total { data.length } items are listed</Text>
            <Text style={[styles.contentTextCommon, styles.contentTextLink]}>Click to add new items</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;