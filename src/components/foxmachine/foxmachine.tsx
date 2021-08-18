import {
  Center,
  Input,
  Box,
  Checkbox,
  HStack,
  Spacer
} from '@chakra-ui/react'
import { md5 } from 'hash-wasm'
import React, { useState, useEffect } from 'react'

import DebugData from '../../components/debugdata/debugdata'
import Favorite from '../../components/favorite/favorite'
import { getColorKeysFromMD5 } from '../../helpers/picker'
import IColorKey from '../../interfaces/icolorkey'

import FoxSvg from '../../imgs/fox'

const FoxMachine = () => {
  const [debug, setDebug] = useState(false)
  const [colorKeys, setColorKeys] = useState<IColorKey[]>([])
  const [inputText, setInputText] = useState('')
  const [inputMD5, setInputMD5] = useState('')

  // Initialization
  useEffect(() => updateColorKeys(inputText), [])

  // Functions

  const updateColorKeys = (text: string) => {
    // Set the state input text
    setInputText(text)

    // Reset the relevant data to defaults when the input is invalid.
    // Note that all non-empty strings are valid input
    if (text.length === 0) {
      setColorKeys([])
      setInputMD5('')
      return
    }

    // Compute the MD5 hash of the input text and update the color keys
    md5(text)
      .then((t) => {
        setInputMD5(t)
        setColorKeys(getColorKeysFromMD5(t))
      })
      .catch(console.error)
  }

  // Handlers

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value
    updateColorKeys(text)
  }

  const handleClickFavorite = (text: string) => updateColorKeys(text)
  const handleDebugChange = () => setDebug(!debug)

  // Define favorite word components
  const favorites = [
    'hello world',
    'slick',
    'maya',
    'radical',
    'secret',
  ].map((t) => <Favorite key={t} text={t} handleClick={handleClickFavorite} />)

  return (
    <>
      <HStack mt='5'>
        <HStack>
          {favorites}
        </HStack>
        <Spacer />
        <Checkbox isChecked={debug} size='sm' onChange={handleDebugChange}>debug mode</Checkbox>
      </HStack>
      <Input
        mt='2'
        size='lg'
        focusBorderColor='whiteAlpha.50'
        onChange={handleInputChange}
        placeholder='Type away...'
        variant='filled'
        value={inputText}
      />
      <Center mt='10'>
        <Box h='300px' w='350px'>
          <FoxSvg colorKeys={colorKeys} />
        </Box>
      </Center>
      <DebugData show={debug} inputText={inputMD5} colorKeys={colorKeys} />
    </>
  )
}

export default FoxMachine