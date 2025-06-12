import { useState } from 'react';
import { styled, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { IconButton } from "@mui/material";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import isoWeek from 'dayjs/plugin/isoWeek';
dayjs.extend(customParseFormat);
dayjs.extend(isoWeek);

addLocale('custom', {
  firstDayOfWeek: 1, // 1 = Monday
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  monthNames: [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ],
  monthNamesShort: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ],
  today: 'Today',
  clear: 'Clear'
});

const Container = styled('div')({
  position: 'relative',
  display: 'inline-block',
  width: '100%', // Set the width of the toggle
  background: "#2B2E38",
  borderRadius: "25px",
  border: '3px solid #2B2E38'
});

const AnimatedToggleButtonGroup = styled(ToggleButtonGroup)(() => ({
  display: 'flex',
  borderRadius: '25px',
  overflow: 'hidden',
  position: 'relative'
}));

const AnimatedToggleButton = styled(ToggleButton)(() => ({
  flex: 1,
  transition: 'background-color 0.8s ease',
  borderRadius: '25px',
  textTransform: 'capitalize',
  letterSpacing: "1px",
  fontWeight: "bold",
  padding: "0.5em",
  fontSize:"14px",
  '&.Mui-selected': {
    color: "#fff",
    borderRadius: "20px",
    backgroundColor: "#F84F56"
  },
  '&:not(.Mui-selected)': {
    color: "#fff",
  },
  '&.MuiToggleButton-root':{
    border: '0px'
  }
}));

const Indicator = styled("div")(({ position }) => ({
  position: "absolute",
  top: 0,
  left: position === "Monthly" ? "0" : "50%",
  width: "50%", // Adjust based on the number of options
  height: "100%",
  backgroundColor: "#F84F56",
  transition: "left 0.4s ease",
  borderRadius: "25px"
}));

const DatePick = () => {

  const [DateValue, SetDateValue] = useState(new Date(dayjs('March 16, 2022')));

  const OnnextMonth = () => {
    return SetDateValue(new Date(DateValue.getFullYear(), DateValue.getMonth(), DateValue.getDate() + 1));
  }

  const OnprevMonth = () => {
    return SetDateValue(new Date(DateValue.getFullYear(), DateValue.getMonth(), DateValue.getDate() - 1));
  }

  const [priceValue, setValue] = useState('Yearly •20% off');
  
    const changeDate = (event, newValue) => {
      if (newValue !== null) {
        setValue(newValue);
        event;
      }
    };

    // Get start and end of the week
    const startOfWeek = dayjs(DateValue).startOf('week');
    const endOfWeek = dayjs(DateValue).endOf('week');

  return (
    <>
      <div className="flex flex-row justify-between w-full">
        <div className="text-white font-dmsansBlck text-lg md:text-base sm:!text-sm">
          {(priceValue === "Yearly •20% off") ? (dayjs(DateValue).format('MMMM D, YYYY')) : (`${startOfWeek.format('MMMM D')} – ${endOfWeek.format('MMMM D, YYYY')}`)}
        </div>
        <div className="flex flex-row gap-x-8">
          <div className="block">
            <IconButton className="p-0" onClick={OnprevMonth}>
              <FaAngleLeft className="text-base text-dashC" />
            </IconButton>
          </div>
          <div className="block">
            <IconButton className="p-0" onClick={OnnextMonth}>
              <FaAngleRight className="text-base text-dashC" />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center py-2 w-full">
        {/* Segmented */}
        <Container>
          <Indicator position={priceValue} />
          <AnimatedToggleButtonGroup
            value={priceValue}
            exclusive
            onChange={changeDate}
            aria-label="text alignment"
          >
            <AnimatedToggleButton disableRipple={true} value="Monthly" aria-label="left aligned">
              {"Week"}
            </AnimatedToggleButton>
            <AnimatedToggleButton disableRipple={true} value="Yearly •20% off" aria-label="right aligned">
              {"Month"}
            </AnimatedToggleButton>
          </AnimatedToggleButtonGroup>
        </Container>
      </div>
      <div className='flex flex-row justify-center w-full'>
        <div>
          <Calendar 
          value={DateValue}
          onChange={(e) => SetDateValue(e.value)} 
          inline
          dateFormat='MMMM D, YYYY'
          headerTemplate={() => null}
          locale="custom"
           />
        </div>
      </div>
    </>
  )
}

export default DatePick;