import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Profile from './Profile';
import Password from './Password';
import Notification from './Notification';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Settings = () => {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-col gap-y-6 bg-dashbg rounded-sm py-4 px-6 w-full md:px-3">
      <div className="flex flex-col gap-y-6 w-full">
        <div className="text-white text-xl font-dmsansBold capitalize">
          Settings
        </div>
        <div>
          <Box sx={{ width: '100%', padding:"0px" }}>
          <Tabs 
          value={value} 
          onChange={handleChange}
          indicatorColor="transparent"
          aria-label="basic tabs example"
          variant="standard"
          sx={{
            '& .MuiTabs-flexContainer': {
              gap: '24px',
            }
          }}
          >
          <Tab
          sx={{
            '&.Mui-selected': {
              backgroundColor:"rgba(161, 98, 247, 0.1)",
              borderRadius:"10px",
              transition: "all 0.3s easeOut"
            }
          }} 
          label={<span className='font-dmsansReg text-white text-base capitalize tracking-wide'>profile</span>}
          {...a11yProps(0)} 
          />
          <Tab
          sx={{
            '&.Mui-selected': {
              backgroundColor:"rgba(161, 98, 247, 0.1)",
              borderRadius:"10px",
              transition: "all 0.3s easeOut"
            }
          }} 
          label={<span className='font-dmsansReg text-white text-base capitalize tracking-wide'>password</span>}
          {...a11yProps(1)} 
          />
          <Tab
          sx={{
            '&.Mui-selected': {
              backgroundColor:"rgba(161, 98, 247, 0.1)",
              borderRadius:"10px",
              transition: "all 0.3s easeOut"
            }
          }} 
          label={<span className='font-dmsansReg text-white text-base capitalize tracking-wide'>notificatin</span>}
          {...a11yProps(2)} 
          />
          </Tabs>
          </Box>
        </div>
      </div>
      <div>
      <CustomTabPanel value={value} index={0}>
        <Profile />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Password />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Notification />
      </CustomTabPanel>
      </div>
    </div>
  )
}

export default Settings;