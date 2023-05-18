import { Text, Flex, Input, Avatar, InputGroup, InputLeftElement, ButtonGroup, Box } from '@chakra-ui/react';
import Logo from '../icons/Logo';
import Bell from '../icons/Bell';
import Search from '../icons/Search';

const TopNav = () => {
  return (
    <Flex justify={'space-between'} align={'center'} mx={['0px', 'auto','1em']} h={['30px', '50px', '50px']} w={['100%',,]}>
        <Box w={'auto'} h={[23, , 45]}>
            <Logo width={'100%'} height={'100%'} />
        </Box>
        <Flex gap={5} justify={'space-between'} alignItems={'center'} h={'100%'} w={'fit-content'}>
            <InputGroup flex={[0.9,,0.6]} className='rounded-md' h={'100%'} bgColor={'gray.200'}>
                <InputLeftElement display={'flex'} alignItems={'center'} justifyContent={'flex-start'} 
                w={'fit-content'} h={'100%'}
                    pointerEvents="none"
                    children={<Box w={['15px', '30px', '30px']} h={['15px', '30px', '30px']}><Search width= {'100%'} height={'100%'} /></Box>}
                    size={['xs', 'sm', 'md']}
                />
                <Input pl={['15px', '30px', '30px']} h={'100%'}
                flex={0.999}
                    style={{ borderRadius: '1em' }}
                    type='search'
                    variant="outline"
                    size="xs"
                    placeholder='Search'
                />
            </InputGroup>
            <Box w={5} h={[ 5, , 35]}>
                <Bell styles={{ width: '100%', height: '100%' }} />
            </Box>
            <ButtonGroup 
            className="flex items-center justify-between bg-blue p-2" 
            flex={ [ 0.5,,0.35]}
            style={{ borderRadius: '1em' }} h={'100%'}
            borderColor={'gray.200'}
            borderWidth={2}>
                <Avatar size={['xs', 'lg', 'md']} h={'100%'} w={'auto'} src={''} />
                <Text fontSize={['xs', 'sm', 'md']} fontWeight={'medium'}>Dr. Amzat</Text>
            </ButtonGroup>
        </Flex>
    </Flex>
  )
}

export default TopNav