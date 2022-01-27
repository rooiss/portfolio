import { Box, Container, Typography } from '@mui/material'
import { styled } from '@mui/system'

const StyledBox = styled(
  Box,
  {},
)({
  // flexShrink: 0,
})

export const Footer = () => {
  return (
    <footer>
      <StyledBox>
        <Container maxWidth="xl">
          <Typography variant="body2">Designed & Built by Louis Kim</Typography>
        </Container>
      </StyledBox>
    </footer>
  )
}
