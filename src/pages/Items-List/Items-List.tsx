import React, { useState, useEffect } from 'react';
import {SafeAreaView, Image, View, Text, TouchableOpacity} from 'react-native';
import styles from './Items-List.style';
import { FlatList } from 'react-native-gesture-handler';
import { firebase } from '@react-native-firebase/database';
import VARIABLES from '../../constants/variables';

const Item = ({ item, onPressHandler }) => {
  const isExpired = new Date(item.expiry_date) < new Date();

  var expiryDate = new Date(item.expiry_date);
  var oneMonthPrior = expiryDate.setDate(expiryDate.getDate() - 30);
  var currDate = new Date();
  const isNearing = currDate < new Date(item.expiry_date) && currDate >= oneMonthPrior ;

  return (
  <TouchableOpacity key={item.id} onPress={ () => onPressHandler(item.id) } style={styles.listItem}>
    {isExpired && <ExpiredText />}
    {isNearing && <NearingExpireText />}
    <Image source={require('../../assets/images/default.png')} style={ styles.listItemImage } />
    <Text style={styles.listItemText}>{item.item_name}</Text>
  </TouchableOpacity>
  );
};

const ExpiredText = () => (
  <View style={ styles.expiredContainer }>
    <Text>Expired</Text>
  </View>
);

const NearingExpireText = () => (
  <View style={ styles.nearingContainer }>
    <Text>Expiring Soon</Text>
  </View>
);

const ItemsList: React.FC = ({ navigation, route }) => {
  const [data, setData] = useState([]);
  const routeParams = route.params;

  useEffect(() => {
    const reference = firebase
      .app()
      .database(VARIABLES.FIREBASE_DB)
      .ref('/itemList');

    const fetchFirebaseData = async () => {
      const onValueChange = reference.on('value', snapshot => {
        let tempData = snapshot.val();

        if (routeParams && routeParams.isExpired && snapshot.val()) {
          tempData = snapshot.val().filter( (el) => {
            return new Date() >= new Date(el.expiry_date);
          });
        } else if (routeParams && routeParams.isNearing && snapshot.val()) {
          tempData = snapshot.val().filter( (el) => {
            var expiryDate = new Date(el.expiry_date);
            var oneMonthPrior = expiryDate.setDate(expiryDate.getDate() - 30);
            var currDate = new Date();
            return currDate < new Date(el.expiry_date) && currDate >= oneMonthPrior ;
          });
        }

        setData(tempData);
      })
    }

    fetchFirebaseData();

    const fetchData = async () => {
      try {
        const response = require('../../constants/sample-data.json');

        let tempData = response.itemList;

        if (routeParams && routeParams.isExpired) {
          tempData = response.itemList.filter( (el) => {
            return new Date() >= new Date(el.expiry_date);
          });
        } else if (routeParams && routeParams.isNearing) {
          tempData = response.itemList.filter( (el) => {
            var expiryDate = new Date(el.expiry_date);
            var oneMonthPrior = expiryDate.setDate(expiryDate.getDate() - 30);
            var currDate = new Date();
            return currDate < new Date(el.expiry_date) && currDate >= oneMonthPrior ;
          });
        }

        setData(tempData);
      } catch (err) {
        console.error(err);
      }
    };

    // fetchData();
  }, []);

  const onPressHandler = (itemId) => {
    navigation.navigate('ItemsDetails', { itemId: itemId});
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>YouGrocer</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} onPressHandler={onPressHandler} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default ItemsList;