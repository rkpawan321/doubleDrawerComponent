import React from 'react';

import './SecondDrawer.css';

const secondDrawer = props => {
let drawerClasses = 'second-drawer';
if(props.secondShow){
    drawerClasses = 'second-drawer open';
}
    return (
    <nav className={drawerClasses}>
        <ul>
            <li><a href="/">second PP</a></li>
            <li><a href="/">bruhh</a></li>
        </ul>
    </nav>
);
    };

export default secondDrawer;