import React from 'react';
import Aside from './Aside';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        store: state.sidebar
    }
} 

let mapDispatchtoProps = (dispatch) => {
    return {

    }
}

const AsideContainer = connect(mapStateToProps,mapDispatchtoProps)(Aside);

export default AsideContainer;