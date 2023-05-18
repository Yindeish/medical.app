import { Heading, Flex, Avatar, Box  } from "@chakra-ui/react";
import Options from "@/components/icons/Options";
import styles from '../../page/home/Styles/main.module.css';

const Conversations = () => {

    const conversationItems  = [
        {
            name: 'Dr. All',
            date: '24 Jan, 2023',
            time: '04:00 PM',
        },
        {
            name: 'Dr. Neha',
            date: '24 Jan, 2023',
            time: '02:05 PM',
        },
        {
            name: 'Head Nurse',
            date: '23 Jan, 2023',
            time: '06:10 PM',
        },
        {
            name: 'Wardboy',
            date: '21 Jan, 2023',
            time: '01:00 PM',
        },
    ];


  return (
    <>
        <Heading fontSize={['xs', 'sm','md']} color={'black'}>Recent Conversations</Heading>
        <Flex w={[ '85%',,'60%']} maxH={'28vh'} className={styles.conversationScrollBar} flexDir={'column'} gap={2} align={'flex-start'} overflowY={"scroll"}>
            {conversationItems.map(conversationItem => (
                <Flex w={'full'} gap={3} p={1} bg={'white'} borderRadius={'lg'} justify={'space-between'} align={'center'}>
                    <Avatar  size={['2xs','xs', 'sm']} name={conversationItem.name.substring(0)}/>
                    <Flex h={'full'} align={"center"} justify={'space-between'} flex={'0.97'}>
                        <Flex flexDir={'column'}>
                            <Heading fontSize={['xs', 'sm','md']}>{conversationItem.name}</Heading>
                            <Flex fontWeight={'normal'} fontSize={['xx-small', 'xs','sm']} color={'gray.400'}>{conversationItem.date} | {conversationItem.time}</Flex>
                        </Flex>
                        <Box>
                            <Options />
                        </Box>
                    </Flex>
                </Flex>
            ))}
        </Flex>
    </>
  )
}

export default Conversations;
