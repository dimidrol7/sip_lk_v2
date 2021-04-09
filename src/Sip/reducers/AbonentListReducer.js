const CHECKEDABNT = 'CHECKEDABNT';
const UNCHECKEDABNT = 'UNCHECKEDABNT';
const LOADABNT = 'LOADABNT';

let initialState = {
    abntData:[
        {id:1, name:9055682902, snum:0, check:true},
        {id:2, name:9055682331, check:false}
    ],
    arrNumbers:[-1,0],
    numberValue:'-1'
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
        default:
            return state
    }

}

export const checkedBoxAbntAC = (rowId) => ({type: CHECKEDABNT, rowId})
export const uncheckedBoxAbntAC = (rowId) => ({type: UNCHECKEDABNT, rowId})
export const setAbntGridAC = (abntData) => ({type: LOADABNT, abntData})


export default abonentList;
