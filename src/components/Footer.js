import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'

const StyledBox = styled(
  Box,
  {},
)({
  width: '100%',
  backgroundColor: '#F2F2F2',
  padding: '32px 0px',
  display: 'flex',
  justifyContent: 'center',
})

export const Footer = () => {
  return (
    <StyledBox>
      <Typography variant="body2">Designed & Built by Louis Kim</Typography>
    </StyledBox>
  )
}
