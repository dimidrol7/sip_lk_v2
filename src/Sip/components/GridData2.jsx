import React from "react";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';




const styles = (theme) => ({
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
});



let GridData = (props) => {

    const { objTableID,dataTable,arrNumbers,numberValue,onChangeParam,classes} = props;

    return <div>
        GRIDDATA WILL BE HERE
        {props.tableData}


        {/*<div className={classes.tableWrapper}>*/}
        <div className={styles.tableWrapper}>
            {/*<Table className={classes.table}>*/}
            <Table className={styles.table}>
                <TableHead>
                    <TableRow>
                        {Object.values(objTableID).map(row =>
                            <TableCell>
                                {row.title}
                            </TableCell>)
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataTable.map((row,index) =>
                        <TableRow className={classes.row} key={`settings-row-${index}`}>
                            {Object.keys(objTableID).map(currentID =>
                                <TableCell>
                                    {row[currentID]}
                                </TableCell>)}
                        </TableRow>)}
                </TableBody>
            </Table>
        </div>



        </div>

}

export default GridData;