import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

export const menuData = [
  {
    title: 'Dashboard',
    icon: <DashboardOutlinedIcon />,
    path: '',
  },
  {
    title: 'Store',
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
]

export const otherData = [
  {
    title: 'Account',
    icon: <PersonOutlinedIcon />,
    path: 'account',
  },
  {
    title: 'Store Settings',
    icon: <SettingsOutlinedIcon />,
    path: 'setting',
  },
  {
    title: 'Help Center',
    icon: <ReportOutlinedIcon />,
    path: 'help',
  },
  {
    title: 'Log Out',
    icon: <LogoutRoundedIcon />,
  },
]
