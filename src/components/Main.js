import { About } from './About'
import { Navbar } from './Navbar'
import { Contact } from './Contact'
import { Projects } from './Projects'
import { Box } from '@mui/material'
import { styled } from '@mui/system'
import { Footer } from './Footer'
import { Experience } from './Experience'

const StyledBox = styled(
  Box,
  {},
)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
})

export const Main = () => {
  return (
    <StyledBox>
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </StyledBox>
  )
}
