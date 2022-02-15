import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { Box, styled } from '@mui/system'

const StyledCard = styled(
  Card,
  {},
)({
  // border: 'solid 2px black',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#F7F7F7',
  maxWidth: '60%',
  // paddingTop: '16px',
})

const StyledCardContent = styled(
  CardContent,
  {},
)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '70%',
})

const StyledLine = styled(
  Box,
  {},
)({
  width: '50%',
  height: '1px',
  backgroundColor: '#50F6D1',
  border: 'solid 2px black',
  borderRadius: '3px',
  margin: '10px 0px',
})

export const MainProjectCard = () => {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="370"
        image="/images/vballtournamentsPreview.webp"
        alt="vball preview"
      />
      <StyledCardContent>
        <Typography
          variant="h5"
          textAlign="center"
          sx={{ paddingBottom: '8px' }}
        >
          VolleyballTournaments.xyz
        </Typography>
        <Typography variant="body2" textAlign="left">
          This app provides a way for users to organize volleyball tournaments
          and for users to join those tournaments. Currently working with local
          volleyball tournament organizations to drive the architectural design
          of the app, ensuring a user-centric flow.
        </Typography>
        <StyledLine />
        <Typography variant="body2" color="text.secondary" textAlign="center">
          React ContextAPI PostgreSQL Typescript NGINX Docker Node.js Express
          Redis CircleCI
        </Typography>
      </StyledCardContent>
      <CardActions>
        <Button>
          <a href="https://github.com/rooiss/tourney">
            <img src="/images/GitHub-Mark-32px.png" alt="github icon" />
          </a>
        </Button>
        <Button>
          <a href="https://volleyballtournaments.xyz">
            <img
              src="/images/icons8-external-link-32.png"
              alt="external link"
            />
          </a>
        </Button>
      </CardActions>
    </StyledCard>
  )
}
