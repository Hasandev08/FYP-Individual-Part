import ApprovalOutlinedIcon from '@mui/icons-material/ApprovalOutlined'
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined'

export const menuData = [
  {
    title: 'Dashboard',
    icon: <DashboardOutlinedIcon />,
    path: '',
  },
  {
    title: 'Store',
    icon: <StoreOutlinedIcon />,
    path: 'store',
  },
  {
    title: 'Order',
    icon: <ShoppingCartOutlinedIcon />,
    path: 'orders',
  },
  {
    title: 'Payment',
    icon: <CalendarMonthTwoToneIcon />,
    path: 'payment',
  },
  {
    title: 'Approvals',
    icon: <ApprovalOutlinedIcon />,
    path: 'approval',
  },
]

export const otherData = [
  {
    title: 'Account',
    icon: <PersonOutlinedIcon />,
    path: 'account',
  },
  {
    title: 'Settings',
    icon: <SettingsOutlinedIcon />,
    path: 'setting',
  },
  {
    title: 'Log Out',
    icon: <LogoutRoundedIcon />,
  },
]
