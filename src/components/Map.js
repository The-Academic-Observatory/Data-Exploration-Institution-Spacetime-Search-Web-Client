import React, { Component } from 'react';
import { connect } from 'react-redux';

class Map extends Component {

    render() {
        return ( <div></div> );
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
)(Map);
