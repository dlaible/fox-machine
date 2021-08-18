import { Button } from '@chakra-ui/react'
import React from 'react'

const Favorite = (props: { text: string, handleClick: (text: string) => void }) => (
  <Button size='sm' onClick={() => props.handleClick(props.text)}>
    {props.text}
  </Button>
)

export default Favorite
