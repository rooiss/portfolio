import { Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import { useEffect, useState } from 'react'

const StyledBox = styled(
  Box,
  {},
)({
  display: 'flex',
  alignItems: 'column',
  justifyContent: 'flex-start',
  height: '500px',
  width: '1000px',
  margin: '64px 0px',
  backgroundImage:
    'linear-gradient(to right, rgba(0,0,0, .46),rgba(67,67,67, 0.20) 26%),url(/images/Korea.jpeg)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  zIndex: -1,
})

const WhiteTypography = styled(
  Typography,
  {},
)({
  color: 'white',
})
export const About = () => {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.scrollY)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <StyledBox sx={{ transform: `translateY(${offsetY * 0.5}px)` }}>
      <Box sx={{ margin: '32px' }}>
        <WhiteTypography variant="h1" fontWeight="bold">
          Hi I'm Louis
        </WhiteTypography>
        <WhiteTypography variant="h4" fontWeight="bold">
          I beep boop so hard
        </WhiteTypography>
        <WhiteTypography variant="h6" fontWeight="bold">
          you literally have no idea
        </WhiteTypography>
      </Box>
      {/* <Box><Typography variant="h1">huge image</Typography></Box> */}
    </StyledBox>
  )
}
