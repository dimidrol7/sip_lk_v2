import React from "react";
import GridData from "../components/GridData";
import {connect} from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import {checkedBoxAC, gridData, setGridAC, uncheckedBoxAC} from "../reducers/GridDataReducer";
import SimpleBar from "../components/SimpleBar";
import * as constants from "../Constants";

/*const styles = (theme) => ({

    actionsRoot:{
        display:'flex',
        flexBasis:100,
        justifyContent:'center',
        alignItems: 'center',
    },
    button: {
        margin: 0,
        padding:4,
    },
});*/
/*let GridDataContainer = (props) => {
    return <div>
        GRIDDATA WILL BE HERE
        {props.tableData}
    </div>

}*/

/*class GridDataContainer extends React.PureComponent {
render() {
    return (

        <GridData dataTable={this.props.tableData}
                  objTableID={constants.OBJ_SETTINGS_PROPS}
                  arrNumbers={this.props.arrNumbers}
                  numberValue={this.props.numberValue}
                  onChangeParam={this.props.onChangeParam}
        />
    );
}
}*/

let mapStateToProps = (state) => {
    return {
        tableData: state.sip.gridData.tableData
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        checked: (rowId) => {
            dispatch(checkedBoxAC(rowId))
        },
        unchecked: (rowId) => {
            dispatch(uncheckedBoxAC(rowId))
        },
        loadgrid: (tableData) => {
            dispatch(setGridAC(tableData))
        }
    }

}

/*export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(GridDataContainer));*/
//export default connect(mapStateToProps,mapDispatchToProps)(GridData);

//export default connect(mapStateToProps,mapDispatchToProps)(GridDataContainer);
export default connect(mapStateToProps,mapDispatchToProps)(GridData);
