import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList } from 'react-native';
import StateItem from './StateItem';

// Redux
import {useSelector, useDispatch} from 'react-redux';
import {addChooseСity} from '../redux/redux';
// interfaces
import {ReduxState} from '../models/redux.model';
import {County, State} from '../models/state.model';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      cityName: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      cityName: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      cityName: 'Third Item',
    },
    
  ];
interface ListOfSelectedCitiesProps {}

const ListOfSelectedCities = (props: ListOfSelectedCitiesProps) => {
    let dispatch = useDispatch();
    const reduxStore = useSelector((state: ReduxState) => state);

const renderItem = ({item}) => <StateItem stateName={item.stateName} />;  

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
