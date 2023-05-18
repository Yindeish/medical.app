"use client";

import { Flex, Heading, Text, Avatar, Button, Grid, GridItem } from '@chakra-ui/react';

const Create = () => {

  return (
    <Flex bg={'#F7F7F7'} w={'full'} h={'full'} align={'center'} justify={'center'}>
        <Flex w={[, '90%', '45%']} h={'fit-content'} flexDir={'column'} borderRadius={'1em'}>

            <Flex w={'full'} h={'75px'} bg={'#749D1C'} flexDir={'column'} align={'center'} justify={'center'} gap={1} borderTopRadius={'1em'}>
                <Heading fontSize={'lg'} color={'white'}>Create new task</Heading>
                <Text fontSize={'sm'} color={'grey.100'} fontWeight={'bold'}>24 Jan, 2023</Text>
            </Flex>

            <Grid w={'full'}
            // gridTemplateColumns={[, '1fr', '1fr 1fr']} 
            gridTemplateColumns={'1fr 1fr'} 
            // gridTemplateRows={[, 'auto auto auto auto', 'auto auto']}
            gridTemplateRows={'auto auto'}
            gap={2} p={3} pb={'2.5em'}
            placeContent={'center'}
            position={'relative'}>
                <GridItem colSpan={1} rowSpan={1}>
                    <Flex w={'full'} h={'fit-content'} flexDir={'column'} gap={2}>
                        <Heading fontSize={'md'} color={'black'}>Task name</Heading>
                        <Text bg={'gray.100'} p={2.5} 
                        color={'gray.400'} borderRadius={'.7em'} 
                        textAlign={'left'}
                        _hover={{ bg: 'lightgrey' }}>Example</Text>
                    </Flex>
                </GridItem>
                <GridItem colSpan={1} rowSpan={1}>
                    <Flex w={'full'} h={'fit-content'} flexDir={'column'} gap={2}>
                        <Heading fontSize={'md'} color={'black'}>Deadline</Heading>
                        <Flex gap={1}>
                            <Button px={5} color={'gray.400'} borderRadius={'.7em'}>January</Button>
                            <Button px={5} color={'gray.400'} borderRadius={'.7em'}>29</Button>
                            <Button px={5} color={'gray.400'} borderRadius={'.7em'}>2023</Button>
                        </Flex>
                    </Flex>
                </GridItem>
                <GridItem colSpan={1} rowSpan={1}>
                    <Flex w={'full'} h={'fit-content'} flexDir={'column'} gap={2}>
                        <Heading fontSize={'md'} color={'black'}>Assign to</Heading>
                        <Flex gap={3}>
                            <Avatar size={'md'} />
                            <Avatar size={'md'} />
                            <Avatar size={'md'} />
                            <Avatar size={'md'} />
                            <Avatar size={'md'} />
                        </Flex>
                    </Flex>
                </GridItem>
                <GridItem colSpan={1} rowSpan={1}>
                    <Flex w={'full'} h={'fit-content'} flexDir={'column'} gap={2}>
                        <Heading fontSize={'md'} color={'black'}>Required</Heading>
                        <Text bg={'gray.100'} p={2.5} 
                        color={'gray.400'} borderRadius={'.7em'} 
                        textAlign={'left'}
                        _hover={{ bg: 'lightgrey' }}>Example</Text>
                    </Flex>
                </GridItem>
                <Button color={'white'} bg={'#749D1C'} mx={'auto'} position={'absolute'} bottom={'-20px'} left={'35%'}>Create new task</Button>
            </Grid>
        </Flex>
    </Flex>
  )
}

export default Create;