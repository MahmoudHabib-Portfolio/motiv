"use client"
import { Button, Divider, IconButton, InputAdornment, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import MuiAlert from '@mui/material/Alert';
import { MdClose } from 'react-icons/md';
import { BiMessageError } from 'react-icons/bi';
import Snackbar from '@mui/material/Snackbar';
import { forwardRef, Fragment, useState } from "react";
import Link from "next/link";

/* fName Field */
const FNameField = styled(TextField)({
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
      borderWidth: '1px'
    }
  },
});

/* lName Field */
const LNameField = styled(TextField)({
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
      borderWidth: '1px'
    }
  },
});

/* Email Field */
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
      borderWidth: '1px'
    }
  },
});

/* password Field */
const LoginPassField = styled(TextField)({
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
      borderWidth: '1px'
    }
  },
});

export default function Page() {

    const [email, setEmail] = useState("");
    const [loginPass, setLoginPass] = useState("");
    const [passTogg, setPassTogg] = useState(true);
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [textMessage, setTxtMssg] = useState('');
    const [open, setOpen] = useState(false);
    const [inputError, setInputError] = useState(false);

    const router = useRouter();

    /*======== Alert Bar ========*/
    const Alert = forwardRef(function Alert(props, ref) {
      return <MuiAlert icon={<BiMessageError />} elevation={6} ref={ref} variant="standard" {...props} />;
    });

    const HandleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };

    const action = (
      <Fragment>
        <IconButton
          size="small"
          aria-label="close"
          onClick={HandleClose}
        >
          <MdClose className="text-red-500 font-bold" /> 
        </IconButton>
      </Fragment>
    );

    const ShowPass = () => {
      const ToggPass = (passTogg !== true) ? (true) : (false);
      setPassTogg(ToggPass);
    }

    const signUp = (e) => {
      e.preventDefault();
      
      if(!fName){
        setInputError(true);
        setOpen(true);
        setTxtMssg("Missed To Fill First Name Field");
        return
      }

      if(!lName){
        setInputError(true);
        setOpen(true);
        setTxtMssg("Missed To Fill Last Name Field");
        return
      }

      if(!email){
      setInputError(true);
      setOpen(true);
      setTxtMssg("Missed To Fill Email Field");
      return
      }

      if(!loginPass){
        setInputError(true);
        setOpen(true);
        setTxtMssg("Missed To Fill Password Field");
        return
      }

      if(email, loginPass, fName, lName){
        router.replace("/");
      }
  }

  return (
    <div style={{
          padding:"6em 3em",
          maxWidth:"640px",
          margin:"0 auto"
        }}
        className="sm:!w-full sm:!py-8">
          <div className="flex flex-col gap-y-4 w-full">
            <div>
              <div className="text-white text-2xl font-dmsansBold pb-2 sm:text-xl">
                {"Get’s started."}
              </div>
              <div className="text-dashC text-base font-dmsansReg">
                <Link href={"/login"}>
                <button
                type="button">
                  Don’t have an account? <span className="text-breakC">Sign in</span>
                </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-row gap-x-3 py-8 w-full sm:flex-col gap-y-3 sm:w-full">
               {/* Google */}
               <Button className="flex justify-center rounded-lg p-3 w-2/4 border-solid border-dashC sm:!w-full" style={{borderWidth:"1px"}}>
                <div>
                  <ListItem sx={{padding:"0px"}}>
                    <ListItemIcon sx={{minWidth:"36px"}}>
                      <FcGoogle className="text-2xl" />
                    </ListItemIcon>
                    <ListItemText primary={<span className="text-shareHead text-base capitalize font-dmsansReg sm:text-sm">Sign up with Google</span>} />
                  </ListItem>
                </div>
               </Button>
               {/* facebook */}
               <Button sx={{background:"#4776D0"}} className="flex justify-center rounded-lg py-3 px-2 w-2/4 sm:!w-full">
                <div>
                  <ListItem sx={{padding:"0px"}}>
                    <ListItemIcon sx={{minWidth:"36px"}}>
                      <FaFacebook className="text-2xl text-white"/>
                    </ListItemIcon>
                    <ListItemText primary={<span className="text-shareHead text-base capitalize font-dmsansReg sm:text-sm">Sign up with Facebook</span>} />
                  </ListItem>
                </div>
               </Button>
            </div>
            <div className="flex flex-row gap-x-3 w-full">
              <div className="w-full">
                <Divider sx={{background:"#4d4d4d"}} />
              </div>
              <div className="text-white text-lg font-dmsansReg block" style={{lineHeight:"0px"}}>
                or
              </div>
              <div className="w-full">
                <Divider sx={{background:"#4d4d4d"}} />
              </div>
            </div>
            <div className="flex flex-col gap-y-6 w-full">
              <div>
                <form onSubmit={signUp}>
                  <div className="flex flex-col gap-y-3 w-full">
                    {/* login block */}
                    <div className="flex flex-col gap-y-8 bg-dashbg rounded-lg p-4 w-full">
                      {/* FirstName Field */}
                        <div>
                        <div className="text-shareHead font-dmsansReg text-base pb-2 capitalize">first name</div>
                        <div className="w-full">
                          <FNameField
                            fullWidth
                            value={fName}
                            sx={{
                                "& .MuiOutlinedInput-root":{
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderWidth: "1px",
                                    borderStyle: "solid",
                                    borderColor: fName ? '#7C7C8D' : inputError ? '#F84F56' : '#7C7C8D',
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
                                padding:'10px 8px',
                                borderRadius: "8px",
                                caretColor: '#7C7C8D',
                                '&::placeholder': {
                                  color: '#7C7C8D',
                                  opacity: 1
                                }
                                },
                                }}
                                onChange={(e) => setFName(e.target.value)}
                                type={"text"}
                                />
                        </div>
                      </div>
                      {/* LastName Field */}
                        <div>
                        <div className="text-shareHead font-dmsansReg text-base pb-2 capitalize">last name</div>
                        <div className="w-full">
                          <LNameField
                            fullWidth
                            value={lName}
                            sx={{
                                "& .MuiOutlinedInput-root":{
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderWidth: "1px",
                                    borderStyle: "solid",
                                    borderColor: lName ? '#7C7C8D' : inputError ? '#F84F56' : '#7C7C8D',
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
                                padding:'10px 8px',
                                borderRadius: "8px",
                                caretColor: '#7C7C8D',
                                '&::placeholder': {
                                  color: '#7C7C8D',
                                  opacity: 1
                                }
                                },
                                }}
                                onChange={(e) => setLName(e.target.value)}
                                type={"text"}
                                />
                        </div>
                      </div>
                      {/* email field */}
                      <div>
                        <div className="text-shareHead font-dmsansReg text-base pb-2 capitalize">email</div>
                        <div className="w-full">
                          <EmailField
                            fullWidth
                            value={email}
                            sx={{
                                "& .MuiOutlinedInput-root":{
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderWidth: "1px",
                                    borderStyle: "solid",
                                    borderColor: email ? '#7C7C8D' : inputError ? '#F84F56' : '#7C7C8D',
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
                                padding:'10px 8px',
                                borderRadius: "8px",
                                caretColor: '#7C7C8D',
                                '&::placeholder': {
                                  color: '#7C7C8D',
                                  opacity: 1
                                }
                                },
                                }}
                                onChange={(e) => setEmail(e.target.value)}
                                type={"text"}
                                />
                        </div>
                      </div>
                      {/* password field */}
                      <div>
                        <div className="text-shareHead font-dmsansReg text-base pb-2 capitalize">password</div>
                        <div className="w-full">
                          <LoginPassField
                            fullWidth
                            value={loginPass}
                            sx={{
                                "& .MuiOutlinedInput-root":{
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderWidth: "1px",
                                    borderStyle: "solid",
                                    borderColor: loginPass ? '#7C7C8D' : inputError ? '#F84F56' : '#7C7C8D',
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
                                padding:'10px 8px',
                                borderRadius: "8px",
                                caretColor: '#7C7C8D',
                                '&::placeholder': {
                                  color: '#7C7C8D',
                                  opacity: 1
                                }
                                },
                                }}
                                onChange={(e) => setLoginPass(e.target.value)}
                                type={passTogg ? "password" : "text"}
                                InputProps={{
                                  endAdornment: 
                                  <InputAdornment position="end">
                                    <IconButton 
                                    onClick={ShowPass}
                                    sx={{padding:"0px"}}>
                                      {passTogg ? (<AiOutlineEye className="text-gray-400" />) : (<AiOutlineEyeInvisible  className="text-gray-400" />)}
                                    </IconButton>
                                  </InputAdornment>
                                }}
                                />
                        </div>
                      </div>
                    </div>
                    {/* submit */}
                    <div className="w-full">
                      <Button
                      fullWidth
                      sx={{
                        background:"#A162F7",
                        padding:"0.5em",
                        textAlign:"center",
                        textTransform:"none",
                        fontSize:"18px",
                        color:"#fff",
                        fontWeight:"600",
                        borderRadius:"12px"
                      }}
                      type="submit"
                      className="sm:text-base"
                      >
                        Sign Up
                      </Button>
                    </div>
                        </div>
                    </form>
                    </div>
              
                    </div>
                  </div>
                  {/* Error Body */}
                  <Snackbar
                      open={open}
                      autoHideDuration={3000}
                      onClose={HandleClose}
                      action={action}
                      anchorOrigin = {{ vertical:"top", horizontal: "right"}}
                    >
                      <Alert onClose={HandleClose} severity="error" sx={{ width: '100%' }}>
                        <b>{textMessage}</b>
                      </Alert>
                    </Snackbar>
              
                </div>
  )
}