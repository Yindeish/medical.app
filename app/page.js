"use client"

import { Grid, GridItem } from '@chakra-ui/react';
import Tasks from '@/components/page/home/Tasks';
import Conversations from '@/components/page/home/Conversations';
import Calendars from '@/components/page/home/Calendars';
import DailyRead from '@/components/page/home/DailyRead';
import Statistics from '@/components/page/home/Statistics';
import Updates from '@/components/page/home/Updates';
import Images from '@/components/page/home/Images';
import Patients from '@/components/page/home/Patients';

export default function Home() {
  return (
    <>
      <Grid
        templateAreas={`"tasks tasks conversations"
                        "calender read statistics"
                        ". images  ."
                        "updates images patients"`}
        gridTemplateColumns={'1fr 1fr 2fr'}
        gridTemplateRows={'33vh 35vh 5px 16vh'}
        w={'100%'}
        h='fit-content'
        gap='3'
      >
        <GridItem p={2} borderRadius={'1em'} bg={'#749D1C'} area={'tasks'}>
          <Tasks />
        </GridItem>
        <GridItem p={2} borderRadius={'1em'} bg='white' area={'conversations'}>
          <Conversations />
        </GridItem>
        <GridItem p={2} borderRadius={'1em'} bg='white' area={'calender'}>
          <Calendars />
        </GridItem>
        <GridItem p={2} borderRadius={'1em'} bg='white' area={'read'}>
          <DailyRead />
        </GridItem>
        <GridItem p={2} borderRadius={'1em'} bg='white' area={'statistics'}>
          <Statistics />
        </GridItem>
        <GridItem p={2} borderRadius={'1em'} bg='white' area={'updates'}>
          <Updates />
        </GridItem>
        <GridItem overflow={'hidden'} borderRadius={'1em'} area={'images'}>
          <Images />
        </GridItem>
        <GridItem p={2} borderRadius={'1em'} bg={'#749D1C'} area={'patients'}>
          <Patients />
        </GridItem>
      </Grid>
    </>
  )
}
