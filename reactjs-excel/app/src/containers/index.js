
import React from "react";
import * as actions from '../actions/index'
import { connect } from "react-redux";
import Items from "../components";

class ItemPageContainer extends React.Component{
    componentDidMount(){
        this.props.getItem()
    }
    render(){
        return(
            <Items {...this.props} />
        )
    }
}
const mapStateToProps = (state) =>{
    console.log(state.items.listData);
    return {
        items: state.items.listData
    }
}
const mapDisPatchToProps = (dispatch) =>{
    return{
        getItem:()=>{
            dispatch(actions.getItem())
        },
        addExcel:(data)=>{
            dispatch(actions.addExcel(data))
        },
        deleteItem:(data)=>{
            dispatch(actions.deleteItem(data))
        },
        addItem:(data)=>{
            console.log(data,'ddddddddd');
            dispatch(actions.addItem(data))
        },
        updateItem:(data)=>{
            dispatch(actions.updateItem(data))
        }
    
    }
}
export default connect(mapStateToProps, mapDisPatchToProps)(ItemPageContainer)