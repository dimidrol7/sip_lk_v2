import React from "react";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';




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



let GridData = (props) => {

    /*const { objTableID,dataTable,arrNumbers,numberValue,onChangeParam,classes} = props;*/
    debugger
    console.log(props.state.tableData.id);
    return (
    <div>
        GRIDDATA WILL BE HERE

        {

            props.tableData.map( r => <div key={r.id}>
            </div>)
        }






        </div>
    )
}

export default GridData;