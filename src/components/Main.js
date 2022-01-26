import { About } from './About'
import { Navbar } from './Navbar'
import { Contact } from './Contact'
import { Projects } from './Projects'
import { Box } from '@mui/material'
import { styled } from '@mui/system'

const StyledBox = styled(
  Box,
  {},
)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const Main = () => {
  return (
    <StyledBox>
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </StyledBox>
  )
}
