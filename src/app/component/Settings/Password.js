import { Button, Divider, IconButton, InputAdornment } from "@mui/material";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

/* Old Password */
const OldPasswordField = styled(TextField)({
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

/* New Psssword */
const NewPasswordField = styled(TextField)({
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
  }
})

const Password = () => {

  const [pastPass, setPastPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [passTogg, setPassTogg] = useState(true);
  const [oldPassTogg, setOldPassTogg] = useState(true);

  const updatePass = (e) => {
    e.preventDefault();

  }

  const ShowPass = () => {
    const ToggPass = (passTogg !== true) ? (true) : (false);
    setPassTogg(ToggPass);
  }

  const showOldPass = () => {
    const ToggPass2 = (oldPassTogg !== true) ? (true) : (false);
    setOldPassTogg(ToggPass2);
  }

  return (
    <div className="flex flex-col gap-y-3 w-full">
      {/* header */}
      <div className="flex flex-col gap-y-2 w-full">
              <div className="text-white font-dmsansBlck text-xl tracking-wide capitalize">
                Update Password
              </div>
              <div className="text-dashC font-dmsansReg text-sm tracking-wide capitalize">
                {"Update your password and Don't forget to set the last password first."}
              </div>
            </div>
            <Divider sx={{background:"#323745"}} />
            {/* form body */}
            <div className="w-full">
              <form onSubmit={updatePass}>
                <div className="flex flex-col gap-y-6 w-full">
                  {/* Old Password */}
                  <div>
                    <div className="text-white text-base font-dmsansBlck pb-2">
                      Old Pasword
                    </div>
                    <div className="w-2/4 md:w-full">
                       <OldPasswordField
                  fullWidth
                  value={pastPass}
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
                      onChange={(e) => setPastPass(e.target.value)}
                      type={oldPassTogg ? "password" : "text"}
                      InputProps={{
                              endAdornment: 
                              <InputAdornment position="end">
                                <IconButton 
                                onClick={showOldPass}
                                sx={{padding:"0px"}}>
                                  {oldPassTogg ? (<AiOutlineEye className="text-gray-400" />) : (<AiOutlineEyeInvisible  className="text-gray-400" />)}
                                </IconButton>
                              </InputAdornment>
                            }}
                      />
                    </div>
                  </div>
                  {/* New Password */}
                  <div>
                      <div className="text-white text-base font-dmsansBlck pb-2">
                      New Pasword
                    </div>
                    <div className="w-2/4 md:w-full">
                      <NewPasswordField
                        fullWidth
                        value={newPass}
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
                            onChange={(e) => setNewPass(e.target.value)}
                            type={passTogg ? "password" : "text"}
                            InputProps={{
                              endAdornment: 
                              <InputAdornment position="end">
                                <IconButton 
                                onClick={ShowPass}
                                sx={{padding:"0px"}}>
                                  {passTogg ? (<AiOutlineEye className="text-gray-400" />) : (<AiOutlineEyeInvisible className="text-gray-400" />)}
                                </IconButton>
                              </InputAdornment>
                            }}
                            />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/* update button */}
            <div className="flex justify-end w-full">
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
  )
}

export default Password;