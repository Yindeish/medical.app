import { Flex, Button, Heading } from "@chakra-ui/react"
import Upgrade from "@/components/icons/Upgrade";
import Line from "@/components/icons/Line";

const Patients = () => {
  return (
    <Flex w={'full'} gap={5} align={'center'} justify={'space-between'}>
        <Flex w={'full'} p={1} flexDir={'column'} gap={5}>
            <Flex w={'full'} align={'center'} gap={2}>
                <Heading size={['xs', 'sm', 'md']} color={'white'} fontWeight={'normal'}>New Patients</Heading> 
                <Button variant={'solid'} shadow={'base'} bg={'white'} color={'#749D1C'} fontSize={['xs', 'sm','md']} p={1}>40</Button>
            </Flex>
            <Flex w={'fit-content'} bg={'#DFFDDD'} borderRadius={'.5em'} p={2} gap={2} align={'center'} fontSize={['xs', 'sm','md']}>
                51%
                <Upgrade />
            </Flex>
        </Flex>
        <Line />
        <Flex w={'full'} p={1} flexDir={'column'} gap={5}>
            <Flex w={'full'} align={'center'} gap={2}>
                <Heading size={['xs', 'sm', 'md']} color={'white'} fontWeight={'normal'}>Repeat Patients</Heading> 
                <Button variant={'solid'} shadow={'base'} bg={'white'} color={'#749D1C'} fontSize={['xs', 'sm','md']} p={1}>22</Button>
            </Flex>
            <Flex w={'fit-content'} bg={'#DFFDDD'} borderRadius={'.5em'} p={2} gap={2} align={'center'} fontSize={['xs', 'sm','md']}>
                32%
                <Upgrade />
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Patients