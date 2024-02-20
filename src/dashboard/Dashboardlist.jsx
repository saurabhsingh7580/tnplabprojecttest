import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Chart } from 'react-google-charts';
import '../Assets/style.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsPersonCircle } from "react-icons/bs";
// import { IoMdNotifications } from "react-icons/io";
// import Card from 'react-bootstrap/Card';
import { Container } from '@mui/material';
import { AiTwotoneHome } from "react-icons/ai";
import { FaBed } from "react-icons/fa";
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import { FaUserDoctor } from "react-icons/fa6";
import { BsFillCalendarDateFill } from "react-icons/bs";
import PaidIcon from '@mui/icons-material/Paid';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { GiMedicines } from "react-icons/gi";
import { FaCampground } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import Cardcomp from './component/cards/Cardcomp';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const bull = (
     <Box
       component="span"
       sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
     >
       •
     </Box>
   );
   
   
  
   


export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  
  return (
    <Box sx={{ display: 'flex'}} >
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{backgroundColor:"#00887a"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" noWrap component="div" >
        
          </Typography>
          <BsPersonCircle className='person' size={30} />
        
            <NavDropdown
            className='profile'
              id=""
              title="Admin"
              style={{color:"white"}}
            >
              <NavDropdown.Item href="#action/3.1">Admin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
              
            </NavDropdown>
         
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} style={{}}>
        <DrawerHeader style={{backgroundColor:"#00887a",color:"white",overflow:"hidden",position:'relative'}}>
        <span style={{fontWeight:"bold"}}>Hospital Management</span>
          <IconButton onClick={handleDrawerClose} style={{background:"#00887a",overflow:"hidden"}}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Dashboard'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 1 === 0 ? <AiTwotoneHome size={25} /> : <AiTwotoneHome size={25}/>}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
        {['Patient'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {index % 1 === 0 ? <FaBed size={25}/> : <FaBed size={25}/>}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
      {['Receptions'].map((text, index) => (
        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              {index % 1 === 0 ? <AddToQueueIcon size={25}/> : <AddToQueueIcon size={25}/>}
            </ListItemIcon>
            <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
<Divider />
      <List>
          {['Doctor'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 1 === 0 ? <FaUserDoctor size={25} /> : <FaUserDoctor size={25} />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
    <Divider />
    <List>
    {['Appointment'].map((text, index) => (
      <ListItem key={text} disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            {index % 1 === 0 ?<BsFillCalendarDateFill size={25} /> : <BsFillCalendarDateFill size={25} />}
          </ListItemIcon>
          <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
  <Divider />
   
  <List>
  {['Payments'].map((text, index) => (
    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? 'initial' : 'center',
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : 'auto',
            justifyContent: 'center',
          }}
        >
          {index % 1 === 0 ? <PaidIcon size={25} /> : <PaidIcon size={25} />}
        </ListItemIcon>
        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  ))}
</List>
<Divider />
<List>
{['Invoices'].map((text, index) => (
  <ListItem key={text} disablePadding sx={{ display: 'block' }}>
    <ListItemButton
      sx={{
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : 'auto',
          justifyContent: 'center',
        }}
      >
        {index % 1 === 0 ? <FaFileInvoiceDollar size={25} /> :  <FaFileInvoiceDollar size={25} />}
      </ListItemIcon>
      <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
  </ListItem>
))}
</List>
<Divider />
<List>
{['Services'].map((text, index) => (
  <ListItem key={text} disablePadding sx={{ display: 'block' }}>
    <ListItemButton
      sx={{
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : 'auto',
          justifyContent: 'center',
        }}
      >
        {index % 1 === 0 ? <MedicalServicesIcon size={25} /> : <MedicalServicesIcon size={25} />}
      </ListItemIcon>
      <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
  </ListItem>
))}
</List>
<Divider />
<List>
{['Medicine'].map((text, index) => (
  <ListItem key={text} disablePadding sx={{ display: 'block' }}>
    <ListItemButton
      sx={{
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : 'auto',
          justifyContent: 'center',
        }}
      >
        {index % 1 === 0 ? <GiMedicines size={25} /> : <GiMedicines size={25} />}
      </ListItemIcon>
      <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
  </ListItem>
))}
</List>
<Divider />
<List>
{['Compaigns'].map((text, index) => (
  <ListItem key={text} disablePadding sx={{ display: 'block' }}>
    <ListItemButton
      sx={{
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : 'auto',
          justifyContent: 'center',
        }}
      >
        {index % 1 === 0 ? <FaCampground size={25} /> : <FaCampground size={25} />}
      </ListItemIcon>
      <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
  </ListItem>
))}
</List>
<Divider />
<List>
{['Setting'].map((text, index) => (
  <ListItem key={text} disablePadding sx={{ display: 'block' }}>
    <ListItemButton
      sx={{
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : 'auto',
          justifyContent: 'center',
        }}
      >
        {index % 1 === 0 ? <IoSettingsOutline size={25} /> : <IoSettingsOutline size={25} />}
      </ListItemIcon>
      <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
  </ListItem>
))}
</List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} style={{display:"flex",marginTop:"5%"}}>
        <DrawerHeader />
        <Cardcomp/>
      </Box>
    </Box>
  );
}