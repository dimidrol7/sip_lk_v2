const CHECKEDABNT = 'CHECKEDABNT';
const UNCHECKEDABNT = 'UNCHECKEDABNT';
const LOADABNT = 'LOADABNT';
const PAGECHANGE = 'PAGECHANGE';
const TOTALCOUNT = 'TOTALCOUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    abntData:[],
    pageSize:5,
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

const abonentList = (state = initialState, action) =>
{
//debugger
    switch (action.type) {
        case CHECKEDABNT:
            return {
                ...state,
                abntData: [...state.abntData.map( r => {
                    if (r.id === action.rowId) {
                        return {...r, check:true}
                    }

                return r})]
            }
        case UNCHECKEDABNT:
            return {
                ...state,
                abntData: [...state.abntData.map( r => {
                    if (r.id === action.rowId) {
                        return {...r, check:false}
                    }

                    return r})]
            }
        case LOADABNT:
            return {
                ...state,abntData: action.abntData
            }
        case PAGECHANGE:
            return {
                ...state,currentPage: action.currentPage
            }
        case TOTALCOUNT:
            return {
                ...state,totalAbonentCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,isFetching: action.isFetching
            }
        default:
            return state
    }

}

export const checkedBoxAbntAC = (rowId) => ({type: CHECKEDABNT, rowId})
export const uncheckedBoxAbntAC = (rowId) => ({type: UNCHECKEDABNT, rowId})
export const setAbntGridAC = (abntData) => ({type: LOADABNT, abntData})
export const setCurrentPageAC = (currentPage) => ({type: PAGECHANGE, currentPage})
export const setTotalAbonentCountAC = (totalCount) => ({type: TOTALCOUNT, totalCount})
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})


export default abonentList;
