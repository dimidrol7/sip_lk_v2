/*const CHECKEDABNT = 'CHECKEDABNT';
const UNCHECKEDABNT = 'UNCHECKEDABNT';
const LOADABNT = 'LOADABNT';
const PAGECHANGE = 'PAGECHANGE';
const TOTALCOUNT = 'TOTALCOUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';*/
const LOAD_PHONE_LST = 'LOAD_PHONE_LST';
const SET_PHONE_INFO = 'SET_PHONE_INFO';

let initialState = {
    phoneData:[],
    pageSize:50,
    totalAbonentCount:0,
    currentPage:1,
    isFetching:true,
    phoneInfoData:null,
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

        case LOAD_PHONE_LST:
            return {
                ...state,phoneData: action.phoneData
            }
        case SET_PHONE_INFO:
            return {
                ...state,phoneInfoData: action.phoneInfoData
            }
        default:
            return state
    }

}


export const setAbntGridAC = (phoneData) => ({type: LOAD_PHONE_LST, phoneData})

//action creator это функция, которая возвращает нам объект - action ({type: SET_PHONE_INFO, phoneInfoData}).
// Action это объект в котором инкапсулированны все данные, для того чтобы reducer пулучил эти данные и применил их на свой state
// объяснения https://youtu.be/MM02LsZqssQ?list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&t=1592
export const setPhoneInfoAC = (phoneInfoData) => ({type: SET_PHONE_INFO, phoneInfoData})



export default phoneList;
