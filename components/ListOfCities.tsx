import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, ScrollView, FlatList} from 'react-native';
import CityItem from './CityItem';

// Redux
import {useSelector, useDispatch} from 'react-redux';
import {saveStatesData} from '../redux/redux';
// interfaces
import {ReduxState} from '../models/redux.model';
import {County, State} from '../models/state.model';
//services
import dataPreperingService from '../services/dataPreperingService/dataPreperingService';
// import restServiceApi from '../services/restServiceApi/restServiceApi';

interface ListOfCitiesProps {
  // stateData: State[];
}

const ListOfCities = (props: ListOfCitiesProps) => {
  let dispatch = useDispatch();
  const reduxStore = useSelector((state: ReduxState) => state);

  const [statesInfo, setStatesInfo] = useState<State[]>([]);

  useEffect(() => {
    dataPreperingService.getStatesObject().then(data => {
      setStatesInfo(data);
    });
  }, []);

  useEffect(()=>{
    dispatch(saveStatesData(statesInfo));
  },[reduxStore,statesInfo]);

  const renderItem = ({item}) => {
    return <CityItem stateName={item.stateName} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={statesInfo}
        renderItem={renderItem}
        keyExtractor={item => item.stateName}
      />
    </View>
  );
};

export default ListOfCities;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   alignItems: 'center',
    //   justifyContent: 'center',
  },
});
