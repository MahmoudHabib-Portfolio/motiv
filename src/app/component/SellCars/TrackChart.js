import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

// Custom bar shape component
const CustomBar = (props) => {
    const { x, y, width, height, fill } = props;
    
    return (
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        rx={width / 2}
        ry={width / 2}
      />
    );
  };

const TrackChart = () => {

    const data = [
        {
          name: 'Mon',
          a: 10,
        },
        {
          name: 'Tue',
          a: 8,
        },
        {
          name: 'Wed',
          a: 17,
        },
        {
          name: 'Thu',
          a: 22,
        },
        {
          name: 'Fri',
          a: 18
        },
        {
          name: 'Sat',
          a: 14
        },
        {
          name: 'Sun',
          a: 18
        }
      ];

  return (
    <BarChart
          width={375}
          height={325}
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis 
          dataKey="name" 
          axisLine={false}
          tickLine={false}
          color='#F84F56'
          tick={{ dy: 10 }}
          />

          <Tooltip 
            contentStyle={{padding: "0.5em 0.8em", background:"#1F2128", border: 0, borderRadius:"10px"}}
            itemStyle={{color:"#fff", fontWeight:"bold"}}/>

          <YAxis
          domain={[0, 30]} 
          tickFormatter={(value) => `${value}`}
          axisLine={false}
          tickLine={false}
          tick={{ dx: -10 }}
          />
          <Bar dataKey="a" stackId="a" shape={CustomBar} fill="#F84F56" barSize={18} />
        </BarChart>
  )
}

export default TrackChart;