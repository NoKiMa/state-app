import { createSlice, PayloadAction, configureStore  } from '@reduxjs/toolkit'
//interfaces
import{State, County} from '../models/state.model'
import{ReduxState} from '../models/redux.model';

let usDataInit:State[] = [];
let choicenStateInit:State[] = [];
let statisticOfCurrentStateInit: State = {
    counties:[],
    stateName: '',
    population: 0,
    countiesNum: 0
}

  const initialData: ReduxState = {
    usData : usDataInit,
    choicenState: choicenStateInit,
    statisticOfCurrentState: statisticOfCurrentStateInit
  }

    const dataSlice = createSlice({
        name: 'reduxStateSlice',
        initialState: initialData,
        reducers: {
          saveStatesData(reduxState:ReduxState, action:PayloadAction<State[]>):ReduxState{
            reduxState.usData = action.payload;
            console.log("dataSlice ",reduxState.usData);
            return reduxState;
          },
          addChooseState(reduxState:ReduxState, action:PayloadAction<State>):ReduxState{
            reduxState.choicenState.push(action.payload);
            return reduxState;
          },
          addToCurrentStateInfo(reduxState:ReduxState, action:PayloadAction<State>):ReduxState{
            reduxState.statisticOfCurrentState = action.payload;
            return reduxState;
          }

        }

      })
      
const rootReducer = dataSlice.reducer;


export const {saveStatesData, addChooseState, addToCurrentStateInfo} = dataSlice.actions;
export type RootReducer = ReturnType<typeof store.getState>;
export const store = configureStore({ 
    reducer: rootReducer, 
});
export default rootReducer;