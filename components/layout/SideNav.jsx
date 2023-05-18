"use client";

import { Flex } from '@chakra-ui/react';
import Grid from '../icons/Grid';
import Tasks from '../icons/Tasks';
import IconWrapper from './IconWrapper';
import Inbox from '../icons/Inbox';
import Person from '../icons/Person';
import Settings from '../icons/Settings';
import Code from '../icons/Code';
import Back from '../icons/Back';
import { usePathname } from 'next/navigation';
import Styles from '../../components/layout/Styles/main.module.css';


const SideNav = ({ styles }) => {

  const path  = usePathname();

  return (
    <>
      <Flex gap={[2, ,10]} bgColor={'transparent'} flexDirection={['row', 'row','column']} alignItems={'center'} justifyContent={['center', 'space-evenly', 'center']} w={'full'} style={{ flex: '0.1', ...styles }} minHeight={['6vh', '6vh', '90vh']} mx={[ 'auto', ,]}>
        <IconWrapper active={path == '/' ? true : false} link={'/'}><Grid /></IconWrapper>
        <IconWrapper active={path?.match('/tasks') ? true : false} link={'/tasks'}><Tasks /></IconWrapper>
        <IconWrapper active={path?.match('/inbox') ? true : false} link={'/inbox'}><Inbox /></IconWrapper>
        <IconWrapper active={path?.match('/account') ? true : false} link={'/person'}><Person /></IconWrapper>
        <IconWrapper active={path?.match('/settings') ? true : false} link={'/settings'}><Settings /></IconWrapper>
        <IconWrapper active={path?.match('/code') ? true : false} link={'/code'}><Code /></IconWrapper>
        <IconWrapper className={Styles.backBtn}><Back /></IconWrapper>
      </Flex>
    </>
  )
}

export default SideNav