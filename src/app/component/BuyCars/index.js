import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ListView from "@/app/assets/icons/ListView";
import GridSelect from "@/app/assets/icons/GridSelect";
import ListItems from "./ListItems";
import GridItems from "./GridItems";
import { BookingCars } from "@/app/Utils/config";

const BuyCars = () => {

  const [gridC, setGridC] = useState('#A162F7');
    const [listC, setListC] = useState('#242731');
    const [model, setModel] = useState('');
    const [carType, setCarType] = useState("");
    const [bookCars, setBookCars] = useState(BookingCars);
  
    const Model = (event) => {
    const selectedClass = event.target.value;
    setModel(selectedClass);
  
    if (selectedClass === "") {
      setBookCars(BookingCars); // Show all if no filter selected
    } else {
      const filtered = BookingCars.filter(car => car.class === selectedClass);
      setBookCars(filtered);
    }
    };
      
   const CarType = (event) => {
    const selected = event.target.value;
    setCarType(selected);
  
    if (selected === "") {
      setBookCars(BookingCars);
    } else {
      const filtered = BookingCars.filter(car =>
        car.title.toLowerCase().includes(selected.toLowerCase())
      );
      setBookCars(filtered);
    }
  };
    
    const [showGrid, setShowGrid] = useState(false);
  
    const selectGrid = () => {
      setGridC('#A162F7');
      setListC('#242731');
      setShowGrid(false);
    }
  
    const selectList = () => {
      setListC('#A162F7');
      setGridC('#242731');
      setShowGrid(true);
    }

  return (
    <div className="flex flex-col gap-y-6 w-full">
      <div className="px-3 text-white font-dmsansBold text-2xl">
        Booking
      </div>
    {/* Selectors */}
    <div className="flex flex-row justify-between px-4 w-full med:px-0">
      <div className="flex flex-row gap-x-6 md:gap-x-2">
        {/* Model */}
        <div>
        <Select
          value={model}
          onChange={Model}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          MenuProps={{
            PaperProps:{
              sx:{
                backgroundColor: '#242731',
              }
            }
          }}
          sx={{
              fontSize: "12px",
              padding: 0,
              color: "#373C4A",
              borderRadius: "12px",
              background: "#242731",
              '& .MuiSelect-select': {
                  padding: '6px 12px',
                  background: "#242731"
              },
              '& .MuiSelect-icon': {
                  color: '#373C4A',
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
          variant="outlined"
          >
          <MenuItem value={""}>
            <span className="text-white text-base px-4 font-dmsansReg">Model</span>
          </MenuItem>
          <MenuItem value="new">
          <span className="text-white text-base px-4 font-dmsansReg">New</span>
          </MenuItem>
          <MenuItem value="old">
            <span className="text-white text-base px-4 font-dmsansReg">Old</span>
          </MenuItem>
          </Select>
        </div>
        {/* Car Type */}
        <div>
          <Select
          value={carType}
          onChange={CarType}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          MenuProps={{
            PaperProps:{
              sx:{
                backgroundColor: '#242731',
              }
            }
          }}
          sx={{
              fontSize: "12px",
              padding: 0,
              color: "#373C4A",
              borderRadius: "12px",
              background: "#242731",
              '& .MuiSelect-select': {
                  padding: '6px 12px',
                  background: "#242731"
              },
              '& .MuiSelect-icon': {
                  color: '#373C4A',
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
          variant="outlined"
          >
          <MenuItem value={""}>
            <span className="text-white text-base px-4 font-dmsansReg">All</span>
          </MenuItem>
          <MenuItem value={"Audi A3"}>
            <span className="text-white text-base px-4 font-dmsansReg">Audi A3</span>
          </MenuItem>
          <MenuItem value={"Mercedes"}>
          <span className="text-white text-base px-4 font-dmsansReg">Mercedes GLE</span>
          </MenuItem>
          <MenuItem value={"Audi Q6"}>
          <span className="text-white text-base px-4 font-dmsansReg">Audi Q6</span>
          </MenuItem>
          <MenuItem value={"Suzuki"}>
          <span className="text-white text-base px-4 font-dmsansReg">Suzuki Siaz</span>
          </MenuItem>
          </Select>
        </div>
      </div>
      <div className="flex flex-row relative -top-2">
        {/* Grid */}
        <div onClick={selectGrid}>
          <GridSelect gridC={gridC} />
        </div>
        {/* List */}
        <div onClick={selectList} className="pt-1">
          <ListView listC={listC} />
        </div>
      </div>
    </div>
      
      {showGrid ? (<ListItems bookCars={bookCars} />) : (<GridItems bookCars={bookCars} />)}

    </div>
  )
}

export default BuyCars;