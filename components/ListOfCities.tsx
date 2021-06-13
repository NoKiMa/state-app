import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, ScrollView, FlatList} from 'react-native';
import StateItem from './StateItem';

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
        console.log("data",data);
      setStatesInfo(data);
      return data;
    })
    .then((data)=>{
       setTimeout(()=>{
        dispatch(saveStatesData(data));
      },3000)
    });
  }, []);

  useEffect(()=>{
    setStatesInfo(reduxStore.usData);
  },[reduxStore.usData])

  const renderItem = ({item}) => {
    return <StateItem stateName={item.stateName} selected = {item.selected}/>;
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
