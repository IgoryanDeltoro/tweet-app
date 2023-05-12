import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { LinkToolBar } from './ToolBar.styled';
import { useLocation } from 'react-router-dom';

const ToolBar = ({ handleDrawerToggle }) => {
  const location = useLocation();

  return (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      >
        TWEETER
      </Typography>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Button sx={{ color: '#fff' }}>
          <LinkToolBar state={{ from: location }} to="/">
            Home
          </LinkToolBar>
        </Button>
        <Button sx={{ color: '#fff' }}>
          <LinkToolBar to="tweets">Tweets</LinkToolBar>
        </Button>
      </Box>
    </Toolbar>
  );
};
ToolBar.propTypes = {
  handleDrawerToggle: PropTypes.func,
};

export default ToolBar;
