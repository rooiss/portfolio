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
  height: '55vh',
  width: '100%',
  maxWidth: '57%',
  margin: '64px 0px',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  zIndex: -1,
})

// const WhiteTypography = styled(
//   Typography,
//   {},
// )({
//   color: 'white',
// })
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
        <Typography variant="h2" fontWeight="bold">
          Louis Kim
        </Typography>
        <Typography variant="h4">Building things that matter</Typography>
      </Box>
    </StyledBox>
  )
}
