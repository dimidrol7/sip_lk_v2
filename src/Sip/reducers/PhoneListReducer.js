/*const CHECKEDABNT = 'CHECKEDABNT';
const UNCHECKEDABNT = 'UNCHECKEDABNT';
const LOADABNT = 'LOADABNT';
const PAGECHANGE = 'PAGECHANGE';
const TOTALCOUNT = 'TOTALCOUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';*/
const LOADABNT = 'LOADABNT';

let initialState = {
    phoneData:[],
    pageSize:50,
    totalAbonentCount:0,
    currentPage:1,
    isFetching:true,
    /*abntData:[
        {id:1, name:9055682902, snum:0, check:true},
        {id:2, name:9055682331, check:false}
    ]*//*,
    arrNumbers:[-1,0],
    numberValue:'-1'*/
}

const phoneList = (state = initialState, action) =>
{
//debugger
    switch (action.type) {

        case LOADABNT:
            return {
                ...state,phoneData: action.phoneData
            }
        default:
            return state
    }

}


export const setAbntGridAC = (phoneData) => ({type: LOADABNT, phoneData})



export default phoneList;
