import { Flex, Text, InputGroup, InputLeftElement, Input, Box, Avatar } from "@chakra-ui/react"
import Search from "@/components/icons/Search";
import Filter from "@/components/icons/Filter";
import LeftChevron from "@/components/icons/LeftChevron";
import RightChevron from "@/components/icons/RightChevron";
import Options from "@/components/icons/Options";
import Styles from '../../../components/page/inbox/Styles/main.module.css';

const Messages = () => {

    const people = [
        {
            name: 'Dr. Ali',
            date: '24 Jan, 2023',
            time: '04:00 PM',
            message: 'Patient Rounds',
            appendix: 'Please look into vital signs of patient “Shu.......'
        },
        {
            name: 'Dr. Ali',
            date: '24 Jan, 2023',
            time: '04:00 PM',
            message: 'Patient Rounds',
            appendix: 'Please look into vital signs of patient “Shu.......'
        },
        {
            name: 'Dr. Ali',
            date: '24 Jan, 2023',
            time: '04:00 PM',
            message: 'Patient Rounds',
            appendix: 'Please look into vital signs of patient “Shu.......'
        },
        {
            name: 'Dr. Ali',
            date: '24 Jan, 2023',
            time: '04:00 PM',
            message: 'Patient Rounds',
            appendix: 'Please look into vital signs of patient “Shu.......'
        },
        {
            name: 'Dr. Ali',
            date: '24 Jan, 2023',
            time: '04:00 PM',
            message: 'Patient Rounds',
            appendix: 'Please look into vital signs of patient “Shu.......'
        },
        {
            name: 'Dr. Ali',
            date: '24 Jan, 2023',
            time: '04:00 PM',
            message: 'Patient Rounds',
            appendix: 'Please look into vital signs of patient “Shu.......'
        },
        {
            name: 'Dr. Ali',
            date: '24 Jan, 2023',
            time: '04:00 PM',
            message: 'Patient Rounds',
            appendix: 'Please look into vital signs of patient “Shu.......'
        },
        {
            name: 'Dr. Ali',
            date: '24 Jan, 2023',
            time: '04:00 PM',
            message: 'Patient Rounds',
            appendix: 'Please look into vital signs of patient “Shu.......'
        },
    ];
  return (
    <Box bg={'white'} w={'full'} h={'100%'} p={3} px={[1, 3, 5]}>
        <Flex py={[2, 3, 6]} borderBottom={'3px solid #749D1C'} w={'full'} h={'fit-content'} justify={'space-between'} align={'center'}>
            <Input w={['0.1px', '0.5px', 2]} h={['30px', '30px', 7]}  type="checkbox" size={"md"} border={'2px solid #749D1C'} />
            <Flex w={'fit-content'} h={'full'} justify={'space-between'} align={'center'}>
                <InputGroup flex={[0.7, 0.7,0.6]} className='rounded-md' h={'100%'} bgColor={'gray.200'}>
                    <InputLeftElement display={'flex'} alignItems={'center'} justifyContent={'flex-start'} 
                    w={'fit-content'} h={'100%'}
                        pointerEvents="none"
                        children={<Box w={['15px', '30px', '30px']} h={['15px', '30px', '30px']}><Search width= {'100%'} height={'100%'} /></Box>}
                        size={['xs', 'sm', 'md']}
                    />
                    <Input py={[2, 3, 3]} pl={['15px', '30px', '30px']} h={'100%'}
                    flex={0.999}
                        style={{ borderRadius: '1em' }}
                        type='search'
                        variant="outline"
                        size="xs"
                        placeholder='Search'
                    />
                </InputGroup>
                <Box><Filter /></Box>
                <Box><LeftChevron /></Box>
                <Box><RightChevron /></Box>
                <Text fontSize={'md'} textDecor={'underline'}>View All</Text>
            </Flex>
        </Flex>
        <Flex className={Styles.messagesWrapper} flexDir={'column'} gap={2} overflowY={'scroll'} mt={4} w={'full'} h={'62vh'} pr={'1em'}>
            { people.map(person => (
                <Flex flexDir={['column', 'row', 'row']} align={['flex-start', 'center', 'center']} justify={'space-between'} gap={['.5em', '1em','2em']} w={'full'} h={'fit-content'}>
                    <Input w={['0.1px', '0.5px', 2]} h={['30px', '30px', 7]}  type="checkbox" border={'2px solid #749D1C'} />
                    <Flex flex={[, 0.99, 0.95]}  w={'full'} h={'full'} align={'center'} gap={['1em', '1em', '4em']}>
                        <Avatar size={'sm'} />
                        <Flex flexDir={['column', 'row', 'row']} flex={0.99} bg={'#F7F7F7'} borderRadius={'1em'} align={['flex-start', 'center', 'center']} gap={['0.3em', '0.5em','3em']} w={'full'} py={[2, 1, 3]} px={[2, 3, 5]}>
                            <Flex borderBottom={['4px solid #749D1C', 'unset',]} borderRight={[, '4px solid #749D1C','4px solid #749D1C']} w={['full', '40%', '40%']} flexDir={'column'} gap={0.5}>
                                <Text fontWeight={'bold'} textAlign={'left'} w={'full'} fontSize={['sm', 'md', 'lg']}>{person.name}</Text>
                                <Text color={'gray.600'} textAlign={'left'} w={'full'} fontSize={['xs', 'sm', 'md']}>{person.date} | {person.time}</Text>
                            </Flex>
                            <Flex flex={0.99} h={'full'} w={['full', '60%', '60%']} align={'center'} justify={'space-between'}>
                                <Text flex={[, 0.75, 0.9]} lineHeight={[, '3', ]} color={'gray.800'} fontSize={['sm', 'md', 'lg']}  fontWeight={'bold'}>{person.message} - <span className="text-xs" style={{ color: 'grey'}}>{person.appendix}</span></Text>
                                <Box><Options /></Box>
                            </Flex>
                        </Flex>
                    </Flex>
            </Flex>
            )) }
        </Flex>
    </Box>
  )
}

export default Messages