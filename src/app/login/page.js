"use client"
import { Button, Divider, IconButton, InputAdornment, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";


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

const page = () => {

  const [email, setEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [passTogg, setPassTogg] = useState(true);
  const [check, setCheck] = useState(false);
  const router = useRouter();

  const ShowPass = () => {
    const ToggPass = (passTogg !== true) ? (true) : (false);
    setPassTogg(ToggPass);
  }

  const signIn = (e) => {
    e.preventDefault();

    if((!email, !loginPass)){
        alert("make sure you filled form fields");
      }else{
        router.push("/");
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
            <button 
            onClick={() => {router.push('/register')}}
            type="button">
              Don’t have an account? <span className="text-breakC">Sign up</span>
            </button>
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
                <ListItemText primary={<span className="text-shareHead text-base capitalize font-dmsansReg sm:text-sm">Sign in with Google</span>} />
              </ListItem>
            </div>
           </Button>
           {/* facebook */}
           <Button className="flex justify-center rounded-lg py-3 px-2 w-2/4 bg-faceBg sm:!w-full">
            <div>
              <ListItem sx={{padding:"0px"}}>
                <ListItemIcon sx={{minWidth:"36px"}}>
                  <FaFacebook className="text-2xl text-white"/>
                </ListItemIcon>
                <ListItemText primary={<span className="text-shareHead text-base capitalize font-dmsansReg sm:text-sm">Sign in with Facebook</span>} />
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
            <form onSubmit={signIn}>
              <div className="flex flex-col gap-y-3 w-full">
                {/* login block */}
                <div className="flex flex-col gap-y-8 bg-dashbg rounded-lg p-4 w-full">
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
                {/* feedback */}
                <div className="flex justify-between w-full">
                  <div>
                    <FormControlLabel 
                      value={check}
                      control={<Checkbox disableRipple={true} 
                      onChange={(e) => setCheck(e.target.checked)} 
                      sx={{
                        "&.MuiCheckbox-root":{
                          padding: "5px",
                          color:"#808191",
                          bottom: "1px"
                        },
                        "&.Mui-checked":{
                          color: "#F84F56"
                        }
                      }}
                      />}
                      label={<span className="text-base text-dashC font-dmsansReg">{"Remember Me"}</span>}
                      labelPlacement="end"
                    />
                  </div>
                  <div>
                    <button 
                    onClick={() => {router.push('')}}
                    type="button">
                    <span className="text-breakC sm:text-sm">Forgot your password?</span>
                    </button>
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
                    Sign in
                  </Button>
                </div>
              </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page;