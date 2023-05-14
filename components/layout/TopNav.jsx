import { Text, Flex, Input, Avatar, InputGroup, InputLeftElement, ButtonGroup } from '@chakra-ui/react';
import Logo from '../icons/Logo';
import Bell from '../icons/Bell';
import Search from '../icons/Search';

const TopNav = () => {
  return (
    <header className='flex justify-between items-center' style={{ height: '50px' }}>
        <Logo />
        <Flex gap={5} style={{ flex: .4 }} justify={'space-between'} alignItems={'center'} h={'100%'} >
            <InputGroup style={{ flex: .6 }} className='rounded-md' h={'100%'} bgColor={'gray.200'}>
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
            <Bell />
            <ButtonGroup 
            className="flex items-center justify-between bg-blue p-2" 
            style={{ flex: .35, borderRadius: '1em' }} h={'100%'}
            borderColor={'gray.200'}
            borderWidth={2}>
                <Avatar h={'100%'} w={'auto'} src={''} />
                <Text as={'i'} fontWeight={'medium'}>Dr. Amzat</Text>
            </ButtonGroup>
        </Flex>
    </header>
  )
}

export default TopNav