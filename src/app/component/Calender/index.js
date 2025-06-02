import { useEffect, useState } from "react";
import Select from '@mui/material/Select';
import { IconButton, MenuItem } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { LuCalendarRange } from "react-icons/lu";
import gsap from "gsap";
import DatePick from "./DatePick";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const Calender = () => {

    const [age, setAge] = useState('');

    const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    const slots = document.querySelectorAll('.slots');
    gsap.fromTo(slots, 
      {x:"-100%", autoAlpha:"0", duration: 1, ease:"power3.inOut"},
       {x:"0%", autoAlpha:"1", duration: 1, ease:"power3.inOut"});
  }, []);

  return (
    <div className="flex flex-row gap-x-3 w-full lg:flex-col gap-y-3">
      
      {/* Calender&Evnts */}
      <div className="flex flex-col gap-y-3 w-2/5 lg:w-full">
        <div className="text-white font-dmsansBlck text-2xl md:text-lg">
          Calender
        </div>
        <div className="flex flex-col gap-y-3 w-full">
        {/* Events */}
        <div className="flex flex-col gap-y-2 bg-dashbg px-4 py-5 rounded-xl w-full med:w-full">
          <DatePick />
        </div>
        {/* Upcoming Events */}
        <div className="flex flex-col gap-y-2 bg-dashbg px-4 py-5 rounded-xl w-full med:w-full">
          <div className="text-white font-dmsansBlck text-xl md:text-base">
            Upcoming Events
          </div>
            <div className="flex flex-col gap-y-3 w-full">
	          {/* row1 */}
            <div className="flex flex-row gap-x-3 py-1 w-full sm:gap-x-0">
            <div className="border-r-dashC border-solid text-dashC font-dmsansReg border-r-2 w-1/6 md:text-sm text-left">
              {"08:00"}
            </div>
            <div className="p-2 w-full overflow-hidden">
              <div className="flex flex-row justify-between py-2 px-3 rounded-2xl bg-breakC w-full">
                <div className="w-full">
                  <div className="text-base text-white font-dmsansReg md:text-sm">
                    {"Drift Series Firs Round"}
                  </div>
                 <div className="flex flex-row justify-between w-full">
                   <div className="text-base text-white font-dmsansReg md:text-sm">
                    {"JDM"}
                  </div>
                  <div>
                    <AvatarGroup max={3} sx={{ width: 26, height: 26 }}>
                    <Avatar sx={{ width: 26, height: 26 }} alt="Remy Sharp" src="/imgs/Killan-James.png" />
                    <Avatar sx={{ width: 26, height: 26 }} alt="Travis Howard" src="/imgs/Aditya.png" />
                    <Avatar sx={{ width: 26, height: 26 }} alt="Cindy Baker" src="/imgs/Aditya.png" />
                    <Avatar sx={{ width: 26, height: 26 }} alt="Agnes Walker" src="/imgs/AhmedMedi.png" />
                    <Avatar sx={{ width: 26, height: 26 }} alt="Trevor Henderson" src="/imgs/MilieNose.png" />
                    <Avatar sx={{ width: 26, height: 26 }} alt="Trevor Henderson" src="/imgs/MilieNose.png" />
                  </AvatarGroup>
                  </div>
                 </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* row2 */}
          <div className="flex flex-row gap-x-3 py-1 w-full sm:gap-x-0">
            <div className="border-r-dashC border-solid text-dashC font-dmsansReg border-r-2 w-1/6 md:text-sm">
              {"12:00"}
            </div>
            <div className="p-2 w-full overflow-hidden">
              <div className="flex flex-row justify-between py-2 px-3 rounded-2xl bg-Greenbg w-full">
                <div className="w-full">
                  <div className="text-base text-white font-dmsansReg md:text-sm">
                    {"Drift Series Firs Round"}
                  </div>
                 <div className="flex flex-row justify-between w-full">
                   <div className="text-base text-white font-dmsansReg md:text-sm">
                    {"JDM"}
                  </div>
                  <div>
                    <AvatarGroup max={3} sx={{ width: 26, height: 26 }}>
                    <Avatar sx={{ width: 26, height: 26 }} alt="Remy Sharp" src="/imgs/Killan-James.png" />
                    <Avatar sx={{ width: 26, height: 26 }} alt="Travis Howard" src="/imgs/Aditya.png" />
                    <Avatar sx={{ width: 26, height: 26 }} alt="Cindy Baker" src="/imgs/Aditya.png" />
                    <Avatar sx={{ width: 26, height: 26 }} alt="Agnes Walker" src="/imgs/AhmedMedi.png" />
                    <Avatar sx={{ width: 26, height: 26 }} alt="Trevor Henderson" src="/imgs/MilieNose.png" />
                    <Avatar sx={{ width: 26, height: 26 }} alt="Trevor Henderson" src="/imgs/MilieNose.png" />
                  </AvatarGroup>
                  </div>
                 </div>
                </div>

              </div>
            </div>
          </div>
          {/* row3 */}

        </div>
        </div>

      </div>
      {/* Date Booking */}
      <div className="flex flex-col gap-y-11 w-3/5 lg:w-full">
      <div>
      </div>
        <div className="flex flex-col gap-y-2 bg-dashbg pb-4 rounded-xl overflow-hidden">
          <div
           className="flex flex-row justify-between bg-calendHead py-4 px-5 rounded-tr-xl rounded-tl-xl w-full sm:px-2">
            <div>
              <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              MenuProps={{
                PaperProps:{
                  sx:{
                    backgroundColor: '#242731',
                    boxShadow: "0px 2px 7px rgba(91, 91, 91, 0.04)",
                    color:'#fff'
                  }
                }
              }}
              sx={{
                  fontSize: "14px",
                  padding: "6px 8px",
                  color: "#fff",
                  borderRadius: "10px",
                  background: "#549CFD",
                  boxShadow: "0px 2px 7px rgba(91, 91, 91, 0.04)",
                  '& .MuiSelect-select': {
                      padding: '6px 12px',
                      background: "#549CFD",
                      boxShadow: "0px 2px 7px rgba(91, 91, 91, 0.04)"
                  },
                  '& .MuiSelect-icon': {
                      color: '#fff',
                      fontWeight:"800",
                      fontSize:"18px"
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: '0px !important'
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    border: '0px !important'
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    border: '0px !important'
                  }
              }}
              IconComponent={IoIosArrowDown}
              variant="outlined"
              >
              <MenuItem value="">
                Day
              </MenuItem>
              <MenuItem value={10}>Week</MenuItem>
              <MenuItem value={20}>Month</MenuItem>
            </Select>
            </div>
            <div className="flex flex-row bg-calendSlect gap-x-3 rounded-md py-2 px-4">
              <div className="py-1">
                <LuCalendarRange className="text-white font-dmsansBlck" />
              </div>
              <div className="text-white text-base font-dmsansReg leading-7">
                {"Mar 15, 2022"}
              </div>
            </div>
            <div className="flex flex-row bg-calendSlect gap-x-4 rounded-xl py-2 px-4">
              <div className="w-full">
                <IconButton className="p-0 w-full">
                  <FaAngleLeft className="text-base text-white"/>
                </IconButton>
              </div>
              <div className="w-full">
                <IconButton className="p-0">
                  <FaAngleRight className="text-base text-white" />
                </IconButton>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 w-full">
            {/* row1 */}
            <div className="flex flex-row gap-x-3 px-4 py-1 w-full sm:gap-x-0 sm:px-2">
            <div className="border-r-dashC border-solid text-dashC font-dmsansReg border-r-2 w-1/6 md:text-sm">
              {"08:00 AM"}
            </div>
            <div className="p-2 w-full overflow-hidden">
              <div className="flex flex-row justify-between py-2 px-3 rounded-2xl bg-breakC w-full opacity-0 slots">
                <div>
                  <div className="text-sm text-white font-dmsansReg">
                    {"08:00 am"}
                  </div>
                  <div className="text-sm text-white font-dmsansReg">
                    {"Moto Track Day"}
                  </div>
                  <div className="text-xs text-white font-dmsansReg">
                    {"All Motorbikes"}
                  </div>
                </div>
                <div className="text-sm text-white font-dmsansReg">
                    {"154K"}
                  </div>
              </div>
            </div>
          </div>
          {/* row2 */}
          <div className="flex flex-row gap-x-3 px-4 py-1 w-full sm:gap-x-0 sm:px-2">
            <div className="border-r-dashC border-solid text-dashC font-dmsansReg border-r-2 w-1/6 md:text-sm">
              {"09:00 AM"}
            </div>
            <div className="p-2 w-full overflow-hidden">
              <div className="flex flex-row justify-between py-2 px-3 rounded-2xl bg-shareRate w-full opacity-0 slots">
                <div>
                  <div className="text-lg text-white font-dmsansReg md:text-sm">
                    {"09:45"}
                  </div>
                  <div className="text-base text-white font-dmsansReg md:text-sm">
                    {"Drift Swries Second Round"}
                  </div>
                  <div className="text-lg text-white font-dmsansReg md:text-sm">
                    {"JDM"}
                  </div>
                </div>
                <div className="text-base text-white font-dmsansReg">
                    {"11h 45 min"}
                  </div>
              </div>
            </div>
          </div>
          {/* row3 */}
          <div className="flex flex-row gap-x-3 px-4 py-1 w-full sm:gap-x-0 sm:px-2">
            <div className="border-r-dashC border-solid text-dashC font-dmsansReg border-r-2 w-1/6 md:text-sm">
              {"11:00 AM"}
            </div>
            <div className="p-2 w-full overflow-hidden">
              <div className="flex flex-row gap-x-3 w-full opacity-0 slots">
                <div className="flex flex-row justify-between py-3 px-6 rounded-2xl bg-shareRate w-full">
                <div>
                  <div className="text-sm text-white font-dmsansReg">
                    {"10:45 am"}
                  </div>
                  <div className="text-base text-white font-dmsansBlck">
                    {"Moto Track Day"}
                  </div>
                  <div className="text-xs text-dashC font-dmsansReg">
                    {"All Motorbikes"}
                  </div>
                </div>
                <div className="text-sm text-white font-dmsansReg">
                    {"154K"}
                  </div>
              </div>
              <div className="flex flex-row justify-between py-3 px-6 rounded-2xl bg-shareRate w-full opacity-0 slots">
                <div>
                  <div className="text-sm text-white font-dmsansReg">
                    {"10:45 am"}
                  </div>
                  <div className="text-base text-white font-dmsansBlck">
                    {"Moto Track Day"}
                  </div>
                  <div className="text-xs text-dashC font-dmsansReg">
                    {"All Motorbikes"}
                  </div>
                </div>
                <div className="text-sm text-white font-dmsansReg">
                    {"58K"}
                  </div>
              </div>
              </div>
            </div>
          </div>
          {/* row4 */}
          <div className="flex flex-row gap-x-3 px-4 py-1 w-full sm:gap-x-0 sm:px-2">
            <div className="border-r-dashC border-solid text-dashC font-dmsansReg border-r-2 w-1/6 md:text-sm">
              {"01:00 PM"}
            </div>
            <div className="p-2 w-full overflow-hidden">
              <div className="flex flex-row justify-between py-2 px-3 rounded-2xl bg-Greenbg w-full opacity-0 slots">
                <div>
                  <div className="text-sm text-white font-dmsansReg">
                    {"01:00 pm"}
                  </div>
                  <div className="text-base text-white font-dmsansReg md:text-sm">
                    {"Moto Track Day"}
                  </div>
                  <div className="text-sm text-white font-dmsansReg md:text-sm">
                    {"All Motorbikes"}
                  </div>
                </div>
                <div className="text-base text-white font-dmsansReg">
                    {"145K"}
                  </div>
              </div>
            </div>
          </div>
          {/* row5 */}
          <div className="flex flex-row gap-x-3 px-4 py-1 w-full sm:gap-x-0 sm:px-2">
            <div className="border-r-dashC border-solid text-dashC font-dmsansReg border-r-2 w-1/6 md:text-sm">
              {"02:00 PM"}
            </div>
            <div className="p-2 w-full overflow-hidden">
              <div className="flex flex-row justify-between py-2 px-3 rounded-2xl bg-Orangebg w-full opacity-0 slots">
                <div>
                  <div className="text-sm text-white font-dmsansReg">
                    {"02:00 pm"}
                  </div>
                  <div className="text-base text-white font-dmsansReg md:text-sm">
                    {"Private Event"}
                  </div>
                  <div className="text-sm text-white font-dmsansReg">
                    {"All Motorbikes"}
                  </div>
                </div>
                <div className="text-base text-white font-dmsansReg">
                    {"134K"}
                  </div>
              </div>
            </div>
          </div>
          {/* row6 */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Calender;