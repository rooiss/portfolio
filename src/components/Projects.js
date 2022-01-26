import { Typography } from '@mui/material'
import { Box, styled } from '@mui/system'

const OuterBox = styled(
  Box,
  {},
)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  margin: '32px 0px',
})

export const Projects = () => {
  return (
    <OuterBox>
      <Typography variant="h2">all the dope shit ive built</Typography>
      <Box>
        <Typography variant="h5">VolleyballTournaments.xyz</Typography>
      </Box>
      <Box>
        <Typography variant="h5">Notified.</Typography>
      </Box>
      <Box>
        <Typography variant="h5">XANGA</Typography>
      </Box>
    </OuterBox>
  )
}
