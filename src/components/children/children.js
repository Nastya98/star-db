import React, { Component } from 'react';

export default class Children extends Component {
    render(){
        return(
            <div className="children">
                <div className="children-header">{this.props.children}</div>
                <div className="children-body">{this.props.title}</div>
            </div>
        )
    }
}
