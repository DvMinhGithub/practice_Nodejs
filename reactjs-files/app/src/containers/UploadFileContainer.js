import React from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import Index from '../components';

class UploadFileContainer extends React.Component {
    componentDidMount() {
        this.props.getItem();
    }
    render() {
        return <Index {...this.props} />;
    }
}
const mapStateToProps = (state) => {
    return {
        itemSearch2: state.item.listSearch2,
        itemSearch: state.item.listSearch,
        isLoading: state.item.isFetching,
        itemFile: state.item.listData,
    };
};
const mapDisPatchToProps = (dispatch) => {
    return {
        getItem: (data) => {
            dispatch(actions.getItem(data));
        },
        addItem: (data) => {
            dispatch(actions.addItem(data));
        },
        deleteItem: (data) => {
            dispatch(actions.delItem(data));
        },
        updateItem: (data) => {
            dispatch(actions.updateItem(data));
        },
        deleteOne: (data) => {
            dispatch(actions.deleteOne(data));
        },
        searchItem: (data) => {
            dispatch(actions.searchItem(data));
        },
        searchItem1: (data) => {
            dispatch(actions.searchItem1(data));
        },
        searchItem2: (data) => {
            dispatch(actions.searchItem2(data));
        },
    };
};
export default connect(
    mapStateToProps,
    mapDisPatchToProps,
)(UploadFileContainer);
