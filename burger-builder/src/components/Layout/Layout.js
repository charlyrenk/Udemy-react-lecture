import React, {Component, Fragment} from 'react';

import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerOpenedHandler = () => {
        this.setState((prevState) => {
           return  { showSideDrawer: !prevState.showSideDrawer }
        });
    }

    render () {
    return (
        <Fragment>
            <Toolbar open={this.sideDrawerOpenedHandler}/>
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
            <main className={classes.Content}>
            {this.props.children}
            </main>
        </Fragment>
    )
    }
}; 

export default Layout;