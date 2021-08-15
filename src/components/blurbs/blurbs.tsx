import { Heading, Box, Text, Stack } from '@chakra-ui/react'
import React from 'react'

import IBlurb from '../../interfaces/iblurb'

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
    text: "🧾 Taxes? Who needs 'em! Turn those 1080's into foxes, the IRS will understand.",
  },
]

const Blurb = (props: { data: IBlurb }) => (
  <Box borderRadius='lg' bg='gray.700' px='8' py='4'>
    <Heading size='md'>{props.data.title}</Heading>
    <Text fontSize='lg' mt='1'>{props.data.text}</Text>
  </Box>
)

const Blurbs = () => {
  const items = blurbs.map((t, i) => <Blurb key={i} data={t} />)

  return (
    <Stack spacing='4' mt='3'>
      {items}
    </Stack>
  )
}

export default Blurbs
