import {
  Container,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from '@mui/material'
import { styled } from '@mui/system'

const navBarItems = [
  { name: 'About', url: '/#about' },
  { name: 'Work', url: '/#projects' },
  { name: 'Contact', url: '/#contact' },
  { name: 'Blog', url: '/#blog' },
]

const StyledContainer = styled(
  Container,
  {},
)({
  display: 'flex',
  justifyContent: 'flex-end',
  position: 'fixed',
})

const StyledList = styled(
  List,
  {},
)({
  display: 'flex',
  color: 'black',
})

const StyledListItem = styled(ListItem, {})({})

export const Navbar = () => {
  return (
    <StyledContainer maxWidth="100">
      <StyledList>
        {navBarItems &&
          navBarItems.map((item) => {
            return (
              <StyledListItem key={item.name}>
                <Typography variant="body2">{item.name}</Typography>
              </StyledListItem>
            )
          })}
        <ListItemButton
          variant="outline"
          sx={{ border: 'solid 2px black', borderRadius: '10px' }}
        >
          <Typography variant="body2">Resume</Typography>
        </ListItemButton>
      </StyledList>
    </StyledContainer>
  )
}
