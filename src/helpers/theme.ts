import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading: 'Atkinson Hyperlegible',
    body: 'Atkinson Hyperlegible',
  },
})

export default theme
