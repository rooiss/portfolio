import {
  AppBar,
  Box,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
} from '@mui/material'
import { styled } from '@mui/system'

const StyledList = styled(
  List,
  {},
)({
  display: 'flex',
  color: 'black',
  margin: '0px 5px',
})

const StyledListItem = styled(
  ListItem,
  {},
)({
  margin: '0px 32px',
})

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <StyledList>
            <StyledListItem>About</StyledListItem>
            <StyledListItem>Projects</StyledListItem>
            <StyledListItem>Contact</StyledListItem>
            <StyledListItem>Blog</StyledListItem>
            <ListItemButton
              variant="outline"
              sx={{ border: 'solid 2px black', borderRadius: '10px' }}
            >
              Resume
            </ListItemButton>
          </StyledList>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
