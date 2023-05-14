import {  Grid, GridItem, Flex, Button, Heading, Avatar, Text } from '@chakra-ui/react';

const Tasks = () => {

    const taskItems  = [
        {
            name: 'Patient Rounds',
            date: '25 Jan, 2023',
            time: '04:00 PM',
        },
        {
            name: 'Laboratory test results review',
            date: '25 Jan, 2023',
            time: '04:00 PM',
        },
        {
            name: 'Surgical Procedures',
            date: '25 Jan, 2023',
            time: '04:00 PM',
        },
    ];
  return (
    <Grid
    templateAreas={`"header image"
                    "tasksWrapper image"`}
        gridTemplateColumns={'1.5fr 1fr'}
        gridTemplateRows={'30px auto'}
        h='100%'
        w={'full'}
        bg={'transparent'}
        gap='3'
        color='blackAlpha.700'
        fontWeight='bold'
    >
        <GridItem pl='2' bg={'transparent'} borderRadius={'1em'} area={'header'}>
          <Flex gap={3} pb={2}>
            <Heading size={'md'} className='text-white'>Recently Assigned Tasks</Heading>
            <Button variant={'solid'} shadow={'base'} bg={'white'} color={'#749D1C'} p={1}>62</Button>
          </Flex>
        </GridItem>
        <GridItem pl='2' bg={'transparent'} borderRadius={'1em'} area={'image'}>
          Image
        </GridItem>
        <GridItem pl='2' bg={'transparent'} borderRadius={'1em'} area={'tasksWrapper'}>
            <Text textAlign={'end'} color={'white'} fontWeight={'normal'} textDecor={'underline'}>View All</Text>
          <Flex flexDir={'column'} gap={2} align={'flex-start'}>
            {taskItems.map(taskItem => (
                <Flex w={'full'} gap={3} p={1} bg={'white'} borderRadius={'lg'} justify={'flex-start'} align={'center'}>
                    <Avatar size={'sm'} name={taskItem.name.substring(0)} />
                    <Flex flexDir={'column'} justify={'center'} align={'flex-start'}>
                        <Heading size={'sm'}>{taskItem.name}</Heading>
                        <Flex fontWeight={'normal'} fontSize={'sm'} color={'gray.400'}>{taskItem.date} | {taskItem.time}</Flex>
                    </Flex>
                </Flex>
            ))}
          </Flex>
        </GridItem>
    </Grid>
  )
}

export default Tasks