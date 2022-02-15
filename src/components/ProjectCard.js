import { Button, Card, CardActions, Typography } from '@mui/material'
import { Box, styled } from '@mui/system'

const StyledCard = styled(
  Card,
  {},
)({
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

const StyledButton = styled(Button, {})({})

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
              A more robust to-do web app that uses the browser's Notification
              API and local storage, to alert users about the tasks that they
              have created.
            </Typography>
          </TextBox>
          <StyledLineRight />
          <Typography variant="body2" color="text.secondary">
            React ContextAPI Typescript NGINX Mui
          </Typography>
          <CardActions>
            <StyledButton>
              <a href="https://github.com/rooiss/notified">
                <img src="/images/GitHub-Mark-32px.png" alt="github icon" />
              </a>
            </StyledButton>
            <StyledButton>
              <a href="https://www.notified.gq">
                <img
                  src="/images/icons8-external-link-32.png"
                  alt="external link"
                />
              </a>
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
              This web app allows a user to find a stock ticker using the Tiingo
              API and take notes in a markdown format.
            </Typography>
          </TextBox>
          <StyledLine />
          <Typography variant="body2" color="text.secondary">
            React Jest Typescript Express Node NGINX Docker CircleCI
          </Typography>
          <CardActions>
            <StyledButton>
              <a href="https://github.com/rooiss/stonks-app">
                <img src="/images/GitHub-Mark-32px.png" alt="github icon" />
              </a>
            </StyledButton>
            {/* <StyledButton>
              <img
                src="/images/icons8-external-link-32.png"
                alt="external link"
              />
            </StyledButton> */}
          </CardActions>
        </LeftBox>
      )}
    </StyledCard>
  )
}
