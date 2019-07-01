import React , {Component} from 'react';

import SideDrawer from './components/SideDrawer/SideDrawer';
import SecondDrawer from './components/SideDrawer/SecondDrawer';
import Toolbar from './components/Toolbar/Toolbar';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
  state = {
   sideDrawerOpen: false,
   secondDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen };
  });
  };

  secondDrawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {secondDrawerOpen: !prevState.secondDrawerOpen };
  });
  };


  backdropClickHandler = () => {
    if(this.state.secondDrawerOpen){
      this.setState({ secondDrawerOpen: false});
    }
    else {
      this.setState({ sideDrawerOpen: false});
    }
  };

    render() {
      // let sideDrawer;
      let backdrop;

      if (this.state.sideDrawerOpen || this.state.secondDrawerOpen) {
        // sideDrawer = <SideDrawer/>;
        backdrop = <Backdrop click={this.backdropClickHandler}/>;
      }
        return(
            <div style={{height: '100%'}}>
              <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
              {backdrop}
              <SecondDrawer secondShow={this.state.secondDrawerOpen}/>
              <SideDrawer show={this.state.sideDrawerOpen} secondDrawerOpen={this.secondDrawerToggleClickHandler}/>
              {/* {sideDrawer} */}
              
              <main style={{marginTop: '64px'}}>
              <p>This is the page content
                <button onClick={this.secondDrawerToggleClickHandler}>BRO</button>
              </p>
              </main> 
            </div>
        )
    }
}

export default App;