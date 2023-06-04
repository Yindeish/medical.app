"use client";

import './globals.css'
import { Inter } from 'next/font/google'
import { ChakraProvider, Flex, Box, Heading, Text } from '@chakra-ui/react';
import TopNav from '@/components/layout/TopNav';
import SideNav from '@/components/layout/SideNav';

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <Flex 
          bgColor={'#749D1C'} 
          py={[1, 1, 3]} px={[ 1, 1, 3]} gap={'1em'} w={'full'} 
          style={{ height: '100%' }}
          borderRadius={[10, ,30]}
          flexDir={['column', 'column', 'row']}>
            <SideNav  />
            <Box w={'full'} bgColor={'#F7F7F7'} p={['.5em', '.8em', '1em']} px={['.2em',,'2em']} borderRadius={[10, ,30]} overflow={'hidden'}>
              <TopNav />
              <Heading my={[2,3,4]} fontSize={['md', '2xl', '3xl']}>Welcome <Text as={'bold'} color={'#749D1C'}>Dr. Amzat!</Text></Heading>
              <main className='w-full pt-3'>
                {children}
              </main>
            </Box>
          </Flex>
        </ChakraProvider>
      </body>
    </html>
  )
}
