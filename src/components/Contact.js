import { Button, Card, CardActions, Link, Typography } from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import { styled } from '@mui/system'

const StyledCard = styled(
  Card,
  {},
)({
  height: '55vh',
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const Contact = () => {
  return (
    <StyledCard id="Contact" elevation={0}>
      <Typography variant="h2" fontWeight="bold" textAlign="center">
        Get in touch with me!
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        sx={{ paddingTop: '16px', width: '60%' }}
      >
        I'm currently open to full-time software engineer roles and since I'm
        basically attached to my computer I tend to respond fairly quickly ! (:
      </Typography>
      <CardActions sx={{ paddingTop: '32px' }}>
        <Link href="mailto:louis.kim010@gmail.com">
          <Button
            variant="contained"
            fontSize="large"
            sx={{ textTransform: 'none', padding: '13px 16px' }}
            startIcon={<EmailOutlinedIcon fontSize="large" />}
          >
            Say Hello
          </Button>
        </Link>
      </CardActions>
    </StyledCard>
  )
}
