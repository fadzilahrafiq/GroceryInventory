import React, { useState, useEffect } from 'react';
import {SafeAreaView, Image, View, Text, TouchableOpacity, TextInput, Button} from 'react-native';
import styles from './Items-Details.style';

const ItemsDetails = () => {
  const [name, onNameChange] = useState('Sample');
  const [category, onCategoryChange] = useState('Vegetable');
  const [expiry, onExpiryChange] = useState('20-05-2025');

  return (
    <View style={styles.container}>
      {/* Item image container */}
      <View style={[styles.containerCommon]}>
        <Image source={require('../../assets/images/default.png')} style={ styles.itemImage } />
      </View>
      {/* Item details container */}
      <View style={[styles.containerCommon]}>
        <View style={styles.inputFieldContainer}>
          <Text style={styles.textInputHeader}>Name</Text>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={onNameChange}
          />
        </View>
        <View style={styles.inputFieldContainer}>
          <Text style={styles.textInputHeader}>Category</Text>
          <TextInput
            style={styles.textInput}
            value={category}
            onChangeText={onCategoryChange}
          />
        </View>
        <View style={styles.inputFieldContainer}>
          <Text style={styles.textInputHeader}>Expiry Date</Text>
          <TextInput
            style={styles.textInput}
            value={expiry}
            onChangeText={onExpiryChange}
          />
        </View>
        <View style={styles.inputFieldContainer}>
          <TouchableOpacity style={styles.submitButton}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ItemsDetails;