import {createSlice, PayloadAction, configureStore} from '@reduxjs/toolkit';
//interfaces
import {State, County} from '../models/state.model';
import {ReduxState} from '../models/redux.model';

let usDataInit: State[] = [];
let choicenStateInit: State[] = [];
let statisticOfCurrentStateInit: State = {
  counties: [],
  stateName: '',
  population: 0,
  countiesNum: 0,
  selected: false,
};

const initialData: ReduxState = {
  usData: usDataInit,
  choicenState: choicenStateInit,
  statisticOfCurrentState: statisticOfCurrentStateInit,
  searchState: '',
};

const dataSlice = createSlice({
  name: 'reduxStateSlice',
  initialState: initialData,
  reducers: {
    saveStatesData(
      reduxState: ReduxState,
      action: PayloadAction<State[]>,
    ): ReduxState {
      reduxState.usData = action.payload;
      return reduxState;
    },
    addChooseState(
      reduxState: ReduxState,
      action: PayloadAction<State>,
    ): ReduxState {
      reduxState.choicenState.push(action.payload);
      return reduxState;
    },
    addToCurrentStateInfo(
      reduxState: ReduxState,
      action: PayloadAction<State>,
    ): ReduxState {
      reduxState.statisticOfCurrentState = action.payload;
      return reduxState;
    },
    deleteChooseState(
      reduxState: ReduxState,
      action: PayloadAction<State>,
    ): ReduxState {
      reduxState.choicenState = reduxState.choicenState.filter(
        state => state.stateName !== action.payload.stateName,
      );
      return reduxState;
    },
    setSelectedState(
      reduxState: ReduxState,
      action: PayloadAction<State>,
    ): ReduxState {
      reduxState.usData = reduxState.usData.map(state => {
        if (state.stateName === action.payload.stateName) {
          state = action.payload;
        }
        return state;
      });
      return reduxState;
    },
    setSearch(
      reduxState: ReduxState,
      action: PayloadAction<string>,
    ): ReduxState {
      reduxState.searchState = action.payload;
      console.log("setSearch", action.payload);
      return reduxState;
    },
  },
});

const rootReducer = dataSlice.reducer;

export const {
  saveStatesData,
  addChooseState,
  addToCurrentStateInfo,
  deleteChooseState,
  setSelectedState,
  setSearch,
} = dataSlice.actions;
export type RootReducer = ReturnType<typeof store.getState>;
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});
export default rootReducer;
