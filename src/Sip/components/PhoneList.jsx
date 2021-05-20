import * as React from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import * as constants from "../Constants";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import * as axios from "axios";
import Pagination from "@material-ui/lab/Pagination";
import CircularProgress from "@material-ui/core/CircularProgress";
import {NavLink} from "react-router-dom";

let PhoneList = (props) => {

/*constructor(props) {
    super(props);
    //alert('constructor AbonentList done!');

}*/



    /*getGridData = () =>
    {
        if (this.props.tableData.length < 3) {
            axios.get("http://192.168.35.4/admclntlk/cdrclnt.php").then(responce => {
                //debugger;
                this.props.loadgrid(responce.data.table)
            });
        }
    }*/
    /*onPageChanged = (pageNumber) => {
        this.props.pagechange(pageNumber);
        alert(`http://192.168.35.4/admclntlk/abntlst.php?page=${pageNumber}&count=${this.props.pageSize}`);
        axios.get(`http://192.168.35.4/admclntlk/abntlst.php?page=${pageNumber}&count=${this.props.pageSize}`).then(responce => {
            this.props.loadabnt(responce.data.table)
        });
    }*/



//debugger;
        //let countOfPages = Math.ceil(props.totalAbonentCount / props.pageSize);
        //alert(this.props.totalAbonentCount);
        //alert(this.props.pageSize);



        return (

            /*<div onLoad={this.getGridData()}>*/
            <div>



                PHONELIST WILL BE HERE2 {props.currentPage}
                <Table border={1}>
                    <TableHead>
                        <TableRow>
                            {
                                Object.values(constants.OBJ_PHONE_PROPS).map(row =>
                                <TableCell>
                                    {row.title}
                                </TableCell>)
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.phoneData.map(r =>
                                <TableRow>
                                    <TableCell>
{/*                                        {r.check
                                            ? <button onClick={() => {
                                                props.unchecked(r.id)
                                            }}>unchecked</button>
                                            : <button onClick={() => {
                                                props.checked(r.id)
                                            }}>checked</button>}*/}
                                    </TableCell>
                                    <TableCell>
                                        {r.id}
                                    </TableCell>
                                    <TableCell>
                                        {r.exten}
                                    </TableCell>
                                    {/*<TableCell>
                                        <NavLink to={'/abonent/' + r.id}>
                                            {r.snum}
                                        </NavLink>
                                    </TableCell>
                                    <TableCell>
                                        {r.snum_forward}
                                    </TableCell>*/}
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>

            </div>
        )
}


export default PhoneList;