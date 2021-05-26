import React from "react";
import PhoneList from "../components/PhoneList";
import {connect} from "react-redux";
import {withStyles} from '@material-ui/core/styles';
/*import {
    checked,
    abonentList,
    setAbntGridAC,
    unchecked,
    setCurrentPageAC,
    setTotalAbonentCountAC,
    toggleIsFetchingAC
} from "../reducers/AbonentListReducer";*/
import {
    phoneList,
    setAbntGridAC,
    setPhoneInfoAC
} from "../reducers/PhoneListReducer";
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

class PhoneListContainer extends React.PureComponent {



    componentDidMount() {
        //alert(this.props.currentPage);
        //this.props.toggleisfetching(true);
        axios.get(`http://192.168.35.4/admclntlk/phonelst.php?page=1&count=1000`).then(responce => {
            //this.props.toggleisfetching(false);
            this.props.loadabnt(responce.data.table);
            //this.props.settotalabonentcount(responce.data.total_count);
        });
    }


    render() {
        return (
            <>
                {/*{this.props.isFetching ? <Preloader/> : null}*/}
                <PhoneList phoneData={this.props.phoneData}
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
        phoneData: state.sip.phoneList.phoneData,
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
    {
        loadabnt: setAbntGridAC,
        setPhoneInfoAC
    }
    )(PhoneListContainer);

