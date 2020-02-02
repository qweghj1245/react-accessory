import React, { useState } from 'react';
import { Flex } from '../../../../assets/css/global.style';
import { Wrapper, Title, Timing, Time } from './AreaChart.style';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const AreaCharts = ({ title, data }) => {
  const [timeActive, setTimeActive] = useState('week');
  return (
    <Wrapper>
      <Flex justify='between'>
        <Title justify='start'>{title}</Title>
        <Timing>
          <Time dir='left' active={timeActive === 'week'} onClick={() => setTimeActive('week')}>週</Time>
          <Time dir='right' active={timeActive === 'month'} onClick={() => setTimeActive('month')}>月</Time>
        </Timing>
      </Flex>
      <ResponsiveContainer height='100%' width='100%' aspect={16.0 / 6.5}>
        <AreaChart height={200} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0288D1" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#0288D1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tick={{ fontSize: 10 }} />
          <YAxis tick={{ fontSize: 10 }} />
          <CartesianGrid strokeDasharray="3" />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#86C4E6" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
      </ResponsiveContainer>
    </Wrapper>
  )
}

export default AreaCharts;