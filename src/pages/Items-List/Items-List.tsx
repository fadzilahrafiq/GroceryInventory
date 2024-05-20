import React from 'react';
import {SafeAreaView, Image, View, Text, TouchableOpacity} from 'react-native';
import styles from './Items-List.style';
import { FlatList } from 'react-native-gesture-handler';
import sampleData from '../../constants/sample-data.json';

const Item = ({ item, onPressHandler }) => {
  const isExpired = new Date(item.expiry_date) < new Date();

  return (
  <TouchableOpacity onPress={ onPressHandler } style={styles.listItem}>
    {isExpired && <ExpiredText />}
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

const ItemsList: React.FC = () => {
  const onPressHandler = ( () => {

  } );

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>YouGrocer</Text>
      </View>
      <FlatList
        data={sampleData.itemList}
        renderItem={({ item }) => <Item item={item} onPressHandler={onPressHandler} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default ItemsList;