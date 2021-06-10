import {State, County} from '../../models/state.model';
import restServiceApi from '../restServiceApi/restServiceApi';

const dataPreperingService = {
getStatesObject: async () => {
    
    let stateArrObject = await restServiceApi.getStates()
    let stateArr = await stateArrObject.data.map(state => {
        return {
          stateName: state.state,
          population: state.population,
          counties: [],
          countiesNum: state.counties,
        };
      });
    let stateWithCountyArr = await stateArr.map(state => {
        restServiceApi.getState(state.stateName).then(data => {
          state.counties = data.data;
        });

        return state;
      });
      return stateWithCountyArr;
   
  },
};

export default dataPreperingService;
