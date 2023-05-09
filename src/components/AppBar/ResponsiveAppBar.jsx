import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import ToolBar from './toolBar/ToolBar';
import Shell from './toolBar/Shell';

const drawerWidth = 240;
const navItems = ['Home', 'Tweets'];

function ResponsiveAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <ToolBar navItems={navItems} handleDrawerToggle={handleDrawerToggle} />
      </AppBar>
      <Box component="nav">
        <Shell
          navItems={navItems}
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
          drawerWidth={drawerWidth}
        />
      </Box>
    </Box>
  );
}

export default ResponsiveAppBar;
