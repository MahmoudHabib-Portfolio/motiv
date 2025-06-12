import BookedIcon from "@/app/assets/icons/BookedIcon";
import CurrentBadge from "@/app/assets/icons/CurrentBadge";
import CurrentStation from "@/app/assets/icons/CurrentStation";
import DangerBadge from "@/app/assets/icons/DangerBadge";
import OrderCircle from "@/app/assets/icons/OrderCircle";
import ReadyIcon from "@/app/assets/icons/ReadyIcon";
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import SuccessBadge from "@/app/assets/icons/SuccessBadge";
import { Button, List, ListItem, ListItemIcon, ListItemText, Radio } from "@mui/material";
import CustomVerticalStepper from "./CustomVerticalStepper";
import Image from "next/image";

const BorderLinearProgress01 = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[800], //error on this line 
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#A162F7',
    ...theme.applyStyles('dark', {
      backgroundColor: '#2B2E38',
    }),
  },
}));

const BorderLinearProgress02 = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[800],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#70CF97',
    ...theme.applyStyles('dark', {
      backgroundColor: '#2B2E38',
    }),
  },
}));

const BorderLinearProgress03 = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[800],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#F6CC0D',
    ...theme.applyStyles('dark', {
      backgroundColor: '#2B2E38',
    }),
  },
}));

const BorderLinearProgress04 = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[800],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#FF764C',
    ...theme.applyStyles('dark', {
      backgroundColor: '#2B2E38',
    }),
  },
}));

const Services = () => {
  return (
    <div className="flex flex-col gap-y-3 w-full">
      <div className="flex flex-row gap-x-6 w-full med:flex-col gap-y-3">
      <div className="flex flex-col gap-y-3 w-3/5 med:w-full">
        <div className=" text-white font-dmsansBold text-xl lg:text-lg">
          Service Station
        </div>
        <div className="flex flex-col gap-y-3 w-full">
        <div className="flex flex-row gap-x-4 w-full xl:flex-col gap-y-2">
          <div className="flex flex-row justify-between w-full">
            <div className="text-white bg-dashbg py-4 px-3 rounded-md font-dmsansBold text-base cursor-pointer hover:bg-breakC lg:text-sm">
              A1
            </div>
            <div className="text-white bg-dashbg py-4 px-3 rounded-md font-dmsansBold text-base cursor-pointer hover:bg-breakC lg:text-sm">
              A2
            </div>
            <div className="text-white bg-dashbg py-4 px-3 rounded-md font-dmsansBold text-base cursor-pointer hover:bg-breakC lg:text-sm">
              A3
            </div>
            <div className="text-white bg-rangeC shadow-servState py-4 px-3 rounded-md font-dmsansBold text-base lg:text-sm">
              A4
            </div>
            <div className="text-white bg-dashbg py-4 px-3 rounded-md font-dmsansBold text-base cursor-pointer hover:bg-breakC lg:text-sm">
              A5
            </div>
          </div>
          <div className="flex flex-row justify-between w-full">
            <div className="text-white bg-dashbg py-4 px-3 rounded-md font-dmsansBold text-base cursor-pointer hover:bg-breakC lg:text-sm">
              A6
            </div>
            <div className="text-white bg-dashbg py-4 px-3 rounded-md font-dmsansBold text-base cursor-pointer hover:bg-breakC lg:text-sm">
              A7
            </div>
            <div className="text-white bg-dashbg py-4 px-3 rounded-md font-dmsansBold text-base cursor-pointer hover:bg-breakC lg:text-sm">
              A8
            </div>
            <div className="text-white bg-dashbg py-4 px-3 rounded-md font-dmsansBold text-base cursor-pointer hover:bg-breakC lg:text-sm">
              A9
            </div>
            <div className="text-white bg-rangeC shadow-servState py-4 px-3 rounded-md font-dmsansBold text-base lg:text-sm">
              A10
            </div>
          </div>
        </div>
          <div className="flex flex-row gap-x-4 w-full xl:flex-col gap-y-2">
            <div className="flex flex-row justify-between w-full">
            <div className="text-white bg-rangeC shadow-servState py-4 px-3 rounded-md font-dmsansBold text-base lg:text-sm">
              B1
            </div>
            <div className="text-white bg-dashbg py-4 px-3 rounded-md font-dmsansBold text-base cursor-pointer hover:bg-breakC lg:text-sm">
              B2
            </div>
            <div className="text-white bg-dashbg py-4 px-3 rounded-md font-dmsansBold text-base cursor-pointer hover:bg-breakC lg:text-sm">
              B3
            </div>
            <div className="text-white bg-dashbg py-4 px-3 rounded-md font-dmsansBold text-base cursor-pointer hover:bg-breakC lg:text-sm">
              B4
            </div>
            <div className="text-white bg-dashbg py-4 px-3 rounded-md font-dmsansBold text-base cursor-pointer hover:bg-breakC lg:text-sm">
              B5
            </div>
          </div>
          <div className="flex flex-row justify-between w-full">
            <div className="text-white bg-dashbg py-4 px-3 rounded-md font-dmsansBold text-base cursor-pointer hover:bg-breakC lg:text-sm">
              B6
            </div>
            <div className="text-white bg-rangeC shadow-servState py-4 px-3 rounded-md font-dmsansBold text-base lg:text-sm">
              B7
            </div>
            <div className="text-white bg-dashbg py-4 px-3 rounded-md font-dmsansBold text-base cursor-pointer hover:bg-breakC lg:text-sm">
              B8
            </div>
            <div className="text-white bg-breakC py-4 px-3 rounded-md font-dmsansBold text-base cursor-pointer lg:text-sm">
              B9
            </div>
            <div className="text-white bg-dashbg py-4 px-3 cursor-pointer rounded-md font-dmsansBold text-base hover:bg-breakC lg:text-sm">
              B10
            </div>
          </div>
          </div>
          <div className="flex flex-row justify-center gap-x-6 w-full">
            <div>
              <ListItem sx={{padding:"0px"}}>
                <ListItemIcon sx={{minWidth:"20px"}}>
                  {<ReadyIcon />}
                </ListItemIcon>
                <ListItemText primary={<div className="text-sm text-white font-dmsansReg">
              Ready
            </div>} />
              </ListItem>
            </div>
            <div>
              <ListItem sx={{padding:"0px"}}>
                <ListItemIcon sx={{minWidth:"20px"}}>
                  {<BookedIcon />}
                </ListItemIcon>
                <ListItemText primary={<div className="text-sm text-white font-dmsansReg">
              Booked
            </div>} />
              </ListItem>
            </div>
            <div>
              <ListItem sx={{padding:"0px"}}>
                <ListItemIcon sx={{minWidth:"20px"}}>
                  {<CurrentStation />}
                </ListItemIcon>
                <ListItemText primary={<div className="text-sm text-white font-dmsansReg">
              Current Station
            </div>} />
              </ListItem>
            </div>
          </div>
        </div>
        {/* Booking Service */}
        <div className="flex flex-col gap-y-3 w-full">
          <div className="flex flex-row gap-x-4 w-full sm:flex-col gap-y-3">
            <div className="flex flex-col gap-y-3 bg-dashbg rounded-md items-center py-8 px-3 w-2/5 sm:w-full">
              <div className="text-white capitalize font-dmsansBold text-xl lg:text-base">
                your order
              </div>
              <div>
                <OrderCircle />
              </div>
            </div>
            <div className="flex flex-col gap-y-3 w-3/5 sm:w-full">
            <div className="flex flex-row justify-between bg-dashbg rounded-md py-4 px-3">
              <div>
                <ListItem sx={{padding:"0px"}}>
                <ListItemIcon sx={{minWidth:"25px"}}>
                 <SuccessBadge />
                </ListItemIcon>
                <ListItemText primary={<div className="text-base text-white font-dmsansBlck lg:text-sm">
              Brake fluid change
            </div>} />
              </ListItem>
              </div>
              <div className="bg-badge rounded-md py-2 px-3 text-center text-breakC font-dmsansBold">
                ${"32"}
              </div>
            </div>
            <div className="flex flex-row justify-between bg-dashbg rounded-md py-4 px-3">
              <div>
                <ListItem sx={{padding:"0px"}}>
                <ListItemIcon sx={{minWidth:"25px"}}>
                  <DangerBadge />
                </ListItemIcon>
                <ListItemText primary={<div className="text-base text-white font-dmsansBlck lg:text-sm">
              Diagnostics
            </div>} />
              </ListItem>
              </div>
              <div className="bg-badge rounded-md py-2 px-3 text-center text-breakC font-dmsansBold">
                ${"32"}
              </div>
            </div>
            <div className="flex flex-row justify-between bg-dashbg rounded-md py-4 px-3">
              <div>
                <ListItem sx={{padding:"0px"}}>
                <ListItemIcon sx={{minWidth:"25px"}}>
                  <CurrentBadge />
                </ListItemIcon>
                <ListItemText primary={<div className="text-base text-white font-dmsansBlck lg:text-sm">
              External Washing
            </div>} />
              </ListItem>
              </div>
              <div className="bg-badge rounded-md py-2 px-3 text-center text-breakC font-dmsansBold">
                ${"10"}
              </div>
            </div>
            <div>
              <Button
            fullWidth
            sx={{
              background:"transparent",
              padding:"0.5em 2em",
              border: "2px dashed #464155",
              color: "#fff",
              textAlign:"center",
              fontWeight:"800",
              borderRadius:"10px",
              textTransform:"capitalize",
              ':hover':{
                background:"#A162F7",
                border: "none"
              }
            }}
            className="font-dmsansBlck text-lg lg:text-base">
              Add Services
            </Button>
            </div>
            </div>
          </div>
          <div className="w-full">
            <Button
            fullWidth
            sx={{
              background:"#A162F7",
              padding:"0.5em 2em",
              color: "#fff",
              textAlign:"center",
              fontWeight:"800",
              borderRadius:"10px",
              textTransform:"capitalize",
              ':hover':{
                background:"#A162F7"
              }
            }}
            className="font-dmsansBlck text-lg lg:text-base">
              Pay ${"86"}
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-3 w-2/5 med:flex-row med:gap-x-6 med:w-full sm:!flex-col">
        <div>
          <div className=" text-white font-dmsansBold text-xl lg:text-base">
          Service Required
        </div>
        <div className="bg-dashbg rounded-lg p-3 w-full">
          <CustomVerticalStepper />
        </div>
        </div>
        <div className="flex flex-col pt-2 gap-y-3">
          <div className=" text-white font-dmsansBold text-xl lg:text-base">
          Service Schedule
          </div>
          <div>
            <List>
              <ListItem sx={{padding:"6px 0px"}}>
                <ListItemIcon sx={{minWidth:"54px"}}>
                  <Radio 
                  sx={{color:"#808191",
                    '&.Mui-checked':{
                      color: "#A162F7"
                    }
                  }}
                  checked={true}
                  />
                </ListItemIcon>
                <ListItemText 
                    primary={<span className="text-base text-white font-dmsansBold sm:text-sm">
                      Upgrade your favorite car periodically
                    </span>}
                    secondary={<div className="flex flex-row gap-x-6 pt-2">
                      <div className="text-dashC text-sm font-dmsansReg">
                        Today, 10.00
                      </div>
                      <div className="text-dashC text-sm font-dmsansReg">
                        Fix Price : $1,200
                      </div>
                    </div>}
                  />
              </ListItem>
              <ListItem sx={{padding:"6px 0px"}}>
                <ListItemIcon sx={{minWidth:"54px"}}>
                  <Radio 
                  sx={{color:"#808191",
                    '&.Mui-checked':{
                      color: "#A162F7"
                    }
                  }}
                  disabled={true}
                  />
                </ListItemIcon>
                <ListItemText 
                    primary={<span className="text-base text-white font-dmsansBold sm:text-sm">
                      Buy spare parts for Suspension
                    </span>}
                    secondary={<div className="flex flex-row gap-x-6 pt-2">
                      <div className="text-dashC text-sm font-dmsansReg">
                        Today, 14.00
                      </div>
                      <div className="text-dashC text-sm font-dmsansReg">
                        Fix Price : $1,400
                      </div>
                    </div>}
                  />
              </ListItem>
            </List>
          </div>
        </div>

      </div>
    </div>
      {/* Services */}
      <div className="flex flex-col gap-y-6 justify-between bg-dashbg rounded-lg py-3 px-12 w-full">
        <div className="grid grid-cols-4 gap-y-6 lg:flex-row justify-between w-full lg:grid-cols-2 sm:!grid-cols-1">
        {/* row1 */}
        <div className="flex flex-col gap-y-1 w-full">
          <div>
            <Image src={"/imgs/oilLevel.png"} width={73} height={44} alt="oil change"/>
          </div>
          <div className="text-white font-dmsansBlck text-base text-left">
            Oil Level
          </div>
          <div className="flex flex-row gap-x-2">
            <div className="text-dashC capitalize text-sm font-dmsansReg">
              engine
            </div>
            <div className="text-dashC text-sm">
              &#10072;
            </div>
            <div className="text-dashC capitalize text-sm font-dmsansReg">
              {"don't engine"}
            </div>
          </div>
          {/* Engine Level */}
          <div className="pt-2 w-3/4">
            <BorderLinearProgress01 variant="determinate" value={75} />
          </div>
        </div>

        <div className="flex flex-col gap-y-1 w-full">
          <div>
            <Image src={"/imgs/brakePads.png"} width={73} height={44} alt="oil change"/>
          </div>
          <div className="text-white font-dmsansBlck text-base text-left">
            Brake Pads
          </div>
          <div className="flex flex-row gap-x-2">
            <div className="text-dashC capitalize text-sm font-dmsansReg">
              Wheels
            </div>
            <div className="text-dashC text-sm">
              &#10072;
            </div>
            <div className="text-dashC capitalize text-sm font-dmsansReg">
              Still Good
            </div>
          </div>
          {/* Engine Level */}
          <div className="pt-2 w-3/4">
            <BorderLinearProgress02 variant="determinate" value={25} />
          </div>
        </div>
        {/* row2 */}
        <div className="flex flex-col gap-y-1 w-full">
          <div>
            <Image src={"/imgs/steering.png"} width={73} height={44} alt="oil change"/>
          </div>
          <div className="text-white font-dmsansBlck text-base text-left">
            Steering
          </div>
          <div className="flex flex-row gap-x-2">
            <div className="text-dashC capitalize text-sm font-dmsansReg">
              Drivetrain
            </div>
            <div className="text-dashC text-sm">
              &#10072;
            </div>
            <div className="text-dashC capitalize text-sm font-dmsansReg">
              Need Change
            </div>
          </div>
          {/* Engine Level */}
          <div className="pt-2 w-3/4">
            <BorderLinearProgress03 variant="determinate" value={15} />
          </div>
        </div>

        <div className="flex flex-col gap-y-1 w-full">
          <div>
            <Image src={"/imgs/oilLevel.png"} width={73} height={44} alt="oil change"/>
          </div>
          <div className="text-white font-dmsansBlck text-base text-left">
            Oil Level
          </div>
          <div className="flex flex-row gap-x-2">
            <div className="text-dashC capitalize text-sm font-dmsansReg">
              Engine
            </div>
            <div className="text-dashC text-sm">
              &#10072;
            </div>
            <div className="text-dashC capitalize text-sm font-dmsansReg">
              Don’t Replace
            </div>
          </div>
          {/* Engine Level */}
          <div className="pt-2 w-3/4">
            <BorderLinearProgress04 variant="determinate" value={80} />
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Services;