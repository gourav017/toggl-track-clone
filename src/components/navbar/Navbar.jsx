import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Box>
            <Link to="/login">login</Link>
            <Link to="/signup">signup</Link>
        </Box>
    </div>
  )
}

export default Navbar