const CHECKED = 'CHECKED';
const UNCHECKED = 'UNCHECKED';

let initialState ={
    tableData:[
        {id:1, numberPhone:9055682901, check:true}
    ],
    arrNumbers:[],
    numberValue:'-1'
}

const gridDataReducer = (state = initialState, action) =>
{
    switch (action.type) {
        case CHECKED:
            let stateCopy = {...state,
                rows: [...state.rows.map( r => {
                    if (r.id === action.rowId) {
                        return {...u, check:true}
                    }

                return r})]
            }
        case UNCHECKED:

        default:
            return this.state.
    }

}

export const checkedBoxAC = (rowId) => ({type: CHECKED, rowId})
export const uncheckedBoxAC = (rowId) => ({type: UNCHECKED, rowId})


export default gridDataReducer();