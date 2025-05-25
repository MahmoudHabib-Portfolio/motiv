import CarModelShadow from "@/app/assets/Svgs/CarModelShadow";
import TrackChart from "./TrackChart";
import ShareRate from "@/app/assets/Svgs/ShareRate";
import Link from "next/link";
import CarIcon from "@/app/assets/icons/CarIcon";
import ExtraPointer from "@/app/assets/icons/ExtraPointer";
import DollaSign from "@/app/assets/icons/DollaSign";
import RateXtra from "@/app/assets/Svgs/RateXtra";

const SellCars = () => {
  return (
    <div className="flex flex-col gap-y-6 w-full">
      <div className="px-3 text-white capitalize font-dmsansBold text-2xl md:text-xl">
        sell cars
      </div>
      {/* Sell Cars Body */}
      <div className="flex flex-row gap-x-6 px-3 w-full xl:gap-x-3 lg:flex-col gap-y-3 md:px-0">
        {/* Car Model */}
        <div className="flex flex-col gap-y-3 bg-dashbg py-4 rounded-xl overflow-hidden shadow-blockShadow w-3/5 lg:w-full">
          <div className="px-9 text-white capitalize font-dmsansBold text-2xl md:text-lg">
            2022 Audi A3
          </div>
          <div className="flex flex-col items-center overflow-hidden w-full">
            <div className="block w-full">
              <CarModelShadow />
            </div>
          </div>
        </div>
        {/* tracking History */}
        <div className="bg-dashbg px-6 py-4 rounded-xl shadow-blockShadow w-2/5 lg:w-full">
          <div className="flex flex-col gap-y-3 w-full">
            <div className=" text-white capitalize font-dmsansBold text-xl md:text-lg">
              Tracking History
            </div>
            <div>
              <TrackChart />
            </div>
          </div>
        </div>
      </div>
      {/* Offers */}
      <div className="flex flex-col gap-y-3 w-full">
        <div className="px-3 text-white capitalize font-dmsansBold text-2xl md:text-xl">
          offers
        </div>
        <div className="flex flex-col gap-y-4 w-full">

        <div className="flex flex-row justify-between gap-x-16 bg-dashbg px-6 py-4 rounded-xl shadow-blockShadow w-full lg:gap-x-6 lg:px-3 md:flex-col gap-y-8">
          {/* offer Name */}
          <div className="flex flex-row justify-between w-1/2 md:w-full">
            <div>
              <div className="text-white capitalize font-dmsansBold text-lg lg:text-base">
              Killan James
            </div>
            <div className="text-rangeC font-dmsansReg text-lg lg:text-base">
              $16,605<sub className="text-dashC text-sm font-dmsansBlck pl-1">avarage price</sub>
            </div>
            <div className="text-white text-base font-dmsansReg">
              market avarage is $16,224
            </div>
            <div>
              <Link href={"/"}>
                <button 
                className="bg-rangeC text-white text-2xl px-6 rounded-xl lg:text-base"
                type="button">
                &#10140;
              </button>
              </Link>
            </div>
            </div>
            <div className="flex flex-col text-center items-center gap-y-0">
              <div>
                <ShareRate />
              </div>
              <div className="text-base text-shareHead font-dmsansBlck lg:text-sm">
                Impression Share
              </div>
            </div>
          </div>
          {/* Row End */}
          <div className="flex flex-row justify-between w-2/4 md:w-full">

            <div>
              <div>
                <CarIcon />
              </div>
              <div className="text-lg font-dmsansBlck text-shareRate lg:text-base">
                $1,174
              </div>
              <div className="text-shareHead text-sm font-dmsansReg">
                Model Spend
              </div>
            </div>

            <div>
              <div>
                <ExtraPointer />
              </div>
              <div className="text-lg font-dmsansBlck text-redFill lg:text-base">
                $1,174
              </div>
              <div className="text-shareHead text-sm font-dmsansReg">
                Model Spend
              </div>
            </div>

            <div>
              <div>
                <DollaSign />
              </div>
              <div className="text-lg font-dmsansBlck text-breakC lg:text-base">
                $1,174
              </div>
              <div className="text-shareHead text-sm font-dmsansReg">
                Model Spend
              </div>
            </div>

          </div>
        </div>

        <div className="flex flex-row justify-between gap-x-16 bg-dashbg px-6 py-4 rounded-xl shadow-blockShadow w-full lg:gap-x-6 lg:px-3 md:flex-col gap-y-8">
          {/* offer Name */}
          <div className="flex flex-row justify-between w-1/2 md:w-full">
            <div>
              <div className="text-white capitalize font-dmsansBold text-lg lg:text-base">
              Killan James
            </div>
            <div className="text-rangeC font-dmsansReg text-lg lg:text-base">
              $16,605<sub className="text-dashC text-sm font-dmsansBlck pl-1">avarage price</sub>
            </div>
            <div className="text-white text-base font-dmsansReg">
              market avarage is $16,224
            </div>
            <div>
              <Link href={"/"}>
                <button 
                className="bg-rangeC text-white text-2xl px-6 rounded-xl lg:text-base"
                type="button">
                &#10140;
              </button>
              </Link>
            </div>
            </div>
            <div className="flex flex-col text-center items-center gap-y-0">
              <div>
                <RateXtra />
              </div>
              <div className="text-base text-shareHead font-dmsansBlck lg:text-sm">
                Impression Share
              </div>
            </div>
          </div>
          {/* Row End */}
          <div className="flex flex-row justify-between w-2/4 md:w-full">

            <div>
              <div>
                <CarIcon />
              </div>
              <div className="text-lg font-dmsansBlck text-shareRate lg:text-base">
                $1,174
              </div>
              <div className="text-shareHead text-sm font-dmsansReg">
                Model Spend
              </div>
            </div>

            <div>
              <div>
                <ExtraPointer />
              </div>
              <div className="text-lg font-dmsansBlck text-redFill lg:text-base">
                $1,174
              </div>
              <div className="text-shareHead text-sm font-dmsansReg">
                Model Spend
              </div>
            </div>

            <div>
              <div>
                <DollaSign />
              </div>
              <div className="text-lg font-dmsansBlck text-breakC lg:text-base">
                $1,174
              </div>
              <div className="text-shareHead text-sm font-dmsansReg">
                Model Spend
              </div>
            </div>

          </div>
        </div>

        </div>
      </div>
      </div>
  )
}

export default SellCars;