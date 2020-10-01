import React from 'react'
import propTypes from 'prop-types'
import { withTheme } from 'styled-components'
import { injectIntl } from 'react-intl'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

import NavigationDrawer from './NavigationDrawer'

import { ImageWrap } from './styles'

const logo = require('../../../assets/gennyware_logo.png')

const useStyles = (theme) =>
  makeStyles((muiTheme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: 'yellow',
    },
    appBar: {
      backgroundColor: theme.colors.white,
      color: (themeDerived) => themeDerived.colors.black,
    },
    menuButton: {
      marginRight: muiTheme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }))

const Header2 = ({ intl, theme, onProfile, onLogout, onSettings }) => {
  const classes = useStyles(theme)(theme)
  const [drawer, setDrawer] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)

    console.log('? event.currentTarget', event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleProfile = () => {
    handleMenuClose()
    onProfile()
  }

  const handleLogout = () => {
    handleMenuClose()
    onLogout()
  }

  const handleSettings = () => {
    handleMenuClose()
    onSettings()
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <>
            <NavigationDrawer drawerOpen={drawer} setDrawerOpen={setDrawer} />
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </>
          <ImageWrap>
            <img src={logo} alt="logo" />
          </ImageWrap>
          <Typography variant="h6" className={classes.title}>
            ZXSVM
          </Typography>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleProfile}>
                {intl.formatMessage({ id: 'HEADER.PROFILE' })}
              </MenuItem>
              <MenuItem onClick={handleSettings}>
                {intl.formatMessage({ id: 'HEADER.SETTINGS' })}
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                {intl.formatMessage({ id: 'HEADER.LOG_OUT' })}
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header2.propTypes = {
  intl: propTypes.object.isRequired,
  theme: propTypes.object,
  onProfile: propTypes.func.isRequired,
  onLogout: propTypes.func.isRequired,
  onSettings: propTypes.func.isRequired,
}

Header2.defaultProps = {
  theme: {},
}

export default injectIntl(withTheme(Header2))
