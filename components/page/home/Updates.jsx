import { Heading, Text, Flex, Avatar } from '@chakra-ui/react';

const Updates = () => {
  return (
    <>
        <Flex w={'full'} align={'center'} justify={'space-between'}>
            <Heading fontSize={['xs', 'sm','md']}>Updates</Heading>
            <Text textDecor={'underline'} fontSize={['xx-small', 'xs','sm']} fontWeight={'normal'}>View All</Text>
        </Flex>
        <Flex bg={'#749D1C'} gap={5} mt={3} p={3} borderRadius={'.5em'} w={'full'} align={'center'} justify={[ 'space-between',,'center']}>
            <Avatar size={'sm'} src=''/>
            <Flex flexDir={'column'} align={'center'} justify={'flex-start'}>
                <Text w={'full'} fontSize={['xx-small', 'xs','sm']} color={'white'} textAlign={'left'} fontWeight={'normal'}>Monthly doctor’s meet</Text>
                <Text w={'full'} fontSize={['3xs', 'xs','sm']} color={'white'} textAlign={'left'} fontWeight={'normal'}>30 Jan, 2023 | 04:00 PM</Text>
            </Flex>
        </Flex>
    </>
  )
}

export default Updates