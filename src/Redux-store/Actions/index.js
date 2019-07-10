
const TYPES = {
    ADDINGDETAILS : 'ADDINGDETAILS'
}

export const addDetails = (details)=>{
    return ({
        type : TYPES.ADDINGDETAILS,
        payload : details
    })
}