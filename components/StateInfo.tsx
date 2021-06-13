import * as React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

// Redux
import {useSelector, useDispatch} from 'react-redux';
import {addChooseState, addToCurrentStateInfo} from '../redux/redux';
// interfaces
import {ReduxState} from '../models/redux.model';
import {County, State} from '../models/state.model';
import { useState } from 'react';

interface CityInfoProps {}

const StateInfo = (props: CityInfoProps) => {

  
  let dispatch = useDispatch();
  const reduxStore = useSelector((state: ReduxState) => state.statisticOfCurrentState);

const renderItem = ({item})=>{
  return (<View>
    <Text style={{fontSize:15}}>{item.county}</Text>
    <Text style={{fontSize:15}}>{item.population}</Text>
  </View>)
}

  return (
    <View style={styles.container}>
      <View style={styles.fields_container}>
        <Text style={styles.text_title}>{"State"}</Text>
        <Text style={styles.text}>{reduxStore.stateName}</Text>
      </View>
      <View style={styles.fields_container}>
        <Text style={styles.text_title}>{"Population"}</Text>
        <Text style={styles.text}>{reduxStore.population}</Text>
      </View>
      <View style={[styles.fields_container, {flexDirection: 'row'}]}>
        <Text style={styles.text_title}>{"Counties:  "}</Text>
        <Text style={styles.text}>{reduxStore.countiesNum}</Text>
      </View>
      <View style={styles.listOfcounties}>
        <Text style={styles.text_title}>{'List of Counties'}</Text>
        <FlatList
          data={reduxStore.counties}
          renderItem={renderItem}
          keyExtractor={item => item.county}
          style={{margin:4}}
        />
      </View>
      <View style={styles.fields_container}>
        <Text style={styles.text_title}>{"Counties population"}</Text>
        <Text style={styles.text}>{'70 0000'}</Text>
      </View>
      <View style={styles.fields_container}>
        <Text style={styles.text_title}>{"State Population and Counties"}</Text>
        <Text style={styles.text}>
          {" ==="}
        </Text>
      </View>
    </View>
  );
};

export default StateInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1.1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'lightskyblue',
    paddingTop: 10,
    paddingHorizontal: 4,
    justifyContent: 'space-around',
  },
  fields_container: {
    flex: 1,
    marginHorizontal: 5,
    borderBottomWidth:0.5,
    borderColor:'lightskyblue'
  },
  text:{
    fontSize: 17
  },
  listOfcounties:{
    flex: 3,
    marginVertical:4,
    borderBottomWidth:0.5,
    borderColor:'lightskyblue'
  },
  text_title:{
    fontSize: 17,
    fontWeight: 'bold'
  },
});
