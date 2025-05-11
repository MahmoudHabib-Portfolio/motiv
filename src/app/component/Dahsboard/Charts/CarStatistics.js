import { AreaChart, Area, XAxis } from 'recharts';

const CarStatistics = () => {

    const data = [
        {
          name: '7am',
          uv: 100,
          pv: 250,
          amt: 350,
        },
        {
          name: '9am',
          uv: 450,
          pv: 550,
          amt: 650,
        },
        {
          name: '11am',
          uv: 750,
          pv: 800,
          amt: 650,
        },
        {
          name: '1pm',
          uv: 700,
          pv: 300,
          amt: 350,
        },
        {
          name: '3pm',
          uv: 300,
          pv: 675,
          amt: 775,
        },
        {
          name: '5pm',
          uv: 475,
          pv: 325,
          amt: 525,
        },
        {
          name: '7pm',
          uv: 325,
          pv: 400,
          amt: 600,
        },
        {
            name: '9pm',
            uv: 475,
            pv: 325,
            amt: 525,
          },
      ];

  return (
    <AreaChart
        width={550}
        height={250}
        data={data}
        syncId="anyId"
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
        <Area type="monotone" dataKey="uv"strokeWidth={"2"} stroke="rgba(255, 118, 76, 1)" fill="rgba(255, 118, 76, 0.29)" />
    </AreaChart>
  )
}

export default CarStatistics;