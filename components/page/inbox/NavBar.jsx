"use client";

import { ButtonGroup, Text, Flex } from "@chakra-ui/react"
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
        <ButtonGroup w={'full'} bg={'#749D1C'} borderRadius={3} p={2}>
            <Edit width={'25px'} height={'25px'}/> <Text size={'sm'} fontWeight={'medium'} className="pl-2 text-white text-bold">compose</Text>
        </ButtonGroup>
        <Flex w={'full'} h={'fit-content'} flexDir={'column'} gap={3} mt={3}>
            {navItems.map(navItem => (
                <Text
                onClick={() => navigateTo(navItem.link)}
                color={'#749D1C'}
                w={'full'}
                fontWeight={"medium"}
                fontSize={"md"}
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