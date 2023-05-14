import { Flex, Button, Heading } from "@chakra-ui/react"
import Upgrade from "@/components/icons/Upgrade";
import Line from "@/components/icons/Line";

const Patients = () => {
  return (
    <Flex w={'full'} gap={5} align={'center'} justify={'space-between'}>
        <Flex w={'full'} p={1} flexDir={'column'} gap={5}>
            <Flex w={'full'} align={'center'} gap={2}>
                <Heading size={'md'} color={'white'} fontWeight={'normal'}>New Patients</Heading> 
                <Button variant={'solid'} shadow={'base'} bg={'white'} color={'#749D1C'} p={1}>40</Button>
            </Flex>
            <Flex w={'fit-content'} bg={'#DFFDDD'} borderRadius={'.5em'} p={2} gap={2} align={'center'}>
                51%
                <Upgrade />
            </Flex>
        </Flex>
        <Line />
        <Flex w={'full'} p={1} flexDir={'column'} gap={5}>
            <Flex w={'full'} align={'center'} gap={2}>
                <Heading size={'md'} color={'white'} fontWeight={'normal'}>Repeat Patients</Heading> 
                <Button variant={'solid'} shadow={'base'} bg={'white'} color={'#749D1C'} p={1}>22</Button>
            </Flex>
            <Flex w={'fit-content'} bg={'#DFFDDD'} borderRadius={'.5em'} p={2} gap={2} align={'center'}>
                32%
                <Upgrade />
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Patients