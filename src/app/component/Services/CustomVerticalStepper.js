import BlueStepper from "@/app/assets/icons/BlueStepper";
import CenterCareIcon from "@/app/assets/icons/CenterCareIcon";
import DiagnosticIcon from "@/app/assets/icons/DiagnosticIcon";
import GreenStepper from "@/app/assets/icons/GreenStepper";
import InnerCleanIcon from "@/app/assets/icons/InnerCleanIcon";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

const CustomVerticalStepper = () => {
  return (
    <div>
      <List>
        <ListItem sx={{padding:"0px 0px"}}>
          <ListItemIcon sx={{minWidth:"65px"}}>
            <CenterCareIcon />
          </ListItemIcon>
          <ListItemText 
          primary={<span className="text-shareHead text-lg font-dmsansBlck lg:text-base">Center Care</span>}
          secondary={
            <div className="flex flex-row gap-x-6 py-1 w-full">
              <div className="text-white text-base font-dmsansBlck lg:text-sm">
                Price : $48
              </div>
              <div className="text-dashC text-sm font-dmsansReg">
                Processing : 1 hours
              </div>
            </div>
          }/>
        </ListItem>
        <div className="pl-5">
          <GreenStepper />
        </div>
        <ListItem sx={{padding:"8px 0px"}}>
          <ListItemIcon sx={{minWidth:"65px"}}>
            <DiagnosticIcon />
          </ListItemIcon>
          <ListItemText 
          primary={<span className="text-shareHead text-lg font-dmsansBlck lg:text-base">Diagnostics</span>}
          secondary={
            <div className="flex flex-row gap-x-6 py-1 w-full">
              <div className="text-white text-base font-dmsansBlck lg:text-sm">
                Price : $78
              </div>
              <div className="text-dashC text-sm font-dmsansReg">
                Processing : 2 hours
              </div>
            </div>
          }/>
        </ListItem>
        <div className="pl-5">
          <BlueStepper />
        </div>
        <ListItem sx={{padding:"8px 0px"}}>
          <ListItemIcon sx={{minWidth:"65px"}}>
            <InnerCleanIcon />
          </ListItemIcon>
          <ListItemText 
          primary={<span className="text-shareHead text-lg font-dmsansBlck lg:text-base">Inner Cleaning</span>}
          secondary={
            <div className="flex flex-row gap-x-6 py-1 w-full">
              <div className="text-white text-base font-dmsansBlck lg:text-sm">
                Price : $78
              </div>
              <div className="text-dashC text-sm font-dmsansReg">
                Processing : 1 hours
              </div>
            </div>
          }/>
        </ListItem>
      </List>
    </div>
  )
}

export default CustomVerticalStepper;