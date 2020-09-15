import React from 'react'
import propTypes from 'prop-types'

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

const list = (setDrawerOpen) => (
  <div
    role="presentation"
    onClick={() => setDrawerOpen(false)}
    onKeyDown={() => setDrawerOpen(false)}
  >
    <List>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </div>
)

const NavigationDrawerOpen = ({ drawerOpen, setDrawerOpen }) => (
  <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
    {list(setDrawerOpen)}
  </Drawer>
)

NavigationDrawerOpen.propTypes = {
  drawerOpen: propTypes.bool.isRequired,
  setDrawerOpen: propTypes.func.isRequired,
}

export default NavigationDrawerOpen
