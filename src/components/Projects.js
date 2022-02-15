import { Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import { MainProjectCard } from './MainProjectCard'
import { ProjectCard } from './ProjectCard'

const OuterBox = styled(
  Box,
  {},
)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  margin: '32px 0px',
  // height: '100vh',
})

const CardBox = styled(
  Box,
  {},
)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxWidth: '100%',
  width: '65%',
})

export const Projects = () => {
  return (
    <OuterBox id="Work">
      <Typography variant="h2" fontWeight="bold" sx={{ paddingBottom: '16px' }}>
        Some things I've built
      </Typography>
      <MainProjectCard />
      <CardBox>
        <ProjectCard name="Notified." mirrored={true} />
        <ProjectCard name="Stock Notes" mirrored={false} />
      </CardBox>
    </OuterBox>
  )
}
