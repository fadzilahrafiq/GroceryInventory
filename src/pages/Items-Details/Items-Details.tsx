import React, { useState, useEffect } from 'react';
import {SafeAreaView, Image, View, Text, TouchableOpacity, TextInput, Button, ToastAndroid} from 'react-native';
import styles from './Items-Details.style';
import { firebase } from '@react-native-firebase/database';
import VARIABLES from '../../constants/variables'; 
import DatePicker from 'react-native-date-picker';
import DropDownPicker from 'react-native-dropdown-picker';

const formatDateToFormat = (dateObject) => {
  const isoString = dateObject.toISOString();

  // Year (YYYY)
  const year = isoString.substring(0, 4);

  // Month (MM) - Needs padding for single digits
  const month = isoString.substring(5, 7).padStart(2, '0');

  // Day (DD) - Needs padding for single digits
  const day = isoString.substring(8, 10).padStart(2, '0');

  // Separator (T)
  const separator = 'T';
  const hour = isoString.substring(11, 13).padStart(2, '0');
  const minute = isoString.substring(14, 16).padStart(2, '0');
  const second = isoString.substring(17, 19).padStart(2, '0');

  // Combine the formatted parts
  const formattedDate = `${year}-${month}-${day}${separator}${hour}:${minute}:${second}`;

  return formattedDate;

}

const showToast = (isUpdate = null) => {
  ToastAndroid.showWithGravity(
    isUpdate ? 'Successfully updated the item' : 'Successfully added item',
    ToastAndroid.SHORT,
    ToastAndroid.CENTER,
  );
}

const ItemsDetails = ({ navigation, route }) => {
  const currentDate = new Date();
  const [itemKey, onItemKey] = useState(null);
  const [name, onNameChange] = useState('');
  const [category, onCategoryChange] = useState('');
  const [expiryObj, onExpiryChange] = useState(currentDate);
  const [expiry, onExpiryChangeText] = useState(currentDate.toLocaleDateString());

  const [openDatePicker, setDatePicker] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);

  const [categories, setCategory] = useState([]);

  useEffect( () => {
    const fetchData = () => {
      const routeParams = route.params;
    
      if (routeParams.itemId && routeParams.itemId != null) {
        firebase
          .app()
          .database(VARIABLES.FIREBASE_DB)
          .ref('/itemList').orderByChild('id').equalTo(routeParams.itemId)
          .once('value', snapshot => {
            // console.log(snapshot);
            snapshot.forEach(element => {
              // console.log(element.key);
              onItemKey(element.key);
              onNameChange(element.val().item_name);
              onCategoryChange(element.val().item_cat);
    
              let tempDate = new Date(element.val().expiry_date);
              onExpiryChange(tempDate);
              onExpiryChangeText(tempDate.toLocaleDateString());
            });
          })
      }
    }

    fetchData();

    const fetchCategory = () => {
      firebase
        .app()
        .database(VARIABLES.FIREBASE_DB)
        .ref('/itemCategory')
        .once('value', snapshot => {
          // console.log(snapshot);
          let tempArray = [];
          snapshot.forEach(element => {
            // console.log(element.key);
            let tempObj = {
              label: element.val(),
              value: element.val()
            }
            
            tempArray.push(tempObj);
          });

          setCategory(tempArray);
        })
    }

    fetchCategory();
  }, [route.params]);


  const submitPressHandler = () => {
    var formattedDate = formatDateToFormat(expiryObj);

    if (!itemKey) {
      firebase
        .app()
        .database(VARIABLES.FIREBASE_DB)
        .ref('/itemCount').once('value', countSnap => {
          const reference = firebase
            .app()
            .database(VARIABLES.FIREBASE_DB)
            .ref('/itemList/'+countSnap.val());
  
          reference
            .set({
              id: Math.random().toString(36).substr(2, 9),
              item_name: name,
              item_cat: category,
              expiry_date: formattedDate
            })
  
          firebase
            .app()
            .database(VARIABLES.FIREBASE_DB)
            .ref('/itemCount').set(countSnap.val()+1).then( () => {showToast(false); navigation.goBack()})
        })
    } else {
      const updateRef = firebase
        .app()
        .database(VARIABLES.FIREBASE_DB)
        .ref('/itemList/'+itemKey);

      updateRef.set({
        id: route.params.itemId,
        item_name: name,
        item_cat: category,
        expiry_date: formatDateToFormat(expiryObj)
      }).then( () => {showToast(true); navigation.goBack()})
    }
  }

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
            placeholder='Name'
            onChangeText={onNameChange}
          />
        </View>
        <View style={styles.inputFieldContainer}>
          <Text style={styles.textInputHeader}>Category</Text>
          <DropDownPicker 
            open={openCategory}
            value={category}
            items={categories}
            setOpen={setOpenCategory}
            setValue={onCategoryChange}
            setItems={setCategory}
          />
        </View>
        <View style={styles.inputFieldContainer}>
          <Text style={styles.textInputHeader}>Expiry Date</Text>
          <TextInput
            style={styles.textInput}
            value={expiry}
            // readOnly
            // onChangeText={onExpiryChange}
            onPress={() => setDatePicker(true)}
          />
        </View>
        <View style={styles.inputFieldContainer}>
          <TouchableOpacity style={styles.submitButton} onPress={submitPressHandler}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <DatePicker
        modal
        open={openDatePicker}
        date={expiryObj}
        mode="date"
        onConfirm={(date) => {
          setDatePicker(false)
          onExpiryChange(date)
          onExpiryChangeText(date.toLocaleDateString())
        }}
        onCancel={() => {
          setDatePicker(false)
        }}
      />
    </View>
  );
};

export default ItemsDetails;