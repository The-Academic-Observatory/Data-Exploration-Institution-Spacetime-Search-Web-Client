import React, { Component } from 'react';
import { connect } from 'react-redux';

class TopNResults extends Component {

    render() {
        return ( <div></div> 
	);
    }
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
    });
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(TopNResults);
