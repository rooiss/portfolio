import { Button, Card, Link } from '@mui/material'
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
      <Link href="mailto:louis.kim010@gmail.com">
        <Button
          variant="contained"
          fontSize="large"
          sx={{ textTransform: 'none', padding: '13px 16px' }}
          startIcon={<EmailOutlinedIcon fontSize="large" />}
        >
          Say Hello :)
        </Button>
      </Link>
    </StyledCard>
  )
}
