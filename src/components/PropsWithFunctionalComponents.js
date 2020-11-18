import React from 'react';

const PropsWithFunctionalComponents = props => {
    return (
        <div>
            <h1> Hello {props.name} from Props component </h1>
            {props.children}
        </div>
        
    );
}

export default PropsWithFunctionalComponents