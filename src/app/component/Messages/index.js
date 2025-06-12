import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import { FiSearch } from "react-icons/fi";
import { Badge, TextareaAutosize, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { TbMessage } from "react-icons/tb";
import { useState, useEffect } from 'react';
import { members } from '@/app/Utils/config';
import { Avatar, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { BiEditAlt } from "react-icons/bi";
import VideoIcon from '@/app/assets/icons/VideoIcon';
import CallIcon from '@/app/assets/icons/CallIcon';
import PinnedIcon from '@/app/assets/icons/PinnedIcon';
import OptionsIcon from '@/app/assets/icons/OptionsIcon';
import SendIcon from '@/app/assets/icons/SendIcon';
import AttachIcon from '@/app/assets/icons/AttachIcon';
import { CgRemove } from "react-icons/cg";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";

/* TextArea */
const Textarea = styled(TextareaAutosize)(
  ({ theme }) => `
  box-sizing: border-box;
  width: 100%;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 2;
  padding: 0px 12px;
  color: #808191;
  background: none;

  &:hover {
    border-color: #2B2E38;
  }

  &:focus {
    border-color: #2B2E38;
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

/* search_Field */
const SearchField = styled(TextField)({
  '& .MuiInput-underline:after': {
    borderBottomColor: '#2B2E38',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: "8px"
    },
    '&:hover fieldset': {
      borderColor: '#2B2E38',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#2B2E38',
      borderWidth: '0rem'
    }
  },
});

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const Message = () => {

  const [value, setValue] = useState(0);
  const [tabWidth, setTapwidth] = useState("22%");
  const [pickMember, setPickMember] = useState("");
  const [message, setMessage] = useState("");
  const [pinn, setPinn] = useState(false);
  const [Members, setMembers] = useState(members);
  const [shPinn, setShPinn] = useState(false);
  const [pinnChatt, setPinnChatt] = useState([]);
  const [selectedMember, setSelectedMember] = useState(members[0]);
  const [selectedChat, setSelectedChat] = useState([members[0]]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const pinnChatts = () => {
    setPinn(true);
  }

  const closePinn = () => {
    setPinn(false);
  }

  const ToggPanel = () => {
    const togPanel = tabWidth !== "22%" ? ("22%") : ("0%");
    setTapwidth(togPanel);
    if (window.innerWidth <= 1024) {
        setTapwidth("35%");
      }

      if (window.innerWidth <= 768) {
        setTapwidth("45%");
      }

      if (window.innerWidth <= 600) {
        setTapwidth("50%");
      }

  }

  /* filter messages */
  const FilterM = Members.filter((dataflow) => {
  if(dataflow.name.toLowerCase().includes(pickMember.toLocaleLowerCase())){
    return dataflow;
  }
  return false;
});

  const addPinn = (id) => {
    const getMember = Members.find((x) => x.id === id);
    //remove the chat member from chat list
    setMembers(Members.filter((x) => x.id !== id));
    //add the same member to chat list
    setPinnChatt((prev) => [...prev, getMember])

    setPinn(false);
    setShPinn(true);
  }

  const remvPinn = (id) => {
    const getMember = pinnChatt.find((x) => x.id === id);
    //remove the chat member from pinnChat list
    setPinnChatt(pinnChatt.filter((x) => x.id !== id));
    //roll back the same member to the prev chat list
    setMembers((prev) => [...prev, getMember]);

    setPinn(false);
  }

  //whenever the pinnChatt is Empty then hide the Pinned section
  useEffect(() => {
    if(pinnChatt.length === 0){
      setShPinn(false);
    }

  }, [pinnChatt]);

  const handleResize = () => {
      if (window.innerWidth <= 1280) {
        setTapwidth("0%");
      } else {
        setTapwidth("22%");
      }
    };

    window.addEventListener("resize", handleResize);

  return (
    <Box
      sx={{
        display:"flex",
        width:"100%", 
        height: "100%",
        padding: "1em 0.8em",
        background:"#242731",
          }}
      >
      <div 
      style={{
        width:`${tabWidth}`,
        position:"absolute",
        height:"135vh",
        background:"#242731",
        zIndex:"700",
        paddingRight:"0.5em",
        display:"block",
        boxSizing:"border-box",
        transition:"all .5s ease"
      }}
      className='msgBox TabsLists'
      >
        <Tabs
          orientation="vertical"
          variant="standard"
          indicatorColor="transparent"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
                transition:"all 0.3s ease-in",
                overflow:"unset",
                background:"#242731",
              }}
        className="block"
        style={{width: "100%"}}
        >
          {/* body */}
        <div className='flex flex-col gap-y-6 w-full msgBox'>
          <div className="flex flex-row justify-between w-full">
            <div className="text-white text-lg font-dmsansBlck capitalize">
              messages
            </div>
            <div>
              {pinn ? (<IconButton 
                      onClick={closePinn}
                      sx={{padding:"0px"}}>
                      <CiCircleRemove className="text-redFill text-2xl" />
                    </IconButton>) : (<IconButton 
                      onClick={pinnChatts}
                      sx={{padding:"0px"}}>
                      <BiEditAlt className='text-breakC' />
                    </IconButton>)}
            </div>
          </div>
          <div className="flex flex-row gap-x-3 py-1 px-6 rounded-lg bg-chipBg">
            <div style={{
            color:"#808191", 
            fontSize:"18px", 
            padding: "0.4em 0em", 
            fontWeight:"600"}}>
            <FiSearch />
          </div>
          <div style={{width:"100%"}}>
          <SearchField
            fullWidth
            value={pickMember}
            sx={{
                "& .MuiOutlinedInput-root":{
                "& .MuiOutlinedInput-notchedOutline": {
                    borderWidth: "0rem",
                    borderStyle: "solid",
                    borderColor: '#2B2E38',
                    borderRadius: "8px"
                },
                '&.Mui-focused fieldset': {
                    borderColor: "#2B2E38"
                },
                }
            }}
            inputProps={{
                sx: {
                color: '#808191',
                fontSize: '15px',
                backgroundColor:'#2B2E38',
                padding:'6px 6px',
                borderRadius: "8px",
                caretColor: '#EF9011',
                '&::placeholder': {
                  color: '#808191',
                  opacity: 1
                }
                },
                }}
                placeholder={"Search...."}
                onChange={(e) => setPickMember(e.target.value)}
                type="text"
                />
          </div>
          </div>
          <div className='flex flex-col gap-y-3'>

            {shPinn ? (
              <div
              className='flex flex-col gap-y-3'>
              <div>
                <ListItem sx={{padding:"0px"}}>
                  <ListItemIcon sx={{minWidth:'25px'}}>
                    <PinnedIcon />
                  </ListItemIcon>
                  <ListItemText
                   primary={<span className="text-dashC text-sm font-dmsansBlck uppercase">pinned</span>} 
                  />
                </ListItem>
              </div>
              <div className='flex flex-col gap-y-3 w-full'>
                {pinnChatt?.map((x) => (
                  <div key={x.id}
                  className="cursor-pointer"
                  onClick={() => {setSelectedMember(x); setValue(x.id); handleResize(x); setSelectedChat([x])}}>
                  <List>
                    <ListItem sx={{padding:"0px"}}>
                      <ListItemIcon sx={{minWidth:"65px"}}>
                        <Avatar src={`/imgs/${x.img}`} sx={{width:"50px", height:"50px"}} />
                      </ListItemIcon>
                      <ListItemText 
                      primary={
                      <div className="flex flex-row justify-between w-full">
                        <div className='text-white text-base font-dmsansBlck'>
                          {x.name}
                        </div>
                        <div>
                          {pinn ? (<IconButton 
                            onClick={() => remvPinn(x.id)}
                            sx={{padding:"0"}}>
                            <CgRemove className='text-redFill text-xl' />
                          </IconButton>) : (<span className="text-dashC text-sm font-dmsansReg">{"4:30 PM"}</span>)}
                        </div>
                      </div>}
                      secondary={
                        <div className="flex flex-row justify-between w-full">
                          <div>
                            <span className='text-white'>{""}</span>
                          </div>
                          <div>
                            <span className='text-white'>{""}</span>
                          </div>
                        </div>
                      } />
                    </ListItem>
                  </List>
                </div>
                ))}
              </div>
            </div>
            ) : ("")}
  
            <div className='flex flex-col gap-y-3 overflow-y-auto w-full msgBox' style={{height:"100vh"}}>
              <div>
                <ListItem sx={{padding:"0px"}}>
                  <ListItemIcon sx={{minWidth:'22px'}}>
                    <TbMessage className="text-dashC" />
                  </ListItemIcon>
                  <ListItemText
                   primary={<span className="text-dashC text-sm font-dmsansBlck capitalize">all messages</span>} 
                  />
                </ListItem>
              </div>
              <div className='flex flex-col gap-y-3 w-full'>
                {FilterM?.map((x) => (
                <div
                key={x.id}
                className="font-dmsansBlck text-base cursor-pointer w-full"
                onClick={() => {setSelectedMember(x); setValue(x.id); handleResize(x); setSelectedChat([x])}}>
                  <List>
                    <ListItem sx={{padding:"0px"}}>
                      <ListItemIcon sx={{minWidth:"65px"}}>
                        <Avatar src={`/imgs/${x.img}`} sx={{width:"50px", height:"50px"}} />
                      </ListItemIcon>
                      <ListItemText 
                      primary={
                      <div className="flex flex-row justify-between w-full">
                        <div className='text-white text-sm font-dmsansBlck'>
                          {x.name}
                        </div>
                        <div>
                          {pinn ? (<IconButton
                           onClick={() => addPinn(x.id)}
                           sx={{padding:"0px"}}>
                            <IoMdAddCircleOutline className="text-Greenbg text-2xl" />
                          </IconButton>) : (<span className="text-dashC text-sm font-dmsansReg">{"4:30 PM"}</span>)}
                        </div>
                      </div>}
                      secondary={
                        <div className="flex flex-row justify-between w-full">
                          <div>
                            {/* show Typing & missed message */}
                            <span className='text-white'>{""}</span>
                          </div>
                          <div>
                            {/* show seen or missed message */}
                            <span className='text-white'>{""}</span>
                          </div>
                        </div>
                      } />
                    </ListItem>
                  </List>
                </div> 
              ))}
              </div>
            </div>
          </div>
        </div>
        
        </Tabs>
      </div>
        {/* main Body */}
        <div className='w-full chatBox' style={{paddingLeft:"20rem"}}>
          <div className="flex flex-col gap-y-3 rounded-md border-2 border-solid border-gray-700 pb-2 w-full">
          {/* header */}
          <div className="px-3 border-b-2 border-solid border-gray-700 rounded-xl" style={{zIndex:"500"}}>
            <div className="flex flex-row justify-between py-3 w-full md:flex-col gap-y-3">
              <div className="flex flex-row gap-x-6">
                <div className='hidden xl:block'>
                  <IconButton 
                  sx={{padding:"16px 0px"}}
                  onClick={ToggPanel}>
                    <FaBars className='text-white'/>
                  </IconButton>
                </div>
                <div>
                  <ListItem sx={{padding:"0px"}}>
                    <ListItemIcon sx={{minWidth:"65px"}}>
                      <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                      >
                        <Avatar src={`/imgs/${selectedMember.img}`} sx={{width:"50px", height:"50px"}} />
                      </StyledBadge>
                    </ListItemIcon>
                    <ListItemText 
                    primary={
                      <div className='text-white text-sm font-dmsansBlck py-1'>
                        {selectedMember.name}
                      </div>
                    }
                    secondary={
                      <div className='text-dashC text-xs font-dmsansBlck capitalize'>
                        {"active now"}
                      </div>
                    } />
                  </ListItem>
                </div>
              </div>
              <div className="flex flex-row gap-x-3 pt-2 md:pl-12">
                  <div>
                      <IconButton sx={{padding:"0px"}}>
                        <VideoIcon />
                      </IconButton>
                  </div>
                  <div>
                      <IconButton sx={{padding:"0px"}}>
                        <CallIcon />
                      </IconButton>
                  </div>
                  <div>
                      <IconButton sx={{padding:"0px"}}>
                        <OptionsIcon />
                      </IconButton>
                  </div>
              </div>
          </div>
          </div>
          {/* Body */}
          <div>
            {selectedChat.map((m) => (
              <Box 
              key={m.id}
              sx={{padding:"12px"}}>
              <div className="flex flex-col gap-y-9 px-3 overflow-x-auto msgBox" style={{height:"100vh"}}>
                {/* Message body */}
                <div className='flex flex-col gap-y-1 w-full'>
                  <div className="flex flex-row gap-x-3 w-full">
                    <div>
                      <Avatar src={`/imgs/${m.img}`} sx={{width:"50px", height:"50px"}} />
                    </div>
                    <div className="bg-chipBg p-2 rounded-lg text-white text-left font-dmsansReg text-sm w-full">
                          Hi, I hope you are doing well, yesterday you have gave a pen This very nice, i am very happy for this.yesterday you have gave a pen This very nice
                        </div>
                  </div>
                  <div className='text-sm text-dashC font-dmsansReg text-right'>
                    4:30 PM
                  </div>
                </div>

                <div className='flex flex-col gap-y-1 w-full'>
                  <div className="flex flex-row-reverse gap-x-3 w-full">
                    <div>
                      <Avatar src={`/imgs/${"Novita.png"}`} sx={{width:"50px", height:"50px"}} />
                    </div>
                    <div className="bg-green-800 p-2 rounded-lg text-white text-left font-dmsansReg text-sm w-full">
                          yea I’m well, Thank you, i am very happy for this.yesterday you 
                              have gave a pen This very nice
                        </div>
                  </div>
                  <div className='text-sm text-dashC font-dmsansReg text-left'>
                    4:35 PM
                  </div>
                </div>
              
              <div className='flex flex-col gap-y-1 w-full'>
                  <div className="flex flex-row gap-x-3 w-full">
                    <div>
                      <Avatar src={`/imgs/${m.img}`} sx={{width:"50px", height:"50px"}} />
                    </div>
                    <div className="bg-chipBg p-2 rounded-lg text-white text-left font-dmsansReg text-sm w-full">
                          Hi, I hope you are doing well, yesterday you have gave a pen This very nice 😍
                        </div>
                  </div>
                  <div className='text-sm text-dashC font-dmsansReg text-right'>
                    4:45 PM
                  </div>
                </div>

              <div className='flex flex-col gap-y-1 w-full'>
                  <div className="flex flex-row gap-x-3 w-full">
                    <div>
                      <Avatar src={`/imgs/${m.img}`} sx={{width:"50px", height:"50px"}} />
                    </div>
                    <div className="bg-chipBg p-2 rounded-lg text-white text-left font-dmsansReg text-sm w-full">
                           i am very happy for this.yesterday you have gave a pen This  very nice
                        </div>
                  </div>
                  <div className='text-sm text-dashC font-dmsansReg text-right'>
                    4:47 PM
                  </div>
                </div>
              
              <div className='flex flex-col gap-y-1 w-full'>
                  <div className="flex flex-row-reverse gap-x-3 w-full">
                    <div>
                      <Avatar src={`/imgs/${"Novita.png"}`} sx={{width:"50px", height:"50px"}} />
                    </div>
                    <div className="bg-green-800 p-2 rounded-lg text-white text-left font-dmsansReg text-sm w-full">
                          yea I’m well, Thank you, i am very happy for this.yesterday you have gave a pen This very nice
                        </div>
                  </div>
                  <div className='text-sm text-dashC font-dmsansReg text-left'>
                    4:35 PM
                  </div>
                </div>

              </div>
            </Box>
            ))}
          </div>
          <div className="px-8 w-full md:px-3">
            <div className="flex flex-row justify-between bg-chatBg px-4 py-3 rounded-xl w-full">
            <div className="flex flex-row w-full">
           <div className='pt-1'>
            <IconButton sx={{padding:"0px"}}>
              <AttachIcon />
            </IconButton>
           </div>
          <div style={{width:"100%"}}>
          <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-label="minimum height" 
              placeholder="Type Something..." 
              style={{resize: 'none'}}
              />
          </div>
          </div>
              <div className='pt-1'>
                <IconButton sx={{padding:"0px"}}>
                  <SendIcon />
                </IconButton>
              </div>
            </div>
          </div>
          </div>
        </div>
    </Box>
  )
}

export default Message;