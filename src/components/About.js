import { Typography } from '@mui/material'
import { Box, styled } from '@mui/system'

const StyledBox = styled(
  Box,
  {},
)({
  display: 'flex',
  alignItems: 'column',
  height: '400px',
  margin: '32px 0px',
})

export const About = () => {
  return (
    <StyledBox>
      <Box>
        <Typography variant="h1" fontWeight="bold">
          Hi I'm Louis
        </Typography>
        <Typography variant="h4">I beep boop so hard</Typography>
        <Typography variant="h6">you literally have no idea</Typography>
      </Box>
      <Box>
        <Typography variant="h1">huge image</Typography>
      </Box>
    </StyledBox>
  )
}
