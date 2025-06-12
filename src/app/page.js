"use client"
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Dashboard from './component/Dahsboard';
import Assets from './component/Assets';
import Booking from './component/Booking';
import BuyCars from './component/BuyCars';
import Services from './component/Services';
import Calender from './component/Calender';
import Message from './component/Messages';
import Settings from './component/Settings';
import Header from './UI/header/Header';
import GridView from './assets/icons/GridView';
import AssetsIcon from './assets/icons/AssetsIcon';
import CartIcon from './assets/icons/CartIcon';
import ServicesIcon from './assets/icons/ServicesIcon';
import CalenderIcon from './assets/icons/CalenderIcon';
import MessageIcon from './assets/icons/MessageIcon';
import SettingIcon from './assets/icons/SettingIcon';
import LogOut from './assets/icons/LogOut';
import BagIcon from './assets/icons/BagIcon';
import SellCars from './component/SellCars';
import BookingIcon from './assets/icons/BookingIcon';
import Logo from './assets/icons/Logo';
import { useRouter } from 'next/navigation';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ padding:"12px 12px"}}>
            {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function Home() {

  const [value, setValue] = useState(0);
  const router = useRouter();

  const panelWidth = useSelector((state) => state.val.value);
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dashList = [
    {id: 0, label:"dashboard", icon: <GridView iconColor={value === 0 ? "#ffffff" : "#72767C"} />},
    {id: 1, label:"assets", icon: <AssetsIcon iconColor={value === 1 ? "#ffffff" : "#72767C"} />},
    {id: 2, label:"booking", icon: <BookingIcon iconColor={value === 2 ? "#ffffff" : "#72767C"} />},
    {id: 3, label:"sell cars", icon: <BagIcon iconColor={value === 3 ? "#ffffff" : "#72767C"} />},
    {id: 4, label:"buy cars", icon: <CartIcon iconColor={value === 4 ? "#ffffff" : "#72767C"} />},
    {id: 5, label:"services", icon: <ServicesIcon iconColor={value === 5 ? "#ffffff" : "#72767C"} />},
    {id: 6, label:"calender", icon: <CalenderIcon iconColor={value === 6 ? "#ffffff" : "#72767C"} />},
    {id: 7, label:"messages", icon: <MessageIcon iconColor={value === 7 ? "#ffffff" : "#72767C"} />},
    {id: 8, label:"settings", icon: <SettingIcon iconColor={value === 8 ? "#ffffff" : "#72767C"} />},
    {id: 9, label:"log out", icon: <LogOut iconColor={value === 9 ? "#ffffff" : "#72767C"} />}
];

  return (
    <Box
          sx={{
                bgcolor: '#fff', 
                display: 'flex',
                width:"100%", 
                height: "100%",
                background:"#1F2128"
              }}
          >
          <Tabs
            orientation="vertical"
            variant="standard"
            indicatorColor="transparent"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
                 transition:"all 0.3s ease-in",
                 overflow:"unset",
                 background:"#242731",
                }}
          className="block"
          style={{width: panelWidth}}
          >
          {/* Dahslist body */}
          <div className="flex flex-col">
            {/* App_Logo */}
            <div className="p-6 text-left cursor-pointer bg-dashbg w-full md:p-4">
              <Logo />
            </div>
            {/* Panel_List */}
            <div className="flex flex-col gap-y-4 text-left py-4 px-1 w-full">
              {dashList?.map((x) => (
                <div
                key={x.id}
                className="flex flex-row gap-x-4 p-4 cursor-pointer w-full md:py-4 md:px-2"
                onClick={() => {
                  if(x.label === "log out"){
                    //Navigate to /Login
                    router.push("/login");
                  } else {
                    setValue(x.id);
                    dispatch(x.chState);
                  }
                }}
                style={{
                  background: value === x.id ? "#292E3D" : "transparent",
                  borderRadius: value === x.id ? "6px" : "0px",
                  transition: "all 0.3s easeOut"
                }}
                >
                  <div>
                    {x.icon}
                  </div>
                  <div 
                  className="font-dmsansBlck text-dashC text-base capitalize leading-5 tracking-wide md:text-sm"
                  style={{color: value === x.id ? "#ffffff" : "#72767C",
                    transition: "color 0.2s ease-in-out"
                  }}>
                    {x.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          </Tabs>
          {/* main Body */}
          <div className="flex flex-col gap-y-4 w-full">
            {/* header */}
            <div className="sticky top-0" style={{zIndex:"1000"}}>
              <Header />
            </div>
            {/* Body */}
            <div>
            <TabPanel value={value} index={0}>
              <Dashboard />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Assets />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Booking />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <SellCars />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <BuyCars />
            </TabPanel>
            <TabPanel value={value} index={5}>
              <Services />
            </TabPanel>
            <TabPanel value={value} index={6}>
              <Calender />
            </TabPanel>
            <TabPanel value={value} index={7}>
              <Message />
            </TabPanel>
            <TabPanel value={value} index={8}>
              <Settings />
            </TabPanel>
            </div>
          </div>
      </Box>
  );
}
