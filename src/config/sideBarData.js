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
  },
  {
    title: 'Return',
  },
  {
    title: 'Order',
    icon: <ShoppingCartOutlinedIcon />,
  },
  {
    title: 'Review',
    icon: <GroupTwoToneIcon />,
  },
  {
    title: 'Payment',
    icon: <CalendarMonthTwoToneIcon />,
  },
]

export const otherData = [
  {
    title: 'Account',
    icon: <PersonOutlineTwoToneIcon />,
  },
  {
    title: 'Store Settings',
    icon: <SettingsTwoToneIcon />,
  },
  {
    title: 'Help Center',
    icon: <ReportRoundedIcon />,
  },
  {
    title: 'Log Out',
    icon: <LogoutRoundedIcon />,
  },
]
