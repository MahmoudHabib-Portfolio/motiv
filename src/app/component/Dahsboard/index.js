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
    <div className="flex flex-col gap-y-3 justify-center w-full">
      {/* Levels */}
      <div className="w-full">
      <Flickity
          className={'carousel'}
          elementType={'div'}
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          >
        <div className="flex flex-row gap-x-3 w-full">
          {/* Energy Level */}
          <div className="flex flex-col gap-y-3 bg-dashbg rounded-xl items-center text-center py-3 px-4 hover:bg-levelHover transition-all duration-200 ease-out w-1/4 md:w-1/2 sm:w-full">
            <div>
              <ElectricIcon />
            </div>
            <div className="text-white font-dmsansBold text-lg pb-3">
              Energy
            </div>
            <div>
              <EnergyLevel />
            </div>
          </div>
          {/* Range Level */}
          <div className="flex flex-col gap-y-3 bg-dashbg rounded-xl items-center text-center py-3 px-4 hover:bg-levelHover transition-all duration-200 ease-out w-1/4 md:w-1/2 sm:w-full">
            <div>
              <CordinateIcon />
            </div>
            <div className="text-rangeC font-dmsansBold text-lg pb-3">
              Range
            </div>
            <div>
              <RangeLevel />
            </div>
          </div>
          {/* Break Level */}
          <div className="flex flex-col gap-y-3 bg-dashbg rounded-xl items-center text-center py-3 px-4 hover:bg-levelHover transition-all duration-200 ease-out w-1/4 md:w-1/2 sm:w-full">
            <div>
              <DropWater />
            </div>
            <div className="text-breakC font-dmsansBold text-lg pb-3">
            Break fluid
            </div>
            <div>
              <BreakLevel />
            </div>
          </div>
          {/* wheel Level */}
          <div className="flex flex-col gap-y-3 bg-dashbg rounded-xl items-center text-center py-3 px-4 hover:bg-levelHover transition-all duration-200 ease-out w-1/4 md:w-1/2 sm:w-full">
            <div>
              <WheelIcon />
            </div>
            <div className="text-tireC font-dmsansBold text-lg pb-3">
            Tire Wear
            </div>
            <div>
              <TireLevel />
            </div>
          </div>
        </div>
        </Flickity>
      </div>
      {/* statistics */}
      <div>
        statistics
      </div>
      {/* recommended */}
      <div>
        Recommended
      </div>
    </div>
  )
}

export default Dashboard;