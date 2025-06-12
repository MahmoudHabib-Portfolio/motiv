import ElectricIcon from "@/app/assets/icons/ElectricIcon";
import EnergyLevel from "@/app/assets/Svgs/EnergyLevel";
import Flickity from "react-flickity-component";
import 'flickity/dist/flickity.min.css';
import RangeLevel from "@/app/assets/Svgs/RangeLevel";
import CordinateIcon from "@/app/assets/icons/CordinateIcon";
import BreakLevel from "@/app/assets/Svgs/BreakLevel";
import DropWater from "@/app/assets/icons/DropWater";
import WheelIcon from "@/app/assets/icons/WheelIcon";
import TireLevel from "@/app/assets/Svgs/TireLevel";
import MilesStatistics from "./Charts/MilesStatistics";
import CarStatistics from "./Charts/CarStatistics";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import RecycleIcon from "@/app/assets/icons/RecycleIcon";
import Image from "next/image";
import BatteryIcon from "@/app/assets/icons/BatteryIcon";
import EngineIcon from "@/app/assets/icons/EngineIcon";
import ElectricSign from "@/app/assets/icons/ElectricSign";
import { motion } from "framer-motion";

const Dashboard = () => {

  const flickityOptions = {
    initialIndex: 0,
    pageDots: false,
    groupCells: true,
    draggable: true,
    contain: true,
    freeScroll: true,
    prevNextButtons: false,
}

  return (
    <div className="flex flex-col gap-y-6 w-full">
      {/* Levels */}
      <div className="w-full">
      <Flickity
          className={'carousel'}
          elementType={'div'}
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
          >
          {/* Energy Level */}
          <div className="flex flex-col gap-y-3 mx-2 bg-dashbg rounded-xl items-center text-center py-3 px-4 hover:bg-levelHover transition-all duration-200 ease-out w-1/4 md:w-1/2 sm:!w-full">
            <div>
              <ElectricIcon />
            </div>
            <div className="text-white font-dmsansBold text-lg pb-3 md:text-base">
              Energy
            </div>
            <div>
              <EnergyLevel />
            </div>
          </div>
          {/* Range Level */}
          <div className="flex flex-col gap-y-3 mx-1 bg-dashbg rounded-xl items-center text-center py-3 px-4 hover:bg-levelHover transition-all duration-200 ease-out w-1/4 md:w-1/2 sm:!w-full">
            <div>
              <CordinateIcon />
            </div>
            <div className="text-rangeC font-dmsansBold text-lg pb-3 md:text-base">
              Range
            </div>
            <div>
              <RangeLevel />
            </div>
          </div>
          {/* Break Level */}
          <div className="flex flex-col gap-y-3 mx-2 bg-dashbg rounded-xl items-center text-center py-3 px-4 hover:bg-levelHover transition-all duration-200 ease-out w-1/4 md:w-1/2 sm:!w-full">
            <div>
              <DropWater />
            </div>
            <div className="text-breakC font-dmsansBold text-lg pb-3 md:text-base">
            Break fluid
            </div>
            <div>
              <BreakLevel />
            </div>
          </div>
          {/* wheel Level */}
          <div className="flex flex-col gap-y-3 mx-2 bg-dashbg rounded-xl items-center text-center py-3 px-4 hover:bg-levelHover transition-all duration-200 ease-out w-1/4 md:w-1/2 sm:!w-full">
            <div>
              <WheelIcon />
            </div>
            <div className="text-tireC font-dmsansBold text-lg pb-3 md:text-base">
            Tire Wear
            </div>
            <div>
              <TireLevel />
            </div>
          </div>
        
        </Flickity>
      </div>
      {/* statistics */}
      <div className="flex flex-row gap-x-6 w-full lg:flex-col gap-y-3">
        <div className="bg-dashbg px-6 pt-3 pb-2 rounded-xl w-1/2 lg:w-full">
          <div className="text-white font-dmsansBold capitalize text-lg">
          miles statistics
          </div>
          <div className="pt-3">
            <MilesStatistics />
          </div>
        </div>
        <div className="bg-dashbg px-6 pt-3 pb-2 rounded-xl w-1/2 lg:w-full">
          <div className="text-white font-dmsansBold capitalize text-lg">
          car statistics
          </div>
          <div>
            <CarStatistics />
          </div>
        </div>
      </div>
      {/* recommended */}
      <div className="flex flex-row gap-x-6 w-full med:flex-col gap-y-3">
      {/* Card1 */}
        <motion.div 
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{opacity: 1, y:"0%"}}
        viewport={{once: true, margin:"-10px"}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-goldenC py-3 px-8 rounded-xl w-full service">
          <div>
            <ListItem sx={{padding: "0px"}}>
              <ListItemAvatar sx={{minWidth:"30px"}}>
                <RecycleIcon />
              </ListItemAvatar>
              <ListItemText primary={<span className="font-dmsansBold text-base text-black lg:text-sm">64% Recommend</span>} />
            </ListItem>
          </div>
          <div className="flex justify-center py-1 w-full">
            <div>
              <Image 
              src={'/imgs/MiniCooper.png'} 
              width={257}
              height={106}
              priority={true}
              alt="MiniCooper"
            />
            </div>
          </div>
          {/* footer */}
          <div className="py-1">
            <div className="text-base text-black font-dmsansBlck capitalize lg:text-sm">
              mini cooper
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row gap-x-4 py-2">
                <div>
                  <BatteryIcon />
                </div>
                <div className="text-sm font-dmsansBlck text-gray-500">
                  132k
                </div>
                <div>
                  <EngineIcon />
                </div>
                <div>
                  <ElectricSign />
                </div>
              </div>
              <div className="text-sm font-dmsansBlck text-gray-500 leading-8">
                $32/h
              </div>
            </div>
          </div>
        </motion.div>
        {/* Card2 */}
        <motion.div 
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{opacity: 1, y:"0%"}}
        viewport={{once: true, margin:"-10px"}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-silvrC py-3 px-8 rounded-xl w-full service">
          <div>
            <ListItem sx={{padding: "0px"}}>
              <ListItemAvatar sx={{minWidth:"30px"}}>
                <RecycleIcon />
              </ListItemAvatar>
              <ListItemText primary={<span className="font-dmsansBold text-base text-black lg:text-sm">74% Recommend</span>} />
            </ListItem>
          </div>
          <div className="flex justify-center py-1 w-full">
            <div>
              <Image 
              src={'/imgs/porch911.png'} 
              width={248}
              height={106}
              priority={true}
              alt="MiniCooper"
            />
            </div>
          </div>
          {/* footer */}
          <div className="py-1">
            <div className="text-base text-black font-dmsansBlck capitalize lg:text-sm">
              Porsche 911 Carrera
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row gap-x-4 py-2">
                <div>
                  <BatteryIcon />
                </div>
                <div className="text-sm font-dmsansBlck text-gray-500">
                  130k
                </div>
                <div>
                  <EngineIcon />
                </div>
                <div>
                  <ElectricSign />
                </div>
              </div>
              <div className="text-sm font-dmsansBlck text-gray-500 leading-8">
                $28/h
              </div>
            </div>
          </div>
        </motion.div>
        {/* Card3 */}
        <motion.div 
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{opacity: 1, y:"0%"}}
        viewport={{once: true, margin:"-10px"}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-roseC py-3 px-8 rounded-xl w-full service">
          <div>
            <ListItem sx={{padding: "0px"}}>
              <ListItemAvatar sx={{minWidth:"30px"}}>
                <RecycleIcon />
              </ListItemAvatar>
              <ListItemText primary={<span className="font-dmsansBold text-base text-black lg:text-sm">74% Recommend</span>} />
            </ListItem>
          </div>
          <div className="flex justify-center py-1 w-full">
            <div>
              <Image 
              src={'/imgs/mini-cooper-red.png'} 
              width={217}
              height={106}
              priority={true}
              alt="MiniCooper"
            />
            </div>
          </div>
          {/* footer */}
          <div className="py-1">
            <div className="text-base text-black font-dmsansBlck capitalize lg:text-sm">
              Porsche 911 Carrera
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row gap-x-4 py-2">
                <div>
                  <BatteryIcon />
                </div>
                <div className="text-sm font-dmsansBlck text-gray-500">
                  130k
                </div>
                <div>
                  <EngineIcon />
                </div>
                <div>
                  <ElectricSign />
                </div>
              </div>
              <div className="text-sm font-dmsansBlck text-gray-500 leading-8">
                $28/h
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Dashboard;