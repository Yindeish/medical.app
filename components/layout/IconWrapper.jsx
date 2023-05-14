import Link from 'next/link';
import { IconButton } from '@chakra-ui/react';

const IconWrapper = ({  active, children, link }) => {

  let styles = {
    ...{ padding: '.35em', width: '35px', height: '35px' },
  }
  if( active ) {
    styles = {...styles, transform: 'scale(1)'}
  } else {
    styles = {...styles, transform: 'scale(.7)', padding: '.15em'}  
  }
  return (
    <>
      { 
        link ? 
        <Link  href={link}>
            <IconButton  h={35} bgColor={'white'} style={styles} icon={ children } />
        </Link> :
        <IconButton  h={35} bgColor={'white'} style={styles} icon={ children } />
      }
    </>
  )
}

export default IconWrapper