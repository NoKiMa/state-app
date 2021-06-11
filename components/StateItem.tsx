import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import ButtonWrapper from 'react-native-button-wrapper';
// Redux
import {useSelector, useDispatch} from 'react-redux';
import {addChooseState, addToCurrentStateInfo} from '../redux/redux';
// interfaces
import {ReduxState} from '../models/redux.model';
import {County, State} from '../models/state.model';

let statisticOfCurrentStateInit: State = {
  counties:[],
  stateName: '',
  population: 0,
  countiesNum: 0
};
type CityItemProps = {
    stateName: string;

}

const StateItem = (props: CityItemProps) => {
  let dispatch = useDispatch();
  const reduxStore = useSelector((state: ReduxState) => state);

 const  handlerChoice = (stateNameChoicen: string)=>{
     let listOfState:State[] = reduxStore.usData;
     const choicenState:State = listOfState.find(state=>state.stateName === stateNameChoicen);
     
     if(choicenState){
       let flag: State [] = reduxStore.choicenState.filter(state=> state.stateName === choicenState.stateName)
       flag.length === 0? dispatch(addChooseState(choicenState)): null;
      }
  }

  const handlerCurrentStateInfo = (currentStateName:string)=>{
    let listOfState:State[] = reduxStore.usData;
    const currentStateInfo:State = listOfState.find(state=>state.stateName === currentStateName);

    console.log("currentStateInfo", currentStateInfo);
    if (currentStateInfo){
      reduxStore.statisticOfCurrentState.stateName === currentStateInfo.stateName 
      ? 
      dispatch(addToCurrentStateInfo(statisticOfCurrentStateInit)) 
      : 
      dispatch(addToCurrentStateInfo(currentStateInfo));
    }
  }

  return (
    <ButtonWrapper
    onPress={() => {
      handlerCurrentStateInfo(props.stateName);
    }}
    onDoublePress={() => {
      handlerChoice(props.stateName);
    }}
    >
        <View style={styles.container}>
      <Text style={{fontSize:15, color:"#000000"}}>{props.stateName}</Text>
    </View>
    </ButtonWrapper>
      // </TouchableOpacity>
    
  );
};

export default StateItem;

const styles = StyleSheet.create({
  container: {
      height:45,
      width: "95%",
      borderBottomWidth:0.5,
      borderRadius:3,
    //   alignItems: 'center',
      justifyContent: "center",
      borderColor: "lightskyblue",
      margin:3,
      padding:3
  }
});
