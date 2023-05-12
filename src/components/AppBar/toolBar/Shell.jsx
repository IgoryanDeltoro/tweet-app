import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import CustomDrawer from './TollBarMenu';

const Shell = ({ mobileOpen, handleDrawerToggle, drawerWidth }) => {
  return (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: drawerWidth,
        },
      }}
    >
      <CustomDrawer handleDrawerToggle={handleDrawerToggle} />
    </Drawer>
  );
};
Shell.propTypes = {
  handleDrawerToggle: PropTypes.func,
  mobileOpen: PropTypes.bool,
  drawerWidth: PropTypes.number,
};
export default Shell;
