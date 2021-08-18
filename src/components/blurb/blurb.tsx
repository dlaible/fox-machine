import { Heading, Box, Text } from '@chakra-ui/react'
import React from 'react'

import IBlurb from '../../interfaces/iblurb'

const Blurb = (props: { data: IBlurb }) => (
  <Box borderRadius='lg' bg='gray.700' px='8' py='4'>
    <Heading size='md'>{props.data.title}</Heading>
    <Text fontSize='lg' mt='1'>{props.data.text}</Text>
  </Box>
)

export default Blurb
