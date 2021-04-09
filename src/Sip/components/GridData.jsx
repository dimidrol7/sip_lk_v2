import React from "react";
//TODO по поводу импорта стилей смотреть например видео номер 49 тайминг 48:11
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {checkedBoxAC} from "../reducers/GridDataReducer";
import * as axios from "axios";
import * as constants from '../Constants';


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
    console.log(props.tableData.length);
    //debugger
    //props.loadgrid(props.tableData);
    //TODO Эта верхняя строчка говнокод

    //http://192.168.35.4/admclntlk/cdrclnt.php
    //https://social-network.samuraijs.com/api/1.0/users
    //https://social-network.samuraijs.com/docs
    if (props.tableData.length < 50) {
        let params = {'HTTP_CONTENT_LANGUAGE': 'ru-RU'}
        let headers = {
            'Access-Control-Allow-Origin': '1localhost',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        }
        //axios.post(url, params, headers)
        axios.get("http://192.168.35.4/admclntlk/cdrclnt.php").then(responce => {
            //debugger;
            props.loadgrid(responce.data.table)
        });
    }
    return (
        <div>

            GRIDDATA WILL BE HERE2


            <Table border={1}>
                <TableHead>
                    <TableRow>
                        {Object.values(constants.OBJ_SETTINGS_PROPS).map(row =>
                            <TableCell>
                                {row.title}
                            </TableCell>)
                        }
                    </TableRow>
                </TableHead>
                <TableBody>

                    {
                        props.tableData.map(r =>


                            <TableRow>

                                <TableCell>
                                    {r.check
                                        ? <button onClick={() => {
                                            props.unchecked(r.id)
                                        }}>unchecked</button>
                                        : <button onClick={() => {
                                            props.checked(r.id)
                                        }}>checked</button>}
                                </TableCell>
                                <TableCell>
                                    {r.id}
                                </TableCell>
                                <TableCell>
                                    {r.calldate}
                                </TableCell>
                                <TableCell>
                                    {r.src}
                                </TableCell>
                                <TableCell>
                                    {r.dst}
                                </TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>


        </div>
    )
}

export default GridData;