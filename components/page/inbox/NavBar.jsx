"use client";

import { ButtonGroup, Text, Flex, Box } from "@chakra-ui/react"
import Edit from "@/components/icons/Edit";
import { usePathname, useRouter } from "next/navigation";

const NavBar = () => {

    const navItems = [
        {
            name: 'Inbox',
            link: '/inbox'
        },
        {
            name: 'Create Task',
            link: '/inbox/create'
        },
        {
            name: 'Important',
            link: '/inbox/important'
        },
        {
            name: 'Trash',
            link: '/inbox/trash'
        },
    ];

    const pathname = usePathname();
    const router  = useRouter();

    const navigateTo = (path) => {
        if( pathname == path ) {
            return;
        } else {
            router.push(path);
        }
    };

  return (
    <>
        <ButtonGroup w={['fit-content', ,'full']} bg={'#749D1C'} borderRadius={3} p={[1,1,2]} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Box w={['12px', '20px','25px']} h={['12px', '20px','25px']}><Edit width={'100%'} height={'100%'}/></Box> <Text fontSize={['xs', 'sm', 'md']} fontWeight={'medium'} pl={[1,2,2]} className="text-white text-bold">compose</Text>
        </ButtonGroup>
        <Flex w={'full'} h={'fit-content'} flexDir={['row', 'column', 'column']} gap={[1,,3]} mt={3}>
            {navItems.map(navItem => (
                <Text
                onClick={() => navigateTo(navItem.link)}
                color={'#749D1C'}
                w={'full'}
                fontWeight={"medium"}
                fontSize={['xs', 'sm', "md"]}
                textAlign={['center', 'left', 'left']}
                p={2}
                cursor={'pointer'}
                _hover={{
                    borderBottom: '3px solid #0D0D0D'
                }}
                transition={'all 0.25s'}
                borderBottomWidth={"3px"}
                borderBottomColor={ pathname == navItem.link ? '#0D0D0D' : 'transparent'}
                >{navItem.name}</Text>
            ))}
        </Flex>
    </>
  )
}

export default NavBar