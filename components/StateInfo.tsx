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
  console.log("item", item);
  return (<View>
    <Text style={{fontSize:15}}>{item.county}</Text>
    <Text style={{fontSize:15}}>{item.population}</Text>
  </View>)
}

  return (
    <View style={styles.container}>
      <View style={styles.fields_container}>
        <Text style={styles.text}>{reduxStore.stateName}</Text>
      </View>
      <View style={styles.fields_container}>
        <Text style={styles.text}>{`Population ${reduxStore.population} of people`}</Text>
      </View>
      <View style={styles.fields_container}>
        <Text style={styles.text}>{`Numbers of Counties is ${reduxStore.countiesNum}`}</Text>
      </View>
      <View style={styles.listOfcounties}>
        <Text style={styles.text}>{'List of Counties'}</Text>
        <FlatList
          data={reduxStore.counties}
          renderItem={renderItem}
          keyExtractor={item => item.county}
          style={{margin:4}}
        />
      </View>
      <View style={styles.fields_container}>
        <Text style={styles.text}>{'General population of counties'}</Text>
      </View>
      <View style={styles.fields_container}>
        <Text style={styles.text}>
          {'Population of State  vs sum of Counties population'}
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
  },
  text:{
    fontSize: 17
  },
  listOfcounties:{
    flex: 4,
    marginVertical:4
  }
});
