import { AreaChart, Area, XAxis, CartesianGrid, Tooltip } from 'recharts';


const CustomDot = (props) => {
  const { cx, cy } = props;
  return (
    <circle cx={cx} cy={cy} r={4} fill="#a162f7" stroke="#fff" strokeWidth={3} />
  );
};

const ActivityCharts = () => {

    const data = [
        {
          name: '12/1',
          uv: 5000,
        },
        {
          name: '12/2',
          uv: 7000,
        },
        {
          name: '12/3',
          uv: 8000,
        },
        {
          name: '12/4',
          uv: 9000,
        },
        {
          name: '12/5',
          uv: 10000,
        },
        {
          name: '12/6',
          uv: 9500,
        },
        {
          name: '12/7',
          uv: 9000,
        },
        {
            name: '12/8',
            uv: 8500,
        },
        {
            name: '12/9',
            uv: 7700,
        },
        {
            name: '12/10',
            uv: 8000,
        },
        {
            name: '12/11',
            uv: 8500
        },
        {
            name: '12/8',
            uv: 9000,
        }
      ];

  return (
    <AreaChart
        width={650}
        height={175}
        data={data}
        syncId="anyId"
        margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
        }}
        >
        
        <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="rgba(161, 98, 247, 1)" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="rgba(161, 98, 247, 1)" stopOpacity={0}/>
        </linearGradient>
        </defs>

        <CartesianGrid vertical={true} horizontal={false} stroke="#303046" strokeDasharray="0 0" />

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

        <Area 
        type="monotone" 
        dataKey="uv" 
        strokeWidth={"2"} 
        stroke="rgba(161, 98, 247, 1)" 
        fill="url(#colorUv)"
        dot={<CustomDot />}
        />
    </AreaChart>
  )
}

export default ActivityCharts;