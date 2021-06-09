export interface State {
    stateName: string;
    population: number;
    countiesNum: number;
    counties: County[];
  }
export interface County {
    county: string;
    population: number;
  }
  