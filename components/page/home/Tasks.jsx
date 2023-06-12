import {  Grid, GridItem, Flex, Button, Heading, Avatar, Text, Image } from '@chakra-ui/react';

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
    templateAreas={[
      `"header image"
      "tasksWrapper image"`, 
       `'header header'
        'tasksWrapper image'
        'tasksWrapper image'
       `           
    ]}
        gridTemplateColumns={['1.5fr 1fr', 'repeat(2, 1fr)']}
        gridTemplateRows={['minmax(30px, 40px) auto', '40px auto 50px']}
        h='100%'
        w={'full'}
        bg={'transparent'}
        gap={['1', '2', '3']}
        color='blackAlpha.700'
        fontWeight='bold'
    >
        <GridItem pl='2' bg={'transparent'} borderRadius={'1em'} area={'header'}>
          <Flex gap={3} pb={2}>
            <Heading size={['xs', 'sm','md']} className='text-white'>Recently Assigned Tasks</Heading>
            <Button variant={'solid'} shadow={'base'} bg={'white'} color={'#749D1C'} p={[0.2, 0.5,1]} fontSize={['xs', 'sm','md']}>62</Button>
          </Flex>
        </GridItem>
        <GridItem pl='2' bg={'transparent'} borderRadius={'1em'} area={'image'}>
          <Image w={'100%'} h={'100%'} objectFit={'cover'} objectPosition={'center'} src='../../../public/images/unsplash_279xIHymPYY.png' />
        </GridItem>
        <GridItem pl='2' bg={'transparent'} borderRadius={'1em'} area={'tasksWrapper'}>
            <Text textAlign={'end'} color={'white'} fontWeight={'normal'} textDecor={'underline'}>View All</Text>
          <Flex flexDir={'column'} gap={['1', '2']} align={'flex-start'} maxH={'28vh'} overflowY={"scroll"}>
            {taskItems.map(taskItem => (
                <Flex w={'full'} gap={['1', '2', '3']} p={1} bg={'white'} borderRadius={['sm', 'lg']} justify={'flex-start'} align={'center'}>
                    <Avatar size={['2xs','xs', 'sm']} name={taskItem.name.substring(0)} />
                    <Flex flexDir={'column'} justify={'center'} align={'flex-start'}>
                        <Heading fontSize={['xs', 'sm','md']}>{taskItem.name}</Heading>
                        <Flex fontWeight={'normal'} fontSize={['xx-small', 'xs','sm']} color={'gray.400'}>{taskItem.date} | {taskItem.time}</Flex>
                    </Flex>
                </Flex>
            ))}
          </Flex>
        </GridItem>
    </Grid>
  )
}

export default Tasks