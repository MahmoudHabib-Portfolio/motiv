import { BarChart, Bar, XAxis, Tooltip } from 'recharts';

// Custom bar shape component
const CustomBar = (props) => {
    const { x, y, width, height, fill, value } = props;

    // Change the fill color based on the value
    const barFill = value === 157000 ? '#2884FF' : fill;

    return (
        <rect
            x={x}
            y={y}
            width={width}
            height={height}
            fill={barFill}
            rx={width / 5}
            ry={width / 5}
        />
    );
};

const MilesStatistics = () => {

    const data = [
        {
            name: '1PM',
            a: 150000
        },
        {
            name: '2PM',
            a: 145000
        },
        {
            name: '3PM',
            a: 157000
        },
        {
            name: '4PM',
            a: 140000
        },
        {
            name: '5PM',
            a: 148000
        },
        {
            name: '6PM',
            a: 125000
        },
        {
            name: '7PM',
            a: 148000
        }
    ];

  return (
    <BarChart
            width={500}
            height={225}
            data={data}
            margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
            }}
        >
            <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                color='#718EBF'
                tick={{ dy: 10 }}
            />
            <Tooltip 
            contentStyle={{padding: "0.5em 0.8em", background:"#1F2128", border: 0, borderRadius:"10px"}}
            itemStyle={{color:"#fff", fontWeight:"bold"}}/>
            <Bar dataKey="a" stackId="a" shape={(props) => <CustomBar {...props} value={props.payload.a} />} fill="#1F2128" barSize={35} />
        </BarChart>
  )
}

export default MilesStatistics;