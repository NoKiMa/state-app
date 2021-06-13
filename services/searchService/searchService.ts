import {State} from "../../models/state.model"

const searchService = (states: State[], search: string):State[] =>{
    return states.filter(state => state.stateName.toLowerCase().includes(search.toLowerCase()))
}

export default searchService;