
import React from "react";
import { connect } from "react-redux";
import * as actions from '../actions/index';
import Items from "../components/Item";

class ItemPageContainer extends React.Component{
    componentDidMount(){
        this.props.paginateItem({
            activePage:1
        })
    }
    render(){
        return(
            <Items {...this.props} />
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        items: state.items.listData,
        totalPage: state.items.totalPage,
        activePage: state.items.activePage,
        nameSearch: state.items.nameSearch
    }
}
const mapDisPatchToProps = (dispatch) =>{
    return{
        initLoad:()=>{
            dispatch(actions.getListItem())
        },
        addItem:(data)=>{
            dispatch(actions.addItem(data))
        },
        delItem:(data)=>{
            dispatch(actions.delItem(data))
        },
        updateItem:(data)=>{
            dispatch(actions.updateItem(data))
        },
        paginateItem:(data)=>{
            dispatch(actions.paginateItem(data))
        },
        searchPaginate:(data)=>{
            dispatch(actions.searchPaginateItem(data))
        }
    
    }
}
export default connect(mapStateToProps, mapDisPatchToProps)(ItemPageContainer)