import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import PropTypes from 'prop-types';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import { LinkToolBar } from './ToolBar.styled';
import { useLocation } from 'react-router-dom/dist';

const TollBarMenu = ({ handleDrawerToggle, navItems }) => {
  const Location = useLocation();
  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        TWEETER
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, idx) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <LinkToolBar
                state={{ from: Location }}
                to={`${idx === 0 ? '/' : item.toLowerCase()}`}
              >
                {item}
              </LinkToolBar>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

TollBarMenu.propTypes = {
  handleDrawerToggle: PropTypes.func,
  navItems: PropTypes.array,
};

export default TollBarMenu;
