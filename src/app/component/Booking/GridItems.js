import { useState } from "react";
import CarEngine from "@/app/assets/icons/CarEngine";
import HeartIcon from "@/app/assets/icons/HeartIcon";
import UserIcon from "@/app/assets/icons/UserIcon";
import { IconButton, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Image from "next/image";

const GridItems = ({bookCars}) => {

    const [likedCars, setLikedCars] = useState({});

    const toggleLike = (id) => {
    setLikedCars((prev) => ({
        ...prev,
        [id]: !prev[id], // toggle liked state
    }));
    };

  return (
    <div className="flex flex-col gap-y-6 justify-between px-2 w-full lg:px-0 md:flex-col md:gap-y-3">
        {/* row1 */}
        <div className="grid grid-cols-3 gap-y-6 md:flex-row justify-between gap-x-3 w-full med:grid-cols-2 sm:!grid-cols-1">
          {/* CardBody */}
          {/* item1 */}
          {bookCars?.map((x) => (
          <div key={x.id} className="flex flex-col gap-y-4 bg-dashbg text-white rounded-md py-4 px-4 text-center w-full md:px-3">
            {/* CardHead */}
            <div className="flex flex-row text-left justify-between">
              <div>
                <div className="text-white font-dmsansBlck text-base">
                  {x.title}
                </div>
                <div className="text-dashC font-dmsansReg text-base">
                  {x.type}
                </div>
              </div>
              <div>
                <IconButton 
                className="px-0"
                onClick={() => toggleLike(x.id)}>
                  <HeartIcon IconColor={likedCars[x.id] ? "#F84F56" : "none"} />
                </IconButton>
              </div>
            </div>
            {/* CardImage */}
            <div className="flex flex-row justify-center">
              <div>
                <Image src={x.img} width={200} height={105} alt="audi-a3"/>
              </div>
            </div>
            {/* CardFooter */}
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-x-6 xl:gap-x-3 md:flex-col gap-y-0">
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
              {/* Price */}
              <div className="text-white font-dmsansReg text-base leading-8 xl:text-sm xl:leading-9">
                ${x.rent}/d
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
  )
}

export default GridItems;