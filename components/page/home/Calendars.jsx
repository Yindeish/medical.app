import React, { useState } from 'react';
import Calendar from 'moedim';
import { Heading } from '@chakra-ui/react';

const width = '10px';
const height = '10px';
const fontSize = '10px';
const fontWeight = '500';
const color = 'red';

export { width, height, fontSize, color, fontWeight };


const Calendars = () => {
    const [value, setValue] = useState(new Date()); 

    return (
        <>
            <Heading fontSize={['xs', 'sm','md']}>Calendar</Heading>
            <Calendar  value={value} onChange={(date) => setValue(date)} />
        </>
    )
}

export default Calendars;