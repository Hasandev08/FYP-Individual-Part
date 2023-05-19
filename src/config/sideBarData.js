import ApprovalOutlinedIcon from '@mui/icons-material/ApprovalOutlined'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import RestoreIcon from '@mui/icons-material/Restore'
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
    title: 'Approvals',
    icon: <ApprovalOutlinedIcon />,
    path: 'approvals',
  },
  {
    title: 'Return',
    icon: <RestoreIcon />,
    path: 'return',
  },
]

export const otherData = [
  {
    title: 'Account',
    icon: <PersonOutlinedIcon />,
    path: 'account',
  },
  {
    title: 'Log Out',
    icon: <LogoutRoundedIcon />,
  },
]
