import { Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import { ProjectCard } from './ProjectCard'

const OuterBox = styled(
  Box,
  {},
)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  margin: '32px 0px',
})

const CardBox = styled(
  Box,
  {},
)({
  display: 'flex',
  flexDirection: 'column',
})

export const Projects = () => {
  return (
    <OuterBox id="Work">
      <Typography variant="h3" align="left">
        Some things I've built
      </Typography>
      <CardBox>
        <ProjectCard name="VolleyballTournaments.xyz" mirrored={false} />
        <ProjectCard name="Notified." mirrored={true} />
        <ProjectCard name="XANGA" mirrored={false} />
      </CardBox>
    </OuterBox>
  )
}
