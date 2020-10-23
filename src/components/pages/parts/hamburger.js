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

import { Link } from 'react-router-dom';


import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

 const Hamburger = () => {
  const classes = useStyles();
  const loc = {
    'Shop': '/',
    'New Arrivals': '/new',
    'Review': '/review',
    'Wish': '/wish',
    'Basket': '/basket',
    'Customer Care': '/care'
  }
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
        {['Shop', 'New Arrivals', 'Review'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>

            {/* <Link to={loc[text]}> */}
              <ListItemText primary={text} />
            {/* </Link> */}
            
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Wishlist', 'Basket', 'Customer Care'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            {/* <Link to={loc[text]}> */}
              <ListItemText primary={text} />
            {/* </Link> */}
          </ListItem>
        ))}
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

export default Hamburger