import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList } from 'react-native';
import StateItem from './StateItem';

// Redux
import {useSelector, useDispatch} from 'react-redux';
// import {addChooseСity} from '../redux/redux';
// interfaces
import {ReduxState} from '../models/redux.model';
import {County, State} from '../models/state.model';

interface ListOfSelectedCitiesProps {}

const ListOfSelectedCities = (props: ListOfSelectedCitiesProps) => {
    let dispatch = useDispatch();
    const reduxStore = useSelector((state: ReduxState) => state);

const renderItem = ({item}) => <StateItem stateName={item.stateName} selected ={item.selected}/>;  

  return (
    <View style={styles.container}>
    <FlatList
      data={reduxStore.choicenState}
      renderItem={renderItem}
      keyExtractor={item => item.stateName}
    />
  </View>
  );
};

export default ListOfSelectedCities;

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
});
