import {
  ChakraProvider,
  Container,
  Heading,
  Center,
  Text
} from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom'

import FoxMachine from './components/foxmachine/foxmachine'
import Blurbs from './components/blurbs/blurbs'
import theme from './helpers/theme'

import '@fontsource/atkinson-hyperlegible/400.css'
import '@fontsource/atkinson-hyperlegible/700.css'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW='container.md' my='6'>
        <Center>
          <Heading size='4xl'>fox machine 📠</Heading>
        </Center>
        <Center>
          <Text fontSize='lg'>turn ur boring words into a <i>semi</i>-unique, cute fox</Text>
        </Center>
        <FoxMachine />
        <Blurbs />
      </Container>
    </ChakraProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
