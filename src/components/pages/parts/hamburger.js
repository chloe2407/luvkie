import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { withRouter } from 'react-router-dom';


import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

 const Hamburger = props => {
  const classes = useStyles();
  const { history } = props;
  const itemsList1 = [
    {
      text: "Shop",
      icon: <InboxIcon/>,
      onClick: () => history.push("/")
    },
    {
      text: "New Arrivals",
      icon: <InboxIcon/>,
      onClick: () => history.push("/new")
    },
    {
      text: "Reviews",
      icon: <InboxIcon/>,
      onClick: () => history.push("/review")
    },
  ]
  const itemsList2 = [
    {
      text: "Wishlist",
      icon: <InboxIcon/>,
      onClick: () => history.push("/wish")
    },
    {
      text: "Basket",
      icon: <InboxIcon/>,
      onClick: () => history.push("/basket")
    },
    {
      text: "Customer Care",
      icon: <InboxIcon/>,
      onClick: () => history.push("/care")
    },
  ]

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div style={{padding: "2vw"}}/>
      <Divider />
      <List>
        {itemsList1.map((item, index) => {
          const {text, icon, onClick} = item;
          return(
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text}/>
            </ListItem>
          )
        })}

    
      </List>
      <Divider />
      <List>
        {itemsList2.map((item, index) => {
          const {text, icon, onClick} = item;
          return(
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text}/>
            </ListItem>
          )
        })}
      </List>
    </div>
  );

  return (
    <React.Fragment key={'left'}>
      <Button onClick={toggleDrawer('left', true)}><MenuIcon/></Button>
      <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
          {list('left')}
        </Drawer>
      </React.Fragment>
    
  );
}

export default withRouter(Hamburger);
