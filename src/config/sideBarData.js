import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import GroupTwoToneIcon from '@mui/icons-material/GroupTwoTone'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone'
import ReportRoundedIcon from '@mui/icons-material/ReportRounded'
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

export const menuData = [
  {
    title: 'Dashboard',
    icon: <DashboardOutlinedIcon />,
    path: 'dashboard',
  },
  {
    title: 'Return',
    path: 'return',
  },
  {
    title: 'Order',
    icon: <ShoppingCartOutlinedIcon />,
    path: 'orders',
  },
  {
    title: 'Review',
    icon: <GroupTwoToneIcon />,
    path: 'review',
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
    icon: <PersonOutlineTwoToneIcon />,
    path: 'account',
  },
  {
    title: 'Store Settings',
    icon: <SettingsTwoToneIcon />,
    path: 'setting',
  },
  {
    title: 'Help Center',
    icon: <ReportRoundedIcon />,
    path: 'help',
  },
  {
    title: 'Log Out',
    icon: <LogoutRoundedIcon />,
  },
]
