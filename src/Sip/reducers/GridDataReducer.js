const CHECKED = 'CHECKED';
const UNCHECKED = 'UNCHECKED';
const LOADGRID = 'LOADGRID';

let initialState = {
    tableData:[
        {id:1, numberPhone:9055682901, check:true}
    ],
    arrNumbers:[-1,0],
    numberValue:'-1'
}

export const gridData = (state = initialState, action) =>
{
    switch (action.type) {
        case CHECKED:
            return {
                ...state,
                rows: [...state.rows.map( r => {
                    if (r.id === action.rowId) {
                        return {...r, check:true}
                    }

                return r})]
            }
        case UNCHECKED:
            return {
                ...state,
                rows: [...state.rows.map( r => {
                    if (r.id === action.rowId) {
                        return {...r, check:false}
                    }

                    return r})]
            }
        case LOADGRID:
            return {
                ...state,tableData: action.tableData
            }
        default:
            return state
    }

}

export const checkedBoxAC = (rowId) => ({type: CHECKED, rowId})
export const uncheckedBoxAC = (rowId) => ({type: UNCHECKED, rowId})
export const setGridAC = (tableData) => ({type: LOADGRID, tableData})


//export default gridData();