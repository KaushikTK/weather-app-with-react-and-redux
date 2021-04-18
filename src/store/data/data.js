import { combineReducers } from "redux"

const defaultData =
{
    region: '',
    current:0,
    max: 0,
    min: 0,
    feels_like : 0,
}

// actions
export const setTempAndRegion = (temp_and_reg)=>{
    return{
        type:'SET_TEMPERATURES_AND_REGION',
        temp_and_reg
    }
}


// reducers
const data = (state=defaultData,action)=>{
    switch(action.type)
    {
        case 'SET_TEMPERATURES_AND_REGION':
            action = action.temp_and_reg;
            return({...state,region:action.region,current:action.current,max:action.max,min:action.min,feels_like:action.feels_like})
        default:
            return state;
    }
}

// combine the reducers and export
const dataApp = combineReducers({data});

export default dataApp;