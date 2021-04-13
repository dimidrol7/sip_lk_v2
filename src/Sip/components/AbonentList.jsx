import * as React from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import * as constants from "../Constants";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import * as axios from "axios";

class AbonentList extends React.Component {

/*constructor(props) {
    super(props);
    //alert('constructor AbonentList done!');

}*/

componentDidMount() {
    axios.get("http://192.168.35.4/admclntlk/abntlst.php").then(responce => {
        this.props.loadabnt(responce.data.table)
    });
}

    /*getGridData = () =>
    {
        if (this.props.tableData.length < 3) {
            axios.get("http://192.168.35.4/admclntlk/cdrclnt.php").then(responce => {
                //debugger;
                this.props.loadgrid(responce.data.table)
            });
        }
    }*/

    render() {//debugger;
        return (
            /*<div onLoad={this.getGridData()}>*/
            <div>
                ABONENTLIST WILL BE HERE2
                <Table border={1}>
                    <TableHead>
                        <TableRow>
                            {
                                Object.values(constants.OBJ_ABNT_PROPS).map(row =>
                                <TableCell>
                                    {row.title}
                                </TableCell>)
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.props.abntData.map(r =>
                                <TableRow>
                                    <TableCell>
                                        {r.check
                                            ? <button onClick={() => {
                                                this.props.unchecked(r.id)
                                            }}>unchecked</button>
                                            : <button onClick={() => {
                                                this.props.checked(r.id)
                                            }}>checked</button>}
                                    </TableCell>
                                    <TableCell>
                                        {r.id}
                                    </TableCell>
                                    <TableCell>
                                        {r.name}
                                    </TableCell>
                                    <TableCell>
                                        {r.snum}
                                    </TableCell>
                                    <TableCell>
                                        {r.snum_forward}
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>

            </div>
        )
    }
}

export default AbonentList;