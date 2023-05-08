// import CustomDrawer from './drawer/CustomDrawer';
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import CustomDrawer from './TollBarMenu';

const Shell = ({ mobileOpen, handleDrawerToggle, navItems, drawerWidth }) => {
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
      <CustomDrawer
        navItems={navItems}
        handleDrawerToggle={handleDrawerToggle}
      />
    </Drawer>
  );
};
Shell.propTypes = {
  handleDrawerToggle: PropTypes.func,
  mobileOpen: PropTypes.bool,
  drawerWidth: PropTypes.number,
  navItems: PropTypes.array,
};
export default Shell;
