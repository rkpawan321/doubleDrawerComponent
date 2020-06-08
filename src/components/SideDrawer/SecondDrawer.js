import React from 'react';

import './SecondDrawer.css';

const secondDrawer = props => {

    let drawerClasses = 'second-drawer';
   if (!props.secondShow && props.firstShow) {
        drawerClasses = 'second-drawer when-first-is-open-and-second-closed'
    } else if (props.secondShow && props.firstShow){
        drawerClasses = 'second-drawer open';
    } 

    return (
        <nav className={drawerClasses}>
            <ul>
                <li>I am in the second drawer.</li>
                <li>Click outside second drawer to close.</li>
            </ul>
        </nav>
    );
};

export default secondDrawer;