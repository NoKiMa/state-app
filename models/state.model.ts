export interface County {
    county: string;
    population: number;
  }
export interface State {
    stateName: string;
    population: number;
    countiesNum: number;
    counties: County[];
    selected: boolean;
  }

  export interface StateInfoProps {
    stateName: string;
    population: number;
    countiesNum: number;
    counties:County[],
    countiesPopulation: number;
  }

  