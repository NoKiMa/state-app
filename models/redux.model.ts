import { State } from "./state.model";

export interface ReduxState {
    usData: State[];
    choicenState: State[];
    statisticOfCurrentState: State;
    searchState:string;
  }