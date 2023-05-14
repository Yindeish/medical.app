"use client";

import { Flex, Heading, Text } from "@chakra-ui/react";
import Chevron from "@/components/icons/Chevron";
import Graph from "@/components/icons/Graph";
import GreenLegend from "@/components/icons/GreenLegend";
import BlueLegend from "@/components/icons/BlueLegend";
import { useState } from "react";

const Statistics = () => {

    const [optionIsOpen, setOptionIsOpen] = useState(false);

  return (
    <Flex w={'full'} flexDir={'column'} align={'center'} gap={2}>
        <Flex w={'full'} justify={'space-between'} align={'center'}>
            <Heading size={'md'}>Statistics</Heading>
            <Flex gap={2} align={'center'}
            >
                <Text fontSize={'sm'} fontWeight={'normal'}>Last 6 months</Text>
                <Chevron />
            </Flex>
        </Flex>
        {optionIsOpen && 
            <Flex>
                <Text>Last 5 months</Text>
                <Text>Last 4 months</Text>
                <Text>Last 3 months</Text>
                <Text>Last 3 months</Text>
                <Text>Last 2 months</Text>
                <Text>Last 1 months</Text>
            </Flex>
        }
        <Graph width={'70%'} height={'auto'} />
        <Flex w={'full'} align={'center'} justify={'center'} gap={5}>
            <Flex align={'center'} gap={2} fontSize={'sm'} fontWeight={'normal'}><GreenLegend />Appointments</Flex>
            <Flex align={'center'} gap={2} fontSize={'sm'} fontWeight={'normal'}><BlueLegend />Walk in patients</Flex>
        </Flex>
    </Flex>
  )
}

export default Statistics