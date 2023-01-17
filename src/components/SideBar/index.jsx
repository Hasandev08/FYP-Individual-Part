import { useState } from 'react'
import PropTypes from 'prop-types'

import DashBoard from '../../screens/DashBoard'
import Orders from '../../screens/Orders'
import Products from '../../screens/Products'

import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'

import { menuData, otherData } from '../../config/sideBarData'

import './style.css'

const drawerWidth = 220

function Sidebar({ window }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('dashboard')

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div className='sidebar'>
      <List>
        <div className='sidebar-heading'>
          <p>Menu</p>
        </div>
        {menuData.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton onClick={() => setCurrentPage(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText className='title' primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <div className='sidebar-heading'>
          <p>Others</p>
        </div>
        {otherData.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton onClick={() => setCurrentPage(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText className='title' primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <div className='navbar'>
        <IconButton
          color='black'
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
          sx={{ mr: 2, ml: 1, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </div>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'
      >
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component='main' sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <div className='screens'>
          {currentPage === 'dashboard' && <DashBoard />}
          {currentPage === 'orders' && <Orders />}
          {currentPage === 'products' && <Products />}
        </div>
      </Box>
    </Box>
  )
}

Sidebar.propTypes = {
  window: PropTypes.func,
}

export default Sidebar
