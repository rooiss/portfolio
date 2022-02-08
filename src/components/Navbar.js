import {
  Container,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from '@mui/material'
import { styled } from '@mui/system'
import ScrollIntoView from 'react-scroll-into-view'

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
                <ScrollIntoView selector={`#${item.name}`}>
                  <ListItemButton>
                    <Typography variant="body2">{item.name}</Typography>
                  </ListItemButton>
                </ScrollIntoView>
              </StyledListItem>
            )
          })}
        <ListItemButton
          variant="outline"
          sx={{
            border: 'solid 2px black',
            borderRadius: '10px',
            padding: '0px 10px',
          }}
        >
          <Typography variant="body2">Resume</Typography>
        </ListItemButton>
      </StyledList>
    </StyledContainer>
  )
}
