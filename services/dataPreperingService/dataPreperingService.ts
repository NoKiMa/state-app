import {State, County} from '../../models/state.model'
import restServiceApi from '../restServiceApi/restServiceApi'

const dataPreperingService = {
    getStatesObject: (states:any[]): State[] =>{
        
        return states.map(state=>{
            let counties: County[] = [];
            restServiceApi.getState(state.state).then(data =>{
                data.data.forEach(item =>{
                     counties.push({
                         county: item.county,
                         population:item.population
                     })
                })
            })
            let stateObject:State = {
                stateName: state.state,
                population:state.population,
                counties: counties,
                countiesNum:state.counties
            }
            console.log("stateObject", stateObject);
          return stateObject;
            

        })
    }
}

export default dataPreperingService;