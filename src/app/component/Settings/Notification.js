import { Button, Divider } from "@mui/material";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from "react";

const Notification = () => {

  const updateNotification = (e) => {
    e.preventDefault();
  }

  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(true);

  return (
    <div className="flex flex-col gap-y-3 w-full">
      {/* header */}
      <div className="flex flex-col gap-y-2 w-full">
        <div className="text-white font-dmsansBlck text-xl tracking-wide capitalize">
          Update Notifications
        </div>
        <div className="text-dashC font-dmsansReg text-sm tracking-wide capitalize">
          Update your notifications and security settings
        </div>
      </div>
      <Divider sx={{background:"#323745"}} />
      <div className="flex flex-col gap-y-3 w-full">
        <form onSubmit={updateNotification}>
          <div className="flex flex-col gap-x-4 w-full">
            {/* Update security */}
            <div className="flex flex-col gap-y-3 w-full">
              <div className="text-white font-dmsansBlck text-base">
                Two-factor Authentication
              </div>
              <div>
                <FormControlLabel
                value="Enable or disable two factor authentication"
                control={<Switch 
                  sx={{
                  "&.MuiSwitch-root":{
                    width:"75px",
                    height:"50px",
                  },
                  "& .MuiSwitch-track":{
                    border:"2px solid #242731",
                    borderRadius: "15px",
                    backgroundColor:"#DFEAF2"
                  },
                  "& .MuiSwitch-switchBase":{
                    color:"#fff !important",
                    padding:"15px !important"
                  },
                  "& .Mui-checked":{
                    color:"#fff !important"
                  },
                  "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track":{
                    backgroundColor:"#F84F56",
                    opacity: '1'
                  },
                  "& .MuiSwitch-switchBase.Mui-checked":{
                    padding:"15px 20px !important"
                  }
                }} 
                disableRipple={true}
                checked={switch1}
                onChange={() => setSwitch1(!switch1)}
                />}
                label="Enable or disable two factor authentication"
                labelPlacement="end"
                sx={{
                  "& .MuiFormControlLabel-label":{
                    color:"#fff"
                  }
                }}
                />
              </div>
            </div>
            {/* Update Notification */}
            <div className="flex flex-col gap-y-3 w-full">
              <div className="text-white font-dmsansBlck text-base">
                Notification
              </div>
              <div>
                <FormControlLabel
                value="Enable or disable two factor authentication"
                control={<Switch 
                  sx={{
                  "&.MuiSwitch-root":{
                    width:"75px",
                    height:"50px",
                  },
                  "& .MuiSwitch-track":{
                    border:"2px solid #242731",
                    borderRadius: "15px",
                    backgroundColor:"#DFEAF2"
                  },
                  "& .MuiSwitch-switchBase":{
                    color:"#fff !important",
                    padding:"15px !important"
                  },
                  "& .Mui-checked":{
                    color:"#fff !important"
                  },
                  "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track":{
                    backgroundColor:"#F84F56",
                    opacity: '1'
                  },
                  "& .MuiSwitch-switchBase.Mui-checked":{
                    padding:"15px 20px !important"
                  }
                }} 
                disableRipple={true}
                checked={switch2}
                onChange={() => setSwitch2(!switch2)}
                />}
                label="Enable or disable Notification"
                labelPlacement="end"
                sx={{
                  "& .MuiFormControlLabel-label":{
                    color:"#fff"
                  }
                }}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* update notifications */}
      <div className="flex justify-end w-full">
        <Button
        sx={{
          background:"transparent",
          textTransform:"capitalize",
          '&:hover':{
            background:"transparent"
          }
        }}
        type="submit">
          <span className="text-breakC font-dmsansBlck text-base">update</span>
        </Button>
      </div>
      </div>
  )
}

export default Notification;