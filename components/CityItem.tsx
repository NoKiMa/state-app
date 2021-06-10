import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

// Redux
import {useSelector, useDispatch} from 'react-redux';
import {addChooseСity} from '../redux/redux';
// interfaces
import {ReduxState} from '../models/redux.model';
import {County, State} from '../models/state.model';
import ButtonWrapper from 'react-native-button-wrapper';
type CityItemProps = {
    stateName: string;

}

const CityItem = (props: CityItemProps) => {
  const [backCount, setBackCount] = useState(0);
  const [backTimer, setBackTimer] = useState(0);
  let dispatch = useDispatch();
  const reduxStore = useSelector((state: ReduxState) => state);

 const  handlerChoice = (stateNameChoicen: string)=>{
     let listOfState:State[] = reduxStore.usData;
     const choicenState:State = listOfState.find(state=>state.stateName === stateNameChoicen);
     console.log("choicenState", choicenState);
     if(choicenState){
       let flag: State [] = reduxStore.choicenState.filter(state=> state.stateName === choicenState.stateName)
       flag.length === 0? dispatch(addChooseСity(choicenState)): null;
      }
     
  }

  return (
    <ButtonWrapper
    onPress={() => {
      console.log("single tap");
    }}
    onDoublePress={() => {
      handlerChoice(props.stateName)
    }}
    >
        <View style={styles.container}>
      <Text style={{fontSize:15, color:"#000000"}}>{props.stateName}</Text>
    </View>
    </ButtonWrapper>
      // </TouchableOpacity>
    
  );
};

export default CityItem;

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
