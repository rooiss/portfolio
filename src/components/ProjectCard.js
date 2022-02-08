import { Button, Card, CardActions, Typography } from '@mui/material'
import { Box, styled } from '@mui/system'

const StyledCard = styled(
  Card,
  {},
)({
  width: '800px',
  margin: '16px 16px',
})

const StyledLine = styled(
  Box,
  {},
)({
  width: '85px',
  height: '1px',
  backgroundColor: '#50F6D1',
  border: 'solid 2px black',
  borderRadius: '3px',
  margin: '5px 0px',
})
const StyledLineRight = styled(
  Box,
  {},
)({
  width: '85px',
  height: '1px',
  backgroundColor: '#50F6D1',
  border: 'solid 2px black',
  borderRadius: '3px',
  margin: '5px 0px',
})

const RightBox = styled(
  Box,
  {},
)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  padding: '16px',
})
const LeftBox = styled(
  Box,
  {},
)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  padding: '16px',
})

const TextBox = styled(
  Box,
  {},
)({
  width: '50%',
})

const StyledButton = styled(
  Button,
  {},
)({
  // '&:hover' {
  //   backgroundColor: 'black',
  //   color: 'white',
  // },
})

// const StyledButton = styled.div`
//   &:hover ${img} {
//     color: 'white';
//   }
// `

// const img = styled.div`
//   &:hover {
//     color: 'white';
//   }
// `

export const ProjectCard = ({ name, mirrored }) => {
  return (
    <StyledCard elevation={0}>
      {mirrored ? (
        <RightBox>
          <Typography variant="h5" component="div" align="center">
            {name}
          </Typography>
          <TextBox>
            <Typography variant="body2" align="right">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
              ranging across all continents except Antarctica
            </Typography>
          </TextBox>
          <StyledLineRight />
          <Typography variant="body2" color="text.secondary">
            React Typescript Express Node NGINX
          </Typography>
          <CardActions>
            <StyledButton>
              <img src="/images/GitHub-Mark-32px.png" alt="github icon" />
            </StyledButton>
            <StyledButton>
              <img
                src="/images/icons8-external-link-32.png"
                alt="external link"
              />
            </StyledButton>
          </CardActions>
        </RightBox>
      ) : (
        <LeftBox>
          <Typography variant="h5" component="div" align="center">
            {name}
          </Typography>
          <TextBox>
            <Typography variant="body2">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
              ranging across all continents except Antarctica
            </Typography>
          </TextBox>
          <StyledLine />
          <Typography variant="body2" color="text.secondary">
            React Typescript Express Node NGINX
          </Typography>
          <CardActions>
            <StyledButton>
              <img src="/images/GitHub-Mark-32px.png" alt="github icon" />
            </StyledButton>
            <StyledButton>
              <img
                src="/images/icons8-external-link-32.png"
                alt="external link"
              />
            </StyledButton>
          </CardActions>
        </LeftBox>
      )}
    </StyledCard>
  )
}
