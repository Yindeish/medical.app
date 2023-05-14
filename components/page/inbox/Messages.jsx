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
    <Box bg={'white'} w={'full'} h={'100%'} p={3} px={5}>
        <Flex py={6} borderBottom={'3px solid #749D1C'} w={'full'} h={'fit-content'} justify={'space-between'} align={'center'}>
            <Input w={2} h={7}  type="checkbox" size={"md"} border={'2px solid #749D1C'} />
            <Flex w={'fit-content'} h={'full'} justify={'space-between'} align={'center'}>
                <InputGroup w={'25em'} style={{ flex: .6 }} className='rounded-md' h={'35px'} bgColor={'#F7F7F7'}>
                    <InputLeftElement h={'100%'}
                        pointerEvents="none"
                        children={<Search />}
                        size="xs"
                    />
                    <Input h={'100%'}
                        style={{ borderRadius: '1em' }}
                        type='search'
                        variant="outline"
                        size="xs"
                        placeholder='Search'
                    />
                </InputGroup>
                <Filter />
                <LeftChevron />
                <RightChevron />
                <Text fontSize={'md'} textDecor={'underline'}>View All</Text>
            </Flex>
        </Flex>
        <Flex className={Styles.messagesWrapper} flexDir={'column'} gap={2} overflowY={'scroll'} mt={4} w={'full'} h={'62vh'} pr={'1em'}>
            { people.map(person => (
                <Flex align={'center'} justify={'space-between'} gap={'2em'} w={'full'} h={'fit-content'}>
                    <Input w={2} h={7}  type="checkbox" size={"md"} border={'2px solid #749D1C'} />
                    <Flex  w={'full'} h={'full'} align={'center'} gap={'4em'}>
                        <Avatar size={'sm'} />
                        <Flex bg={'#F7F7F7'} borderRadius={'1em'} align={'center'} gap={'3em'} w={'full'} py={3} px={5}>
                            <Flex borderRight={'4px solid #749D1C'} w={'40%'} flexDir={'column'} gap={0.5}>
                                <Text fontWeight={'bold'} textAlign={'left'} w={'full'} fontSize={'sm'}>{person.name}</Text>
                                <Text color={'gray.600'} textAlign={'left'} w={'full'} fontSize={'xs'}>{person.date} | {person.time}</Text>
                            </Flex>
                            <Flex h={'full'} w={'60%'} align={'center'} justify={'space-between'}>
                                <Text color={'gray.800'}  fontWeight={'bold'}>{person.message} - <span className="text-xs" style={{ color: 'grey'}}>{person.appendix}</span></Text>
                                <Options />
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