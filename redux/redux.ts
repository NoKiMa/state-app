import { createSlice, PayloadAction, configureStore  } from '@reduxjs/toolkit'

//interfaces
import{State, County} from '../models/state.model'
import{ReduxState} from '../models/redux.model';

let usDataInit:State[] = [];
let choicenStateInit:State[] = [];

  const initialData: ReduxState = {
    usData : usDataInit,
    choicenState: choicenStateInit
  }

    const dataSlice = createSlice({
        name: 'reduxStateSlice',
        initialState: initialData,
        reducers: {
          saveStatesData(reduxState:ReduxState, action:PayloadAction<State[]>):ReduxState{
            reduxState.usData = action.payload;
            return reduxState;
          },
          addChooseСity(reduxState:ReduxState, action:PayloadAction<State>):ReduxState{
            reduxState.choicenState.push(action.payload);
            return reduxState;
          }

        }

      })
      
const rootReducer = dataSlice.reducer;


export const {saveStatesData, addChooseСity} = dataSlice.actions;
export type RootReducer = ReturnType<typeof store.getState>;
export const store = configureStore({ reducer: rootReducer });
export default rootReducer;