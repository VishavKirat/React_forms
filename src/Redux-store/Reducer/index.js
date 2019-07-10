import {addDetails} from '../Actions'

const initState = {
    name:null,
    phone: null
}

const reducer = (state=initState,action)=>{
    if(action.type === 'ADDINGDETAILS'){
        return {...state,name:action.details.name,phone:action.details.phone}
    }else{
        return state}
}
export default reducer;