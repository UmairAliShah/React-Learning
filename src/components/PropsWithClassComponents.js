import React, { Component } from 'react';

class PropsWithClassComponent extends Component {
    render() {
        return(
            <h1>Hello {this.props.name} from PropsWithClassComponent</h1>
        );
    }
}

export default PropsWithClassComponent