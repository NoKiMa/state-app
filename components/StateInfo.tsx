import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

// Redux
import {useSelector} from 'react-redux';
// interfaces
import {ReduxState} from '../models/redux.model';
import {State, County} from '../models/state.model';


interface StateInfoProps {}

const StateInfo = (props: StateInfoProps) => {

const [stateInfo, setStatesInfo] = useState<State>()

  const reduxStore = useSelector((state: ReduxState) => state.statisticOfCurrentState);

  useEffect(()=>{
    setStatesInfo({
      stateName:reduxStore.stateName,
      population: reduxStore.population,
      counties: reduxStore.counties,
      countiesNum: reduxStore.countiesNum,
      selected:reduxStore.selected
})
  },[])

  const setCountiesPopulation = (store:County[]) =>{
    let res: number = 0;
    store.forEach(county => {
     res  = res + county.population;
   })
   return res;
  }

const renderItem = ({item})=>{
  return (<View>
    <Text style={{fontSize:12}}>{item.county}</Text>
    <Text style={{fontSize:12, borderBottomWidth:0.5, borderColor:'lightskyblue'}}>{item.population}</Text>
  </View>)
}

  return (
    <View style={styles.container}>
      <View style={[styles.fields_container,{flex:1}]}>
        <Text style={styles.text_title}>{"State"}</Text>
        <Text style={styles.text}>{reduxStore.stateName}</Text>
      </View>
      <View style={styles.fields_container}>
        <Text style={styles.text_title}>{"Population"}</Text>
        <Text style={styles.text}>{reduxStore.population}</Text>
      </View>
      <View style={[styles.fields_container, {flexDirection: 'row', flex:0.7}]}>
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
        <Text style={styles.text}>{setCountiesPopulation(reduxStore.counties)}</Text>
      </View>
      <View style={[styles.fields_container,{flex:1.5}]}>
        <Text style={styles.text_title}>{"State Population and Counties"}</Text>
        <Text style={styles.text}>
          {setCountiesPopulation(reduxStore.counties)===reduxStore.population? "equal": "not equal"}
        </Text>
      </View>
    </View>
  );
};

export default StateInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'lightskyblue',
    paddingTop: 10,
    paddingHorizontal: 4,
    justifyContent: 'space-around',
  },
  fields_container: {
    flex: 1.3,
    marginHorizontal: 5,
    borderBottomWidth:0.5,
    borderColor:'lightskyblue'
  },
  text:{
    fontSize: 13
  },
  listOfcounties:{
    flex: 3,
    marginVertical:4,
    borderBottomWidth:0.5,
    borderColor:'lightskyblue'
  },
  text_title:{
    fontSize: 13,
    fontWeight: 'bold'
  },
});
