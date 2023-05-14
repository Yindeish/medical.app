"use client";

import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "@/components/page/inbox/NavBar";
import Create from "@/components/page/inbox/Create";

const page = () => {
  return (
    <>
        <Grid
        gridTemplateColumns={'10% 90%'}
        gridTemplateRows={'100%'}
        w={'100%'}
        h='78vh'
        bg={'#F7F7F7'}
        gap='3'
      >
        <GridItem colSpan={1} rowSpan={1}>
            <NavBar />
        </GridItem>
        <GridItem colSpan={1} rowSpan={1}>
            <Create />
        </GridItem>
      </Grid>
    </>
  )
}

export default page