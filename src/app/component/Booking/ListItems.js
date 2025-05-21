import { useState } from "react";
import CarEngine from "@/app/assets/icons/CarEngine";
import HeartIcon from "@/app/assets/icons/HeartIcon";
import UserIcon from "@/app/assets/icons/UserIcon";
import { IconButton, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Image from "next/image";

const ListItems = ({bookCars}) => {

const [likedCars, setLikedCars] = useState({});

    const toggleLike = (id) => {
    setLikedCars((prev) => ({
        ...prev,
        [id]: !prev[id], // toggle liked state
    }));
    };

  return (
    <div className="flex flex-col gap-y-3 w-full">
      {bookCars?.map((x) => (
      <div key={x.id} className="flex flex-row justify-between py-3 px-6 bg-dashbg rounded-md w-full med:flex-col med:gap-y-3 lg:px-3">
        <div className="flex flex-row justify-center">
          {/* img */}
          <div>
            <Image src={x.img} width={150} height={105} alt="audi-a3"/>
          </div>
        </div>

          <div className="text-left w-1/4 med:w-full">
          <div className="text-white text-left font-dmsansBlck text-base">
            {x.title}
          </div>
          <div className="text-dashC text-left font-dmsansReg text-base">
            {x.type}
          </div>
        </div>

        <div className="flex flex-row gap-x-6 w-1/4 xl:gap-x-3 med:w-full">
          <div>
          <List className="p-0">
            <ListItem sx={{padding:"0em"}}>
              <ListItemIcon sx={{minWidth:"25px"}}>
                <UserIcon />
              </ListItemIcon>
              <ListItemText primary={<span className="text-white text-sm font-dmsansReg">{x.users}</span>} />
            </ListItem>
          </List>
        </div>
        <div>
          <List className="p-0">
            <ListItem sx={{padding:"0em"}}>
              <ListItemIcon sx={{minWidth:"25px"}}>
                <CarEngine />
              </ListItemIcon>
              <ListItemText primary={<span className="text-white text-sm font-dmsansReg">{x.engine}</span>} />
            </ListItem>
          </List>
        </div>
        </div>
        
        <div className="flex flex-row justify-between gap-x-12 w-1/4 med:w-full">
          <div className="text-white font-dmsansReg text-base leading-8 xl:text-sm xl:leading-9">
          ${x.rent}/d
        </div>
        <div>
          <IconButton 
            className="px-0"
            onClick={() => toggleLike(x.id)}>
              <HeartIcon IconColor={likedCars[x.id] ? "#F84F56" : "none"} />
          </IconButton>
        </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default ListItems;