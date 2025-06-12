'use client'
import { FiSearch } from "react-icons/fi";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { IconButton } from "@mui/material";
import { TfiMenu } from "react-icons/tfi";
import { useState } from "react";
import BillIcon from "@/app/assets/icons/BillIcon";
import { openPanel, closePanel } from "@/app/ReduxStore/DashSlice";
import { useDispatch, useSelector } from "react-redux";


/* search_Field */
const SearchField = styled(TextField)({
  '& .MuiInput-underline:after': {
    borderBottomColor: '#1F2128',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: "8px"
    },
    '&:hover fieldset': {
      borderColor: '#1F2128',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1F2128',
      borderWidth: '0rem'
    }
  },
});

const Header = () => {

  const isPanelOpen = useSelector((state) => state.val.value);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const togglePanel = () => {
    if (isPanelOpen) {
      dispatch(closePanel());
    } else {
      dispatch(openPanel());
    }
  };

  return (
    <nav className="flex flex-row justify-between gap-x-3 p-4 bg-dashbg">
      <div className="flex flex-row gap-x-3 w-full">
        <div className="hidden md:block">
        <IconButton onClick={togglePanel}>
          <TfiMenu className="text-white" />    
        </IconButton>
        </div>
        {/* search bar */}
        <div className="flex flex-row gap-x-3 py-1 px-2 rounded-lg bg-bodybg w-2/5 med:w-4/5">
        <div style={{
          color:"#7C7C8D", 
          fontSize:"18px", 
          padding: "0.4em 0em", 
          fontWeight:"600"}}>
          <FiSearch />
        </div>
        <div style={{width:"100%"}}>
        <div style={{width:"100%"}}>
        <SearchField
          fullWidth
          value={search}
          sx={{
              "& .MuiOutlinedInput-root":{
              "& .MuiOutlinedInput-notchedOutline": {
                  borderWidth: "0rem",
                  borderStyle: "solid",
                  borderColor: '#1F2128',
                  borderRadius: "8px"
              },
              '&.Mui-focused fieldset': {
                  borderColor: "#1F2128"
              },
              }
          }}
          inputProps={{
              sx: {
              color: '#7C7C8D',
              fontSize: '15px',
              backgroundColor:'#1F2128',
              padding:'6px 6px',
              borderRadius: "8px",
              caretColor: '#EF9011',
              
              },
              }}
              placeholder={"Search or type"}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              />
      </div>
        </div>
      </div>
      </div>
      {/* last nav side */}
      <div className="flex flex-row gap-x-8">
        <div className="cursor-pointer leading-8">
        <Badge badgeContent={""} sx={{
          '& .MuiBadge-badge': {
          background:"#FF5E6F",
          color: '#fff',
          minWidth:"10px",
          height:"10px",
          fontWeight:"600"
        } 
        }}>
          <BillIcon />
          </Badge>
        </div>
        <div>
        <Avatar src={"/profileImge.png"} alt="client" sx={{ width: 35, height: 35 }} />
        </div>
      </div>
    </nav>
  )
}

export default Header;