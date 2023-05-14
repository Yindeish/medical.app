import { Heading, Text, Image } from '@chakra-ui/react';


const DailyRead = () => {
  return (
    <>
        <Heading size={'md'}>Daily Read</Heading>
        <Text fontSize={'sm'} fontWeight={'normal'}>
            New rules in the dose of medicines to be consumed.
        </Text>
        <Image w={'full'} h={'85%'} src="../../../public/vercel.svg" />
    </>
  )
}

export default DailyRead