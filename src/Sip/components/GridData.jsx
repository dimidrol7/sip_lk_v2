import React from "react";
//TODO по поводу импорта стилей смотреть например видео номер 49 тайминг 48:11
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {checkedBoxAC} from "../reducers/GridDataReducer";




/*const styles = (theme) => ({
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
    tableWrapper:{
        width:1200,
        overflowX:'auto'
    },
    rootSettings:{
        padding:8
    },
    formControl:{
        width:210
    }
});*/



let GridData = props => {

    /*const { objTableID,dataTable,arrNumbers,numberValue,onChangeParam,classes} = props;*/

    console.log(props.tableData);
    debugger
    props.loadgrid(props.tableData);
    return (
    <div>

        GRIDDATA WILL BE HERE2

        {

            props.tableData.map( r => <div key={r.id}>{r.numberPhone}<span>
            <div></div>
            <div>
                {r.check
                    ? <button onClick={ () => {props.unchecked(r.id) } }>unchecked</button>
                    : <button onClick={()=>{props.checked(r.id)}}>checked</button>}

            </div>
            </span></div>
            )

        }






        </div>
    )
}

export default GridData;