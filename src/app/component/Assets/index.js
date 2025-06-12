import Image from "next/image";
import ActivityCharts from "./ActivityCharts";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import IconButton from '@mui/material/IconButton';
import MobMssge from "@/app/assets/icons/MobMssge";
import Chip from '@mui/material/Chip';
import IMark from "@/app/assets/icons/IMark";
import ServIcon from "@/app/assets/icons/ServIcon";
import LineChartIcon from "@/app/assets/icons/LineChartIcon";
import { Checkbox } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CarAnimate } from "@/app/functions/GsAnimate";

const Assets = () => {

  const [checked, setChecked] = useState([0]);

  const handleToggle = (id) => () => {
  const currentIndex = checked.indexOf(id);
  const newChecked = [...checked];
  if (currentIndex === -1) {
    newChecked.push(id);
  } else {
    newChecked.splice(currentIndex, 1);
  }
  setChecked(newChecked);
};

  const autoWagen = useRef(null);

  const [zx, setValue] = useState(0);

  const asetts = [
    {id: 0, label: "Asset - Fuel Consumed (10)", icon: <LineChartIcon iconColor={zx === 0 ? "#FF6370" : "#A4A5A6"} />},
    {id: 1, label: "Asset - Odometer (km)", icon: <LineChartIcon iconColor={zx === 1 ? "#FF6370" : "#A4A5A6"} />},
    {id: 2, label: "Asset - Runtime (km)", icon: <LineChartIcon iconColor={zx === 2 ? "#FF6370" : "#A4A5A6"} />},
    {id: 3, label: "Asset - Speed (hr)", icon: <LineChartIcon iconColor={zx === 3 ? "#FF6370" : "#A4A5A6"} />},
    {id: 4, label: "Engine Temperature (deg C)", icon: <LineChartIcon iconColor={zx === 4 ? "#FF6370" : "#A4A5A6"} />}
  ];

  /* Car Animate */
  useEffect(() => {
    CarAnimate(autoWagen.current);
  }, []);

  return (
    <div>
      <div className="text-white px-2 font-dmsansBold capitalize text-2xl">
          Assets
      </div>
      <div className="flex flex-row gap-x-3 py-6 w-full lg:flex-col gap-y-3">
        <div className="bg-dashbg px-6 pt-4 pb-2 h-dvh rounded-xl shadow-blockShadow w-1/3 lg:w-full md:h-96 sm:!h-40">
          <div className="flex flex-col gap-y-6">
            {/* fuel Row */}
            <div className="flex flex-row justify-between">
              <div>
                <div className="text-dashC text-lg font-dmsansBlck md:text-base">
                  Fuel Usage
                </div>
                <div className="text-white text-base pt-1 font-dmsansBlck sm:text-xs">
                  {"2903.89"} Ltr
                </div>
              </div>
              <div>
                <div className="text-dashC text-lg font-dmsansBlck md:text-base">
                  KM Driven
                </div>
                <div className="text-white text-base pt-1 font-dmsansBlck sm:text-xs">
                  {"2903.89"} Ltr
                </div>
              </div>
            </div>
            {/* Total Row */}
            <div className="flex flex-row justify-between">
              <div>
                <div className="text-dashC text-lg font-dmsansBlck md:text-base">
                  Fuel Usage
                </div>
                <div className="text-white text-base pt-1 font-dmsansBlck sm:text-xs">
                  {"2903.89"} Ltr
                </div>
              </div>
              <div>
                <div className="text-dashC text-lg font-dmsansBlck md:text-base">
                  KM Driven
                </div>
                <div className="text-white text-base pt-1 font-dmsansBlck sm:text-xs">
                  {"2903.89"} Ltr
                </div>
              </div>
            </div>
            {/* Car Block */}
            <div className="flex flex-row justify-center relative pt-3 w-full">
              <div className="absolute opacity-0 lg:-top-48 sm:!-top-36" ref={autoWagen}>
                <Image src={"/imgs/ferrari.png"} width={316} height={615} className="md:w-56 sm:!w-20" alt="Car-Service"/>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-6 w-2/3 lg:w-full">
          {/* Activity */}
          <div className="flex flex-col gap-y-2 bg-dashbg px-6 pt-4 pb-4 rounded-xl shadow-blockShadow w-full">
            <div className="text-white text-lg pt-1 font-dmsansBlck">
              Activity
            </div>
            <div className="w-full">
              <ActivityCharts />
            </div>
          </div>
          <div className="flex flex-row gap-x-3 w-full md:flex-col gap-y-3">
            {/* Noties */}
            <div className="flex flex-col bg-dashbg px-4 pt-4 pb-2 rounded-xl shadow-blockShadow w-1/2 md:w-full">
              <div className="text-white text-lg px-3 pt-1 font-dmsansBlck md:text-base">
                Notes
              </div>
              <div>
                <List>
                  {/* message */}
                  <ListItem sx={{padding:"0.5em 0em"}}>
                    <ListItemIcon>
                      <MobMssge />
                    </ListItemIcon>
                    <ListItemText
                  primary={<span className="text-white font-dmsansReg text-base">Monday, 6th Apirl 2020</span>}
                  secondary={<div className="flex flex-col gap-y-3">
                    <div>
                      <span className="text-dashC font-dmsansReg text-sm">Book for General Service</span>
                    </div>
                    <div>
                      <Chip label="completed" sx={{fontSize:"12px", backgroundColor:"#70CF97", color:"#fff"}} className="uppercase rounded-md font-dmsansBlck" />
                    </div>
                  </div>}
                />
                  </ListItem>
                  <ListItem sx={{padding:"0.5em 0em"}}>
                    <ListItemIcon>
                      <IMark />
                    </ListItemIcon>
                    <ListItemText
                  primary={<span className="text-white font-dmsansReg text-base">
                    Thursday, 24th October 2021
                  </span>}
                  secondary={<div className="flex flex-col gap-y-3">
                    <div>
                      <span className="text-dashC font-dmsansReg text-sm">
                        Vehicle LV 001 has been marked for recall.
                      </span>
                    </div>
                    <div>
                      <Chip label="14:07-21/11/2021" sx={{fontSize:"12px", color:"#fff", background:"#2B2E38"}} className="uppercase rounded-md font-dmsansBlck" />
                    </div>
                  </div>}
                />
                  </ListItem>
                  <ListItem sx={{padding:"0.5em 0em"}}>
                    <ListItemIcon>
                      <ServIcon />
                    </ListItemIcon>
                    <ListItemText
                  primary={<span className="text-white font-dmsansReg text-base">
                    Monday, 13th August 2018
                  </span>}
                  secondary={<div className="flex flex-col gap-y-3">
                    <div>
                      <span className="text-dashC font-dmsansReg text-sm">
                        Maintenance Completed, Collect
                      </span>
                    </div>
                    <div>
                      <Chip label="14:07-21/11/2021" sx={{fontSize:"12px", color:"#fff", backgroundColor:"#2B2E38"}} className="uppercase rounded-md font-dmsansBlck" />
                    </div>
                  </div>}
                />
                  </ListItem>
                </List>
              </div>
            </div>
            {/* sensors */}
            <div className="flex flex-col gap-y-2 bg-dashbg px-4 pt-4 pb-2 rounded-xl shadow-blockShadow w-1/2 md:w-full">
              <div className="text-white text-lg px-3 pt-1 font-dmsansReg md:text-base">
                Available Sensors
              </div>
              <div className="w-full">
                <List sx={{width: '100%'}}>
                  {asetts?.map((x) => {
                  const labelId = `checkbox-list-label-${x.id}`;
                  
                  return (
                  <ListItem
                  key={x.id}
                  secondaryAction={
                  <IconButton edge="end" aria-label="lineCharts">
                    {x.icon}
                  </IconButton>
                  }
                  disablePadding
                  >
                  <ListItemButton
                  role={undefined}
                  onClick={(e) => {
                    handleToggle(x.id)(e);
                    setValue(() => x.id)
                  }}
                  dense
                  >
                    <ListItemIcon
                    sx={{minWidth:"0px"}}>
                    <Checkbox 
                    edge="start"
                    checked={checked.includes(x.id)}
                    sx={{color: "#808191", '&.Mui-checked':{color: '#FF6370'}}}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                    />
                    </ListItemIcon>
                  <ListItemText id={labelId} primary={<span className="text-white font-dmsansBlck text-sm">{x.label}</span>} />
                  </ListItemButton>
                  </ListItem>
                  )
                  })}
                </List>
              </div>
            </div>
          </div>
          <div className="bg-dashbg py-1 px-3 rounded-lg">
            <div className="w-full">
            <TableContainer 
            component={Paper} 
            sx={{backgroundColor:"#242731", border:"0px", boxShadow:"none"}}>
              <Table aria-label="collapsible table" sx={{backgroundColor:"#242731", border:"0px", '& .MuiTableCell-root':{padding:"0.8em 0.5em"}}}>
                <TableBody>
                  <TableRow sx={{ "& td": { padding: "1em 0em", borderColor:"#808191"} }}>
                    <TableCell align="left">
                      <span className="text-dashC font-dmsansBold text-base md:text-sm">Description</span>
                    </TableCell>
                    <TableCell align="left">
                      <span className="text-dashC font-dmsansBold text-base md:text-sm sm:!hidden">Due</span>
                    </TableCell>
                    <TableCell align="left">
                      <span className="text-dashC font-dmsansBold text-base md:text-sm">Overdue</span>
                    </TableCell>
                    <TableCell align="left">
                      <span className="text-dashC font-dmsansBold text-base md:text-sm sm:!hidden">Notify</span>
                    </TableCell>
                    <TableCell align="left">
                      <span className="text-dashC font-dmsansBold text-base md:text-sm">Status</span>
                    </TableCell>
                  </TableRow>
                  {/* 2ndRow */}
                  <TableRow sx={{ "& td": { padding: "1em 0em", borderColor:"#808191"} }}>
                    <TableCell align="left">
                      <span className="text-white font-dmsansReg text-sm md:text-sm sm:!text-xs">Urgent Safety Recall</span>
                    </TableCell>
                    <TableCell align="left">
                      <span className="text-white font-dmsansReg text-sm md:text-sm sm:!hidden">06/04/2022</span>
                    </TableCell>
                    <TableCell align="left">
                      <span className="text-white font-dmsansReg text-sm md:text-sm sm:!text-xs">08/04/2022</span>
                    </TableCell>
                    <TableCell align="left">
                      <span className="text-white font-dmsansReg text-sm md:text-sm sm:!hidden">David Demo</span>
                    </TableCell>
                    <TableCell align="left">
                      <span className="text-white font-dmsansReg text-sm md:text-sm sm:!text-xs">Completed</span>
                    </TableCell>
                  </TableRow>
                  {/* 3rdRow */}
                  <TableRow sx={{ "& td": { padding: "1em 0em", borderColor:"#808191"} }}>
                    <TableCell align="left">
                      <span className="text-white font-dmsansReg text-sm md:text-sm sm:!text-xs">Urgent Safety Recall</span>
                    </TableCell>
                    <TableCell align="left">
                      <span className="text-white font-dmsansReg text-sm md:text-sm sm:!hidden">06/04/2022</span>
                    </TableCell>
                    <TableCell align="left">
                      <span className="text-white font-dmsansReg text-sm md:text-sm sm:!text-xs">08/04/2022</span>
                    </TableCell>
                    <TableCell align="left">
                      <span className="text-white font-dmsansReg text-sm md:text-sm sm:!hidden">David Demo</span>
                    </TableCell>
                    <TableCell align="left">
                      <span className="text-white font-dmsansReg text-sm md:text-sm sm:!text-xs">Completed</span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Assets;