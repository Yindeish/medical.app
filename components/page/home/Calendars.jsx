import React, { useState } from 'react';
import Calendar from 'moedim';
import { Heading } from '@chakra-ui/react';


const Calendars = () => {
    const [value, setValue] = useState(new Date()); 

    return (
        <>
            <Heading size={'md'}>Calendar</Heading>
            <Calendar  value={value} onChange={(date) => setValue(date)} />
        </>
    )
}

export default Calendars;