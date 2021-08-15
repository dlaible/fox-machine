import {
  Stack,
  Heading,
  Box,
  Code,
  HStack,
  Tr,
  Td,
  Table,
  Thead,
  Th,
  Tbody,
  Spacer,
  Text
} from '@chakra-ui/react'
import React from 'react'

import IColorKey from '../../interfaces/icolorkey'

const ColorKey = (props: { colorKey: IColorKey }) => {
  return (
    <Tr>
      <Td>{props.colorKey.name}</Td>
      <Td>{props.colorKey.keyStr}</Td>
      <Td isNumeric>{props.colorKey.keyVal}</Td>
      <Td isNumeric>
        <Text pr='1' borderRightWidth='3px' borderRightStyle='solid' borderRightColor={props.colorKey.color}>
          {props.colorKey.color}
        </Text>
      </Td>
    </Tr>
  )
}

const DebugData = (props: { show: boolean, inputText: string, colorKeys: IColorKey[] }) => {
  // Don't display anything if the input is invalid
  if (!props.show || !props.inputText) {
    return null
  }

  // Map the color key objects to components
  const colorKeys = props.colorKeys.map((k) => <ColorKey key={k.name} colorKey={k} />)

  return (
    <Box borderWidth='3px' borderRadius='lg' p='4' borderColor='whiteAlpha.50' mt='3'>
      <HStack>
        <Heading size='md' color='gray.200'>Debug data</Heading>
        <Spacer />
        <Code>{props.inputText}</Code>
      </HStack>
      <Table size='sm' mt='2'>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Substring</Th>
            <Th isNumeric>Value</Th>
            <Th isNumeric>Color</Th>
          </Tr>
        </Thead>
        <Tbody>
          {colorKeys}
        </Tbody>
      </Table>
      <Heading mt='4' size='sm' color='gray.200'>Description</Heading>
      <Stack spacing='2'>
        <Text>
          This algorithm works by 1) converting the input string to a MD5 hash, 2) converting substrings of the hex MD5 hash to decimal values, and 3) choosing colors based on those decimal values. No random values are used, so a given string will always map to the same fox (akin to how Gravatar generates avatars). Multiple palettes of complimenting colors are used to ensure that foxes always look sharp (as opposed to random color generation that would include many ugly yellows 🤢).
        </Text>
        <Text>
          There are <b>far</b> fewer combinations of colors here than possible MD5 hashes, so there will be duplicates. That means don't go actually turning all your secret confidential information into cute foxes expecting the functionality typical of hashing. It's left as an exercise for the reader to go out and find one of these collisions 😉.
        </Text>
      </Stack>
    </Box>
  )
}

export default DebugData