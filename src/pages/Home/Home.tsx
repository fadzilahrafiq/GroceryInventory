import React, {useState, useEffect} from 'react';
import {Image, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Home.style';
import { firebase } from '@react-native-firebase/database';
import VARIABLES from '../../constants/variables';
import Icon from 'react-native-vector-icons/FontAwesome';
import PieChart from 'react-native-pie-chart';

const Home: React.FC = () => {
  const [data, setData] = useState([]);
  const [expiredData, setExpired] = useState([]);
  const [nearingData, setNearing] = useState([]);
  const [categories, setCategory] = useState([]);
  const [countedData, setCountData] = useState([1,2,3]);
  const [colorList, setColorList] =  useState(['red','blue','yellow']);

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
        console.log(tempData);
        setExpired(tempData.filter( (el) => { return el ? new Date() > new Date(el.expiry_date): null }));

        setNearing(tempData.filter( el => {
          if (el) {
            var expiryDate = new Date(el.expiry_date);
            var oneMonthPrior = expiryDate.setDate(expiryDate.getDate() - 30);
            var currDate = new Date();
            return currDate < new Date(el.expiry_date) && currDate >= oneMonthPrior ;
          } else {
            return null;
          }
        }))

        fetchCategory(tempData);

      })
    }

    fetchFirebaseData();

    const fetchCategory = (dataRef) => {
      firebase
        .app()
        .database(VARIABLES.FIREBASE_DB)
        .ref('/itemCategory')
        .once('value', snapshot => {
          // console.log(snapshot);
          let tempArray = [];
          snapshot.forEach(element => {
            // console.log(element.key);
            if (element.val() != null) {
              // let tempObj = {
              //   label: element.val(),
              //   value: element.val()
              // }
              
              tempArray.push(element.val());
            }
          });

          setCategory(tempArray);

          sortData(dataRef, tempArray);
        })
    }

    const sortData = (dataRef, categoryRef) => {
      let tempArray = [];
      let colorArray = [];

      let tempCategories = categoryRef;
      let tempData = dataRef;

      tempCategories.forEach(element => {
        let countCategory = 0;

        tempData.forEach(el => {
          if (el.item_cat === element) {
            countCategory = countCategory + 1;
          }
        })

        // colorArray.push( 
        //   element.value == 'Vegetable' ? 'green' :
        //   (element.value == 'Meat' ? 'red' : 
        //     (element.value == 'Seafood' ? 'blue' :
        //       (element.value == 'Fruit' ? 'yellow' : '')
        //     )
        //   )
        //  )

        tempArray.push(countCategory);
      });

      // setColorList(colorArray);
      setCountData(tempArray);
    }

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
    navigation.navigate('ItemsDetails', { itemId: null});
    // navigation.navigate('ItemsList', {isAdd: true}); // Pass combined params in navigation
  };

  const StatsView = ({count, name}) => {
    if (!count)
      count = 0;
    console.log(new Date().toISOString(), count, name)
    return (
      <View style={styles.statPills}>
        <Text style={ [styles.statsHeader, {width: '100%'}] }>{count}</Text>
        <Text style={ [styles.statsSub, {width: '100%'}] }>{name}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.userBarContainer}>
        <View style={styles.userBar}>
          <Icon name="bell" color="red" size={20}></Icon>
          <View><Text style={styles.userBarText}>YouGrocer</Text></View>
          <Image source={require('../../assets/images/default.png')} style={ styles.userBarIcon }/>
        </View>
      </View>
      <View style={styles.content}>
        {/* <View style={styles.contentContainer}> */}
          <TouchableOpacity style={[styles.pillBoxes, styles.warningBorder]} onPress={ () => handleViewPress()}>
            <View style={styles.pillBoxLeft}>
              <Text style={[styles.pillBoxleftText, styles.warningText]}>{nearingData.length}</Text>
            </View>
            <View style={styles.pillBoxRight}>
              <Text style={[styles.pillBoxRightText]}>NEARING EXPIRY</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.pillBoxes, styles.errorBorder]} onPress={()=>handleReviewPress()}>
            <View style={styles.pillBoxLeft}>
              <Text style={[styles.pillBoxleftText, styles.errorText]}>{expiredData.length}</Text>
            </View>
            <View style={styles.pillBoxRight}>
              <Text style={[styles.pillBoxRightText]}>EXPIRED ITEMS</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.pillBox]} onPress={()=>handleAddPress()}>
            <View style={styles.pillBoxLeft}>
              <Text style={[styles.pillBoxleftText]}>{data.length}</Text>
            </View>
            <View style={styles.pillBoxRight}>
              <Text style={[styles.pillBoxRightText]}>ITEMS LISTED</Text>
              <Text style={[styles.pillBoxRightText]}>Click to add new items</Text>
            </View>
          </TouchableOpacity>
          <View style={[styles.pillBox, styles.graphContainer]}>
            <View style={[styles.graphContent, { paddingBottom: 20 }]}>
              <Text style={styles.graphTitle}>ACTIVE ITEM CATEGORY STATS</Text>
            </View>
            <View style={[styles.graphContent, styles.statsContainer, { marginBottom: 20 }]}>
              {
                categories.map( (element, index) => {
                  return (
                    <StatsView count={countedData[index]} name={element}/>
                  );
                })
              }
              {/* <PieChart
                widthAndHeight={100}
                series={[1,2,3]}
                sliceColor={['blue','red','green']}
                coverRadius={0.5}
                coverFill='#fff'
              /> */}
            </View>
          </View>
        {/* </View> */}
      </View>
    </View>
  );
};

export default Home;