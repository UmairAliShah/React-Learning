import React from 'react';


function formatName(user) {
        return user.first_name + ' ' + user.last_name;
}

const user = {
        first_name: 'Umair',
        last_name: 'Ali'
}



class JSXComponent extends React.Component {
    render() {
        return (
           <div>
                <h1> Hello {formatName(user)} from JSX Component! </h1>
                
           </div> 

        );
    }
}

export default JSXComponent;


