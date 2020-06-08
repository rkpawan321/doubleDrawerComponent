import React, { Component } from 'react';
import './SideDrawer.css';
class SideDrawer extends Component {

    render() {
        let drawerClasses = 'side-drawer';
        if (this.props.show) {
            drawerClasses = 'side-drawer open';
        }
        return (
            <nav className={drawerClasses}>
                <ul>
                    <li>Products</li>
                    <li>Users</li>
                    <li> <button onClick={this.props.secondDrawerOpen}>PULL SECOND DRAWER</button></li>
                </ul>
            </nav>
        );
    };
};

export default SideDrawer;