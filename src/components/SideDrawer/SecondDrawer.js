import React from 'react';

import './SecondDrawer.css';

const sideDrawer = props => {
let drawerClasses = 'side-drawer';
if(props.show){
    drawerClasses = 'side-drawer open';
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

export default sideDrawer;