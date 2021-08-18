import {
  ChakraProvider,
  Container,
  Heading,
  Center,
  Text,
  Badge,
  Stack
} from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom'

import FoxMachine from './components/foxmachine/foxmachine'
import Blurb from './components/blurb/blurb'
import theme from './helpers/theme'
import IBlurb from './interfaces/iblurb'

import '@fontsource/atkinson-hyperlegible/400.css'
import '@fontsource/atkinson-hyperlegible/700.css'

const Blurbs = () => {
  const blurbs: IBlurb[] = [
    {
      title: 'Maximum appeal',
      text: 'Do you have hundreds of lame parking tickets 🚓 and bills lying all over the place? Not any more! Digitize those words right into foxes.',
    },
    {
      title: 'Words?',
      text: 'Words? Those antiquated artifacts are practically useless. Pictures of colorful foxes eating delicious ice cream 🍦 are forever.',
    },
    {
      title: 'Taxes -> Faxes -> Foxes',
      text: "💰 Taxes? Who needs 'em! Turn those 1080's into foxes, the IRS will understand.",
    },
  ]
  const items = blurbs.map((t) => <Blurb key={t.title} data={t} />)

  return (
    <Stack spacing='4' mt='3'>
      {items}
    </Stack>
  )
}

const GitVersion = () => (
  <Badge
    fontSize='sm'
    position='fixed'
    left='10px'
    bottom='10px'
    colorScheme='purple'>
    {GIT_COMMIT}
  </Badge>
)

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
      <GitVersion />
    </ChakraProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
