import { Avatar, Divider } from "@mui/material";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { CgHome } from "react-icons/cg";
import { FaRegEnvelope } from "react-icons/fa";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { DatePickerInput } from '@mantine/dates';
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { PiGenderMaleBold } from "react-icons/pi";
import { PiGenderFemaleBold } from "react-icons/pi";
import ButtonBase from '@mui/material/ButtonBase';
import { useState } from "react";

/* live_Field */
const LiveAddress = styled(TextField)({
  '& .MuiInput-underline:after': {
    borderBottomColor: '#7C7C8D',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: "8px"
    },
    '&:hover fieldset': {
      borderColor: '#7C7C8D',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#7C7C8D',
      borderWidth: '0rem'
    }
  },
});

const StreetAddress = styled(TextField)({
  '& .MuiInput-underline:after': {
    borderBottomColor: '#7C7C8D',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: "8px"
    },
    '&:hover fieldset': {
      borderColor: '#7C7C8D',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#7C7C8D',
      borderWidth: '0rem'
    }
  },
});

const EmailField = styled(TextField)({
  '& .MuiInput-underline:after': {
    borderBottomColor: '#7C7C8D',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: "8px"
    },
    '&:hover fieldset': {
      borderColor: '#7C7C8D',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#7C7C8D',
      borderWidth: '0rem'
    }
  },
});

const FaceBookField = styled(TextField)({
  '& .MuiInput-underline:after': {
    borderBottomColor: '#7C7C8D',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: "8px"
    },
    '&:hover fieldset': {
      borderColor: '#7C7C8D',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#7C7C8D',
      borderWidth: '2px'
    }
  },
});

const TwitterField = styled(TextField)({
  '& .MuiInput-underline:after': {
    borderBottomColor: '#7C7C8D',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: "8px"
    },
    '&:hover fieldset': {
      borderColor: '#7C7C8D',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#7C7C8D',
      borderWidth: '2px'
    }
  },
});

const Profile = () => {

  const [address, setAddress] = useState("Zuichi, Switzerland");
  const [straddress, setStrAddress] = useState("2445 Crosswind Drive");
  const [email, setEmail] = useState("uihutofficial@gmail.com");
  const [DateValue, SetDateValue] = useState(new Date('07/03/2022'));
  const [anchorElRound, setAnchorElRound] = useState(null);
  const [gender, setGender] = useState("Male");
  const [Icon, setIcon] = useState(<PiGenderMaleBold style={{ color: "#9aa0a6", fontSize: "18px" }} />);
  const [avatarSrc, setAvatarSrc] = useState(`/imgs/${"Novita.png"}`);

  const handleAvatarChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      // Read the file as a data URL
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const openRound = Boolean(anchorElRound);

  const handleClickRound = (event) => {
      setAnchorElRound(event.currentTarget);
    };

  const handleMenuItemClick = (event, setState) => {
      setState(null);
    };

  const handleCloseRound = () => {
      setAnchorElRound(null);
    };

  const remvAvatar = () => {
    setAvatarSrc(undefined);
  }

 
  const [facebook, setFacebook] = useState("facebook.com/novitics23");
  const [twitter, setTwitter] = useState("twitter.com/novitics23");

  const updateProfile = (e) => {
    e.preventDefault();

  }

  return (
    <div className="flex flex-col gap-y-3 w-full">
      {/* header */}
      <div className="flex flex-col gap-y-2 w-full">
        <div className="text-white font-dmsansBlck text-xl tracking-wide capitalize">
          profile
        </div>
        <div className="text-dashC font-dmsansReg text-sm tracking-wide capitalize">
          Update your photo and personal details here.
        </div>
      </div>
      <Divider sx={{background:"#323745"}} />
      {/* Form body */}
      <div className="py-2">
        <form onSubmit={updateProfile}>
          <div className="flex flex-col gap-y-6 w-full">
            {/* Addresses */}
            <div className="flex flex-row gap-x-6 w-full md:flex-col gap-y-6">
              {/* liveIn */}
              <div className="w-2/4 md:w-full">
                <div className="py-1 font-dmsansReg">
                  Live in
                </div>
                <div 
                style={{borderWidth:"1px"}}
                className="flex flex-row gap-x-1 py-1 px-2 border-solid border-iconC rounded-lg w-full">
                  <div className="py-1">
                    <CgHome className="text-iconC text-xl" />
                  </div>
                  <div className="w-full">
                    <LiveAddress
                      fullWidth
                      value={address}
                      sx={{
                          "& .MuiOutlinedInput-root":{
                          "& .MuiOutlinedInput-notchedOutline": {
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: 'none',
                              borderRadius: "8px"
                          },
                          '&.Mui-focused fieldset': {
                              borderColor: "none"
                          },
                          }
                      }}
                      inputProps={{
                          sx: {
                          color: '#7C7C8D',
                          fontSize: '13px',
                          backgroundColor:'transparent',
                          padding:'6px 6px',
                          borderRadius: "8px",
                          caretColor: '#7C7C8D',
                          '&::placeholder': {
                            color: '#7C7C8D',
                            opacity: 1
                          }
                          },
                          }}
                          placeholder={"live address"}
                          onChange={(e) => setAddress(e.target.value)}
                          type="text"
                          />
                  </div>
                </div>
              </div>
              {/* streetAddress */}
              <div className="w-2/4 md:w-full">
                <div className="py-1 font-dmsansReg capitalize">
                  street address
                </div>
                <div 
                style={{borderWidth:"1px"}}
                className="flex flex-row gap-x-1 py-1 px-2 border-solid border-iconC rounded-lg w-full">
                  <div className="py-1">
                    <CgHome className="text-iconC text-xl" />
                  </div>
                  <div className="w-full">
                <StreetAddress
                  fullWidth
                  value={straddress}
                  sx={{
                      "& .MuiOutlinedInput-root":{
                      "& .MuiOutlinedInput-notchedOutline": {
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: 'none',
                          borderRadius: "8px"
                      },
                      '&.Mui-focused fieldset': {
                          borderColor: "none"
                      },
                      }
                  }}
                  inputProps={{
                      sx: {
                      color: '#7C7C8D',
                      fontSize: '13px',
                      backgroundColor:'transparent',
                      padding:'6px 6px',
                      borderRadius: "8px",
                      caretColor: '#7C7C8D',
                      '&::placeholder': {
                        color: '#7C7C8D',
                        opacity: 1
                      }
                      },
                      }}
                      placeholder={"live address"}
                      onChange={(e) => setStrAddress(e.target.value)}
                      type="text"
                      />
                  </div>
                </div>
              </div>
            </div>
            {/* Email Address */}
            <div className="w-full">
              <div className="py-1 font-dmsansReg capitalize">
                  email address
            </div>
            <div
                style={{borderWidth:"1px"}}
                className="flex flex-row gap-x-1 py-1 px-2 border-solid border-iconC rounded-lg w-full">
                  <div className="py-1">
                    <FaRegEnvelope className="text-iconC text-xl" />
                  </div>
                  <div className="w-full">
                <EmailField
                fullWidth
                value={email}
                sx={{
                    "& .MuiOutlinedInput-root":{
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: 'none',
                        borderRadius: "8px"
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: "none"
                    },
                    }
                }}
                inputProps={{
                    sx: {
                    color: '#7C7C8D',
                    fontSize: '13px',
                    backgroundColor:'transparent',
                    padding:'6px 6px',
                    borderRadius: "8px",
                    caretColor: '#7C7C8D',
                    '&::placeholder': {
                      color: '#7C7C8D',
                      opacity: 1
                    }
                    },
                    }}
                    placeholder={"live address"}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    />
                  </div>
                </div>
            </div>
            {/* DateBirth & Gender */}
              <div className="flex flex-row gap-x-9 w-full md:flex-col gap-y-16">
              <div className="w-2/4 md:w-full">
                <div className="py-1 font-dmsansReg">
                  Date Of Birth
                </div>
                <div 
                style={{borderWidth:"1px"}}
                className="flex flex-row gap-x-3 py-1 px-2 border-solid border-iconC rounded-lg w-full">
                  <div className="py-1">
                    <LiaBirthdayCakeSolid className="text-iconC text-xl" />
                  </div>
                  <div className="w-full">
                    <DatePickerInput
                      value={DateValue}
                      onChange={SetDateValue}
                      mx="auto"
                      maw={400}
                      valueFormat="DD.MM.YYYY"
                      size="xs"
                      styles={{
                        input:{
                          fontWeight:"bold",
                          color:"#7C7C8D",
                          textAlign:"center",
                          borderWidth:"0px",
                          background:"transparent",
                          borderRadius:"0px",
                          borderColor: 'none',
                          '&:focus':{
                            borderColor: 'none',
                            outlineStyle: 'none',
                            boxShadow: 'none',
                          }
                        }
                      }}
                      />
                  </div>
                </div>
              </div>
              {/* Gender */}
              <div className="relative w-2/4 md:w-full">
                <Button
                fullWidth
                  startIcon={Icon}
                  sx={{
                    textTransform: "capitalize",
                    color: "#9aa0a6",
                    position:"absolute",
                    bottom:"3px",
                    fontSize: "14px",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    backgroundColor: "transparent",
                    transition: "all 0.1s ease-in-out",
                    textAlign:"left",
                    ":hover": {
                      background: "rgba(255, 255, 255, 0.1)",
                      color: '#9aa0a6',
                    },
                    ":focus": {
                      background: "rgba(138, 180, 248, 0.2)"
                    }
                  }}
                  onClick={handleClickRound}
                >
                  <span className="font-dmsansBlck">
                    {gender}
                  </span>
                </Button>
                {/* MenuList#1 */}
                <Menu
                  id="lock-menu"
                  anchorEl={anchorElRound}
                  open={openRound}
                  onClose={handleCloseRound}
                  MenuListProps={{
                    'aria-labelledby': 'lock-button',
                    role: 'listbox',
                  }}
                  sx={{
                    '& .MuiPaper-root': {
                      backgroundColor: '#3c4043',
                      color: "#e8eaed",
                      width:"35%"
                    }
                  }}
                >
                  <MenuItem
                    onClick={(event) => { handleMenuItemClick(event, setGender); setGender("Male"); setIcon(<PiGenderMaleBold style={{ color: "#9aa0a6", fontSize: "18px" }} />) }}
                    sx={{ ':hover': { backgroundColor: 'rgba(138, 180, 248, 0.3)' } }}
                  >
                    Male
                  </MenuItem>
                  <MenuItem
                    onClick={(event) => { handleMenuItemClick(event, setGender); setGender("Female"); setIcon(<PiGenderFemaleBold style={{ color: "#9aa0a6", fontSize: "18px" }} />) }}
                    sx={{ ':hover': { backgroundColor: 'rgba(138, 180, 248, 0.3)' } }}
                  >
                    Female
                  </MenuItem>
                </Menu>
              </div>
            </div>
            <Divider sx={{background:"#323745"}} />
            {/* Profile Photo */}
            <div className="flex flex-row gap-x-12 w-full lg:flex-col gap-y-3">
              <div className="flex flex-row justify-between w-2/4 lg:w-full">
                <div className="flex flex-col gap-y-2 w-full">
                <div className="text-white font-dmsansBlck text-sm tracking-wide capitalize">
                  Your photo
                </div>
                <div className="text-dashC font-dmsansReg text-sm tracking-wide capitalize">
                  This will be displayed on your profile.
                </div>
              </div>
                <div>
                  <ButtonBase
                    component="label"
                    role={undefined}
                    tabIndex={-1} // prevent label from tab focus
                    aria-label="Avatar image"
                    sx={{
                      borderRadius: '40px',
                      '&:has(:focus-visible)': {
                        outline: '2px solid',
                        outlineOffset: '2px',
                      },
                    }}
                  >
                    <Avatar alt="Upload new avatar" src={avatarSrc} sx={{width:"50px", height:"50px"}}  />
                    <input
                      type="file"
                      accept="image/*"
                      style={{
                        border: 0,
                        clip: 'rect(0 0 0 0)',
                        height: '1px',
                        margin: '-1px',
                        overflow: 'hidden',
                        padding: 0,
                        position: 'absolute',
                        whiteSpace: 'nowrap',
                        width: '1px',
                      }}
                      onChange={handleAvatarChange}
                    />
                  </ButtonBase>
                </div>
              </div>
              <div className="flex flex-row gap-x-6 py-2 w-2/4 lg:w-full">
                <div>
                  <Button
                  sx={{
                    background:"transparent",
                    textTransform:"capitalize",
                    '&:hover':{
                      background:"transparent"
                    }
                  }}
                  type="submit"
                  onClick={remvAvatar}>
                    <span className="text-redFill font-dmsansBlck text-base">delete</span>
                  </Button>
                </div>
                <div>
                  <Button
                  sx={{
                    background:"transparent",
                    textTransform:"capitalize",
                    '&:hover':{
                      background:"transparent"
                    }
                  }}
                  type="submit">
                    <span className="text-breakC font-dmsansBlck text-base">update</span>
                  </Button>
                </div>
              </div>
            </div>
            <Divider sx={{background:"#323745"}} />
            {/* footer */}
            <div className="flex flex-row w-full sm:flex-col gap-y-3">
              <div className="text-white font-dmsansReg text-lg capitalize w-2/4">
                social profiles
              </div>
              <div className="flex flex-col gap-y-4 w-2/4 md:w-full">
                <div className="w-full md:w-full">
                  <FaceBookField
                  fullWidth
                  value={facebook}
                  sx={{
                      "& .MuiOutlinedInput-root":{
                      "& .MuiOutlinedInput-notchedOutline": {
                          borderWidth: "2px",
                          borderStyle: "solid",
                          borderColor: '#7C7C8D',
                          borderRadius: "10px"
                      },
                      '&.Mui-focused fieldset': {
                          borderColor: "none"
                      },
                      }
                  }}
                  inputProps={{
                      sx: {
                      color: '#7C7C8D',
                      fontSize: '13px',
                      backgroundColor:'transparent',
                      padding:'12px 8px',
                      borderRadius: "10px",
                      caretColor: '#7C7C8D',
                      '&::placeholder': {
                        color: '#7C7C8D',
                        opacity: 1
                      }
                      },
                      }}
                      onChange={(e) => setFacebook(e.target.value)}
                      type="text"
                      />
                </div>
                <div className="w-full md:w-full">
                  <TwitterField
                  fullWidth
                  value={twitter}
                  sx={{
                      "& .MuiOutlinedInput-root":{
                      "& .MuiOutlinedInput-notchedOutline": {
                          borderWidth: "2px",
                          borderStyle: "solid",
                          borderColor: '#7C7C8D',
                          borderRadius: "8px"
                      },
                      '&.Mui-focused fieldset': {
                          borderColor: "none"
                      },
                      }
                  }}
                  inputProps={{
                      sx: {
                      color: '#7C7C8D',
                      fontSize: '13px',
                      backgroundColor:'transparent',
                      padding:'12px 8px',
                      borderRadius: "8px",
                      caretColor: '#7C7C8D',
                      '&::placeholder': {
                        color: '#7C7C8D',
                        opacity: 1
                      }
                      },
                      }}
                      onChange={(e) => setTwitter(e.target.value)}
                      type="text"
                      />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Profile;