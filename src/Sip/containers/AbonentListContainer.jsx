import React from "react";
import AbonentList from "../components/AbonentList";
import {connect} from "react-redux";
import {withStyles} from '@material-ui/core/styles';
import {
    checked,
    abonentList,
    setAbntGridAC,
    unchecked,
    setCurrentPageAC,
    setTotalAbonentCountAC,
    toggleIsFetchingAC
} from "../reducers/AbonentListReducer";
import SimpleBar from "../components/SimpleBar";
import * as constants from "../Constants";
import * as axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Preloader from "../components/common/Preloader";

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

class AbonentListContainer extends React.PureComponent {

    handleChange = (event, value) => {
        this.props.toggleisfetching(true);
        this.props.pagechange(value);
        axios.get(`http://192.168.35.4/admclntlk/abntlst.php?page=${value}&count=${this.props.pageSize}`).then(responce => {
            this.props.toggleisfetching(false);
            this.props.loadabnt(responce.data.table)
        });
        /*alert(value);*/
    };

    componentDidMount() {
        //alert(this.props.currentPage);
        this.props.toggleisfetching(true);
        axios.get(`http://192.168.35.4/admclntlk/abntlst.php?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(responce => {
            this.props.toggleisfetching(false);
            this.props.loadabnt(responce.data.table);
            this.props.settotalabonentcount(responce.data.total_count);
        });
    }


    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <AbonentList abntData={this.props.abntData}
                             objTableID={constants.OBJ_SETTINGS_PROPS}
                             arrNumbers={this.props.arrNumbers}
                             totalAbonentCount={this.props.totalAbonentCount}
                             pageSize={this.props.pageSize}
                             handleChange={this.handleChange}
                             currentPage={this.props.currentPage}
                             unchecked={this.props.unchecked}
                             checked={this.props.checked}
                             onChangeParam={this.props.onChangeParam}
                />
            </>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        abntData: state.sip.abonentList.abntData,
        pageSize: state.sip.abonentList.pageSize,
        totalAbonentCount: state.sip.abonentList.totalAbonentCount,
        currentPage: state.sip.abonentList.currentPage,
        isFetching: state.sip.abonentList.isFetching,
    }

}
// об этой функции тут : https://youtu.be/_LZXisuCluw?list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&t=299
/*let mapDispatchToProps = (dispatch) => {
    return {
        checked: (rowId) => {
            dispatch(checkedBoxAbntAC(rowId))
        },
        unchecked: (rowId) => {
            dispatch(uncheckedBoxAbntAC(rowId))
        },
        loadabnt: (abntData) => {
            dispatch(setAbntGridAC(abntData))
        },
        pagechange: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        settotalabonentcount: (totalCount) => {
            dispatch(setTotalAbonentCountAC(totalCount))
        },
        toggleisfetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }

}*/

                /*export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(GridDataContainer));*/
                //export default connect(mapStateToProps,mapDispatchToProps)(GridData);

                //export default connect(mapStateToProps,mapDispatchToProps)(GridDataContainer);
                //export default connect(mapStateToProps,mapDispatchToProps)(AbonentListContainer);
export default connect(mapStateToProps,
    {checked,
        unchecked,
        loadabnt: setAbntGridAC,
        pagechange: setCurrentPageAC,
        settotalabonentcount: setTotalAbonentCountAC,
        toggleisfetching: toggleIsFetchingAC}
    )(AbonentListContainer);

